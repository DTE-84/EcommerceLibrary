import React, { useEffect, useState, useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStar, faStarHalfAlt);
const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);
  
  useEffect(() => {
    const image = new Image(); 
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    }
  })
   
  if (!book) return null;
  // 1. Setup safe variables
  const originalPrice = book?.originalPrice || 0;
  const salePrice = book?.salePrice;
  const ratingValue = book?.rating || 0;

  return (
    
    <div className="book">
      {img ?
        <>
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={img.src} alt={book.title} className="book__img"  />
        </figure>
      </Link>

      <div className="book__title">
      
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>

      <div className="book__ratings">
        
        {new Array(Math.floor(ratingValue)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
       
        {!Number.isInteger(ratingValue) && (
          <FontAwesomeIcon icon="star-half-alt" />
        )}
      </div>

      <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </span>
            <span className="book__price--sale">${salePrice.toFixed(2)}</span>
          </>
        ) : (
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      </>
      :
      <>
       <div className="book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__ratings--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div>
      </>
 
   }
    
     
    </div>
  );
};

export default Book;
