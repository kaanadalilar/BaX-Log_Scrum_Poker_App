package com.baxlog.model;

import jakarta.persistence.*;

@Entity
@Table(name="sessions")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long sessionID;

    @Column(name = "session_admin")
    private String sessionAdmin;

    @Column(name = "session_admin_id")
    private String sessionAdminID;

    public Session() {}

    public Session(long sessionID, String session_admin, String session_admin_id) {
        super();
        this.sessionID = sessionID;
        this.sessionAdmin = session_admin;
        this.sessionAdminID = session_admin_id;
    }

    public long getSessionID() {
        return sessionID;
    }

    public void setSessionID(long sessionID) {
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
}
