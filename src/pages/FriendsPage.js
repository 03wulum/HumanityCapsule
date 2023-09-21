import { useNavigate } from "react-router-dom";

const FriendsPage = () => {
  const navigate = useNavigate();

  //   const handleUpload = (e) => {
  //     // const file = e.target.files[0];
  //     // Handle the file upload logic here
  //   };

  return (
    <div className="outer-container">
      <div>
        <h2>Your Friends</h2>
        <div>
          <li>DevObs</li>
          <li>DevObs</li>
          <li>DevObs</li>
          <li>DevObs</li>
          <li>DevObs</li>
        </div>
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
  );
};

export default FriendsPage;
