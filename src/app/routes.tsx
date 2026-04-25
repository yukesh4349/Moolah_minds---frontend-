import { createBrowserRouter } from 'react-router';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import GameDecision from './components/GameDecision';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import History from './components/History';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/game',
    element: <GameDecision />,
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/history',
    element: <History />,
  },
]);
