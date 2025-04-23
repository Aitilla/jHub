"use client"

import styles from "./dashboard.module.css";

const Dashboard = () => {
  const edit = () => {
    console.log("click!")
  }
  return (
    <div className={styles.dashboard}>
      <div className={`${styles.dash} ${styles.containers}`}>
        <div className={styles.jgl}></div>
      </div>
      <div className={`${styles.featured} ${styles.containers}`}>
        <button onClick={() => {edit()}}>Edit</button>
        <div className={styles.top}>
          <p>Featured 1</p>
        </div>
        <div className={styles.mid}>
          <p>Featured 2</p>
        </div>
        <div className={styles.bot}>
          <p>Featured 3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
