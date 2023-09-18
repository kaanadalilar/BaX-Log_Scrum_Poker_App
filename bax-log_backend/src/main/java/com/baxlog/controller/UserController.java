package com.baxlog.controller;

import java.util.List;

import org.json.simple.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baxlog.model.User;
import com.baxlog.repository.UserRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/baxlog/")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/users/{sessionID}")
	public JSONArray getSessionUsers(@PathVariable String sessionID){
		JSONArray list = new JSONArray();
		List<User> allUsers = getAllUsers();
		for(int i=0; i<allUsers.size(); i++) {
			if(allUsers.get(i).getSessionID().equals(sessionID)) {
				String name = allUsers.get(i).getName().substring(7);
				list.add(name);
			}
		}
		return list;
	}
	
	@GetMapping("/users/usernamecheck/{name}")
	public String checkUsername(@PathVariable String name){
		System.out.println(name);
		String returnMessage = "Success";
		List<User> allUsers = getAllUsers();
		for(int i=0; i<allUsers.size(); i++) {
			if(allUsers.get(i).getName().equals(name)) {
				returnMessage = "There is already someone with this name";
			}
		}
		return returnMessage;
	}
	
	@GetMapping("/users/sendcheck/{name}")
	public int checkSend(@PathVariable String name){
		System.out.println(name);
		int returnMessage = 0;
		List<User> allUsers = getAllUsers();
		for(int i=0; i<allUsers.size(); i++) {
			if(allUsers.get(i).getName().equals(name)) {
				returnMessage = allUsers.get(i).getSendCount();
				System.out.println(returnMessage);
			}
		}
		return returnMessage;
	}

	@GetMapping("/users/card/{sessionID}")
	public JSONArray getSessionUsersCards(@PathVariable String sessionID){
		JSONArray list = new JSONArray();
		List<User> allUsers = getAllUsers();
		for(int i=0; i<allUsers.size(); i++) {
			if(allUsers.get(i).getSessionID().equals(sessionID)) {
				String card = allUsers.get(i).getPickedCard();
				list.add(card);
			}
		}
		return list;
	}
	
	@GetMapping("/users/points/{sessionID}")
	public JSONArray getSessionStatistics(@PathVariable String sessionID){
		JSONArray list = new JSONArray();
		List<User> allUsers = getAllUsers();
		int pointCount = 0;
		int totalPoints = 0;
		int min = 90;
		int max = 0;
		for(int i=0; i<allUsers.size(); i++) {
			if(allUsers.get(i).getSessionID().equals(sessionID)) {
				pointCount++;
				if (allUsers.get(i).getPickedCard().equals("?") || allUsers.get(i).getPickedCard().equals("")) {
					pointCount--;
				}
				else {
					int num = Integer.parseInt(allUsers.get(i).getPickedCard());
					if(num < min) {
						min = num;
					}
					if (num > max) {
						max = num;
					}
					totalPoints += num;
				}
			}
		}
		double average = 0.0;
		if(pointCount == 0) {
			average = totalPoints;
		}
		else{
			average = totalPoints/pointCount;
		}
		list.add(average);
		list.add(min);
		list.add(max);
		return list;
	}

	@PutMapping("/users/{name}")
	public ResponseEntity<User> updateUser(@PathVariable String name, @RequestBody User userDetails ){
		User user = new User();
		User updatedUser = new User();
		List<User> allUsers = getAllUsers();
		for(int i=0; i<allUsers.size(); i++) {
			if(allUsers.get(i).getName().equals(name)) {
				user = allUsers.get(i);
				user.setName(userDetails.getName());
				user.setPickedCard(userDetails.getPickedCard());
				user.setIsPickedCard(userDetails.getIsPickedCard());
				user.setIsAdmin(userDetails.getIsAdmin());
				user.setSessionID(userDetails.getSessionID());
				user.setSendCount(userDetails.getSendCount());
				updatedUser = userRepository.save(user);
			}
		}
		return ResponseEntity.ok(updatedUser);
	}
	
	@PutMapping("/users/reset/{sessionID}")
	public ResponseEntity<User> resetUsers(@PathVariable String sessionID){
		User user = new User();
		User updatedUser = new User();
		List<User> allUsers = getAllUsers();
		for(int i=0; i<allUsers.size(); i++) {
			if(allUsers.get(i).getSessionID().equals(sessionID)) {
				user = allUsers.get(i);
				user.setPickedCard("");
				user.setIsPickedCard("");
				user.setSendCount(0);
				updatedUser = userRepository.save(user);
			}
		}
		return ResponseEntity.ok(updatedUser);
	}

	@PostMapping("/users/save")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
}
