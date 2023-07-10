import "../App.css"

const Button = ({ symbols, handleClick }) => {
    return <div onClick={() => handleClick(symbols)} className="button">{symbols}</div>
};

export default Button;