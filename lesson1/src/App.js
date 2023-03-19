import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import NavBar from './components/navBar/NavBar';
import BlogsPage from './pages/blogsPage/BlogsPage';
import InfoPage from './pages/infoPage/InfoPage';
import UserPage from './pages/userPage/UserPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route  index element={<MainPage/>}/>
            <Route  path='about' element={<AboutPage/>}/>
            <Route  path='blogs' element={<BlogsPage/>}/>
            <Route  path='info' element={<InfoPage/>}/>
            <Route  path='user' element={<UserPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
