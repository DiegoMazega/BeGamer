package com.diegomazega.pesquisajogos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diegomazega.pesquisajogos.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

}
