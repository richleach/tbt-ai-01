import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./components/system-status.module.css";

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.loadingMain}>
          <div className={styles.loadingInner}>
            <p className={styles.loadingText}>Loading</p>
            <div className={styles.loadingBar} aria-hidden />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
