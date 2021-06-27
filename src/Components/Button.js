import "./Button.css";

function Button(props){
    return(
        <div>
            <button
                className={props.className || "button btn-primary btn_lib"}
                onClick={props.onClick}
                type={props.type || "button"}>
                    {props.children}
            </button>
        </div>
    );
};
export default Button;