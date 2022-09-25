import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/users/usersSelectors';
import { deleteUsers, toggleStatus } from 'redux/users/usersSlice';
import Avatar from 'react-avatar';

export const HomePage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const onDeleteUser = id => {
    dispatch(deleteUsers(id));
  };

  const onToggleStatus = id => {
    dispatch(toggleStatus(id));
  };

  return (
    <>
      <h1>Home</h1>

      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>avatar</th>
              <th>name</th>
              <th>age</th>
              <th>status</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, age, avatar, status }, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <Avatar round={true} size={40} name={avatar} />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  <span onClick={() => onToggleStatus(id)}>
                    {status === 'yes' ? 'online' : 'offline'}
                  </span>
                </td>
                <td>
                  <button type="button" onClick={() => onDeleteUser(id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
