import Ruter from "@/app/components/Ruter/Ruter";
import styles from "@/app/components/Ruter/ruter.module.css"

const Page = () => {
  return (
    <div className={styles.ruterContainer}>
      <Ruter />
    </div>
  );
};

export default Page;
