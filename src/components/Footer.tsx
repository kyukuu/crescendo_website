import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <h2 className={styles.brandName}>Crescendo</h2>
          <p className={styles.description}>
            The official music club of DPS Dwarka. Uniting students through the power of music.
          </p>
        </div>
        <div className={styles.linksSection}>
          <h3 className={styles.linksHeading}>Quick Links</h3>
          <nav className={styles.footerNav}>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/performances">Performances</Link>
          </nav>
        </div>
        <div className={styles.linksSection}>
          <h3 className={styles.linksHeading}>Connect</h3>
          <nav className={styles.footerNav}>
            <Link href="/contact">Contact</Link>
            <Link href="/feedback">Feedback</Link>
            <a href="mailto:teamocean2009@gmail.com">teamocean2009@gmail.com</a>
          </nav>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Crescendo DPS Dwarka. All rights reserved.</p>
      </div>
    </footer>
  );
}
