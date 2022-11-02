import React from 'react'
import { TodoForm } from '../../ui/TodoForm'

export function EditToDoPage() {
  return (
    <TodoForm
      label='Editar Tarea'
      actionText='add'
      submitEvent={()=>console.log("Edit")}
    />
  )
}