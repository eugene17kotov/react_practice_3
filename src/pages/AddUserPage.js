import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from 'redux/users/usersSlice';

import { nanoid } from 'nanoid';
import { getStatus } from 'services/api';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const onSubmitForm = async e => {
    e.preventDefault();

    const status = await getStatus();

    const newUser = {
      id: nanoid(),
      name,
      age,
      avatar: name,
      status,
    };

    dispatch(addUsers(newUser));

    setName('');
    setAge('');
  };

  const onInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'age':
        setAge(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </label>
        <label>
          <span>Age</span>
          <input
            type="number"
            name="age"
            value={age}
            onChange={onInputChange}
          />
        </label>
        <button type="submit">Add user</button>
      </form>
    </>
  );
};
