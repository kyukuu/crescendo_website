"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Get in <span className="gradient-text">Touch</span></h1>
          <p className={styles.subtitle}>Have questions or want to collaborate? We'd love to hear from you.</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.contactInfo}
          >
            <h2>Contact Information</h2>
            <p>Reach out to us directly using the following details.</p>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:teamocean2009@gmail.com">teamocean2009@gmail.com</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h3>Location</h3>
                  <p>DPS Dwarka, Sector 3, Dwarka<br/>New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.formContainer}
          >
            <form action="https://formsubmit.co/teamocean2009@gmail.com" method="POST" className={styles.form}>
              {/* Optional: disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission - Crescendo" />
              
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
