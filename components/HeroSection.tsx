import { FC } from 'react';

const ArrowRightIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PlayCircleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

const HeroSection: FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 h-96 w-96 animate-blob rounded-full bg-purple-200 opacity-50 blur-3xl filter"></div>
        <div className="animation-delay-2000 absolute top-0 -right-1/4 h-96 w-96 animate-blob rounded-full bg-pink-200 opacity-50 blur-3xl filter"></div>
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-96 w-96 animate-blob rounded-full bg-blue-200 opacity-50 blur-3xl filter"></div>
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-2 text-center md:py-2">
        <div className="animate-fade-in-up mb-6">
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-gray-300/80 bg-white/80 px-4 py-1 text-sm text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:border-gray-400 hover:shadow-md"
          >
            <span className="mr-2 animate-pulse text-lg">✨</span>
            Introducing new Analytics Dashboard
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>

        <h1
          className="animate-fade-in-up text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Shorten, Share,
          </span>
          <br />
          and Analyze Your Links
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl"
          style={{ animationDelay: '0.4s' }}
        >
          Welcome to TinyLink, the ultimate open-source tool to create clean, memorable links. 
          Gain powerful insights into your audience with our real-time analytics dashboard.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-8 text-base font-semibold text-white shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Get Started - It's Free
          </a>
          {/* <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 bg-transparent px-8 text-base font-semibold text-gray-800 transition-all duration-200 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <PlayCircleIcon className="mr-2 h-5 w-5" />
            Watch Demo
          </a> */}
        </div>

        {/* <p
          className="animate-fade-in-up mt-5 text-sm text-gray-500"
          style={{ animationDelay: '0.8s' }}
        >
          No credit card required. Start for free instantly.
        </p> */}
      </div>
    </section>
  );
};

export default HeroSection;