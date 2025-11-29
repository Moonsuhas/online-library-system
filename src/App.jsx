import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import './App.css';

// Wrapper component for pages with Navbar
const PageLayout = ({ children }) => {
  // Navbar is included on all valid pages except 404
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        
        {/* Browse Books */}
        <Route path="/books" element={<PageLayout><BrowseBooks /></PageLayout>} />
        <Route path="/books/:category" element={<PageLayout><BrowseBooks /></PageLayout>} />
        
        {/* Book Details */}
        <Route path="/book/:id" element={<PageLayout><BookDetails /></PageLayout>} />
        
        {/* Add New Book */}
        <Route path="/add-book" element={<PageLayout><AddBook /></PageLayout>} />
        
        {/* Catch-all 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;