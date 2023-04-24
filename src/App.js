
import './App.scss';
import {FaHome} from 'react-icons/fa'

function App() {
  return (
  <div className='container'>
    <header className='header'>
      <span>
        <FaHome />
      </span>
      <div>CC-Todoist</div>
      </header>

    <aside className='sidebar'>Sidebar</aside>

    <main className='content'>Content</main>
  </div>
  )
}

export default App;
