import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Login/LoginForm.jsx";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", formData);

    if (res.data.success) {
      dispatch({
        type: "SET_USER_ID",
        payload: res.data.userId,
      });
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-title">
        Welcome to Conscious Cook, where you can explore for and store recipes!
      </h1>
      <h1 className="login-message">Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
