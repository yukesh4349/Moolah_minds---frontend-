import { Link } from 'react-router';
import MobileNav from './MobileNav';

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar - Hidden on Mobile */}
      <aside className="hidden md:block w-64 bg-white border-r-2 border-gray-300 p-6">
        <nav className="space-y-2">
          <Link to="/dashboard" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            Dashboard
          </Link>
          <Link to="/profile" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            Profile
          </Link>
          <Link to="/game" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            Game
          </Link>
          <Link to="/leaderboard" className="block px-4 py-3 bg-gray-800 text-white rounded">
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
            <MobileNav currentPage="leaderboard" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Leaderboard</h2>
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

        {/* Main Leaderboard Content */}
        <main className="flex-1 p-4 md:p-8 space-y-6">
          {/* Filter Tabs */}
          <div className="flex gap-2 md:gap-4">
            <button className="px-6 py-2 bg-gray-800 text-white rounded border-2 border-gray-900">
              Global
            </button>
            <button className="px-6 py-2 bg-white border-2 border-gray-300 rounded hover:bg-gray-50">
              Friends
            </button>
          </div>

          {/* Top 3 Players - Featured Cards */}
          <section>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Top Performers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 1st Place */}
              <div className="bg-white border-4 border-gray-800 rounded-lg p-4 md:p-6 text-center">
                <div className="w-16 h-16 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 mb-3">
                  <span className="text-2xl">🥇</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">1</div>
                <p className="font-bold text-gray-900 text-lg">Alex Chen</p>
                <p className="text-gray-600 text-sm mb-3">Level 12 Investor</p>
                <div className="pt-4 border-t-2 border-gray-300">
                  <p className="text-sm text-gray-600">Net Worth</p>
                  <p className="text-2xl font-bold text-gray-900">$45,200</p>
                </div>
              </div>

              {/* 2nd Place */}
              <div className="bg-white border-4 border-gray-600 rounded-lg p-4 md:p-6 text-center">
                <div className="w-16 h-16 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 mb-3">
                  <span className="text-2xl">🥈</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">2</div>
                <p className="font-bold text-gray-900 text-lg">Maria Garcia</p>
                <p className="text-gray-600 text-sm mb-3">Level 11 Saver</p>
                <div className="pt-4 border-t-2 border-gray-300">
                  <p className="text-sm text-gray-600">Net Worth</p>
                  <p className="text-2xl font-bold text-gray-900">$42,800</p>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="bg-white border-4 border-gray-400 rounded-lg p-4 md:p-6 text-center">
                <div className="w-16 h-16 mx-auto border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 mb-3">
                  <span className="text-2xl">🥉</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">3</div>
                <p className="font-bold text-gray-900 text-lg">You</p>
                <p className="text-gray-600 text-sm mb-3">Level 10 Planner</p>
                <div className="pt-4 border-t-2 border-gray-300">
                  <p className="text-sm text-gray-600">Net Worth</p>
                  <p className="text-2xl font-bold text-gray-900">$38,040</p>
                </div>
              </div>
            </div>
          </section>

          {/* Full Rankings Table */}
          <section>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Full Rankings</h3>
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 border-b-2 border-gray-300 px-6 py-3">
                <div className="col-span-1 font-bold text-gray-900 text-sm">Rank</div>
                <div className="col-span-5 font-bold text-gray-900 text-sm">Player</div>
                <div className="col-span-3 font-bold text-gray-900 text-sm">Level</div>
                <div className="col-span-3 font-bold text-gray-900 text-sm text-right">Net Worth</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y-2 divide-gray-200">
                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">1</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-medium text-gray-900 block">Alex Chen</span>
                      <span className="md:hidden text-xs text-gray-600">Level 12</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 12</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$45,200</div>
                </div>

                {/* Remaining rows with mobile-responsive layout */}
                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">2</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-medium text-gray-900 block">Maria Garcia</span>
                      <span className="md:hidden text-xs text-gray-600">Level 11</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 11</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$42,800</div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center bg-gray-50">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">3</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-bold text-gray-900 block">You</span>
                      <span className="md:hidden text-xs text-gray-600">Level 10</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 10</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$38,040</div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">4</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-medium text-gray-900 block">John Smith</span>
                      <span className="md:hidden text-xs text-gray-600">Level 9</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 9</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$35,600</div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">5</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-medium text-gray-900 block">Emma Wilson</span>
                      <span className="md:hidden text-xs text-gray-600">Level 9</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 9</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$32,100</div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">6</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-medium text-gray-900 block">David Lee</span>
                      <span className="md:hidden text-xs text-gray-600">Level 8</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 8</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$28,500</div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">7</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-medium text-gray-900 block">Sarah Johnson</span>
                      <span className="md:hidden text-xs text-gray-600">Level 8</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 8</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$25,300</div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 items-center">
                  <div className="col-span-2 md:col-span-1 font-bold text-gray-900">8</div>
                  <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                    <div>
                      <span className="font-medium text-gray-900 block">Michael Brown</span>
                      <span className="md:hidden text-xs text-gray-600">Level 7</span>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-3 text-gray-600 text-sm">Level 7</div>
                  <div className="col-span-12 md:col-span-3 text-left md:text-right font-bold text-gray-900">$22,800</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
