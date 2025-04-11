import { BrowserRouter } from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartProvider.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-dn552u3ilfm50pbn.us.auth0.com"
        clientId="5yzc0RE860Ztc2BuxREDIDp6ieyGQyE5"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Auth0Provider>
      ,
    </CartProvider>
  </BrowserRouter>
);
