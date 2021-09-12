import ReactDom from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-eu.ssl-images-amazon.com/images/I/81dQwQlmAXL._AC_UL200_SR200,200_.jpg'
    alt='Book'
  />
);

const Title = () => <h1>Rich Dad Poor Dad: What the Rich Teach...</h1>;
const Author = () => <h4>Robert T. Kiyosaki</h4>;

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
