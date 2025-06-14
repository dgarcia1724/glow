"use client";

import Image from "next/image";
import YellowGradientButton from "@/components/YellowGradientButton";
import { signInWithGoogle, signInWithEmail } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const token = await result.user.getIdToken();

      // Verify token with auth service
      const response = await fetch("http://localhost:8081/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Token verification failed");
      }

      const userData = await response.json();

      // Check if user needs onboarding (you can add your own logic here)
      const needsOnboarding = !userData.onboardingCompleted; // You'll need to add this field to your auth service response

      if (needsOnboarding) {
        router.push("/onboarding/welcome");
      } else {
        router.push("/main-app/potential");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError("Failed to sign in with Google");
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signInWithEmail(email, password);
      const token = await result.user.getIdToken();

      // Verify token with auth service
      const response = await fetch("http://localhost:8081/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Token verification failed");
      }

      const userData = await response.json();

      // Check if user needs onboarding
      const needsOnboarding = !userData.onboardingCompleted;

      if (needsOnboarding) {
        router.push("/onboarding/welcome");
      } else {
        router.push("/main-app/potential");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <Image
        src="/starry-romantic.png"
        alt="Silhouette of 2 people standing under a starry night"
        fill
        priority
        quality={100}
        className="object-cover object-top sm:object-bottom -z-10"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-5" />

      <main className="max-w-md w-full flex flex-col items-center justify-center text-center space-y-8 bg-black/40 p-8 rounded-2xl backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

        {error && (
          <div className="w-full p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200">
            {error}
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-black text-white font-medium py-3 rounded-full text-base shadow hover:opacity-90 transition-opacity cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 12.9582 12.9232 11.8582 13.5614V15.8195H14.7418C16.4545 14.2527 17.64 11.9455 17.64 9.20455Z"
              fill="#4285F4"
            />
            <path
              d="M9 18C11.43 18 13.4673 17.1941 14.7418 15.8195L11.8582 13.5614C11.0236 14.1014 9.95818 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.22091 15.9832 5.31818 18 9 18Z"
              fill="#34A853"
            />
            <path
              d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.3614 2.00455C13.4673 0.222727 11.43 -0.5 9 -0.5C5.31818 -0.5 2.22091 1.51682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>

        <div className="w-full flex items-center gap-8">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-white/50 text-lg font-semibold px-4">or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        <form onSubmit={handleEmailSignIn} className="w-full space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
          </div>

          <YellowGradientButton type="submit" className="w-full">
            Sign In
          </YellowGradientButton>
        </form>

        <p className="text-white/70">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="text-yellow-200 hover:text-yellow-100">
            Sign up
          </a>
        </p>
      </main>
    </div>
  );
}
