import React from "react";

function Card({ title, image, category }) {
    return (
        <>
        <div className="card">
        <h4>{title}</h4>
        <img src={image} alt={title} />
        <h5>{category}</h5>
        </div>
            
        </>
    );
}

export default Card;
