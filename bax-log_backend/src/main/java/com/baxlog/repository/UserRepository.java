package com.baxlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.baxlog.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}	
