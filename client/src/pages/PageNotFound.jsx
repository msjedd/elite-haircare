import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for doesn’t exist.</p>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default PageNotFound;
