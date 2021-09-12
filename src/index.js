import ReactDom from 'react-dom';

// CSS
import './index.css';

const Books = [
  {
    title: 'Rich Dad Poor Dad: What the Rich Teach...',
    author: 'Robert T. Kiyosaki',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81dQwQlmAXL._AC_UL200_SR200,200_.jpg',
    link: 'https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194/ref=zg_bs_books_4?_encoding=UTF8&psc=1&refRID=GQJ74YN47W7ZPTZPZ6W2',
  },
  {
    title: `Karma: A Yogi's Guide to Crafting Your…`,
    author: 'Sadhguru',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/9167i2ioFaS._AC_UL200_SR200,200_.jpg',
    link: 'https://www.amazon.in/Karma-PUBLISHERS-BESTSELLER-spirituality-self-improvement/dp/0143452673/ref=zg_bs_books_32?_encoding=UTF8&psc=1&refRID=GQJ74YN47W7ZPTZPZ6W2',
  },
  {
    title: 'The Power of Your Subconscious Mind',
    author: 'Joseph Murphy',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL200_SR200,200_.jpg',
    link: 'https://www.amazon.in/Power-Your-Subconscious-Mind/dp/8194790832/ref=zg_bs_books_15?_encoding=UTF8&psc=1&refRID=GQJ74YN47W7ZPTZPZ6W2',
  },
  {
    title: 'The Psychology of Money – Deluxe Edition',
    author: 'Morgan Housel',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/715ucF1cMZS._AC_UL200_SR200,200_.jpg',
    link: 'https://www.amazon.in/Psychology-Money-Deluxe-Morgan-Housel/dp/9390166934/ref=zg_bs_books_18?_encoding=UTF8&psc=1&refRID=GQJ74YN47W7ZPTZPZ6W2',
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck: A…',
    author: 'Mark Manson',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/814jC%2BrODgL._AC_UL200_SR200,200_.jpg',
    link: 'https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062641549/ref=zg_bs_books_19?_encoding=UTF8&psc=1&refRID=GQJ74YN47W7ZPTZPZ6W2',
  },
  {
    title: `Life's Amazing Secrets: How to Find Balance…`,
    author: 'Gaur Gopal Das',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81yxRLBMmkL._AC_UL200_SR200,200_.jpg',
    link: 'https://www.amazon.in/Lifes-Amazing-Secrets-Balance-Purpose/dp/0143442295/ref=zg_bs_books_30?_encoding=UTF8&psc=1&refRID=GQJ74YN47W7ZPTZPZ6W2',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {Books.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, link } = props;
  return (
    <article className='book'>
      <img src={img} alt='Book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <a href={link} target='_blank' rel='noreferrer'>
        Buy
      </a>
    </article>
  );
};

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
