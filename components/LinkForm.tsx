'use client';

import { useState, FormEvent, FC } from 'react';
import { createLink } from '@/lib/api';
import type { Link } from '@/types';

interface LinkFormProps {
  onLinkCreated: (newLink: Link) => void;
}

const API_DOMAIN = process.env.NEXT_PUBLIC_API_URL?.replace(/^https?:\/\//, '') || 'tinylink.dev';

const LinkForm: FC<LinkFormProps> = ({ onLinkCreated }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!originalUrl) {
      setFormError('Please enter a URL to shorten.');
      return;
    }

    setIsSubmitting(true);
    setFormError(null);
    setSuccessMessage(null);

    try {
      const newLink = await createLink(originalUrl, customCode);
      onLinkCreated(newLink);
      setOriginalUrl('');
      setCustomCode('');
      setSuccessMessage('Link created successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      if (error instanceof Error) {
        setFormError(error.message);
      } else {
        setFormError('An unknown error occurred.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="relative rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-xl md:p-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create a TinyLink
          </h2>
          <p className="mt-2 text-gray-600">Enter your long URL to make it short, sweet, and trackable.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="originalUrl" className="mb-2 block text-sm font-semibold text-gray-800">
              URL to Shorten
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
              </div>
              <input
                type="url"
                id="originalUrl"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder="https://example.com/a-very-long-and-unwieldy-link"
                className="w-full rounded-lg border border-gray-300 bg-white/50 py-3 pl-10 pr-4 text-gray-800 placeholder-gray-400 transition-colors focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800/20"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="customCode" className="mb-2 block text-sm font-semibold text-gray-800">
              Custom Alias (Optional)
            </label>
            <div className="group flex items-center rounded-lg border border-gray-300 bg-white/50 transition-all focus-within:border-gray-800 focus-within:ring-2 focus-within:ring-gray-800/20">
              <span className="flex-shrink-0 rounded-l-lg border-r border-gray-300 bg-gray-50 py-3 px-4 text-sm text-gray-500">
                {`${API_DOMAIN}/`}
              </span>
              <input
                type="text"
                id="customCode"
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                placeholder="my-awesome-link"
                className="w-full flex-grow bg-transparent py-3 px-4 text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex w-full items-center cursor-pointer justify-center rounded-full bg-gray-900 py-3 px-4 text-base font-bold text-white shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
          >
            <svg className={`mr-2 h-5 w-5 ${isSubmitting ? 'animate-spin' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isSubmitting ? <path d="M21 12a9 9 0 1 1-6.219-8.56"/> : <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
            </svg>
            {isSubmitting ? 'Creating...' : 'Create TinyLink'}
          </button>
        </form>

        {formError && (
          <div className="mt-4 flex items-center rounded-lg bg-red-50 p-4 text-sm font-semibold text-red-700">
            <svg className="mr-3 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            {formError}
          </div>
        )}
        
        {successMessage && (
          <div className="mt-4 flex items-center rounded-lg bg-green-50 p-4 text-sm font-semibold text-green-700">
            <svg className="mr-3 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkForm;