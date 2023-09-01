package com.baxlog.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baxlog.model.Session;
import com.baxlog.repository.SessionRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/baxlog")
public class SessionController {
    @Autowired
    private SessionRepository sessionRepository;

    @GetMapping("/sessions")
    public List<Session> getAllSessions(){
        return sessionRepository.findAll();
    }

    @PostMapping("/sessions")
    public Session createSession(@RequestBody Session session) {
        return sessionRepository.save(session);
    }

}