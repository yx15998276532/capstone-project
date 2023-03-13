import React, { useEffect, useState } from "react";
import imageData from "./imageData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setAllPhotos(imageData);
  }, []);
  function toggleFavorite(id) {
    const updateArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(!photo.isFavorited);
        return { ...photo, isFavorited: !photo.isFavorited };
      }
      return photo;
    });
    setAllPhotos(updateArr);
  }
  function addToCart(newItems) {
    setCartItems((prevItems) => [...prevItems, newItems]);
  }

  function removeFormCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFormCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
