
import './App.scss';
import { FaHome, FaInbox, FaCalendarAlt, FaCalendar, FaChevronDown } from 'react-icons/fa'
import { Header } from './components/Header'; 
import { Sidebar } from './components/Sidebar';

function App() {
  return (
  <div className='container'>
    <Header />
    {/* <header className='header'>
      <span>
        <FaHome />
      </span>
      <div>CC-Todoist</div>
      </header> */}

    <Sidebar />
    {/* <aside className='sidebar'>
      <section className='sidebar__generic'>
        <ul className='generic__lists'>
          <li className='active'>
            <span>
              <FaInbox />
            </span>
            <h6>Inbox</h6>
          </li>
          <li>
            <span>
              <FaCalendar />
            </span>
            <h6>Today</h6>
          </li>
          <li>
            <span>
              <FaCalendarAlt />
            </span>
            <h6>Next 7 days</h6>
          </li>
          
        </ul>
      </section>
      <section className='sidebar__middle'>
        <span>
          <FaChevronDown />
        </span>
        <h6>Projects</h6>
      </section>
      <section className='sidebar__projects'>
      <ul className='generic__lists'>
          <li className=''>
            <span>
              <FaInbox />
            </span>
            <h6>Project-A</h6>
          </li>
          <li>
            <span>
              <FaInbox />
            </span>
            <h6>Project-B</h6>
          </li>
          
        </ul>
      </section>
    </aside> */}

    <main className='content'>Content</main>
  </div>
  )
}

export default App;
