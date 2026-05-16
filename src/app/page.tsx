"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Calendar, Users, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>
              Feel the <span className={styles.gradientText}>Rhythm</span>
            </h1>
            <p className={styles.subtitle}>
              Welcome to Crescendo, the official music club of DPS Dwarka. 
              Where passion meets melody, and students find their voice.
            </p>
            <div className={styles.heroActions}>
              <Link href="/events" className={styles.primaryBtn}>
                Upcoming Events <ArrowRight size={18} />
              </Link>
              <Link href="/performances" className={styles.secondaryBtn}>
                Watch Performances
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={styles.heroImageWrapper}
          >
            <div className={styles.glowEffect}></div>
            <Image 
              src="/crescendo_logo.png" 
              alt="Crescendo Logo" 
              width={400} 
              height={400} 
              className={styles.heroImage}
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={`container ${styles.featuresContainer}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.featureCard}
          >
            <div className={styles.iconWrapper}>
              <Music size={28} />
            </div>
            <h3>Live Performances</h3>
            <p>Experience the magic of live music crafted by our talented student artists.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.featureCard}
          >
            <div className={styles.iconWrapper}>
              <Calendar size={28} />
            </div>
            <h3>Annual Events</h3>
            <p>From inter-school competitions to our flagship annual fest, we host it all.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.featureCard}
          >
            <div className={styles.iconWrapper}>
              <Users size={28} />
            </div>
            <h3>Community</h3>
            <p>Join a community of like-minded individuals who share your love for music.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
