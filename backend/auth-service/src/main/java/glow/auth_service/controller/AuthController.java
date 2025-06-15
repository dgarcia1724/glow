package glow.auth_service.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/verify")
    public ResponseEntity<?> verifyToken(@RequestHeader("Authorization") String authHeader) {
        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                logger.warn("Invalid or missing Authorization header");
                return ResponseEntity.status(401).body("Invalid or missing Authorization header");
            }

            String token = authHeader.substring(7); // Remove "Bearer "
            logger.info("Verifying Firebase token");
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
            
            Map<String, Object> response = new HashMap<>();
            response.put("uid", decodedToken.getUid());
            response.put("email", decodedToken.getEmail());
            response.put("name", decodedToken.getName());
            response.put("onboardingCompleted", false); // You can modify this based on your user data
            
            logger.info("Token verified successfully for user: {}", decodedToken.getUid());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Token verification failed", e);
            return ResponseEntity.status(401).body("Invalid token: " + e.getMessage());
        }
    }
} 