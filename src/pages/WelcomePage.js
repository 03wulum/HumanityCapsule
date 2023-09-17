import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleUpload = (e) => {
    // const file = e.target.files[0];
    // Handle the file upload logic here
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div>
          <h1>Welcome to The Humanity Capsule</h1>
        </div>
        <div>
          <input type="file" onChange={handleUpload} />
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
