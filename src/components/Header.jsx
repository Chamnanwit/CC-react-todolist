import { FaHome } from 'react-icons/fa';
import {getFormattedDate} from '../../src/utils/DateUtils'

export function Header () {
    return (
        <header className='header'>
            <span>
                <FaHome />
            </span>
        <div>CC-Todoist by MooJobs.</div>
      </header>
    )
}