package com.diegomazega.pesquisajogos.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegomazega.pesquisajogos.dto.GameDTO;
import com.diegomazega.pesquisajogos.entities.Game;
import com.diegomazega.pesquisajogos.repositories.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository repository;
	
	@Transactional(readOnly = true)
	public List<GameDTO> findAll(){
		List<Game> list = repository.findAll();
		List<GameDTO> listDTO = list.stream().map(obj -> new GameDTO(obj)).collect(Collectors.toList());
		return listDTO;
	}
}
