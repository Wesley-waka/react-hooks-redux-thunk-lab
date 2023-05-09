import React from "react";

function CatList(props) {
    return (
        <div key={props.id}>
            <img src={props.catPic} alt="cat" />
        </div>
    );
}

export default CatList;
