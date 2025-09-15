import React from 'react'


const DisplayData = () => {
    const nama = "John Doe"
    const user = {
        name : "John Doe",
        age : 20,
        Job : "Engineer"
    }
    return <>
        <h1>Hello my name is {user.name}, my age {user.age}, my job is {user.Job}</h1>
    </>
}

export default DisplayData