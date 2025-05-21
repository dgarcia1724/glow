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
    religion: string;
    politics: string;
  };

  // Lifestyle
  lifestyle: {
    fitness: string; // e.g., "Very Active", "Moderately Active", etc.
    alcohol: string; // e.g., "Never", "Socially", "Regularly"
    smoking: string; // e.g., "Never", "Occasionally", "Regularly"
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
  // Database ID
  id: 1, // PostgreSQL auto-incrementing ID

  // Firebase Auth fields
  uid: "xK9mP2nL5vR8tY3wQ7hJ4fG1dS6cB9",
  email: "jane.doe@gmail.com",
  emailVerified: true,
  displayName: "Jane Doe",
  photoURL: "https://lh3.googleusercontent.com/a/...", // Google profile photo URL
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
    religion: "Spiritual but not religious",
    politics: "Moderate",
  },
  lifestyle: {
    fitness: "Very Active",
    alcohol: "Socially",
    smoking: "Never",
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
