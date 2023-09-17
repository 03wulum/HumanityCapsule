import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/image/ImageUpload";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="outer-container">
      <div className="container">
        <div>
          <h1>Welcome to The Humanity Capsule</h1>
        </div>
        <div>
          <h3>Your Photos</h3>
          <ImageUpload />
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/login");
              localStorage.removeItem("isLoggedIn");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
