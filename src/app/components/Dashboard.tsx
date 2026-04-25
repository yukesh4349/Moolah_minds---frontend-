import { Link } from 'react-router';
import MobileNav from './MobileNav';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar - Hidden on Mobile */}
      <aside className="hidden md:block w-64 bg-white border-r-2 border-gray-300 p-6">
        <nav className="space-y-2">
          <Link to="/dashboard" className="block px-4 py-3 bg-gray-800 text-white rounded">
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
            <MobileNav currentPage="dashboard" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Dashboard</h2>
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

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 md:p-8 space-y-6">
          {/* Financial Overview */}
          <section>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Financial Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <p className="text-sm text-gray-600 mb-2">Cash Balance</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">$5,240</p>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <p className="text-sm text-gray-600 mb-2">Savings</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">$12,800</p>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <p className="text-sm text-gray-600 mb-2">Weekly Cash Flow</p>
                <div className="h-16 border-2 border-gray-300 rounded bg-gray-50 flex items-center justify-center mt-2">
                  <span className="text-xs text-gray-400">CHART</span>
                </div>
              </div>
            </div>
          </section>

          {/* Career & Investment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Career Section */}
            <section>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Career</h3>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Job Title</p>
                  <p className="text-xl font-bold text-gray-900">Junior Developer</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Salary</p>
                  <p className="text-xl font-bold text-gray-900">$3,200/month</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Progress</p>
                  <div className="w-full h-4 border-2 border-gray-300 rounded-full overflow-hidden bg-gray-50">
                    <div className="h-full w-3/5 bg-gray-800"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">60% to next promotion</p>
                </div>
              </div>
            </section>

            {/* Investment Section */}
            <section>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Investment Portfolio</h3>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <div className="w-full h-48 border-2 border-gray-300 rounded-full flex items-center justify-center bg-gray-50">
                  <span className="text-xs text-gray-400">PIE CHART</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Stocks</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bonds</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cash</span>
                    <span className="font-medium">30%</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Events Section */}
          <section>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Recent Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <h4 className="font-bold text-gray-900 mb-3">Past Events</h4>
                <ul className="space-y-2 text-sm">
                  <li className="pb-2 border-b border-gray-200">Car maintenance - $500</li>
                  <li className="pb-2 border-b border-gray-200">Bonus received + $1,000</li>
                  <li className="pb-2">Health checkup - $150</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <h4 className="font-bold text-gray-900 mb-3">Latest Events</h4>
                <ul className="space-y-2 text-sm">
                  <li className="pb-2 border-b border-gray-200">Friend's wedding invitation</li>
                  <li className="pb-2 border-b border-gray-200">Stock market rally +5%</li>
                  <li className="pb-2">New skill course available</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Start Game Button */}
          <div className="flex justify-center pt-4">
            <Link to="/game">
              <button className="px-8 py-3 bg-gray-800 text-white rounded border-2 border-gray-900 hover:bg-gray-700 transition-colors">
                Start Weekly Decision
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
