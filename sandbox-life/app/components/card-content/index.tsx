import type { NextPage } from "next";
import styles from "./card-content.module.css";

const CardContent: NextPage = () => {
  return (
    <form className={styles.cardContent}>
      <div className={styles.form}>
        <div className={styles.textfield}>
          <div className={styles.input}>
            <div className={styles.content}>
              <div className={styles.label}>Email</div>
            </div>
          </div>
          <div className={styles.formhelpertext}>
            <div className={styles.helperText}>Helper text</div>
          </div>
        </div>
        <div className={styles.textfield1}>
          <div className={styles.input1}>
            <div className={styles.content1}>
              <div className={styles.label1}>Password</div>
            </div>
          </div>
          <div className={styles.formhelpertext1}>
            <div className={styles.helperText1}>Helper text</div>
          </div>
        </div>
      </div>
      <div className={styles.checkbox}>
        <div className={styles.padding}>
          <img
            className={styles.hiddenIcon}
            loading="eager"
            alt=""
            src="/-hidden.svg"
          />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.base}>
          <img className={styles.maskedIcon} alt="" src="/masked-icon.svg" />
          <div className={styles.button1}>ACTION</div>
          <img className={styles.maskedIcon1} alt="" src="/masked-icon.svg" />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.link}>
          <div className={styles.link1}>Create account</div>
          <img
            className={styles.underlineIcon}
            loading="eager"
            alt=""
            src="/underline.svg"
          />
        </div>
        <div className={styles.link2}>
          <div className={styles.link3}>Forgot password?</div>
          <img
            className={styles.underlineIcon1}
            loading="eager"
            alt=""
            src="/underline-1.svg"
          />
        </div>
      </div>
    </form>
  );
};

export default CardContent;

