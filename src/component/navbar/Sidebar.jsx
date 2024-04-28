import React from "react";
import { useState } from "react";
import { Offcanvas, Dropdown } from "react-bootstrap";
import { GrMenu } from "react-icons/gr";
import {Button} from "react-bootstrap"
import todo from "../../assets/images/icon-todo.svg";
import calen from "../../assets/images/icon-calendar.svg";
import remind from "../../assets/images/icon-reminders.svg";
import plan from "../../assets/images/icon-planning.svg";


const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <GrMenu onClick={handleShow} className="d-lg-none cursor" size="30px" />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-4">
        <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  Features
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div className="d-flex align-items-center gap-2 ">
                      <img src={todo} alt=""  className="todo mb-3"/>
                      <p>Todo list</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                  <div className="d-flex align-items-center gap-2 ">
                      <img src={calen} alt=""  className="calender mb-3"/>
                      <p>Calender</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <div className="d-flex align-items-center gap-2 ">
                      <img src={remind} alt=""  className="reminde mb-3"/>
                      <p>Reminder</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <div className="d-flex align-items-center gap-2">
                    <img src={plan} alt="" className="plann mb-3" />
                    <p>Planning</p>
                  </div>
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
          <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  Company
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <p>History</p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                  <p>Our team</p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <p>Blog</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          <a className="text-decoration-none text-black" href="#">
            Career
          </a>
          <a className="text-decoration-none text-black" href="#">
            About
          </a>
          <div className="d-flex flex-column gap-3 text-center">
            <a href="#" className="mb-0 text-decoration-none text-black">
              Login
            </a>
            <Button className=" rounded-3 bg-white text-black w-75 py-2 border-black m-auto">Register</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
