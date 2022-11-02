import React from 'react'
import { useParams } from 'react-router-dom'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../useTodos'

export function EditToDoPage() {
  const id = Number(useParams().id)
  const {stateUpdaters} = useTodos()
  const {editTodo} = stateUpdaters
  return (
    <TodoForm
      label='Editar Tarea'
      actionText='add'
      submitEvent={(newText)=>editTodo(id,newText)}
      text="BLABLABLA"
    />
  )
}