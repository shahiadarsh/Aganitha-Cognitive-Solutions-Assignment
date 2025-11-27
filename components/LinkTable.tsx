'use client';

import { useState, FC } from 'react';
import { API_BASE_URL, deleteLink } from '@/lib/api';
import type { Link } from '@/types';

const CopyIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const TrashIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const BarChartIcon = ({ className = 'h-5 w-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
);

const EmptyState = () => (
    <div className="w-full rounded-2xl bg-gray-50/80 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
            <svg className="h-8 w-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900">Your links will appear here</h3>
        <p className="mt-2 text-gray-600">Use the form above to create your first short link and start tracking!</p>
    </div>
);

interface LinkTableProps {
  links: Link[];
  onLinkDeleted: (shortCode: string) => void;
}

const LinkTable: FC<LinkTableProps> = ({ links, onLinkDeleted }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (shortCode: string) => {
    const urlToCopy = `${API_BASE_URL}/${shortCode}`;
    navigator.clipboard.writeText(urlToCopy);
    setCopiedCode(shortCode);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleDelete = async (shortCode: string) => {
    if (window.confirm('Are you sure you want to delete this link? This action cannot be undone.')) {
      try {
        await deleteLink(shortCode);
        onLinkDeleted(shortCode);
      } catch (error) {
        alert('Failed to delete the link.');
      }
    }
  };

  if (links.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="w-full space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Your Links</h2>
        {links.map((link) => (
            <div key={link.shortCode} className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-lg sm:flex-row sm:items-center">
                <div className="flex-grow space-y-2">
                    <a
                      href={`${API_BASE_URL}/${link.shortCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl font-bold text-gray-900 hover:underline"
                    >
                      {`${API_BASE_URL.replace(/^https?:\/\//, '')}/${link.shortCode}`}
                    </a>
                    <p className="max-w-md truncate text-sm text-gray-500" title={link.originalUrl}>
                      {link.originalUrl}
                    </p>
                </div>

                <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
                    <div className="flex items-center gap-2 text-gray-600" title="Total clicks">
                        <BarChartIcon className="h-5 w-5" />
                        <span className="text-lg font-bold text-gray-800">{link.clickCount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopy(link.shortCode)}
                          className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                            copiedCode === link.shortCode
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                          aria-label="Copy link"
                        >
                          {copiedCode === link.shortCode ? <CheckIcon /> : <CopyIcon />}
                        </button>
                        <button
                          onClick={() => handleDelete(link.shortCode)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600"
                          aria-label="Delete link"
                        >
                          <TrashIcon />
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};

export default LinkTable;