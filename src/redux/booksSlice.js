import { createSlice } from '@reduxjs/toolkit';
// Sample book cover images
// import TGG from '../assets/img/TGG.jpg';
import Interstellar from "../assets/img/Interstellar.jpg";
import Unbroken from '../assets/img/Unbroken.jpg';
import Dune from '../assets/img/Dune.jpg';
import The_Prestige from '../assets/img/The_Prestige.jpg';
import Noah from '../assets/img/Noah.jpg';
import Inception from '../assets/img/Inception.jpg';
import Escape_from_Alcatraz from '../assets/img/Escape_from_Alcatraz.jpg';
// Initial state with some sample books
const initialState = {
  books: [
    {
      id: 1,
      title: 'Interstellar',
      author: ' Christopher Nolan and his brother Jonathan Nolan',
      category: 'Fiction',
      description: 'Fiction writing specifically has modes such as action, exposition, description, dialogue, summary, and transition.',
      rating: 8.7,
      coverUrl: Interstellar,
    },
    {
      id: 2,
      title: 'Unbroken',
      author: 'Laura Hillenbrand',
      category: 'Non-Fiction',
      description: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption is a 2010 non-fiction book by Laura Hillenbrand.',
      rating: 4.5,
      coverUrl: Unbroken,
    },
    {
      id: 3,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      description: 'Epic science fiction novel set in a distant future and interstellar society.',
      rating: 4.7,
      coverUrl: Dune,
    },
    {
      id: 4,
      title: 'The Prestige',
      author: ' Christopher and Jonathan Nolan',
      category: 'Mystery',
      description: 'Thriller followinIt has an overall positive reception, with high ratings from critics and audiences for its complex plot, strong performances, and intricate storytellingg Robert Langdon solving a murder mystery in the Louvre.',
      rating: 4.2,
      coverUrl: The_Prestige,
    },
    {
      id: 5,
      title: 'Noah',
      author: 'Darren Aronofsky and Ari Handel',
      category: 'Fiction',
      description: 'it received praise for its direction and acting, the film also generated controversy for its perceived environmentalist political messages and extensive use of extra-biblical sources for inspiration, such as the Book of Enoch.',
      rating: 5.8,
      coverUrl: Noah,
    },
    {
      id: 6,
      title: 'Inception',
      author: 'Christopher Nolan',
      category: 'Sci-Fi',
      description: 'Epic science fiction novel set in a distant future and interstellar society.',
      rating: 4.7,
      coverUrl: Inception,
    },
     {
      id: 7,
      title: 'Escape_from_Alcatraz',
      author: 'J. Campbell Bruce',
      category: 'Non-Fiction',
      description: 'A prison drama based on the true story of the June 1962 escape attempt by Frank Morris and two accomplices from the maximum-security prison. It is praised for its realistic and tense atmosphere, performances and its use of the actual Alcatraz island setting',
      rating: 4.3,
      coverUrl: Escape_from_Alcatraz,
    },
  ],
};

// Create the books slice with Redux Toolkit
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Action to add a new book to the library
    addBook: (state, action) => {
      // Add the new book at the beginning so it appears first
      state.books.unshift(action.payload);
    },
  },
});

// Export the action for adding book
export const { addBook } = booksSlice.actions;

// Export the reducer to be used in the store
export default booksSlice.reducer;
