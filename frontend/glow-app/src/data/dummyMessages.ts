import { dummyMatches } from "./dummyMatches";
import { dummyUser } from "./dummyUser";

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: [string, string]; // [userId1, userId2]
  messages: Message[];
  lastMessage: Message;
  unreadCount: number;
}

// Helper function to generate a random message ID
const generateMessageId = (index: number) => `msg_${index}`;

// Helper function to generate a random conversation ID
const generateConversationId = (userId1: string, userId2: string) =>
  `conv_${userId1}_${userId2}`;

// Create conversations for each match
export const dummyConversations: Conversation[] = dummyMatches.map(
  (match, index) => {
    const messages: Message[] = [
      // Initial match message
      {
        id: generateMessageId(index * 10 + 1),
        senderId: match.uid,
        receiverId: dummyUser.uid,
        content: `Hey ${dummyUser.firstName}! I saw we matched and thought I'd say hi 👋`,
        timestamp: "2024-03-15T14:00:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 2),
        senderId: dummyUser.uid,
        receiverId: match.uid,
        content: `Hi ${
          match.firstName
        }! Thanks for reaching out. I really liked your profile, especially your interest in ${match.bio
          .split("who loves")[1]
          .split(".")[0]
          .trim()}!`,
        timestamp: "2024-03-15T14:05:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 3),
        senderId: match.uid,
        receiverId: dummyUser.uid,
        content:
          "That's so sweet! I noticed you're in tech too. What kind of projects are you working on?",
        timestamp: "2024-03-15T14:10:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 4),
        senderId: dummyUser.uid,
        receiverId: match.uid,
        content:
          "I'm currently working on some AI projects. It's fascinating stuff! How about you? What keeps you busy these days?",
        timestamp: "2024-03-15T14:15:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 5),
        senderId: match.uid,
        receiverId: dummyUser.uid,
        content:
          "That sounds interesting! I'm actually working on some environmental initiatives. Would love to hear more about your AI work sometime!",
        timestamp: "2024-03-15T14:20:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 6),
        senderId: dummyUser.uid,
        receiverId: match.uid,
        content:
          "I'd love to chat more about both! Maybe we could grab coffee sometime? I know a great place in Seattle.",
        timestamp: "2024-03-15T14:25:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 7),
        senderId: match.uid,
        receiverId: dummyUser.uid,
        content:
          "I'd love that! Though I'm in " +
          match.location.city +
          ". Maybe we could plan something when I'm in Seattle next?",
        timestamp: "2024-03-15T14:30:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 8),
        senderId: dummyUser.uid,
        receiverId: match.uid,
        content:
          "Absolutely! That would be great. When are you planning to visit?",
        timestamp: "2024-03-15T14:35:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 9),
        senderId: match.uid,
        receiverId: dummyUser.uid,
        content:
          "I'm thinking of coming down next month. Would you be free to meet up then?",
        timestamp: "2024-03-15T14:40:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(index * 10 + 10),
        senderId: dummyUser.uid,
        receiverId: match.uid,
        content:
          "That works perfectly! Let's keep in touch and plan something when you're here. Looking forward to it! 😊",
        timestamp: "2024-03-15T14:45:00.000Z",
        isRead: true,
      },
    ];

    return {
      id: generateConversationId(dummyUser.uid, match.uid),
      participants: [dummyUser.uid, match.uid],
      messages,
      lastMessage: messages[messages.length - 1],
      unreadCount: 0,
    };
  }
);

// Export all messages in a flat array for easy access
export const dummyMessages: Message[] = dummyConversations.flatMap(
  (conversation) => conversation.messages
);
