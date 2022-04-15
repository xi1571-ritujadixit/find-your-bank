import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Link to="/">All Banks</Link>
            <Link to="/favorites">Favorites</Link>
        </Nav>
    );
};

export default SideNav;
