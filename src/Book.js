import React from 'react';

const Book = (props) => {
  const { id, img, title, author, link } = props;

  return (
    <article className='book' id={id}>
      <img src={img} alt='Book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <a href={link} target='_blank' rel='noreferrer'>
        Buy
      </a>
    </article>
  );
};

export default Book;
