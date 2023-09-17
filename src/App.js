import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import FriendsPage from "./pages/FriendsPage";
import RouteGuard from "./components/auth/RouteGuard";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/welcome"
          element={
            <RouteGuard>
              <WelcomePage />
            </RouteGuard>
          }
        />
        <Route
          path="/friends"
          element={
            <RouteGuard>
              <FriendsPage />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
