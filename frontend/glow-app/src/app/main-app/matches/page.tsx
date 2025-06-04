"use client";

import React from "react";
import { dummyMatches } from "@/data/dummyMatches";
import { dummyConversations, Conversation } from "@/data/dummyMessages";
import { dummyUser, User } from "@/data/dummyUser";

export default function Matches() {
  // Find conversations for the current user
  const conversations: Conversation[] = dummyConversations
    .filter((conv: Conversation) => conv.participants.includes(dummyUser.uid))
    .sort(
      (a, b) =>
        new Date(b.lastMessage.timestamp).getTime() -
        new Date(a.lastMessage.timestamp).getTime()
    );

  // Helper to get the match user for a conversation
  const getMatch = (conv: Conversation): User | undefined => {
    return dummyMatches.find(
      (m: User) =>
        m.uid === conv.participants.find((id: string) => id !== dummyUser.uid)
    );
  };

  const hasMatches = conversations.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">Messages</h1>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-center px-6 w-full">
        {!hasMatches ? (
          <div
            className="flex flex-col justify-center items-center text-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="flex justify-center items-center gap-2 mb-8">
              <svg
                className="w-8 h-8 rotate-[-15deg] opacity-80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="url(#starGradient)"
                  stroke="url(#starGradient)"
                  strokeWidth="0.5"
                  transform="rotate(0 12 12)"
                />
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FDE047" />
                    <stop offset="0.5" stopColor="#FEF08A" />
                    <stop offset="1" stopColor="#FEF9C3" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="w-16 h-16 rotate-[8deg] z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="url(#starGradient)"
                  stroke="url(#starGradient)"
                  strokeWidth="0.5"
                  transform="rotate(0 12 12)"
                />
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FDE047" />
                    <stop offset="0.5" stopColor="#FEF08A" />
                    <stop offset="1" stopColor="#FEF9C3" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="w-12 h-12 rotate-[-8deg] opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="url(#starGradient)"
                  stroke="url(#starGradient)"
                  strokeWidth="0.5"
                  transform="rotate(0 12 12)"
                />
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FDE047" />
                    <stop offset="0.5" stopColor="#FEF08A" />
                    <stop offset="1" stopColor="#FEF9C3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 leading-tight text-center">
              No messages yet
            </h1>
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto mt-2">
            {conversations.map((conv) => {
              const match = getMatch(conv);
              if (!match) return null;

              const isYourMessage = conv.lastMessage.senderId === dummyUser.uid;

              return (
                <div
                  key={match.uid}
                  className="flex items-center py-4 px-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                >
                  <img
                    src={match.photoURL || ""}
                    alt={match.displayName || "Match"}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-semibold text-lg text-black leading-tight">
                        {match.firstName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(
                          conv.lastMessage.timestamp
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                    <div className="flex items-center">
                      {isYourMessage && (
                        <span className="text-gray-500 mr-2">You: </span>
                      )}
                      <div className="text-gray-600 text-base truncate">
                        {conv.lastMessage.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
