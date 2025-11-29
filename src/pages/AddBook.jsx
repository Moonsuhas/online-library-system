import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

// AddBook component allows users to add a new book to the library
const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state to hold input values
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    coverUrl: '',
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation logic for required fields and rating range
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be a number between 0 and 5';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors if validation fails
      return;
    }

    // Create new book object with unique ID
    const newBook = {
      id: Date.now(),
      ...formData,
      rating: parseFloat(formData.rating),
      // Use placeholder image if cover URL not provided
      coverUrl: formData.coverUrl || `https://placehold.co/150x200?text=${encodeURIComponent(formData.title)}`,
    };

    dispatch(addBook(newBook)); // Add book to Redux store
    navigate('/books'); // Redirect to Browse Books page
  };

  return (
    <div className="add-book-page">
      <h1>Add a New Book to Your Library</h1>
      <form onSubmit={handleSubmit}>
        {/* Title input */}
        <div className="form-group">
          <label>Book Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        {/* Author input */}
        <div className="form-group">
          <label>Author Name:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>

        {/* Category selection */}
        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">-- Select a Category --</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Mystery">Mystery</option>
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        {/* Cover image URL */}
        <div className="form-group">
          <label>Cover Image URL (Optional):</label>
          <input
            type="text"
            name="coverUrl"
            value={formData.coverUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Description textarea */}
        <div className="form-group">
          <label>Book Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        {/* Rating input */}
        <div className="form-group">
          <label>Rating (0-5):</label>
          <input type="number" name="rating" step="0.1" value={formData.rating} onChange={handleChange} />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
