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
  ethnicity: string[]; // Added ethnicity field
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
    relationshipType: string[];
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
  id: 1,

  // Firebase Auth fields
  uid: "xK9mP2nL5vR8tY3wQ7hJ4fG1dS6cB9",
  email: "jane.doe@gmail.com",
  emailVerified: true,
  displayName: "Danny",
  photoURL:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  authProvider: "google",
  lastSignInTime: "2024-03-15T10:00:00.000Z",
  creationTime: "2024-03-15T09:30:00.000Z",

  // Spring Boot fields
  version: 1,
  status: "ACTIVE",
  roles: ["ROLE_USER"],

  // Basic Info
  firstName: "Danny",
  birthday: "1996-03-15", // This makes him 28 years old
  gender: "Male",
  ethnicity: ["White / Caucasian"], // Added ethnicity
  location: {
    city: "Seattle",
    state: "Washington",
    country: "United States",
    coordinates: {
      latitude: 47.6062,
      longitude: -122.3321,
    },
  },
  datingPreferences: {
    lookingFor: ["Women"],
    ageRange: {
      min: 25,
      max: 35,
    },
    distance: 50,
  },
  coreValues: {
    religion: "Christian",
    politics: "Right-Leaning",
    relationshipType: ["Long-term"],
  },
  bio: "I'm in tech & value relationship built on love & respect. Looking for wifey...",
  pictures: [
    {
      id: "pic_1",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      isMain: true,
      order: 1,
    },
    {
      id: "pic_2",
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      isMain: false,
      order: 2,
    },
  ],
  createdAt: "2024-03-15T10:00:00Z",
  updatedAt: "2024-03-15T10:00:00Z",
  lastActive: "2024-03-15T10:00:00Z",
};
