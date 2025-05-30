import { login, signup } from "./actions";
import styles from "./Login.module.css";

export default function LoginPage() {
  return (
    <div className="main">
      <div className={styles.container}>
        <div className={styles.login}>
          <h2>Credentials</h2>
          <div className={styles.credentialsContainer}>
            <div className={`${styles.credentials}`}>
              <form>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="username" required />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required />
                <button formAction={login}>Log in</button>
                <button formAction={signup}>Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
