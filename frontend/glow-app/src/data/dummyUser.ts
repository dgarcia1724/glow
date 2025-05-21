export interface User {
  // Database ID
  id: number; // PostgreSQL auto-incrementing ID

  // Firebase Auth fields
  uid: string; // Firebase Auth user ID
  email: string;
  emailVerified: boolean;
  displayName: string | null;
  photoURL: string | null;
  authProvider: "google" | "email" | "phone";
  lastSignInTime: string;
  creationTime: string;

  // Spring Boot fields
  version: number; // For JPA optimistic locking
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  roles: string[]; // For Spring Security roles

  // Basic Info
  firstName: string;
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
    religion: {
      value: string;
      emoji: string;
    };
    politics: {
      value: string;
      emoji: string;
    };
  };

  // Lifestyle
  lifestyle: {
    fitness: {
      value: string;
      emoji: string;
    };
    alcohol: {
      value: string;
      emoji: string;
    };
    smoking: {
      value: string;
      emoji: string;
    };
    drugs: {
      value: string;
      emoji: string;
    };
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
}

export const dummyUser: User = {
  // Database ID
  id: 1, // PostgreSQL auto-incrementing ID

  // Firebase Auth fields
  uid: "xK9mP2nL5vR8tY3wQ7hJ4fG1dS6cB9",
  email: "jane.doe@gmail.com",
  emailVerified: true,
  displayName: "Jane Doe",
  photoURL:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  authProvider: "google",
  lastSignInTime: "2024-03-15T10:00:00.000Z",
  creationTime: "2024-03-15T09:30:00.000Z",

  // Spring Boot fields
  version: 1,
  status: "ACTIVE",
  roles: ["ROLE_USER"],

  // Basic Info
  firstName: "Jane",
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
    religion: {
      value: "Spiritual but not religious",
      emoji: "🤍",
    },
    politics: {
      value: "Moderate",
      emoji: "🤝",
    },
  },
  lifestyle: {
    fitness: {
      value: "Very Active",
      emoji: "🏋️‍♂️",
    },
    alcohol: {
      value: "Socially",
      emoji: "🍷",
    },
    smoking: {
      value: "Never",
      emoji: "🚭",
    },
    drugs: {
      value: "Never",
      emoji: "🌿",
    },
  },
  bio: "Adventure-seeking software engineer who loves hiking, photography, and trying new restaurants. Looking for someone to share life's adventures with!",
  pictures: [
    {
      id: "pic_1",
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      isMain: true,
      order: 1,
    },
    {
      id: "pic_2",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
      isMain: false,
      order: 2,
    },
    {
      id: "pic_3",
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop",
      isMain: false,
      order: 3,
    },
    {
      id: "pic_4",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      isMain: false,
      order: 4,
    },
    {
      id: "pic_5",
      url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
      isMain: false,
      order: 5,
    },
    {
      id: "pic_6",
      url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
      isMain: false,
      order: 6,
    },
  ],
  createdAt: "2024-03-15T10:00:00Z",
  updatedAt: "2024-03-15T10:00:00Z",
  lastActive: "2024-03-15T10:00:00Z",
};
