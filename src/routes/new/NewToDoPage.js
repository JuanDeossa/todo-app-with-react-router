import React from 'react'
import { TodoForm } from '../../ui/TodoForm'

export function NewToDoPage() {
  return (
    <TodoForm
      label='Añadir Tarea'
      actionText='add'
      submitEvent={()=>console.log("Added")}
    />
  )
}
