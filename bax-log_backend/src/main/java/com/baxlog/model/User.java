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
	
	@Column(name = "is_admin")
	private boolean isAdmin;
	
	public User() {}
	
	public User(long userID, String name, String picked_card, String is_picked_card, boolean is_admin) {
		super();
		this.userID = userID;
		this.name = name;
		this.pickedCard = picked_card;
		this.isPickedCard = is_picked_card;
		this.isAdmin = is_admin;
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

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	
	
}
