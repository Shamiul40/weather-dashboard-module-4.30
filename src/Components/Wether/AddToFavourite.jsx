import React, { useContext } from "react";
import heart from "../../assets/heart.svg"
import { FavouritesContext } from "../../Context";

export default function AddToFavourite() {
  const {fav} =useContext(FavouritesContext)
  return (
    <div class="flex items-center justify-end space-x-6">
      <button class="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
        <span>Add to Favourite</span>
        <img src={heart} alt="" />
      </button>
    </div>
  );
}
