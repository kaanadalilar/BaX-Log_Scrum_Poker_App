package com.baxlog.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
    
    @GetMapping("/sessions/check/{sessionID}")
    public String checkSession(@PathVariable String sessionID){
    	String returnMessage = "There is no such session!";
    	List<Session> allSessions = getAllSessions();
    	for(int i=0; i<allSessions.size(); i++) {
    		if(allSessions.get(i).getSessionID().equals(sessionID)) {
    			returnMessage = "Success";
    		}
    	}
		return returnMessage;
    }
    
    @PostMapping("/sessions/save")
	public Session createSession(@RequestBody Session session) {
		System.out.println(session.getSessionID());
		return sessionRepository.save(session);
	}
    
}