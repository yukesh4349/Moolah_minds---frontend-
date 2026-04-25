import { Link } from 'react-router';
import MobileNav from './MobileNav';

export default function History() {
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
          <Link to="/leaderboard" className="block px-4 py-3 border border-gray-300 rounded hover:bg-gray-100">
            Leaderboard
          </Link>
          <Link to="/history" className="block px-4 py-3 bg-gray-800 text-white rounded">
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
            <MobileNav currentPage="history" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900">History</h2>
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

        {/* Main History Content */}
        <main className="flex-1 p-4 md:p-8 space-y-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button className="px-4 md:px-6 py-2 bg-gray-800 text-white rounded border-2 border-gray-900 text-sm md:text-base">
              All Activities
            </button>
            <button className="px-4 md:px-6 py-2 bg-white border-2 border-gray-300 rounded hover:bg-gray-50 text-sm md:text-base">
              Decisions
            </button>
            <button className="px-4 md:px-6 py-2 bg-white border-2 border-gray-300 rounded hover:bg-gray-50 text-sm md:text-base">
              Events
            </button>
            <div className="flex-1"></div>
            <select className="px-4 py-2 border-2 border-gray-300 rounded bg-white text-sm md:text-base">
              <option>Last 30 Days</option>
              <option>Last Week</option>
              <option>Last Month</option>
              <option>All Time</option>
            </select>
          </div>

          {/* Timeline */}
          <section className="space-y-6">
            {/* Week 12 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gray-300"></div>
                <h3 className="font-bold text-gray-900">Week 12 - April 2026</h3>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>

              <div className="space-y-3">
                {/* Decision Entry */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-5 flex gap-3 md:gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
                      <span className="text-lg md:text-xl">💼</span>
                    </div>
                    <div className="w-px h-full bg-gray-300 mt-2 hidden md:block"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 mb-2">
                          Decision
                        </span>
                        <h4 className="font-bold text-gray-900">Work Overtime</h4>
                      </div>
                      <span className="text-sm text-gray-500">Apr 21, 2026</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      You chose to work extra hours to earn additional income
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-900 font-medium">+ $400 income</span>
                      <span className="text-gray-600">• Energy decreased</span>
                    </div>
                  </div>
                </div>

                {/* Random Event Entry */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-5 flex gap-3 md:gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
                      <span className="text-lg md:text-xl">⚡</span>
                    </div>
                    <div className="w-px h-full bg-gray-300 mt-2 hidden md:block"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 mb-2">
                          Random Event
                        </span>
                        <h4 className="font-bold text-gray-900">Stock Market Rally</h4>
                      </div>
                      <span className="text-sm text-gray-500">Apr 20, 2026</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Tech stocks surged, boosting your investment portfolio
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-900 font-medium">+ $240 portfolio gain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 11 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gray-300"></div>
                <h3 className="font-bold text-gray-900">Week 11 - April 2026</h3>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>

              <div className="space-y-3">
                {/* Decision Entry */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-5 flex gap-3 md:gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
                      <span className="text-lg md:text-xl">📚</span>
                    </div>
                    <div className="w-px h-full bg-gray-300 mt-2 hidden md:block"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 mb-2">
                          Decision
                        </span>
                        <h4 className="font-bold text-gray-900">Educate Yourself</h4>
                      </div>
                      <span className="text-sm text-gray-500">Apr 14, 2026</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Enrolled in an online course to develop new professional skills
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-900 font-medium">- $200 expense</span>
                      <span className="text-gray-600">• Career progress +15%</span>
                    </div>
                  </div>
                </div>

                {/* Random Event Entry */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-5 flex gap-3 md:gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
                      <span className="text-lg md:text-xl">🚗</span>
                    </div>
                    <div className="w-px h-full bg-gray-300 mt-2 hidden md:block"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 mb-2">
                          Random Event
                        </span>
                        <h4 className="font-bold text-gray-900">Car Maintenance</h4>
                      </div>
                      <span className="text-sm text-gray-500">Apr 13, 2026</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Unexpected car repair needed for routine maintenance
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-900 font-medium">- $500 expense</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 10 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gray-300"></div>
                <h3 className="font-bold text-gray-900">Week 10 - April 2026</h3>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>

              <div className="space-y-3">
                {/* Decision Entry */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-5 flex gap-3 md:gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
                      <span className="text-lg md:text-xl">📈</span>
                    </div>
                    <div className="w-px h-full bg-gray-300 mt-2 hidden md:block"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 mb-2">
                          Decision
                        </span>
                        <h4 className="font-bold text-gray-900">Invest Money</h4>
                      </div>
                      <span className="text-sm text-gray-500">Apr 7, 2026</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Added funds to your diversified investment portfolio
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-900 font-medium">- $300 investment</span>
                      <span className="text-gray-600">• Portfolio value increased</span>
                    </div>
                  </div>
                </div>

                {/* Random Event Entry */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-5 flex gap-3 md:gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
                      <span className="text-lg md:text-xl">💵</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 mb-2">
                          Random Event
                        </span>
                        <h4 className="font-bold text-gray-900">Performance Bonus</h4>
                      </div>
                      <span className="text-sm text-gray-500">Apr 6, 2026</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Received quarterly bonus for excellent work performance
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-900 font-medium">+ $1,000 bonus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
