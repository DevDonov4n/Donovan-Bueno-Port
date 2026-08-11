
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeProvider";

// PAGES

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/about' element= {<About />}></Route>
          <Route path='/projects' element= {<Projects />}></Route>
          <Route path='/contact' element= {<Contact />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
