package com.example.jacenterprises.Models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class ActivityEntity {
    
    @Id
    @GeneratedValue
    public Long id;
    private String activity;
    private String type;
    private String participants;
    private String price;
    private String accessibility;


    public ActivityEntity(Long id, String type, String participants, String price, String accessibility) {
        this.id = id;
        this.type = type;
        this.participants = participants;
        this.price = price;
        this.accessibility = accessibility;
    }


    public String getActivity() {
        return activity;
    }


    public void setActivity(String activity) {
        this.activity = activity;
    }


    public String getType() {
        return type;
    }


    public void setType(String type) {
        this.type = type;
    }


    public String getParticipants() {
        return participants;
    }


    public void setParticipants(String participants) {
        this.participants = participants;
    }


    public String getPrice() {
        return price;
    }


    public void setPrice(String price) {
        this.price = price;
    }


    public String getAccessibility() {
        return accessibility;
    }


    public void setAccessibility(String accessibility) {
        this.accessibility = accessibility;
    }

}