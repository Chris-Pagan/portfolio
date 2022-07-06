import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';
import { ReorderRounded } from "@mui/icons-material";

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}> <ReorderRounded /> </button>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
