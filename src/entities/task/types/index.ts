export type Task = {
  id: number
  title: string
  description?: string
  completed: boolean
  status: 'todo' | 'in-progress' | 'done'
  date?: string
  image?: string
  color?: 'red' | 'yellow' | 'purple' | 'green' | 'blue' | 'gray'
  reactions?: string[] 
  avatars?: string[] 
}