import React from 'react';
import ReactStars from 'react-rating-stars-component';

// const ratingChange = (newRating) => {
//     console.log(newRating);
// };

// Book Component.
const Book = (props) => {
    const { image, title, author, price, rating } = props;

    return (
        <article className="book">
            <img className="bookImage" src={image} alt="" />
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{price}</p>
            <ReactStars classNames="bookRating"
                count={5}
                isHalf={true}
                value={rating}
                edit={false}
                size={20}
                activeColor="#ffd700"
            />
            <button className="add_to_cart">Add to Cart</button>
        </article>
    )
}

export default Book;