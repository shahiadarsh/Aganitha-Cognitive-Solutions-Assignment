import { FC } from 'react';

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
      </svg>
    ),
    title: 'Paste Your URL',
    description: 'Simply paste your long, cumbersome URL into our input field to get started.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /><path d="m15 5 3 3" />
      </svg>
    ),
    title: 'Customize Your Link',
    description: 'Optionally, create a custom alias to make your link branded and memorable.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 14 21 3" /><path d="M21 3H15" /><path d="M21 3v6" /><path d="M3 21h18" />
      </svg>
    ),
    title: 'Create & Share',
    description: 'Generate your TinyLink and share it across all your platforms in one click.',
  },
];

const HowItWorks: FC = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">How It Works</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Get Started in 3 Easy Steps
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From long and messy to short and sweet. Creating your perfect short link is just seconds away.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1 border-t-2 border-dashed border-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="animate-fade-in-up flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 200 + 200}ms` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                  <span className="text-purple-600">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;