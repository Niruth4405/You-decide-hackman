import React from 'react'
import CreateNlogs from './components/CreateNlogs'
import AddSingleLogEntry from './components/AddSingleLogEntry'
const ClientMain = () => {
  return (
    <div >
      <AddSingleLogEntry/>
      <CreateNlogs/>
    </div>
  )
}

export default ClientMain
