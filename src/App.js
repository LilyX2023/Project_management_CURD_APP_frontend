import { Outlet } from 'react-router-dom'
import NavBar from '../src/components/navBar'
import Home from './pages/Home'
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Home />
    </div>
  )
}

export default App
