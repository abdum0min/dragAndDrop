import { GetServerSideProps } from 'next'
import { getTasks } from '@/shared/api/taskApi'
import { mapTask } from '@/shared/lib/mapTask'
import { Task } from '@/entities/task/types'
import { TaskColumn } from '@/widgets/board/ui/Column'
import { useState } from 'react'


interface Props {
  tasks: Task[]
}

export default function HomePage({ tasks: initialTasks }: Props) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleDrop = (taskId: number, newStatus: Task['status']) => {
    setTasks(prev =>
      prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t)
    )
  }

  const todo = tasks.filter(t => t.status === 'todo')
  const inProgress = tasks.filter(t => t.status === 'in-progress')
  const done = tasks.filter(t => t.status === 'done')

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
      <TaskColumn title="To Do" tasks={todo} color="#ff6363" onDrop={id => handleDrop(id, 'todo')} />
      <TaskColumn title="In Progress" tasks={inProgress} color="#ffcb57" onDrop={id => handleDrop(id, 'in-progress')} />
      <TaskColumn title="Done" tasks={done} color="#57d97d" onDrop={id => handleDrop(id, 'done')} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const rawTasks = await getTasks()
  console.log(rawTasks)
  const tasks = rawTasks.map(mapTask)
  return { props: { tasks } }
}

