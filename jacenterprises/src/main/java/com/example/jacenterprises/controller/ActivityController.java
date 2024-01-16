package com.example.jacenterprises.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.jacenterprises.Models.Activity;
import com.example.jacenterprises.Repositories.ActivityRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
public class ActivityController {
    @Autowired
    private ActivityRepository activityRepository;
    
    @GetMapping("/api/activities")
    public List<Activity> getAllActivities() {
        return (List<Activity>) activityRepository.findAll();
    }
    @PostMapping("/api/activities/new")
    public void saveActivity(@RequestBody Activity activity) {
        activityRepository.save(activity);
    }
    
}
