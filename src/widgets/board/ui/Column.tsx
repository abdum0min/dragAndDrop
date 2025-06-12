import { Task } from '@/entities/task/types'
import { TaskCard } from '@/entities/task/ui/TaskCard'
import styles from './Column.module.scss'

interface Props {
  title: string
  tasks: Task[]
  color: string
  onDrop: (taskId: number) => void
}

export const TaskColumn: React.FC<Props> = ({ title, tasks, onDrop }) => {
  return (
    <div className={styles.column}>
      <div className={styles.header} >
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.count}>{tasks.length}</span>
      </div>

      <div
        className={styles.taskList}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const taskId = Number(e.dataTransfer.getData('taskId'))
          onDrop(taskId)
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}