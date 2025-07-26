
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Inquiries from './pages/Inquiries';
import MyPage from './pages/MyPage';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/inquiries" element={<Inquiries />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
