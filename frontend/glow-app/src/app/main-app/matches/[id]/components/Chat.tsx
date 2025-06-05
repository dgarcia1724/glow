import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";
import { dummyMatches } from "@/data/dummyMatches";
import { dummyConversations, Message } from "@/data/dummyMessages";

export default function Chat() {
  const params = useParams();
  const match = dummyMatches.find((m) => m.uid === params.id);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!match) return;
    const conversation = dummyConversations.find(
      (conv) =>
        conv.participants.includes(dummyUser.uid) &&
        conv.participants.includes(match.uid)
    );
    setMessages(conversation ? conversation.messages : []);
  }, [match]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!match)
    return <div className="text-center text-gray-400 mt-8">No match found</div>;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsg: Message = {
      id: `local_${Date.now()}`,
      senderId: dummyUser.uid,
      receiverId: match.uid,
      content: input,
      timestamp: new Date().toISOString(),
      isRead: true,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-2 bg-white">
        {messages.map((msg) => {
          const isCurrentUser = msg.senderId === dummyUser.uid;
          const sender = isCurrentUser ? dummyUser : match;
          return (
            <div
              key={msg.id}
              className={`flex items-end mb-2 ${
                isCurrentUser ? "justify-end" : "justify-start"
              }`}
            >
              {!isCurrentUser && (
                <img
                  src={sender.photoURL || ""}
                  alt={sender.firstName}
                  className="w-8 h-8 rounded-full object-cover mr-2 border border-gray-200"
                />
              )}
              <div
                className={`max-w-[70%] flex flex-col ${
                  isCurrentUser ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-base shadow-sm ${
                    isCurrentUser
                      ? "bg-purple-600 text-white rounded-br-md"
                      : "bg-gray-100 text-black rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
                <span className="text-xs text-gray-400 mt-1">
                  {new Date(msg.timestamp).toLocaleString([], {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              {isCurrentUser && (
                <img
                  src={sender.photoURL || ""}
                  alt={sender.firstName}
                  className="w-8 h-8 rounded-full object-cover ml-2 border border-gray-200"
                />
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSend}
        className="w-full flex items-center gap-2 px-4 py-3 border-t border-gray-200 bg-white"
        style={{ minHeight: 64 }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message"
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-base outline-none focus:border-yellow-400 bg-gray-50"
          maxLength={500}
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2 rounded-full transition-colors disabled:opacity-50"
          disabled={!input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
