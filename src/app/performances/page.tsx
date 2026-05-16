"use client";

import { motion } from "framer-motion";
import { Play, UploadCloud } from "lucide-react";
import styles from "./page.module.css";

const performances = [
  {
    id: 1,
    title: "Battle of Bands Finals",
    band: "The Mavericks",
    thumbnail: "/placeholder.jpg" // We'll use a CSS placeholder if no image
  },
  {
    id: 2,
    title: "Acoustic Cover - 'Fix You'",
    band: "Aria & Sam",
    thumbnail: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "Annual Day Opening Act",
    band: "Crescendo Ensemble",
    thumbnail: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "Jazz Night Special",
    band: "Syncopation",
    thumbnail: "/placeholder.jpg"
  }
];

export default function Performances() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Our <span className="gradient-text">Performances</span></h1>
          <p className={styles.subtitle}>Relive the magical moments created on stage.</p>
          
          <div className={styles.uploadSection}>
            <a 
              href="https://forms.gle/your-google-form-link-here" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.uploadBtn}
            >
              <UploadCloud size={20} /> Submit Your Performance (Audio/Video)
            </a>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {performances.map((perf, index) => (
            <motion.div 
              key={perf.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.videoCard}
            >
              <div className={styles.thumbnailWrapper}>
                <div className={styles.placeholderBg}></div>
                <div className={styles.playButton}>
                  <Play fill="currentColor" size={24} />
                </div>
              </div>
              <div className={styles.videoInfo}>
                <h3>{perf.title}</h3>
                <p>{perf.band}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spotify Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.spotifySection}
        >
          <h2>Listen on Spotify</h2>
          <p>Check out the official Crescendo playlist curated by our members!</p>
          <div className={styles.spotifyEmbed}>
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
