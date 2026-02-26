import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import About from './page/About'
import Dashboard from './page/Dashboard'
import Header from './components/Header'
import NotFound from './page/NotFound'
import User from './page/User'
import Manage from './page/Manage'
import Analytics from './page/Analytics'
import Profile from './page/Profile'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='user' element={<User />} />
            <Route path='user/:id' element={<Profile />} />
            <Route path='manage' element={<Manage />} />
            <Route path='analytics' element={<Analytics />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

/*
1, npm create vite@latest . 
2,

*/ 
