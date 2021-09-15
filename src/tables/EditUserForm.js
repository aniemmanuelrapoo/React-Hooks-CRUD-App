import React, { useEffect, useState } from 'react'

const EditUserForm = (props) => {
    const { currentUser, updateUser, setEditing } = props
    
    const [user, setUser] = useState(currentUser)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]:value })
    }
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                updateUser(user.id, user)
            }}
        >
            <label>Name</label>
            <input type="text" name='name' value={user.name} onChange={handleInputChange} />

            <label>Username</label>
            <input type="text" name='username' value={user.username} onChange={handleInputChange} />

            <button>Update User</button>
            <button onClick={() => setEditing(false)}>Cancle</button>
        </form>
    )
}

export default EditUserForm
