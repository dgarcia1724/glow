"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyUser } from "@/data/dummyUser";
import TopNav from "../../components/TopNav";

export default function Bio() {
  const router = useRouter();
  const [bio, setBio] = useState(dummyUser.bio);
  const [charCount, setCharCount] = useState(dummyUser.bio.length);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBio = e.target.value;
    setBio(newBio);
    setCharCount(newBio.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save bio to backend
    router.push("/main-app/profile/edit-profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNav />

      <main className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="w-full max-w-md mx-auto flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 text-center">
            Add your bio (optional)
          </h1>
          <form
            id="bio-form"
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col gap-4"
          >
            <textarea
              value={bio}
              onChange={handleBioChange}
              placeholder="Talk about your interests, beliefs, and what you're looking for..."
              className="w-full border-2 border-black/80 focus:border-yellow-400 outline-none text-lg py-3 px-4 placeholder-gray-400 mb-2 transition-colors bg-transparent text-black rounded-lg min-h-[150px] resize-none"
              maxLength={150}
            />
            <p className="text-sm text-gray-500 text-right">
              {charCount}/150 characters
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
