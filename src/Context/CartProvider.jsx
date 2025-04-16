import { createContext, useReducer } from "react";
import React from "react";
import { Bounce, toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExisting = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExisting) {
        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };

        toast.success("Product is added to cart ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return {
          items: [...state.items, newProduct],
        };
      }
    }

    case "Delete": {
      toast.success("Product is removed from cart ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      const deleteProduct = state.items.filter((item) => {
        return item.id !== action.payload;
      });

      return {
        items: deleteProduct,
      };
    }

    case "Increment": {
      console.log(action.payload);

      const increasedProduct = state.items.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
      return {
        items: increasedProduct,
      };
    }

    case "Decrement": {
      const decreaseProduct = state.items.map((item) => {
        return item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });
      return {
        items: decreaseProduct,
      };
    }

    case "ClearCart": {
      toast.success("Cart is cleared ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return {
        items: [],
      };
    }

    default: {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
