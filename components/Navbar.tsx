'use client';

import { FC, useState } from 'react';

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <path d="M16 4C9.372 4 4 9.372 4 16C4 22.628 9.372 28 16 28C22.628 28 28 22.628 28 16C28 9.372 22.628 4 16 4ZM20.668 12.668L18 15.336C17.472 15.864 16.632 15.864 16.104 15.336L15.336 14.568C14.808 14.04 13.968 14.04 13.44 14.568L11.332 16.668C10.804 17.196 10.804 18.036 11.332 18.564L14 21.232C14.528 21.76 15.368 21.76 15.896 21.232L16.664 20.464C17.192 19.936 18.032 19.936 18.56 20.464L20.668 22.564C21.196 23.092 22.036 23.092 22.564 22.564L23.232 21.896C23.76 21.368 23.76 20.528 23.232 20L18 14.664C17.472 14.136 16.632 14.136 16.104 14.664L15.336 15.432C14.808 15.96 13.968 15.96 13.44 15.432L12.104 14.104L14 12.232L16.664 9.436C17.192 8.908 18.032 8.908 18.56 9.436L20.668 11.564C21.196 12.092 21.196 12.14 20.668 12.668Z" fill="url(#logoGradient)" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    // { name: 'Features', href: '#features' },
    // { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <LogoIcon />
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              TinyLink
            </span>
          </a>

          {/* <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600">
                {link.name}
              </a>
            ))}
          </nav> */}
          
          <div className="hidden items-center gap-4 md:flex">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-gray-900">
                <GitHubIcon />
            </a>
            <a href="#" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105">
                Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4">
            <nav className="flex flex-col gap-4">
                {/* {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:bg-gray-100 rounded-md p-2 font-medium">
                        {link.name}
                    </a>
                ))} */}
                <div className="mt-2 border-t border-gray-200 pt-4 flex flex-col gap-3">
                    <a href="#" className="w-full text-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-md">
                        Get Started
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-2 text-center rounded-full bg-gray-800 text-white px-5 py-2 text-sm font-semibold shadow-md">
                        <GitHubIcon /> GitHub
                    </a>
                </div>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;