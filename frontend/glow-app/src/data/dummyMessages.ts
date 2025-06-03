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

// Create unique conversations for each match
export const dummyConversations: Conversation[] = [
  // Conversation with Ava (Adventure photographer) - Ends with Danny's turn
  {
    id: generateConversationId(dummyUser.uid, dummyMatches[0].uid),
    participants: [dummyUser.uid, dummyMatches[0].uid],
    messages: [
      {
        id: generateMessageId(1),
        senderId: dummyMatches[0].uid,
        receiverId: dummyUser.uid,
        content:
          "Hey Danny! I saw your profile and loved that you're into tech. I'm actually looking for someone to join me on some photography adventures! 📸",
        timestamp: "2024-03-15T14:00:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(2),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[0].uid,
        content:
          "Hi Ava! Your adventure photography work looks amazing. I'd love to hear more about your favorite spots in Colorado!",
        timestamp: "2024-03-15T14:05:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(3),
        senderId: dummyMatches[0].uid,
        receiverId: dummyUser.uid,
        content:
          "Thanks! I actually have a trip planned to Seattle next month for some urban photography. Maybe we could meet up and I could show you some of my work?",
        timestamp: "2024-03-15T14:10:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(4),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[0].uid,
        content:
          "That would be great! I know some amazing spots in Seattle that would be perfect for photography. When exactly are you planning to visit?",
        timestamp: "2024-03-15T14:15:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(5),
        senderId: dummyMatches[0].uid,
        receiverId: dummyUser.uid,
        content:
          "I'm thinking April 15-20. Would you be free to show me around? I'd love to get some shots of the city with a local's perspective!",
        timestamp: "2024-03-15T14:20:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(6),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[0].uid,
        content:
          "Perfect! I'll be here and would love to show you around. I know some hidden gems that most tourists miss. Let's plan something when it gets closer!",
        timestamp: "2024-03-15T14:25:00.000Z",
        isRead: true,
      },
    ],
    lastMessage: {
      id: generateMessageId(6),
      senderId: dummyUser.uid,
      receiverId: dummyMatches[0].uid,
      content:
        "Perfect! I'll be here and would love to show you around. I know some hidden gems that most tourists miss. Let's plan something when it gets closer!",
      timestamp: "2024-03-15T14:25:00.000Z",
      isRead: true,
    },
    unreadCount: 0,
  },

  // Conversation with Zoe (UX Designer) - Ends with Zoe's turn
  {
    id: generateConversationId(dummyUser.uid, dummyMatches[1].uid),
    participants: [dummyUser.uid, dummyMatches[1].uid],
    messages: [
      {
        id: generateMessageId(7),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[1].uid,
        content:
          "Hi Zoe! I noticed you're a UX designer. I'm actually working on some AI projects that could use a designer's perspective. Would love to chat!",
        timestamp: "2024-03-15T15:00:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(8),
        senderId: dummyMatches[1].uid,
        receiverId: dummyUser.uid,
        content:
          "Hey Danny! That sounds fascinating. I've been wanting to work more with AI/ML projects. What kind of interface are you building?",
        timestamp: "2024-03-15T15:05:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(9),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[1].uid,
        content:
          "It's a new dating app interface that uses AI to improve matching. I'd love to get your thoughts on the user experience!",
        timestamp: "2024-03-15T15:10:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(10),
        senderId: dummyMatches[1].uid,
        receiverId: dummyUser.uid,
        content:
          "That's so meta! 😄 I'd be happy to give you some UX feedback. Are you planning to visit Vancouver anytime soon? We could meet up and discuss it in person!",
        timestamp: "2024-03-15T15:15:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(11),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[1].uid,
        content:
          "I've actually been meaning to visit Vancouver! Maybe we could plan something for next month? I'd love to see the city and get your professional input!",
        timestamp: "2024-03-15T15:20:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(12),
        senderId: dummyMatches[1].uid,
        receiverId: dummyUser.uid,
        content:
          "That would be perfect! I know some great coffee shops where we could work on the design. Let me know when you're thinking of coming up!",
        timestamp: "2024-03-15T15:25:00.000Z",
        isRead: true,
      },
    ],
    lastMessage: {
      id: generateMessageId(12),
      senderId: dummyMatches[1].uid,
      receiverId: dummyUser.uid,
      content:
        "That would be perfect! I know some great coffee shops where we could work on the design. Let me know when you're thinking of coming up!",
      timestamp: "2024-03-15T15:25:00.000Z",
      isRead: true,
    },
    unreadCount: 0,
  },

  // Conversation with Chloe (Environmental Lawyer) - Ends with Danny's turn
  {
    id: generateConversationId(dummyUser.uid, dummyMatches[2].uid),
    participants: [dummyUser.uid, dummyMatches[2].uid],
    messages: [
      {
        id: generateMessageId(13),
        senderId: dummyMatches[2].uid,
        receiverId: dummyUser.uid,
        content:
          "Hi Danny! I noticed you're interested in tech and innovation. I'm working on some environmental tech initiatives and would love to pick your brain!",
        timestamp: "2024-03-15T16:00:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(14),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[2].uid,
        content:
          "Hey Chloe! That's really interesting. I've been looking into green tech solutions myself. What kind of initiatives are you working on?",
        timestamp: "2024-03-15T16:05:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(15),
        senderId: dummyMatches[2].uid,
        receiverId: dummyUser.uid,
        content:
          "We're developing a platform to track corporate environmental compliance. It's fascinating work, but we could use some tech expertise. Would you be interested in consulting?",
        timestamp: "2024-03-15T16:10:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(16),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[2].uid,
        content:
          "That sounds like a meaningful project! I'd be happy to help. Are you planning any trips to Seattle? We could discuss it over coffee!",
        timestamp: "2024-03-15T16:15:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(17),
        senderId: dummyMatches[2].uid,
        receiverId: dummyUser.uid,
        content:
          "Actually, I have a conference in Seattle next month! Would you be free to meet up? I'd love to get your technical perspective on our platform.",
        timestamp: "2024-03-15T16:20:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(18),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[2].uid,
        content:
          "Perfect timing! I'd be happy to meet up and discuss your platform. Just let me know the dates and I'll make sure I'm available!",
        timestamp: "2024-03-15T16:25:00.000Z",
        isRead: true,
      },
    ],
    lastMessage: {
      id: generateMessageId(18),
      senderId: dummyUser.uid,
      receiverId: dummyMatches[2].uid,
      content:
        "Perfect timing! I'd be happy to meet up and discuss your platform. Just let me know the dates and I'll make sure I'm available!",
      timestamp: "2024-03-15T16:25:00.000Z",
      isRead: true,
    },
    unreadCount: 0,
  },

  // Conversation with Sofia (Software Engineer) - Ends with Sofia's turn
  {
    id: generateConversationId(dummyUser.uid, dummyMatches[3].uid),
    participants: [dummyUser.uid, dummyMatches[3].uid],
    messages: [
      {
        id: generateMessageId(19),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[3].uid,
        content:
          "Hi Sofia! I saw you're a software engineer who plays piano. That's a unique combination! What kind of music do you play?",
        timestamp: "2024-03-15T17:00:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(20),
        senderId: dummyMatches[3].uid,
        receiverId: dummyUser.uid,
        content:
          "Hey Danny! I mostly play classical and jazz. It's a great way to unwind after coding. Do you play any instruments?",
        timestamp: "2024-03-15T17:05:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(21),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[3].uid,
        content:
          "I play a bit of guitar! Maybe we could have a jam session if you're ever in Seattle? I know some great venues for live music.",
        timestamp: "2024-03-15T17:10:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(22),
        senderId: dummyMatches[3].uid,
        receiverId: dummyUser.uid,
        content:
          "That sounds amazing! I'm actually planning a road trip down the west coast next month. Would you be free to meet up?",
        timestamp: "2024-03-15T17:15:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(23),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[3].uid,
        content:
          "Absolutely! Just let me know when you'll be in town. We could grab coffee and maybe find a piano somewhere to play!",
        timestamp: "2024-03-15T17:20:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(24),
        senderId: dummyMatches[3].uid,
        receiverId: dummyUser.uid,
        content:
          "Perfect! I'll be there around April 10-15. I'll bring some sheet music and we can have a mini concert! 🎹",
        timestamp: "2024-03-15T17:25:00.000Z",
        isRead: true,
      },
    ],
    lastMessage: {
      id: generateMessageId(24),
      senderId: dummyMatches[3].uid,
      receiverId: dummyUser.uid,
      content:
        "Perfect! I'll be there around April 10-15. I'll bring some sheet music and we can have a mini concert! 🎹",
      timestamp: "2024-03-15T17:25:00.000Z",
      isRead: true,
    },
    unreadCount: 0,
  },

  // Conversation with Emma (Financial Analyst) - Ends with Danny's turn
  {
    id: generateConversationId(dummyUser.uid, dummyMatches[4].uid),
    participants: [dummyUser.uid, dummyMatches[4].uid],
    messages: [
      {
        id: generateMessageId(25),
        senderId: dummyMatches[4].uid,
        receiverId: dummyUser.uid,
        content:
          "Hey Danny! I noticed you're in tech. I'm actually working on some fintech projects and would love to get your perspective!",
        timestamp: "2024-03-15T18:00:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(26),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[4].uid,
        content:
          "Hi Emma! That's interesting. I've been looking into fintech solutions myself. What kind of projects are you working on?",
        timestamp: "2024-03-15T18:05:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(27),
        senderId: dummyMatches[4].uid,
        receiverId: dummyUser.uid,
        content:
          "We're developing AI-powered investment tools. It's fascinating work! Are you planning to visit Calgary anytime soon?",
        timestamp: "2024-03-15T18:10:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(28),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[4].uid,
        content:
          "I've actually been wanting to visit Calgary! Maybe we could meet up and discuss our projects? I'd love to learn more about your work!",
        timestamp: "2024-03-15T18:15:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(29),
        senderId: dummyMatches[4].uid,
        receiverId: dummyUser.uid,
        content:
          "That would be great! I know some amazing restaurants here. When are you thinking of visiting?",
        timestamp: "2024-03-15T18:20:00.000Z",
        isRead: true,
      },
      {
        id: generateMessageId(30),
        senderId: dummyUser.uid,
        receiverId: dummyMatches[4].uid,
        content:
          "How about next month? I can plan a trip around April 20-25. Would that work for you?",
        timestamp: "2024-03-15T18:25:00.000Z",
        isRead: true,
      },
    ],
    lastMessage: {
      id: generateMessageId(30),
      senderId: dummyUser.uid,
      receiverId: dummyMatches[4].uid,
      content:
        "How about next month? I can plan a trip around April 20-25. Would that work for you?",
      timestamp: "2024-03-15T18:25:00.000Z",
      isRead: true,
    },
    unreadCount: 0,
  },
];

// Export all messages in a flat array for easy access
export const dummyMessages: Message[] = dummyConversations.flatMap(
  (conversation) => conversation.messages
);
