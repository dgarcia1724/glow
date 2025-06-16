package glow.profile_service.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "user_profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "firebase_user_id", nullable = false, unique = true)
    private String firebaseUserId;

    @Column(name = "onboarding_step")
    private int onboardingStep;

    public void setOnboardingStep(int onboardingStep) {
        this.onboardingStep = onboardingStep;
        if (onboardingStep >= 15) {
            this.onboardingCompleted = true;
        }
    }

    @Column(name = "onboarding_completed")
    private boolean onboardingCompleted;

    private String firstName;

    private LocalDate birthDate;

    @Column(name = "location_city", length = 100)
    private String locationCity;

    @Column(name = "location_state", length = 2)
    private String locationState;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "seeking_preferences", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "seeking")
    private List<Seeking> seeking;  // stored as array of strings

    @Enumerated(EnumType.STRING)
    private Religion religion;

    @Enumerated(EnumType.STRING)
    private Politics politics;

    @Enumerated(EnumType.STRING)
    private RelationshipType relationshipType;

    @Column(length = 150)
    private String bio;

    @OneToMany(mappedBy = "userProfile", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<UserPhoto> photos;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
