import { HashRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav';
import HomePage from './components/pages/HomePage';
import SkillsPage from './components/pages/SkillsPage';
import StudiesPage from './components/pages/StudiesPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ContactMePage from './components/pages/ContactMePage'

import './App.css'
import './myStyles.css'

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/skills' element={<SkillsPage />}/>
        <Route path='/studies' element={<StudiesPage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/contact-me' element={<ContactMePage />}/>
        </Routes>

    </div>
  );
}

export default App;
