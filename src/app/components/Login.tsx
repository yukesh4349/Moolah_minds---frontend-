import { Link } from 'react-router';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md">
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 md:p-8 space-y-6">
          {/* Logo Placeholder */}
          <div className="flex justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-xs">LOGO</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Moolah Minds</h1>
            <p className="text-gray-600">Financial Literacy Simulation Game</p>
            <p className="text-sm text-gray-500 pt-2">Welcome! Please log in to continue</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded bg-white focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded bg-white focus:outline-none focus:border-gray-500"
              />
            </div>

            <Link to="/dashboard">
              <button className="w-full bg-gray-800 text-white py-3 rounded border-2 border-gray-900 hover:bg-gray-700 transition-colors">
                Login
              </button>
            </Link>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-gray-900 underline font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
