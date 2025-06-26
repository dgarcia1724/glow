"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyMatches } from "@/data/dummyMatches";
import { dummyConversations, Conversation } from "@/data/dummyMessages";
import { dummyUser, User } from "@/data/dummyUser";

export default function Matches() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<{
    yourTurn: boolean;
    theirTurn: boolean;
    hidden: boolean;
  }>({
    yourTurn: false,
    theirTurn: false,
    hidden: false,
  });
  const router = useRouter();

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

  // Separate conversations into "Your turn" and "Their turn"
  const yourTurnConversations = conversations.filter(
    (conv) => conv.lastMessage.senderId !== dummyUser.uid
  );

  const theirTurnConversations = conversations.filter(
    (conv) => conv.lastMessage.senderId === dummyUser.uid
  );

  // Filter hidden conversations (older than 14 days)
  const hiddenConversations = conversations.filter((conv) => {
    const lastMessageDate = new Date(conv.lastMessage.timestamp);
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    return lastMessageDate < fourteenDaysAgo;
  });

  // Remove hidden conversations from the other sections
  const activeYourTurnConversations = yourTurnConversations.filter(
    (conv) => !hiddenConversations.includes(conv)
  );

  const activeTheirTurnConversations = theirTurnConversations.filter(
    (conv) => !hiddenConversations.includes(conv)
  );

  const handleUnmatch = (matchId: string) => {
    // TODO: Implement unmatch functionality
    console.log("Unmatch with:", matchId);
    setOpenMenuId(null);
  };

  const hasMatches = conversations.length > 0;

  const toggleSection = (section: "yourTurn" | "theirTurn" | "hidden") => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-6">
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
              No messages yet
            </h1>
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto mt-2">
            {/* Your Turn Section */}
            {activeYourTurnConversations.length > 0 && (
              <div className="mb-6">
                <div
                  className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => toggleSection("yourTurn")}
                >
                  <h2 className="text-lg font-semibold text-gray-800">
                    Your turn ({activeYourTurnConversations.length})
                  </h2>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      collapsedSections.yourTurn ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {!collapsedSections.yourTurn && (
                  <div>
                    {activeYourTurnConversations.map((conv) => {
                      const match = getMatch(conv);
                      if (!match) return null;
                      const isYourMessage =
                        conv.lastMessage.senderId === dummyUser.uid;
                      return (
                        <div
                          key={match.uid}
                          className="flex items-center py-4 px-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer relative group"
                          onClick={() =>
                            router.push(`/main-app/matches/${match.uid}`)
                          }
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
                                <span className="text-gray-500 mr-2">
                                  You:{" "}
                                </span>
                              )}
                              <div className="text-gray-600 text-base truncate">
                                {conv.lastMessage.content}
                              </div>
                            </div>
                          </div>

                          {/* Three dots menu */}
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuId(
                                  openMenuId === match.uid ? null : match.uid
                                );
                              }}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            >
                              <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </button>

                            {/* Dropdown menu */}
                            {openMenuId === match.uid && (
                              <>
                                <div
                                  className="fixed inset-0 z-40"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenMenuId(null);
                                  }}
                                />
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleUnmatch(match.uid);
                                    }}
                                    className="w-full px-4 py-3 text-left text-red-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer flex items-center"
                                  >
                                    <svg
                                      className="w-5 h-5 mr-2"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                    Unmatch
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Their Turn Section */}
            {activeTheirTurnConversations.length > 0 && (
              <div className="mb-6">
                <div
                  className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => toggleSection("theirTurn")}
                >
                  <h2 className="text-lg font-semibold text-gray-800">
                    Their turn ({activeTheirTurnConversations.length})
                  </h2>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      collapsedSections.theirTurn ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {!collapsedSections.theirTurn && (
                  <div>
                    {activeTheirTurnConversations.map((conv) => {
                      const match = getMatch(conv);
                      if (!match) return null;
                      const isYourMessage =
                        conv.lastMessage.senderId === dummyUser.uid;
                      return (
                        <div
                          key={match.uid}
                          className="flex items-center py-4 px-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer relative group"
                          onClick={() =>
                            router.push(`/main-app/matches/${match.uid}`)
                          }
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
                                <span className="text-gray-500 mr-2">
                                  You:{" "}
                                </span>
                              )}
                              <div className="text-gray-600 text-base truncate">
                                {conv.lastMessage.content}
                              </div>
                            </div>
                          </div>

                          {/* Three dots menu */}
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuId(
                                  openMenuId === match.uid ? null : match.uid
                                );
                              }}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            >
                              <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </button>

                            {/* Dropdown menu */}
                            {openMenuId === match.uid && (
                              <>
                                <div
                                  className="fixed inset-0 z-40"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenMenuId(null);
                                  }}
                                />
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleUnmatch(match.uid);
                                    }}
                                    className="w-full px-4 py-3 text-left text-red-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer flex items-center"
                                  >
                                    <svg
                                      className="w-5 h-5 mr-2"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                    Unmatch
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Hidden Section */}
            <div>
              <div
                className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => toggleSection("hidden")}
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Hidden ({hiddenConversations.length})
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Inactive chats are hidden after 14 days. New activity
                    unhides them.
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    collapsedSections.hidden ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {!collapsedSections.hidden && (
                <div>
                  {hiddenConversations.length > 0 ? (
                    hiddenConversations.map((conv) => {
                      const match = getMatch(conv);
                      if (!match) return null;
                      const isYourMessage =
                        conv.lastMessage.senderId === dummyUser.uid;
                      return (
                        <div
                          key={match.uid}
                          className="flex items-center py-4 px-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer relative group"
                          onClick={() =>
                            router.push(`/main-app/matches/${match.uid}`)
                          }
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
                                ).toLocaleDateString([], {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </div>
                            </div>
                            <div className="flex items-center">
                              {isYourMessage && (
                                <span className="text-gray-500 mr-2">
                                  You:{" "}
                                </span>
                              )}
                              <div className="text-gray-600 text-base truncate">
                                {conv.lastMessage.content}
                              </div>
                            </div>
                          </div>

                          {/* Three dots menu */}
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuId(
                                  openMenuId === match.uid ? null : match.uid
                                );
                              }}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                            >
                              <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </button>

                            {/* Dropdown menu */}
                            {openMenuId === match.uid && (
                              <>
                                <div
                                  className="fixed inset-0 z-40"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenMenuId(null);
                                  }}
                                />
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleUnmatch(match.uid);
                                    }}
                                    className="w-full px-4 py-3 text-left text-red-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer flex items-center"
                                  >
                                    <svg
                                      className="w-5 h-5 mr-2"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                    Unmatch
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="px-3 py-4 text-center text-gray-500">
                      <p>No hidden conversations</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
