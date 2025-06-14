package glow.auth_service.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

@Configuration
public class FirebaseConfig {
    private static final Logger logger = LoggerFactory.getLogger(FirebaseConfig.class);

    @Bean
    public FirebaseApp firebaseApp() throws IOException {
        try {
            if (FirebaseApp.getApps().isEmpty()) {
                logger.info("Initializing Firebase Admin SDK");
                
                GoogleCredentials credentials = GoogleCredentials.fromStream(
                    new ClassPathResource("firebase-service-account.json").getInputStream()
                );
                
                FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(credentials)
                    .build();
                
                FirebaseApp app = FirebaseApp.initializeApp(options);
                logger.info("Firebase Admin SDK initialized successfully");
                return app;
            }
            logger.info("Firebase Admin SDK already initialized");
            return FirebaseApp.getInstance();
        } catch (Exception e) {
            logger.error("Error initializing Firebase Admin SDK", e);
            throw e;
        }
    }
} 