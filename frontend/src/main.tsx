import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SongProvider } from "./components/context/SongContext.tsx";
import { UserProvider } from "./components/context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <SongProvider>
      <App />
    </SongProvider>
  </UserProvider>
);
