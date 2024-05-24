import PropTypes from "prop-types";
import styles from "./Notifications.module.css";
import { motion, AnimatePresence } from "framer-motion";

export function Notifications({ notifications = [] }) {
  return (
    <div className={styles.root}>
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className={`${styles.notification} ${
              notification.type === "error" ? styles.error : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            transition={{
              layout: {
                duration: 0.1,
              },
            }}
          >
            {notification.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};
