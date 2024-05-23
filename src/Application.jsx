import { useCollection } from "./hooks/useCollection.js";
import { useWishlist } from "./hooks/useWishList.js";
import { Outlet } from "react-router-dom";
import { useNotifications } from "./hooks/useNotifications.js";
import { Notifications } from "./components/Notifications";

export const Application = () => {
  const { addNotification, notifications } = useNotifications();
  const { collection, toggleCollection } = useCollection(addNotification);
  const { wishlist, toggleWishlist } = useWishlist(addNotification);
  return (
    <>
      <div className="wrapper">
        <Outlet
          context={{
            collection,
            wishlist,
            toggleCollection,
            toggleWishlist,
          }}
        />
        <Notifications notifications={notifications} />
      </div>
    </>
  );
};
