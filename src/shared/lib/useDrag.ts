import { useState } from 'react'
import { Task } from '@/entities/task/types'

export function useDrag() {
  const [draggedTask, setDraggedTask] = useState<Task | null>(null)

  const onDragStart = (task: Task) => {
    setDraggedTask(task)
  }

  const onDragEnd = () => {
    setDraggedTask(null)
  }

  return { draggedTask, onDragStart, onDragEnd }
}
