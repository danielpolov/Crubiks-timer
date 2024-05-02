import Container from 'react-bootstrap/Container';
import NavigationBar from './Components/NavigationBar';
import LearnPage from './Pages/LearnPage';
import HomePage from './Pages/HomePage';
import DisplayPage from './Pages/DisplayPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/NavigationBar.css';

function App() {
  return (
    <Container className='app_body'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<HomePage />} />
            <Route path='/learn' element={<LearnPage />} />
            <Route path='/playsolo' element={<DisplayPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
