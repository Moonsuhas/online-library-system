import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// BookDetails component displays full information about a selected book
const BookDetails = () => {
  const { id } = useParams();

  // Fetch the book from Redux store by matching the ID
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  // Handle case where book is not found
  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Oops! Book not found 😕</h2>
        <p>The book you are looking for does not exist.</p>
        <Link to="/books" className="back-button">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <div className="book-details-content">
        {/* Book cover image */}
        <img
          src={book.coverUrl}
          alt={book.title}
          className="book-cover-large"
        />

        {/* Book information section */}
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Rating:</strong> {book.rating} / 5 ⭐</p>

          {/* Back button to browse page */}
          <Link to="/books" className="back-button">
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
