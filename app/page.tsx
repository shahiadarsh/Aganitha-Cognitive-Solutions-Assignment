'use client';

import { useState, useEffect, useCallback } from 'react';
import { getLinks } from '@/lib/api';
import type { Link } from '@/types';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LinkForm from '@/components/LinkForm';
import LinkTable from '@/components/LinkTable';
import TableSkeleton from '@/components/TableSkeleton';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletionSuccess, setDeletionSuccess] = useState<string | null>(null);

  const fetchLinks = useCallback(async () => {
    try {
      const data = await getLinks();
      setLinks(data);
    } catch (err) {
      setError('Failed to load links. Ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLinks();
    window.addEventListener('focus', fetchLinks);
    return () => {
      window.removeEventListener('focus', fetchLinks);
    };
  }, [fetchLinks]);

  const handleLinkCreated = (newLink: Link) => {
    setLinks((prevLinks) => [newLink, ...prevLinks]);
  };

  const handleLinkDeleted = (shortCode: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.shortCode !== shortCode));
    setDeletionSuccess('Link deleted successfully!');
    setTimeout(() => {
      setDeletionSuccess(null);
    }, 3000);
  };

  const renderContent = () => {
    if (loading) {
      return <TableSkeleton />;
    }
    if (error) {
      return <p className="text-center font-semibold text-red-600 bg-white border border-red-300 p-4 rounded-md w-full">{error}</p>;
    }
    return <LinkTable links={links} onLinkDeleted={handleLinkDeleted} />;
  };

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <Navbar />
      
      <main>
        <div className="py-12 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <HeroSection />
            <LinkForm onLinkCreated={handleLinkCreated} />
            
            {deletionSuccess && (
              <div className="w-full max-w-5xl mb-4 p-3 text-center font-semibold text-green-600 bg-white border border-green-300 rounded-md">
                {deletionSuccess}
              </div>
            )}

            {renderContent()}
          </div>
        </div>

        <Features />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}