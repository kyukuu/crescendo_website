"use client";

import { motion } from "framer-motion";
import { MessageSquareHeart } from "lucide-react";
import styles from "./page.module.css";

export default function Feedback() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Your <span className="gradient-text">Feedback</span></h1>
          <p className={styles.subtitle}>Help us improve our events and performances by sharing your thoughts.</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.formContainer}
          >
            <div className={styles.iconHeader}>
              <MessageSquareHeart size={32} />
              <h2>We value your opinion</h2>
            </div>
            
            <form action="https://formsubmit.co/teamocean2009@gmail.com" method="POST" className={styles.form}>
              <input type="hidden" name="_subject" value="New Feedback Submission - Crescendo" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name (Optional)</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="role">I am a...</label>
                  <select id="role" name="role" required className={styles.select}>
                    <option value="" disabled selected>Select your role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    <option value="alumni">Alumni</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="event">Which event are you providing feedback for?</label>
                <input type="text" id="event" name="event" placeholder="e.g. Annual Fest 2026" />
              </div>

              <div className={styles.formGroup}>
                <label>How would you rate your experience?</label>
                <div className={styles.radioGroup}>
                  <label><input type="radio" name="rating" value="Excellent" required /> Excellent</label>
                  <label><input type="radio" name="rating" value="Good" /> Good</label>
                  <label><input type="radio" name="rating" value="Average" /> Average</label>
                  <label><input type="radio" name="rating" value="Poor" /> Poor</label>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="feedback">Your detailed feedback</label>
                <textarea id="feedback" name="feedback" rows={6} required placeholder="Tell us what you loved and what we can do better..."></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>Submit Feedback</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
