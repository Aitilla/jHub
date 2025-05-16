import styles from "./Login.module.css";
import Link from "next/link";

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
        <Link href={"/pages/ruter"} >Login</Link>
      </div>
    </div>
  );
};

export default Login;
