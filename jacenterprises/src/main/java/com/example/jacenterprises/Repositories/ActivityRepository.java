package com.example.jacenterprises.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jacenterprises.Models.ActivityEntity;

public interface ActivityRepository extends JpaRepository<ActivityEntity, Long>{
    
}
