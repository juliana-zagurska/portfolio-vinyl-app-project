import { useState } from "react";

export const useVinylDialog = () => {
  const [openedVinylId, setOpenedVinylId] = useState(null);

  const handleOpenVinylDialog = (vinylId) => {
    setOpenedVinylId(vinylId);
  };

  const handleCloseVinylDialog = () => {
    setOpenedVinylId(null);
  };

  return { openedVinylId, handleOpenVinylDialog, handleCloseVinylDialog };
};
