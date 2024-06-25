import PropTypes from 'prop-types';

export const UserRow = ({id, userName, email}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td><button type="button" className="btn btn-success btn-sm">Update</button></td>
            <td><button className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
    );
}

UserRow.propTypes = {
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}