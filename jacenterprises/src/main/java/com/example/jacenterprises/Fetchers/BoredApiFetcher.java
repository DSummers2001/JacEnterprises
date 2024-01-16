package com.example.jacenterprises.Fetchers;

import java.io.IOException;
import java.net.URL;
import com.example.jacenterprises.Models.Activity;
import com.fasterxml.jackson.databind.ObjectMapper;

public class BoredApiFetcher {
    private static final String BORED_API_URL = "https://www.boredapi.com/api/activity";

    public static void main(String[] args) {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // Fetch data from Bored API
            Activity activity = objectMapper.readValue(new URL(BORED_API_URL), Activity.class);

            // Print the activity
            System.out.println(activity);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
