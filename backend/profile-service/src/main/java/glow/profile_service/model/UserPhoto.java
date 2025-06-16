package glow.profile_service.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "user_photos")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserPhoto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private UserProfile userProfile;

    @Column(name = "photo_url", nullable = false)
    private String photoUrl;

    @Column(name = "order_index")
    @Min(1)
    @Max(4)
    private int orderIndex;
}
