import React from 'react'
import NewContext from './NewContext'
import { useState } from 'react'


const Contextprovider = ({children}) => {
    
    const [name, setName] = useState(null)
  return (
    <NewContext.Provider value={{name,setName}}>
      {children}
    </NewContext.Provider>
  )
}

export default Contextprovider
