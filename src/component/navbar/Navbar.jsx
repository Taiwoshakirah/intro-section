import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Button, Container, Dropdown } from "react-bootstrap";
import Sidebar from "./Sidebar";
import todo from "../../assets/images/icon-todo.svg";
import calen from "../../assets/images/icon-calendar.svg";
import remind from "../../assets/images/icon-reminders.svg";
import plan from "../../assets/images/icon-planning.svg";

const Navbar = () => {
  
  return (
    <div className="border-bottom bg-info">
      <Container>
        <nav>
          <div className="d-flex justify-content-between align-items-center py-4 position-relative">
            <div className="d-flex midl">
              <img src={logo} alt="" />
              <div className="w-50 d-none d-lg-flex gap-4 align-items-center ">
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    Features
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <div className="d-flex align-items-center gap-2 ">
                        <img src={todo} alt="" className="todo mb-3" />
                        <p>Todo list</p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="d-flex align-items-center gap-2 ">
                        <img src={calen} alt="" className="calender mb-3" />
                        <p>Calender</p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <div className="d-flex align-items-center gap-2 ">
                        <img src={remind} alt="" className="reminde mb-3" />
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
              </div>
            </div>
            <div className="d-none d-lg-flex gap-4 align-items-center">
              <a href="#" className="mb-0 text-decoration-none text-black">
                Login
              </a>
              <Button className="px-3 rounded-3 bg-white text-black border-black">
                Register
              </Button>
            </div>
            <Sidebar />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
