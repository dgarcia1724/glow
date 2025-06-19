package glow.profile_service.model;

import glow.profile_service.model.onboarding.Religion;
import glow.profile_service.model.onboarding.Politics;
import glow.profile_service.model.onboarding.RelationshipType;
import glow.profile_service.model.onboarding.Seeking;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
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

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "religion_filters", joinColumns = @JoinColumn(name = "filter_id"))
    @Column(name = "religion")
    @Enumerated(EnumType.STRING)
    private List<Religion> religionFilters;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "politics_filters", joinColumns = @JoinColumn(name = "filter_id"))
    @Column(name = "politics")
    @Enumerated(EnumType.STRING)
    private List<Politics> politicsFilters;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "relationship_type_filters", joinColumns = @JoinColumn(name = "filter_id"))
    @Column(name = "relationship_type")
    @Enumerated(EnumType.STRING)
    private List<RelationshipType> relationshipTypeFilters;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "seeking_filters", joinColumns = @JoinColumn(name = "filter_id"))
    @Column(name = "seeking")
    @Enumerated(EnumType.STRING)
    private List<Seeking> seekingFilters;

    @Column(name = "non_negotiable_religion")
    private boolean nonNegotiableReligion;

    @Column(name = "non_negotiable_politics")
    private boolean nonNegotiablePolitics;

    @Column(name = "non_negotiable_relationship_type")
    private boolean nonNegotiableRelationshipType;

    @Column(name = "non_negotiable_seeking")
    private boolean nonNegotiableSeeking;

    @Column(name = "non_negotiable_max_distance")
    private boolean nonNegotiableMaxDistance;

    @Column(name = "non_negotiable_age_range")
    private boolean nonNegotiableAgeRange;
}