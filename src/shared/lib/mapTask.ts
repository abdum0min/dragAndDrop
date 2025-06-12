import { Task } from '@/entities/task/types'

export const mapTask = (todo: any): Task => {
  return {
    id: todo.id,
    title: todo.todo,
    completed: todo.completed,
    status: todo.id % 3 === 0 ? 'done' : todo.id % 2 === 0 ? 'in-progress' : 'todo',
    date: 'SEP 28, 2021',
    color: ['red', 'yellow', 'purple', 'green'][todo.id % 4] as Task['color'],
    reactions: ['🔥', '🎯', '😍'].slice(0, todo.id % 3),
    avatars: [
      'https://i.pravatar.cc/150?img=3',
      'https://i.pravatar.cc/150?img=5',
      'https://i.pravatar.cc/150?img=8'
    ].slice(0, todo.id % 3)
  }
}
