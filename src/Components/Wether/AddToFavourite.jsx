import React, { useContext, useState } from "react";
import heart from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg";
import { FavouritesContext, WeatherContext } from "../../Context";

export default function AddToFavourite() {
  const [isFavourite, setIsFavourite] = useState(false);

  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouritesContext);

  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addFavourites(latitude, longitude, location);
    } else {
      removeFavourites(location);
    }

    setIsFavourite(!isFavourite);
  };

  return (
    <div class="flex items-center justify-end space-x-6">
      <button
        class="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        onClick={handleFavourite}
      >
        <span>Add to Favourite</span>
        <img src={isFavourite ? redHeart : heart} alt="" />
      </button>
    </div>
  );
}
