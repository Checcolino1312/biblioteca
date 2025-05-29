import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetLibriInGiroQuery } from './services/prestitoApi';
import './libri.css';
const LibriInGiro = () => {
    const { data: libri, isLoading, isError } = useGetLibriInGiroQuery();
    return (_jsxs("div", { className: "container", children: [_jsx("h1", { children: "\uD83D\uDCDA Libri attualmente in prestito" }), isLoading && _jsx("p", { className: "message", children: "Caricamento in corso..." }), isError && _jsx("p", { className: "message", style: { color: 'red' }, children: "Errore durante il caricamento." }), !isLoading && !isError && (libri && libri.length > 0 ? (_jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Titolo" }), _jsx("th", { children: "Autore" }), _jsx("th", { children: "Inventario" }), _jsx("th", { children: "Collocazione" })] }) }), _jsx("tbody", { children: libri.map((libro, index) => (_jsxs("tr", { children: [_jsx("td", { children: libro.titolo }), _jsx("td", { children: libro.autore }), _jsx("td", { children: libro.numeroInventario }), _jsx("td", { children: libro.collocazione })] }, index))) })] })) : (_jsx("p", { className: "message", children: "Nessun libro in prestito al momento." })))] }));
};
export default LibriInGiro;
