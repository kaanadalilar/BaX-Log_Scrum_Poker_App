package com.baxlog.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userID;
	
	@Column(name = "name")
	private String name;

	@Column(name = "picked_card")
	private String pickedCard;
	
	@Column(name = "is_picked_card")
	private String isPickedCard;
	
	public User() {}
	
	public User(long userID, String name, String pickedCard, String is_picked_card) {
		super();
		this.userID = userID;
		this.name = name;
		this.pickedCard = pickedCard;
		this.isPickedCard = is_picked_card;
	}

	public long getUserID() {
		return userID;
	}

	public void setUserID(long userID) {
		this.userID = userID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPickedCard() {
		return pickedCard;
	}

	public void setPickedCard(String pickedCard) {
		this.pickedCard = pickedCard;
	}

	public String getIsPickedCard() {
		return isPickedCard;
	}

	public void setIsPickedCard(String isPickedCard) {
		this.isPickedCard = isPickedCard;
	}

	
	
}
