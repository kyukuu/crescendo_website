import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/crescendo_logo.png" alt="Crescendo Logo" width={40} height={40} className={styles.logo} />
          <span className={styles.brandName}>Crescendo</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/performances" className={styles.link}>Performances</Link>
          <Link href="/team" className={styles.link}>Team</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/feedback" className={styles.link}>Feedback</Link>
        </nav>
      </div>
    </header>
  );
}
