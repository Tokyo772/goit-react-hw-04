import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = () => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      {selectedImage && (
        <div>
          <img
            src={selectedImage.urls.full}
            alt={selectedImage.alt_description}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
