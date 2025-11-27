import { FC } from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
      </svg>
    ),
    title: 'Custom Branded Links',
    description: 'Create memorable and branded links with custom aliases that are easy to share and recognize across platforms.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'In-Depth Analytics',
    description: 'Track every click with our real-time analytics. Understand your audience with detailed geographical and device data.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Lightning-Fast Redirects',
    description: 'Ensure a seamless user experience with our high-performance redirect service that never keeps your users waiting.',
  },
];

const Features: FC = () => {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gray-50 [mask-image:radial-gradient(100%_50%_at_top_center,_white,_transparent)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate-fade-in-up text-base font-semibold leading-7 text-gray-700">
            Our Features
          </h2>
          <p 
            className="animate-fade-in-up mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            style={{ animationDelay: '200ms' }}
          >
            Everything You Need, Nothing You Don't
          </p>
          <p 
            className="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600"
            style={{ animationDelay: '400ms' }}
          >
            Powerful features designed for simplicity and efficiency, giving you full control over your links.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="animate-fade-in-up flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 200 + 600}ms` }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                    <span className="h-6 w-6 text-gray-800">{feature.icon}</span>
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;