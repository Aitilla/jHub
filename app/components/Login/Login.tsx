"use client";
import styles from "./Login.module.css";
import { useEffect } from "react";
import { useSimpleFetch } from "@/app/hooks/useSimpleFetch";

const Login = () => {
  const { data, loading, error, refresh } = useSimpleFetch("/api/user");

  useEffect(() => {
    const int = setInterval(refresh, 1000 * 1000);
    return () => {
      clearInterval(int);
    };
  }, []);

  useEffect(() => {
    console.log("CALLED");

    console.log(data)
    console.log(loading);
    console.log(error);
    console.log("CALLED");
  }, [data, loading, error]);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2>Credentials</h2>
        <div className={styles.credentialsContainer}>
          <div className={`${styles.username} ${styles.credentials}`}>
            <input type="text" />
          </div>
          <div className={styles.line} />
          <div className={`${styles.password} ${styles.credentials}`}>
            <input type="password" />
          </div>
        </div>
        <h2>Login</h2>
      </div>
    </div>
  );
};

export default Login;
