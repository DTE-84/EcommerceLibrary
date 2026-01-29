import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../components/ui/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "../components/ui/Book";
import Rating from "../components/ui/Rating";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  const [added, setAdded] = useState(false);
  

  function addBookToCart(book) {
  setAdded(true); 
  addToCart(book);
}

  function bookExistsOnCart() {
    
    return cart.find(book => book.id === +id);
     }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/book" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/book" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <FontAwesomeIcon icon="star" className="book__selected--star" />
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                </div>
               {bookExistsOnCart() ? (
                  <Link to={'/cart'} className="book__link">
                  <button className="btn">Checkout</button> 
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    {added ? "Add to Cart" : "Add to Cart"}
                  Add to Cart
                </button>
              )} 
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books-list">
            {books
              .filter((book) => book.rating === 5 && +book.id !== +id)
              .slice(0, 4)
              .map((b) => ( <Book book={b} key={b.id} /> 
              ))}
              </div>
          </div>
        </div>
       
      </main>
    </div>
  );
};

export default BookInfo;