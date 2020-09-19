package com.diegomazega.pesquisajogos.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diegomazega.pesquisajogos.dto.RecordDTO;
import com.diegomazega.pesquisajogos.dto.RecordInsertDTO;
import com.diegomazega.pesquisajogos.entities.Game;
import com.diegomazega.pesquisajogos.entities.Record;
import com.diegomazega.pesquisajogos.repositories.GameRepository;
import com.diegomazega.pesquisajogos.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO objDto) {
		Record entity = new Record();
		entity.setName(objDto.getName());
		entity.setAge(objDto.getAge());
		entity.setMoment(Instant.now());
		Game game = gameRepository.getOne(objDto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		return new RecordDTO(entity);
		}
}
