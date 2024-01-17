package com.example.jacenterprises.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.example.jacenterprises.Models.ActivityEntity;
import com.example.jacenterprises.Repositories.ActivityRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;





@RestController
@RequestMapping("/api")
public class ActivityController{
    @Autowired
    private ActivityRepository activityRepository;

    @Value("${bored.api.url}")
    private String boredApiUrl;

    @GetMapping("/activity")
    public ResponseEntity<ActivityEntity> fetchActivity() {
        try {
            
            RestTemplate restTemplate = new RestTemplate();
            ActivityEntity activityEntity = restTemplate.getForObject(boredApiUrl, ActivityEntity.class);

            activityRepository.save(activityEntity);

            return ResponseEntity.ok(activityEntity);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/saved-activities")
    public ResponseEntity<List<ActivityEntity>> getSavedActivities() {
        List<ActivityEntity> activities = activityRepository.findAll();

        return ResponseEntity.ok(activities);
    }
    
    @DeleteMapping("/delete-activity/{id}")
    public ResponseEntity<String> deleteActivity(@PathVariable Long id){
        try {
            if (activityRepository.existsById(id)){
                activityRepository.deleteById(id);
                return ResponseEntity.ok("Activity deleted successfully!");
            } else {
                return ResponseEntity.status(404).body("Activity not found!");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error deleting activity!");
        }
    }
}
