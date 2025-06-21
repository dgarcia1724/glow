import Image from "next/image";
import YellowGradientButton from "@/components/YellowGradientButton";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <Image
        src="/starry-romantic.png"
        alt="Silhouette of 2 people standing under a starry night"
        fill
        priority
        quality={100}
        className="object-cover object-top sm:object-bottom lg:[object-position:center_75%] -z-10"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-5" />

      <main className="max-w-4xl w-full flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-teal-300 via-teal-200 to-teal-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] flex items-center justify-center gap-2 py-4">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16"
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
                  <stop stopColor="#5EEAD4" />
                  <stop offset="0.5" stopColor="#99F6E4" />
                  <stop offset="1" stopColor="#2DD4BF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-5xl sm:text-7xl tracking-wide leading-[1.2]">
              glow
            </span>
          </h1>
          <p className="text-white text-2xl sm:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Friendship & dating. Core values 1st.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-64 sm:mb-48">
          <YellowGradientButton href="/sign-up">
            Create Account
          </YellowGradientButton>
          <a
            href="/sign-in"
            className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-cyan-400 text-center"
          >
            Sign In
          </a>
        </div>
      </main>
    </div>
  );
}
