import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleUpload = (e) => {
    // const file = e.target.files[0];
    // Handle the file upload logic here
  };

  return (
    <div>
      <h2>Welcome</h2>
      <input type="file" onChange={handleUpload} />
      <button onClick={() => navigate("/login")}>Logout</button>
    </div>
  );
};

export default WelcomePage;
