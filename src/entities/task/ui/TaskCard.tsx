import React from 'react'
import styles from './TaskCard.module.scss'
import { Task } from '@/entities/task/types'
import Image from 'next/image'

interface Props {
  task: Task
}

export const TaskCard: React.FC<Props> = ({ task }) => {
  return (
        <div
        className={`${styles.card}`}
        draggable
        onDragStart={(e) => e.dataTransfer.setData('taskId', task.id.toString())}
        >
      {task.image && (
        <div className={styles.imageWrapper}>
          <Image src={task.image} alt={task.title} fill />
        </div>
      )}

        <div className={styles.content}>
            <div className={styles.footer}>
                <h4 className={styles.title}>{task.title}</h4>
                <div className={styles.reactions}>
                    {task.reactions?.map((emoji, i) => (
                    <span key={i}>{emoji}</span>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <p className={styles.date}>{task.date}</p>        
                <div className={styles.avatars}>
                    {task.avatars?.map((url, i) => (
                    <Image key={i} src={url} alt="avatar" width={40} height={40} className={styles.avatar} />
                    ))}
                </div>
            </div>
            <div className={`${styles.precentage} ${task.status === 'todo' && styles.start} ${task.status === 'in-progress' && styles.middle}  ${task.status === 'done' && styles.end}`}></div>
        </div>
    </div>
  )
}