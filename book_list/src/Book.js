import React from 'react';

// Book Component.
const Book = (props) => {
    const { image, title, author } = props;

    return (
        <article className="book">
            <img className="bookImage" src={image} alt="" />
            <h3>{title}</h3>
            <h4>{author}</h4>
        </article>
    )
}

export default Book;