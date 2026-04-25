import { useState } from 'react';
import { Link } from 'react-router';

interface MobileNavProps {
  currentPage: string;
}

export default function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-10 h-10 border-2 border-gray-400 rounded flex items-center justify-center bg-white"
      >
        <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white border-r-2 border-gray-300 p-6 z-50 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-900">Menu</h3>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-600">
            ✕
          </button>
        </div>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded ${
              currentPage === 'dashboard'
                ? 'bg-gray-800 text-white'
                : 'border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded ${
              currentPage === 'profile'
                ? 'bg-gray-800 text-white'
                : 'border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Profile
          </Link>
          <Link
            to="/game"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded ${
              currentPage === 'game'
                ? 'bg-gray-800 text-white'
                : 'border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Game
          </Link>
          <Link
            to="/leaderboard"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded ${
              currentPage === 'leaderboard'
                ? 'bg-gray-800 text-white'
                : 'border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Leaderboard
          </Link>
          <Link
            to="/history"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded ${
              currentPage === 'history'
                ? 'bg-gray-800 text-white'
                : 'border border-gray-300 hover:bg-gray-100'
            }`}
          >
            History
          </Link>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100 mt-8"
          >
            Logout
          </Link>
        </nav>
      </aside>
    </>
  );
}
