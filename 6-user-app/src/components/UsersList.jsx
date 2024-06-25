import PropTypes from 'prop-types';
import { UserRow } from './UserRow';

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
                    users.map(({id,userName,email}) => (<UserRow key={id} id={id} userName={userName} email={email}/>))
                }
            </tbody>
        </table>
    );
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
}