import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => (_jsx("nav", { className: "navbar", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/libri-in-giro", children: "Libri in giro" }) }), _jsx("li", { children: _jsx(Link, { to: "/registra-prestito", children: "Registra un prestito" }) })] }) }));
export default Navbar;
