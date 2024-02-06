import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/site/NavBar';
import Courses from './pages/Courses';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Courses />
      </div>
    </>
  );
}

export default App;
