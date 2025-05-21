import React, { useContext } from 'react';
import { my_asset } from '../../assets/asset';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/MyContextProvider';
import { Modal, Button, Form } from 'react-bootstrap';

const Navbar = () => {
  const { showModal, setShowModal } = useContext(MyContext);

  return (
    <>
      {/* Top bar */}
      <div className="container-fluid d-flex justify-content-between px-5 pt-2 pb-0 border">
        <p>Free shipping on US orders $100+ & Free exchanges</p>
        <div>
          <span>English</span>
          <span>USD</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid d-flex justify-content-between align-items-center px-5 py-3">
        <img src={my_asset.logo} alt="logo" height={30} />
        <div className="menu d-flex gap-3">
          <Link to="/" className="text-decoration-none text-dark">Home</Link>
          <Link to="/shop" className="text-decoration-none text-dark">Shop</Link>
          <Link to="/" className="text-decoration-none text-dark">Contact</Link>
        </div>
        <div className="icon d-flex gap-3">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
          ></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Search for products..." />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary">
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;