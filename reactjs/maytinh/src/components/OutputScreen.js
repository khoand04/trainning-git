import "../App.css"

const Input =({text, result}) => {
    return (
        <div className="input">
            <div className="text">
                {text}
            </div>
            <div className="result">
                {result}
            </div>
        </div>
    );
};

export default Input;