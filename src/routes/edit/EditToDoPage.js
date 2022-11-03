import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../useTodos'

export function EditToDoPage() {
  const id = Number(useParams().id)
  const {stateUpdaters,state} = useTodos()
  const {loading,getTodoText} = state
  const {editTodo} = stateUpdaters
  const location=useLocation()

  //
  let defaultText
  if (location?.state?.text) {
    defaultText=location?.state?.text
  }else if (loading) {
    return <p>Loading...</p>
  } else {
    defaultText=getTodoText(id)
  }

  return (
    <TodoForm
      label='Editar Tarea'
      actionText='add'
      submitEvent={(newText)=>editTodo(id,newText)}
      oldText={defaultText}
    />
  )
}