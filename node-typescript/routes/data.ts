interface Todo {
  id: string
  text: string
}

let TODOS: Todo[] = []

export function addTodo(text: string) {
  const newTodo: Todo = { id: crypto.randomUUID(), text }
  TODOS.push(newTodo)
  return
}

export function getTodo(id: string) {
  const todo = TODOS.find((t) => t.id === id)
  if (!todo) throw new Error('Todo not found!')
  return todo
}

export function getTodos() {
  return TODOS
}

export function removeTodo(id: string) {
  TODOS = TODOS.filter((t) => t.id !== id)
}

export function updateTodo(id: string, text: string) {
  const todo = getTodo(id)
  todo.text = text
  return todo
}
