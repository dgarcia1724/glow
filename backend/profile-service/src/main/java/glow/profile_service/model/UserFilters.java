package glow.profile_service.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.UUID;

@Entity
@Table(name = "user_filters")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserFilters {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private UserProfile userProfile;

    @Column(name = "min_age")
    @Min(18)
    @Max(100)
    private int minAge;

    @Column(name = "max_age")
    @Min(18)
    @Max(100)
    private int maxAge;

    @Column(name = "max_distance")
    @Min(1)
    @Max(100)
    private int maxDistance; // in miles
}