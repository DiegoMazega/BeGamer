package com.diegomazega.pesquisajogos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diegomazega.pesquisajogos.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
