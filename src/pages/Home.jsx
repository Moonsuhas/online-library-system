import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Home component: Landing page with categories and popular books
const Home = () => {
  // List of book categories
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];
  
  // Get all books from Redux store
  const books = useSelector((state) => state.books.books);

  // Sort books by rating descending and take top 3 as popular books
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="home-page">
      {/* Welcome message */}
      <h1 className="home-title">📚 Welcome to MyLibraryCloud</h1>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore by Categories</h2>
        <ul className="categories-list">
          {categories.map((category) => (
            <li key={category} className="category-item">
              <Link to={`/books/${category}`} className="category-link">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <h2>Popular Books ⭐</h2>
        <p>Our top-rated books that readers love!</p>
        <div className="book-list">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.coverUrl} alt={book.title} className="book-cover" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By: {book.author}</p>
              <Link to={`/book/${book.id}`} className="details-link">
                View Details →
              </Link>
            </div>
          ))}
        </div>

        {/* Link to browse all books */}
        <div className="view-all-container">
          <Link to="/books" className="view-all-link">
            Browse All Books
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
