"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>About <span className="gradient-text">Crescendo</span></h1>
          <p className={styles.subtitle}>The heart and soul of music at DPS Dwarka.</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.textContent}
          >
            <h2>Our Story</h2>
            <p>
              Crescendo was founded with a simple vision: to create a space where students 
              passionate about music could come together, collaborate, and create magic. 
              Over the years, we have grown from a small group of enthusiasts into a full-fledged 
              musical powerhouse within DPS Dwarka.
            </p>
            <h2>Our Mission</h2>
            <p>
              We believe that music is a universal language that transcends boundaries. 
              Our mission is to nurture talent, provide a platform for expression, and bring 
              the joy of music to our school community through engaging performances and events.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.imageContainer}
          >
            <div className={styles.imagePlaceholder}>
              <p>Image of the club or performance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
