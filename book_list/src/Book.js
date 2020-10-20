import React from 'react';

// Book Component.
const Book = (props) => {
    const { image, title, author, price } = props;

    return (
        <article className="book">
            <img className="bookImage" src={image} alt="" />
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{price}</p>
        </article>
    )
}

export default Book;