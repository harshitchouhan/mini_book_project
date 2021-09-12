import ReactDom from 'react-dom';

// CSS
import './index.css';

import { data } from './books';
import Book from './Book';

function BookList() {
  return (
    <section>
      <h1 className='heading'>Favourite Books</h1>
      <div className='booklist'>
        {data.map((book, index) => {
          return <Book key={index} {...book}></Book>;
        })}
      </div>
    </section>
  );
}

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
