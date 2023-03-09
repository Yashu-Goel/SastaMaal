import Support from "../Settngs/Support";
const MyModel = ({ closeModal }) => {
    return (
      <div>
        <div className="modal-wrapper1" onClick={closeModal}></div>
        <div className="modal-container">
          <Support closeModal={closeModal}/>
        </div>
      </div>
    );
  };
  export default MyModel;
  