import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../index.css";

function Room({ room }) {
  const [modalShow, setModalShow] = React.useState(false);
  const imageIndex = Math.floor(Math.random() * 3);
  console.log(room.name);
  return (
    <div className="container">
      <div className="m-4 card-border">
        <div className="card">
          <div className="row g-0">
            <div className="col-sm-5">
              {console.log("Random Number:", imageIndex)}
              <img
                src={room.imageURLs[imageIndex]}
                className="card-img-top h-100"
                alt="..."
              />
            </div>
            <div className="col-sm-7">
              <div className="card-body text-left">
                <h5 className="card-title">{room.name}</h5>
                <p className="card-text">Parking, Reception, Free WiFi</p>
                <p className="card-text">
                  <strong>Capacity: </strong>
                  {room.capacity}
                </p>
                <p className="card-text">
                  <strong>Contact: </strong>
                  {room.contact}
                </p>
                <p className="card-text">
                  <strong>Room Type: </strong>
                  {room.type}
                </p>

                <div className="float-right mb-2">
                  <a
                    href="#"
                    className="btn btn-dark stretched-link"
                    onClick={() => setModalShow(true)}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VerticallyCenteredRoomModal
        room={room}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

function VerticallyCenteredRoomModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.room.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="scroll"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#scroll"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#scroll" data-slide-to="1"></li>
            <li data-target="#scroll" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                className="card-img-top h-100"
                src={props.room.imageURLs[0]}
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                className="card-img-top h-100"
                src={props.room.imageURLs[1]}
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                className="card-img-top h-100"
                src={props.room.imageURLs[2]}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#scroll"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#scroll"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <p>{props.room.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Room;
