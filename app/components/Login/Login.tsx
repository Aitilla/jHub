import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2>Sign in</h2>
        <div className={styles.credentialsContainer}>
          <div className={`${styles.username} ${styles.credentials}`}>
            <label htmlFor="input">Username</label>
            <input type="text" />
          </div>
          <div className={styles.line} />
          <div className={`${styles.password} ${styles.credentials}`}>
            <label htmlFor="input">Password</label>
            <input type="password" />
          </div>
        </div>
        <h2>Login</h2>
      </div>
    </div>
  );
};

export default Login;
