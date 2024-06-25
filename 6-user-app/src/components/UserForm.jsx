import { useState } from "react";
const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

export const UserForm = () => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email } = userForm;

    const oninputChange = ({ target }) => {
        const {name, value} = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(!username || !password || !email){
            alert('Debe rellenar los todos los campos del formulario');
        }
        setUserForm(initialUserForm);
    }

    return (<>
        <h2>User Form</h2>
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={oninputChange} />
            <input
                className="form-control my-3 w-75"
                placeholder="Password" 
                name="password"
                onChange={oninputChange}
                value={password}
                type="password" />
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                onChange={oninputChange}
                value={email}
                name="email" />
            <button
                type="submit"
                className="btn btn-primary">Register</button>
        </form>
    </>);
}