import { User } from "./dummyUser";

export const dummyUsers: User[] = [
  {
    id: 1,
    uid: "xK9mP2nL5vR8tY3wQ7hJ4fG1dS6cB9",
    email: "jane.doe@gmail.com",
    emailVerified: true,
    displayName: "Grrrrrrrrrrrrrrrrrrrrrr Doe",
    photoURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    authProvider: "google",
    lastSignInTime: "2024-03-15T10:00:00.000Z",
    creationTime: "2024-03-15T09:30:00.000Z",
    version: 1,
    status: "ACTIVE",
    roles: ["ROLE_USER"],
    firstName: "Jenny",
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
      lookingFor: ["Men"],
      ageRange: {
        min: 25,
        max: 35,
      },
      distance: 50,
    },
    coreValues: {
      religion: "Spiritual but not religious",
      politics: "Liberal",
      relationshipType: "Casual",
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
    ],
    createdAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-15T10:00:00Z",
    lastActive: "2024-03-15T10:00:00Z",
  },
  {
    id: 2,
    uid: "yL8nQ3mK6wT9vX4pR7jH5gF2eS7dC0",
    email: "sarah.smith@gmail.com",
    emailVerified: true,
    displayName: "Sarah Smith",
    photoURL:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    authProvider: "google",
    lastSignInTime: "2024-03-14T15:30:00.000Z",
    creationTime: "2024-03-14T15:00:00.000Z",
    version: 1,
    status: "ACTIVE",
    roles: ["ROLE_USER"],
    firstName: "Sarah",
    birthday: "1992-03-20",
    gender: "Female",
    location: {
      city: "New York",
      state: "New York",
      country: "United States",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    datingPreferences: {
      lookingFor: ["Men"],
      ageRange: {
        min: 28,
        max: 38,
      },
      distance: 30,
    },
    coreValues: {
      religion: "Atheist",
      politics: "Liberal",
      relationshipType: "Short-term relationship",
    },
    bio: "Art gallery curator by day, amateur chef by night. Love exploring museums, trying new recipes, and weekend getaways to the beach.",
    pictures: [
      {
        id: "pic_1",
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
        isMain: true,
        order: 1,
      },
      {
        id: "pic_2",
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        isMain: false,
        order: 2,
      },
      {
        id: "pic_3",
        url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
        isMain: false,
        order: 3,
      },
    ],
    createdAt: "2024-03-14T15:00:00Z",
    updatedAt: "2024-03-14T15:00:00Z",
    lastActive: "2024-03-14T15:30:00Z",
  },
  {
    id: 3,
    uid: "zM9pR4nL7xT0vY5qS8kH6gF3fT8eD1",
    email: "emma.wilson@gmail.com",
    emailVerified: true,
    displayName: "Emma Wilson",
    photoURL:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    authProvider: "google",
    lastSignInTime: "2024-03-13T20:15:00.000Z",
    creationTime: "2024-03-13T19:45:00.000Z",
    version: 1,
    status: "ACTIVE",
    roles: ["ROLE_USER"],
    firstName: "Emma",
    birthday: "1990-11-08",
    gender: "Female",
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
      lookingFor: ["Men"],
      ageRange: {
        min: 30,
        max: 40,
      },
      distance: 25,
    },
    coreValues: {
      religion: "Christian",
      politics: "Conservative",
      relationshipType: "Long-term relationship",
    },
    bio: "Elementary school teacher who loves hiking, yoga, and reading. Looking for someone who shares my values and enjoys outdoor adventures.",
    pictures: [
      {
        id: "pic_1",
        url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
        isMain: true,
        order: 1,
      },
      {
        id: "pic_2",
        url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
        isMain: false,
        order: 2,
      },
      {
        id: "pic_3",
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        isMain: false,
        order: 3,
      },
    ],
    createdAt: "2024-03-13T19:45:00Z",
    updatedAt: "2024-03-13T19:45:00Z",
    lastActive: "2024-03-13T20:15:00Z",
  },
];
