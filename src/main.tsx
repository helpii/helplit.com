import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

import { AuthorContextProvider } from "./contexts/AuthorContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <AuthorContextProvider>
        <Toaster position="top-center" />
        <App />
      </AuthorContextProvider>
    </>
  </React.StrictMode>
);
