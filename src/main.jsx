import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Toaster } from "./components/ui/sonner";
import { BrowserRouter } from "react-router-dom"; // ✅ Corrected import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <BrowserRouter> {/* ✅ Wrapped App in BrowserRouter */}
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
