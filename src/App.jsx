import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Destination from './pages/destination';
import Crew from './pages/crew';
import Technology from './pages/technology';
import NotFound from './pages/404';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id?" element={<Destination />} />
        <Route path="/crew/:id?" element={<Crew />} />
        <Route path="/technology/:id?" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
