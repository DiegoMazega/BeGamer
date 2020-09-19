package com.diegomazega.pesquisajogos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diegomazega.pesquisajogos.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
