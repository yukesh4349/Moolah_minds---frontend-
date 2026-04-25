import { Link } from 'react-router';
import MobileNav from './MobileNav';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar - Hidden on Mobile */}
      <aside className="hidden md:block w-64 bg-white border-r-2 border-gray-300 p-6">
        <nav className="space-y-2">
          <Link to="/dashboard" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            Dashboard
          </Link>
          <Link to="/profile" className="block px-4 py-3 bg-gray-800 text-white rounded">
            Profile
          </Link>
          <Link to="/game" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            Game
          </Link>
          <Link to="/leaderboard" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            Leaderboard
          </Link>
          <Link to="/history" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            History
          </Link>
          <Link to="/" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100 mt-8">
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white border-b-2 border-gray-300 px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <MobileNav currentPage="profile" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Profile</h2>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-xs">🔔</span>
            </div>
            <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-xs">👤</span>
            </div>
          </div>
        </header>

        {/* Main Profile Content */}
        <main className="flex-1 p-4 md:p-8 space-y-6">
          {/* Profile Header */}
          <section className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
                <span className="text-4xl">👤</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">John Doe</h3>
                <p className="text-gray-600 mb-2">john.doe@email.com</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm text-gray-700">
                    Level 10 Planner
                  </span>
                  <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm text-gray-700">
                    Member since Jan 2026
                  </span>
                </div>
              </div>
              <button className="px-6 py-2 border-2 border-gray-300 rounded hover:bg-gray-50">
                Edit Profile
              </button>
            </div>
          </section>

          {/* Financial Summary */}
          <section>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Financial Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <p className="text-sm text-gray-600 mb-2">Current Balance</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">$5,240</p>
                <p className="text-xs text-gray-500 mt-2">↑ +8% from last week</p>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <p className="text-sm text-gray-600 mb-2">Total Savings</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">$12,800</p>
                <p className="text-xs text-gray-500 mt-2">↑ +12% from last week</p>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <p className="text-sm text-gray-600 mb-2">Net Worth</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">$38,040</p>
                <p className="text-xs text-gray-500 mt-2">Rank #3 globally</p>
              </div>
            </div>
          </section>

          {/* Progress Section */}
          <section>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Progress & Achievements</h3>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6 space-y-6">
              {/* Level Progress */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-gray-900">Level 10 Progress</p>
                  <p className="text-sm text-gray-600">2,400 / 3,000 XP</p>
                </div>
                <div className="w-full h-6 border-2 border-gray-300 rounded-full overflow-hidden bg-gray-50">
                  <div className="h-full w-4/5 bg-gray-800"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">80% to Level 11</p>
              </div>

              {/* Achievements */}
              <div>
                <p className="font-medium text-gray-900 mb-3">Achievements Unlocked</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="border-2 border-gray-800 rounded-lg p-4 text-center bg-gray-50">
                    <div className="w-12 h-12 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 mb-2">
                      <span className="text-xl">🏆</span>
                    </div>
                    <p className="text-xs font-medium text-gray-900">First Save</p>
                  </div>
                  <div className="border-2 border-gray-800 rounded-lg p-4 text-center bg-gray-50">
                    <div className="w-12 h-12 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 mb-2">
                      <span className="text-xl">💰</span>
                    </div>
                    <p className="text-xs font-medium text-gray-900">$10K Saver</p>
                  </div>
                  <div className="border-2 border-gray-800 rounded-lg p-4 text-center bg-gray-50">
                    <div className="w-12 h-12 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 mb-2">
                      <span className="text-xl">📈</span>
                    </div>
                    <p className="text-xs font-medium text-gray-900">Investor</p>
                  </div>
                  <div className="border-2 border-gray-300 rounded-lg p-4 text-center bg-white opacity-50">
                    <div className="w-12 h-12 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 mb-2">
                      <span className="text-xl">🎓</span>
                    </div>
                    <p className="text-xs font-medium text-gray-600">Educated</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Summary */}
          <section>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Activity Summary</h3>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center pb-6 border-b-2 border-gray-200">
                  <p className="text-4xl font-bold text-gray-900 mb-1">24</p>
                  <p className="text-sm text-gray-600">Decisions Made</p>
                </div>
                <div className="text-center pb-6 border-b-2 border-gray-200">
                  <p className="text-4xl font-bold text-gray-900 mb-1">8</p>
                  <p className="text-sm text-gray-600">Investments</p>
                </div>
                <div className="text-center pb-6 border-b-2 border-gray-200">
                  <p className="text-4xl font-bold text-gray-900 mb-1">15</p>
                  <p className="text-sm text-gray-600">Events Handled</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">12</p>
                  <p className="text-sm text-gray-600">Weeks Played</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">5</p>
                  <p className="text-sm text-gray-600">Skills Learned</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">92%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
