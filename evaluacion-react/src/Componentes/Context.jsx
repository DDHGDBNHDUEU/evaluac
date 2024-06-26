import React, { useState, useEffect } from 'react';
import Card from './Card';

function Content() {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    return (
        <>
            <div>
                <button onClick={() => setCard(card < 100 ? card + 1 : card)}>+</button>
                <p >{card}</p>
                <button onClick={() => setCard(card > 0 ? card - 1 : 0)}>-</button>
            </div>
            {products.slice(0, card).map((product) => (
                <Card
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    category={product.category}
                />
            ))}
        </>
    );
}

export default Content;

