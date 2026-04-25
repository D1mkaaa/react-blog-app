import React, { useContext, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    if (!loginValue.trim() || !passwordValue.trim()) {
      setError("Заполните оба поля");
      return;
    }

    setError("");
    setIsLoading(true);

    // Имитация запроса к серверу
    setTimeout(() => {
      setIsAuth(true);
      localStorage.setItem("auth", "true");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
      <form onSubmit={login}>
        <MyInput
          type="text"
          placeholder="Введите логин"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <MyInput
          type="password"
          placeholder="Введите пароль"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <MyButton disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Войти"}
        </MyButton>
      </form>
    </div>
  );
};

export default Login;