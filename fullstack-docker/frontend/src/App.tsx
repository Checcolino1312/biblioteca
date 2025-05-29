import { Routes, Route } from "react-router-dom";
import { Chatbot } from 'chatbot-widget';
import PrestitoForm from "./components/PrestitoForm";
import LibriInGiro from "./LibriInGiro"; // Usa il path corretto se sta in una cartella
import 'chatbot-widget/dist/Chatbot.css';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Routes>
        <Route path="/" element={<PrestitoForm />} />
        <Route path="/libri-in-giro" element={<LibriInGiro />} />
      </Routes>

      {/* Chatbot persistente in tutte le pagine */}
      <Chatbot apiUrl="http://localhost:5005" avatarUrl="/chatbot-avatar.png" />
    </div>
  );
}

export default App;
