import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const UsersApp = () => {

    const initialUsers = [
        {
            id: 1,
            userName: 'Raul89',
            password: '12345',
            email: 'rmc@gmail.com',
        },
    ];

    return (
        <div className="container my-4">
            <h2>Log In and Users App</h2>
            <div className="col">
                <div className="row">
                    <UsersList users={initialUsers}/>
                </div>
                <div className="row">
                    <UserForm />
                </div>
            </div>
        </div>
    );
}