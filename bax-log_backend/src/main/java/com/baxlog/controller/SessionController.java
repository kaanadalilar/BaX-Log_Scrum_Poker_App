package com.baxlog.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.baxlog.exception.ResourceNotFoundException;
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
    
    @PostMapping("/sessions/save")
	public Session createSession(@RequestBody Session session) {
		System.out.println(session.getSessionID());
		return sessionRepository.save(session);
	}
    
    @GetMapping("/sessions/{id}")
	public Session getSessionById(@PathVariable long id){
		Session session = sessionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Session not exist with id :" + id));
		return session;
	}

}