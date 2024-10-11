import React, { useContext } from 'react'
import NewContext from './NewContext'


function Check () {
    const {name}= useContext(NewContext)
    if(!name)return <><h1>Please enter your details</h1></>
    return <>Welcome {name.userName}</>
}

export default Check
