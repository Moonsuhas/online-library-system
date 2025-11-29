import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// BrowseBooks component displays a list of books with search and category filtering
const BrowseBooks = () => {
  const { category } = useParams(); // Get category from URL params
  const books = useSelector((state) => state.books.books); // Get all books from Redux store
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Filter books based on category and search term
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books-page">
      <h1 className="page-title">
        Browse Books {category ? `- ${category}` : ''}
      </h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="🔍 Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Book cards container */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="book-cover"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By: {book.author}</p>
              <p className="book-category">Category: {book.category}</p>
              <Link to={`/book/${book.id}`} className="details-link">
                View Details →
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results">No books found matching your search 😕</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
