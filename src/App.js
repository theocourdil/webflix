import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import About from './composants/About.js'
import Home from './composants/Home.js'
import User from './composants/User.js'
import Users from './composants/Users.js'


function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
          <Link to="/users?q=1">Utilisateurs</Link>

        </nav>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App;