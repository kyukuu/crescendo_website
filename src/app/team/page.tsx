"use client";

import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";
import styles from "./page.module.css";

const teamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "President & Lead Guitarist",
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    name: "Diya Patel",
    role: "Vice President & Vocals",
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    name: "Rohan Kumar",
    role: "Head of Logistics & Drums",
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    name: "Ananya Singh",
    role: "Social Media Manager",
    image: "/placeholder.jpg"
  }
];

export default function Team() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Meet the <span className="gradient-text">Team</span></h1>
          <p className={styles.subtitle}>The talented individuals behind Crescendo.</p>
        </motion.div>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.memberCard}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.placeholderBg}></div>
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialIcon}><Mail size={18} /></a>
                  <a href="#" className={styles.socialIcon}><Globe size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
