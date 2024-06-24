import React from "react";

function Card({ title, image, category }) {
    return (
        <>
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <h5>{category}</h5>
        </>
    );
}

export default Card;
