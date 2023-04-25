import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { TodoForm } from './TodoForm';

export function TodoItem() {
    // #1 : Logic,State
    const [isCheck, setIsCheck] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const handleToggleCheck = () => {
        setIsCheck(!isCheck);
    };

	const handleOpenEditMode = () => {
		setIsEdit(true)
	}

    const handleDeleteTodo = () => {
        console.log('delete');
    };

    let checkboxStyle = isCheck ? styles.checkbox__icon__done : styles.checkbox__icon;
    let taskStyle = isCheck ? styles.done : '';
    // #2 : render
    return (
        <>
            {!isEdit ? (
                <li className={styles.todo__item__container}>
                    <div className={styles.checkbox__container} onClick={handleToggleCheck}>
                        <HiCheck className={checkboxStyle} />
                    </div>
                    <p className={taskStyle}>{`task`}</p>

                    <div className={styles.edit__icon} onClick={handleOpenEditMode}>
                        <HiPencil />
                    </div>

                    <div className={styles.delete__icon} onClick={handleDeleteTodo}>
                        <HiTrash />
                    </div>
                </li>
            ) : (
                <TodoForm 
				submitText='Edit task'  
				onSetIsShowForm={setIsEdit}
				/>
            )}
        </>
    );
}