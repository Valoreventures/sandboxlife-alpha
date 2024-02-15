import type { NextPage } from "next";
import CardContent from "../components/card-content";
import styles from "./index.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.cardheader}>
          <div className={styles.content}>
            <h2 className={styles.header}>Log In</h2>
            <div className={styles.subheader}>Get started for free</div>
          </div>
          <div className={styles.iconbutton}>
            <div className={styles.icon}>
              <img
                className={styles.starsharpIcon}
                alt=""
                src="/starsharp.svg"
              />
            </div>
          </div>
        </div>
        <CardContent />
      </div>
    </div>
  );
};

export default Login;