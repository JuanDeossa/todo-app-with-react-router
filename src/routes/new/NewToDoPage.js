import React from 'react'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../useTodos'

export function NewToDoPage() {
  const {stateUpdaters} = useTodos()
  const {addTodo} = stateUpdaters
  return (
    <TodoForm
      label='Añadir Tarea'
      actionText='add'
      submitEvent={(text)=>addTodo(text)}
    />
  )
}
