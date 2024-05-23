import { useState } from "react";

let lastId = 0;

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  function addNotification({ message, type }) {
    const id = lastId++;
    setNotifications((notifications) => [
      ...notifications,
      { id, message, type },
    ]);
    setTimeout(() => {
      setNotifications((notifications) =>
        notifications.filter((notification) => notification.id !== id)
      );
    }, 3000);
  }

  return { notifications, addNotification };
}
