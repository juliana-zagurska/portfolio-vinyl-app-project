import { useVinylList } from "./useVinylList.js";

export const useVinylById = (vinylId) => {
  const vinylList = useVinylList();

  return vinylList.find((vinyl) => vinyl.id === vinylId);
};
