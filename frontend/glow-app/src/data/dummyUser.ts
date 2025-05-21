export interface User {
  // Basic Info
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  datingPreferences: {
    lookingFor: string[];
    ageRange: {
      min: number;
      max: number;
    };
    distance: number; // in miles
  };

  // Core Values
  coreValues: {
    politics: string;
    religion: string;
    values: string[]; // Array of important values like "Family", "Career", etc.
  };

  // Lifestyle
  lifestyle: {
    fitness: string; // e.g., "Very Active", "Moderately Active", etc.
    smoking: string; // e.g., "Never", "Occasionally", "Regularly"
    alcohol: string; // e.g., "Never", "Socially", "Regularly"
    drugs: string; // e.g., "Never", "Occasionally", "Regularly"
  };

  // Bio and Pictures
  bio: string;
  pictures: {
    id: string;
    url: string;
    isMain: boolean;
    order: number;
  }[];

  // Metadata
  createdAt: string;
  updatedAt: string;
  lastActive: string;
  isVerified: boolean;
  isPremium: boolean;
}

export const dummyUser: User = {
  id: "usr_123456789",
  email: "jane.doe@example.com",
  firstName: "Jane",
  lastName: "Doe",
  birthday: "1995-06-15",
  gender: "Female",
  location: {
    city: "San Francisco",
    state: "California",
    country: "United States",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  datingPreferences: {
    lookingFor: ["Men", "Women"],
    ageRange: {
      min: 25,
      max: 35,
    },
    distance: 50,
  },
  coreValues: {
    politics: "Moderate",
    religion: "Spiritual but not religious",
    values: ["Family", "Career Growth", "Personal Development", "Travel"],
  },
  lifestyle: {
    fitness: "Very Active",
    smoking: "Never",
    alcohol: "Socially",
    drugs: "Never",
  },
  bio: "Adventure-seeking software engineer who loves hiking, photography, and trying new restaurants. Looking for someone to share life's adventures with!",
  pictures: [
    {
      id: "pic_1",
      url: "/dummy/profile-main.jpg",
      isMain: true,
      order: 1,
    },
    {
      id: "pic_2",
      url: "/dummy/hiking.jpg",
      isMain: false,
      order: 2,
    },
    {
      id: "pic_3",
      url: "/dummy/travel.jpg",
      isMain: false,
      order: 3,
    },
  ],
  createdAt: "2024-03-15T10:00:00Z",
  updatedAt: "2024-03-15T10:00:00Z",
  lastActive: "2024-03-15T10:00:00Z",
  isVerified: true,
  isPremium: false,
};
