package com.example.jacenterprises.Models;

import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;

@Entity
@NoArgsConstructor
@Data
public class Activity {
    
    @Id
    @GeneratedValue
    private Long id;

    private String activity;

    private String type;

    private int participants;

    private double price;

    private double accessibility;

    public Activity(String activity, String type, int participants, double price, double accessibility) {
        this.activity = activity;
        this.type = type;
        this.participants = participants;
        this.price = price;
        this.accessibility = accessibility;
    }

    @Override
    public String toString() {
        return "BoredApiActivity{" +
                "activity='" + activity + '\'' +
                ", type='" + type + '\'' +
                ", participants=" + participants +
                ", price=" + price +
                ", accessibility=" + accessibility +
                '}';
    }
}
