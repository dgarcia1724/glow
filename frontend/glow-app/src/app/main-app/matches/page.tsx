"use client";

import React, { useState } from "react";
import { dummyMatches } from "@/data/dummyMatches";
import { dummyConversations, Conversation } from "@/data/dummyMessages";
import { dummyUser, User } from "@/data/dummyUser";

export default function Matches() {
  // Find conversations for the current user
  const conversations: Conversation[] = dummyConversations.filter(
    (conv: Conversation) => conv.participants.includes(dummyUser.uid)
  );

  // Helper to get the match user for a conversation
  const getMatch = (conv: Conversation): User | undefined => {
    return dummyMatches.find(
      (m: User) =>
        m.uid === conv.participants.find((id: string) => id !== dummyUser.uid)
    );
  };

  // Determine whose turn it is (last message sender)
  const yourTurn: { match: User; conv: Conversation }[] = [];
  const theirTurn: { match: User; conv: Conversation }[] = [];
  conversations.forEach((conv: Conversation) => {
    const match = getMatch(conv);
    if (!match) return;
    const lastMsg = conv.lastMessage;
    if (lastMsg.senderId !== dummyUser.uid) {
      yourTurn.push({ match, conv });
    } else {
      theirTurn.push({ match, conv });
    }
  });

  const hasMatches = yourTurn.length > 0 || theirTurn.length > 0;

  // State for expand/collapse
  const [yourTurnOpen, setYourTurnOpen] = useState(true);
  const [theirTurnOpen, setTheirTurnOpen] = useState(true);

  // Chevron SVG
  const Chevron = ({ open }: { open: boolean }) => (
    <svg
      className={`w-4 h-4 ml-2 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      } cursor-pointer`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">Matches</h1>
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
              No matches yet
            </h1>
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto mt-2">
            {yourTurn.length > 0 && (
              <div className="mb-2">
                <button
                  className="flex items-center w-full text-gray-700 font-semibold mb-2 focus:outline-none cursor-pointer"
                  onClick={() => setYourTurnOpen((open) => !open)}
                  aria-expanded={yourTurnOpen}
                  aria-controls="your-turn-section"
                >
                  Your turn ({yourTurn.length})
                  <Chevron open={yourTurnOpen} />
                </button>
                <div id="your-turn-section">
                  {yourTurnOpen &&
                    yourTurn.map(({ match, conv }) => (
                      <div
                        key={match.uid}
                        className="flex items-center py-3 border-b border-gray-100"
                      >
                        <img
                          src={match.photoURL || ""}
                          alt={match.displayName || "Match"}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-lg text-black leading-tight">
                            {match.firstName}
                          </div>
                          <div className="text-gray-500 truncate text-sm">
                            {conv.lastMessage.content}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {theirTurn.length > 0 && (
              <div className="mb-2">
                <button
                  className="flex items-center w-full text-gray-700 font-semibold mb-2 focus:outline-none cursor-pointer"
                  onClick={() => setTheirTurnOpen((open) => !open)}
                  aria-expanded={theirTurnOpen}
                  aria-controls="their-turn-section"
                >
                  Their turn ({theirTurn.length})
                  <Chevron open={theirTurnOpen} />
                </button>
                <div id="their-turn-section">
                  {theirTurnOpen &&
                    theirTurn.map(({ match, conv }) => (
                      <div
                        key={match.uid}
                        className="flex items-center py-3 border-b border-gray-100"
                      >
                        <img
                          src={match.photoURL || ""}
                          alt={match.displayName || "Match"}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-lg text-black leading-tight">
                            {match.firstName}
                          </div>
                          <div className="text-gray-500 truncate text-sm">
                            {conv.lastMessage.content}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
