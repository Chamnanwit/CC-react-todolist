import { TodoItem } from './TodoItem';

export function TodoLists({todos}) {
   
    return (
        <ul>
            {mockTodo.map((todosObj) => (
                <TodoItem  key={todosObj.id} todo={todoObj}/>
            ))}
        </ul>
    );
}
