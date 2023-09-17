import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import FriendsPage from "./pages/FriendsPage";
import RouteGuard from "./components/auth/RouteGuard";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
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
      </Routes>
    </Router>
  );
}
