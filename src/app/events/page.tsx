"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import styles from "./page.module.css";

// Placeholder data - this will be replaced by CMS data
const events = [
  {
    id: 1,
    title: "Annual Music Fest",
    date: "2026-08-15",
    time: "10:00 AM",
    location: "School Auditorium",
    description: "The biggest musical event of the year featuring performances from all bands.",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Inter-School Battle of Bands",
    date: "2026-09-02",
    time: "09:00 AM",
    location: "Main Ground",
    description: "Watch our top bands compete against schools from all over Delhi.",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Acoustic Evening",
    date: "2026-05-10",
    time: "04:00 PM",
    location: "Music Room",
    description: "A chill evening with acoustic performances by solo artists.",
    status: "past"
  }
];

export default function Events() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Upcoming <span className="gradient-text">Events</span></h1>
          <p className={styles.subtitle}>Join us and experience the music live.</p>
        </motion.div>

        <div className={styles.eventsList}>
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.eventCard} ${event.status === 'past' ? styles.pastEvent : ''}`}
            >
              <div className={styles.eventDateBox}>
                <span className={styles.month}>{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                <span className={styles.day}>{new Date(event.date).getDate()}</span>
              </div>
              <div className={styles.eventDetails}>
                <h2>{event.title}</h2>
                <div className={styles.metaData}>
                  <span><Clock size={16} /> {event.time}</span>
                  <span><MapPin size={16} /> {event.location}</span>
                </div>
                <p>{event.description}</p>
              </div>
              <div className={styles.eventAction}>
                {event.status === 'upcoming' ? (
                  <button className={styles.registerBtn}>Register</button>
                ) : (
                  <span className={styles.completedBadge}>Completed</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
