import { Card, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBank } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

const SideNav = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column mt-5 pt-3">
            <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-center">
                        <BsBank className="m-2" />
                        <Link to="/" className="nav-item">
                            All Banks
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                        <GrFavorite className="m-2" />
                        <Link to="/favorites" className="nav-item">
                            Favorites
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Nav>
    );
};

export default SideNav;
