import axios from 'axios';

const url:string = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});
const logTodo = (id, title, completed) => {
    console.log(`
         The Todo with id ${id}
         Has a title "${title}"
         Is it finished? ${completed}
    `);
};
