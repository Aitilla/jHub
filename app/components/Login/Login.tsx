import styles from "./Login.module.css";

const Login = () => {
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
