import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import PrestitoForm from "./components/PrestitoForm";
import LibriInGiro from "./LibriInGiro"; // Usa il path corretto se sta in una cartella
function App() {
    return (_jsx("div", { style: { padding: "2rem" }, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(PrestitoForm, {}) }), _jsx(Route, { path: "/libri-in-giro", element: _jsx(LibriInGiro, {}) })] }) }));
}
export default App;
