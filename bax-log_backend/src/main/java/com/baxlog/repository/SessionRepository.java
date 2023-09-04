package com.baxlog.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.baxlog.model.Session;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {

}
