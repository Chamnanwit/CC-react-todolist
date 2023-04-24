
import './App.scss';
import { FaHome, FaInbox, FaCalendarAlt, FaCalendar, FaChevronDown } from 'react-icons/fa'
import { Header } from './components/Header'; 
import { Sidebar } from './components/Sidebar';
import { TodoContent } from './components/Todo/TodoContent';

function App() {

  return (
  <div className='container'>
    <Header />
    <Sidebar />
    <TodoContent />
  </div>
  )
}

export default App;
