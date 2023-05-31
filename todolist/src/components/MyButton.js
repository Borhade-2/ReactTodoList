import React from "react";

const MyButton = ({count,onClick}) => {
    return(
        <div>
            <button onClick={onClick}>Clicked {count} times</button>
        </div>
    )
}

export default MyButton;