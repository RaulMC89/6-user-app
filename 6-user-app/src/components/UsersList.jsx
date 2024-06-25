import PropTypes from 'prop-types';

export const UsersList = ({ users }) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td><button type="button" className="btn btn-success">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
}