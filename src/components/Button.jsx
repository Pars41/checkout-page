
const Button = ({ show, handleShow }) => {
  return (
    <div className="text-center">
      <button onClick={handleShow} className="btn btn-warning mb-3 btn-lg">
        {show ? "Hide Product Bar" : "Show Product Bar"}
      </button>
    </div>
  );
};

export default Button;
