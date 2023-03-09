import React, { useState } from "react";
import MyModel from "./ShowModal";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
        {showModal && <MyModel closeModal={closeModal} />}
    </>
  );
};

export default Modal;
