import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TinyLink. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;