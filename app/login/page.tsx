"use client";

import { login, signup, auth } from "./actions";
import { useRouter } from "next/navigation";
import styles from "./Login.module.css";
import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const router = useRouter();

  async function handleAction(formData: FormData) {
    formData.set("mode", mode);
    const result = await auth(formData);
    if (result.success) {
      router.replace("/");
    } else {
      console.log(`${mode} failed`);
    }
  }

  return (
    <div className="main">
      <div className={styles.container}>
        <div className={styles.login}>
          <h2>{mode === "login" ? "Log In" : "Sign Up"}</h2>
          <div className={styles.credentialsContainer}>
            <div className={`${styles.credentials}`}>
              <form action={handleAction}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="username" required />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required />

                <button type="submit">
                  {mode === "login" ? "Log In" : "Sign Up"}
                </button>

                <button
                  onClick={() => setMode(mode === "login" ? "signup" : "login")}
                >
                  Switch to {mode === "login" ? "Sign Up" : "Log In"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
