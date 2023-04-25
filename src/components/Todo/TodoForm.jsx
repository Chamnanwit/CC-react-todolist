import styles from './TodoForm.module.scss';
import React, { useState } from 'react';

// TodoForm => call in 2 Mode
// Mode-1 : Add 
// Mode-2 : Edit
export function TodoForm({onSetIsShowForm,submitText, oldTask, onAddTodo}) {
    // # 1 : Logic Section
    const [task, setTask] = useState(oldTask || '');
    const [isError,setIsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate
        if(task.trim() === '') {
            setIsError(true)
            return;
        } else {
            // validate passed , execute addTodo
            onAddTodo(task) // from <TodoContent/>
        }

        // set back to normal mode
		onSetIsShowForm(false)
	
    };
    const handleClickCancel = (e) => {
        // from <AddTodo/> for Add
		// onSetIsAddMode?.(false)
        // from <TodoItem/> for Edit
        // onSetIsEditMode?.(false)

        // for Add , for Edit
        onSetIsShowForm?.(false)
	

    };

    const handleChangeInput = (e) => {
        setIsError(false)
		setTask(e.target.value)
    };

 

    // # 2 : UI-Section
    return (
        <form className={styles.todo__form__container} onSubmit={handleSubmit}>
            <input
                className={styles.todo__form__input}
                placeholder='Task Name'
                value={task}
                onChange={handleChangeInput}
            />
            <div className={styles.todo__form__footer}>
               {isError &&  <p className={styles.todo__error}>Task Name is required</p>}
                <div className={styles.todo__form__buttons}>
                    <button type='button' onClick={handleClickCancel}>
                        Cancel
                    </button>
                    <button type='submit'>{submitText}</button>
                </div>
            </div>

        </form>
    );
}
