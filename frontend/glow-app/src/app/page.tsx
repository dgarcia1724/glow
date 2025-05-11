export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <main className="flex flex-col items-center justify-center flex-1 px-6 pt-16 pb-0">
        <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-yellow-200 via-yellow-300 to-yellow-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] flex items-center justify-center gap-2 py-4">
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
                <stop stopColor="#FDE047" />
                <stop offset="0.5" stopColor="#FEF08A" />
                <stop offset="1" stopColor="#FEF9C3" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-5xl sm:text-7xl tracking-wide leading-[1.2]">
            glow
          </span>
        </h1>
      </main>
      <div className="w-full px-0 pb-8">
        <a
          href="/onboarding"
          className="block w-full text-center px-8 py-4 rounded-full bg-gradient-to-tr from-yellow-200 via-yellow-300 to-yellow-100 text-black font-medium text-lg hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-200"
        >
          Continue
        </a>
      </div>
    </div>
  );
}
