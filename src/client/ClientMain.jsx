import React from 'react'
import CreateNlogs from './components/CreateNlogs'
import AddSingleLogEntry from './components/AddSingleLogEntry'
const ClientMain = () => {
  return (
    <div className='bg-blue-700'>
      <AddSingleLogEntry/>
      <CreateNlogs/>
    </div>
  )
}

export default ClientMain
