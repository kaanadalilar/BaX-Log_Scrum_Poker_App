package com.baxlog.model;

import jakarta.persistence.*;

@Entity
@Table(name="sessions")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long sessionSQLid;
    
    @Column(name = "session_id")
    private String sessionID;

    @Column(name = "session_admin")
    private String sessionAdmin;

    @Column(name = "session_admin_id")
    private String sessionAdminID;

	@Column(name = "person_count")
	private int personCount=12;

	@Column(name = "is_locked")
	private String isLocked;


    public Session() {}

    public Session(long sessionSQLid, String session_id, String session_admin, String session_admin_id, int person_count, String is_locked) {
        super();
        this.sessionSQLid = sessionSQLid;
        this.sessionID = session_id;
        this.sessionAdmin = session_admin;
        this.sessionAdminID = session_admin_id;
		this.personCount = person_count;
		this.isLocked = is_locked;
    }

	public long getSessionSQLid() {
		return sessionSQLid;
	}

	public void setSessionSQLid(long sessionSQLid) {
		this.sessionSQLid = sessionSQLid;
	}

	public String getSessionID() {
		return sessionID;
	}

	public void setSessionID(String sessionID) {
		this.sessionID = sessionID;
	}

	public String getSessionAdmin() {
		return sessionAdmin;
	}

	public void setSessionAdmin(String sessionAdmin) {
		this.sessionAdmin = sessionAdmin;
	}

	public String getSessionAdminID() {
		return sessionAdminID;
	}

	public void setSessionAdminID(String sessionAdminID) {
		this.sessionAdminID = sessionAdminID;
	}

	public int getPersonCount() {
		return personCount;
	}

	public void setPersonCount(int personCount) {
		this.personCount = personCount;
	}

	public String getIsLocked() {
		return isLocked;
	}

	public void setIsLocked(String isLocked) {
		this.isLocked = isLocked;
	}
}
