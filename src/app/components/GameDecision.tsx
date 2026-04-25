import { Link } from 'react-router';

export default function GameDecision() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="bg-white border-b-2 border-gray-300 px-4 md:px-8 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-gray-900 hover:underline text-sm md:text-base">← Back</Link>
        <h2 className="text-base md:text-xl font-bold text-gray-900">Week 12</h2>
        <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100">
          <span className="text-gray-400 text-xs">👤</span>
        </div>
      </header>

      <div className="p-4 md:p-8 flex flex-col lg:flex-row gap-6">
        {/* Main Decision Area */}
        <div className="flex-1 space-y-6">
          {/* Scenario */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">This Week's Situation</h3>
            <p className="text-gray-700">
              You have some extra time this week. Your manager offered overtime hours, but you've also
              been thinking about taking that online course to improve your skills. Your friends invited
              you to a concert, and the stock market seems stable. What will you do?
            </p>
          </div>

          {/* Decision Cards */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Choose Your Action</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <button className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6 hover:border-gray-800 hover:bg-gray-50 transition-all text-left">
                <div className="w-12 h-12 border-2 border-gray-400 rounded bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Work Overtime</h4>
                <p className="text-sm text-gray-600">
                  Earn extra income this week but sacrifice personal time
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">+ $400 income</p>
                  <p className="text-sm text-gray-700">- Energy</p>
                </div>
              </button>

              {/* Card 2 */}
              <button className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6 hover:border-gray-800 hover:bg-gray-50 transition-all text-left">
                <div className="w-12 h-12 border-2 border-gray-400 rounded bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Educate Yourself</h4>
                <p className="text-sm text-gray-600">
                  Invest in a professional development course
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">- $200 expense</p>
                  <p className="text-sm text-gray-700">+ Career progress</p>
                </div>
              </button>

              {/* Card 3 */}
              <button className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6 hover:border-gray-800 hover:bg-gray-50 transition-all text-left">
                <div className="w-12 h-12 border-2 border-gray-400 rounded bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎉</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Treat Yourself</h4>
                <p className="text-sm text-gray-600">
                  Go to the concert and enjoy life experiences
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">- $150 expense</p>
                  <p className="text-sm text-gray-700">+ Happiness</p>
                </div>
              </button>

              {/* Card 4 */}
              <button className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6 hover:border-gray-800 hover:bg-gray-50 transition-all text-left">
                <div className="w-12 h-12 border-2 border-gray-400 rounded bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Invest Money</h4>
                <p className="text-sm text-gray-600">
                  Put funds into your investment portfolio
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">- $300 investment</p>
                  <p className="text-sm text-gray-700">+ Portfolio growth</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-80 space-y-6">
          {/* Random Events */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
            <h3 className="font-bold text-gray-900 mb-4">Random Life Events</h3>
            <div className="space-y-3">
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">Market Update</p>
                <p className="text-xs text-gray-600 mt-1">Tech stocks up 3% this week</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">News Flash</p>
                <p className="text-xs text-gray-600 mt-1">Interest rates remain stable</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Weather Alert</p>
                <p className="text-xs text-gray-600 mt-1">Potential storm this weekend</p>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 md:p-6">
            <h3 className="font-bold text-gray-900 mb-4">Leaderboard</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">1.</span>
                  <span className="text-sm">Alex Chen</span>
                </div>
                <span className="text-sm font-bold text-gray-900">$45,200</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">2.</span>
                  <span className="text-sm">Maria Garcia</span>
                </div>
                <span className="text-sm font-bold text-gray-900">$42,800</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-gray-200 bg-gray-100 -mx-3 px-3 py-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">3.</span>
                  <span className="text-sm font-bold">You</span>
                </div>
                <span className="text-sm font-bold text-gray-900">$38,040</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">4.</span>
                  <span className="text-sm">John Smith</span>
                </div>
                <span className="text-sm font-bold text-gray-900">$35,600</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">5.</span>
                  <span className="text-sm">Emma Wilson</span>
                </div>
                <span className="text-sm font-bold text-gray-900">$32,100</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
