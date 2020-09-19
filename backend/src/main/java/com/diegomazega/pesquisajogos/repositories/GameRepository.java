package com.diegomazega.pesquisajogos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diegomazega.pesquisajogos.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
