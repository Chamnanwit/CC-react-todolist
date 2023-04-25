import styles from './TodoContent.module.scss'
import { HiCheck , HiPencil , HiTrash } from 'react-icons/fa'

export function TodoContent () {
    const mockTodo = Array.from({length:50},(el,idx)=> idx+1)

    const now = new Date()
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    console.log(now.toLocaleDateString('en-US', options));
    return (
        <main className='content'>

      {/* TODO_header */}
      <div className={styles.header}>
        <h2>Inbox</h2>
        <p>{now.toLocaleDateString('en-US', options)}</p>

      {/* ADD_TODO */}
      </div>
      <div className={styles.add__todo}>
        <span>+</span>
        <h3>Add task</h3>
      </div>

      {/* TODO_from */}
      <form className={styles.todo__form__container}>
        <input className={styles.todo__form__input} placeholder='Task Name' />
        <div className={styles.todo__form__footer}>
            <p className={styles.todo__error}>Title is required</p>
            <div className={styles.todo__form__buttons}>
                <button>Cancel</button>
                <button>Add Task</button>
            </div>
        </div>
      </form>

      {/* TODO_lists */}
      <ul>
        {mockTodo.map((el)=>(
          <li className={styles.todo__item__container} key={el}>
          <div className={styles.checkbox__container}>
              <HiCheck className={styles.checkbox__icon} />
          </div>
          <p className={styles.done}>{`item-${el}`}</p>
      
          <div className={styles.edit__icon}>
              <HiPencil />
          </div>
      
          <div className={styles.delete__icon}>
              <HiTrash />
          </div>
      </li>
        ))}
      </ul>
    </main>
    );
}