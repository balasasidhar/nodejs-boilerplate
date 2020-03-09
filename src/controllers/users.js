import usersMockData from '../mock-data/users.json';

const users = [...usersMockData];

export const getAllUsers = (req, res) => {
  res.status(200).json({ status: 'sucess', users });
};

export const getUserDetails = (req, res) => {
  const {
    params: { id },
  } = req;

  const userDetails = users.find((item) => item.id === Number(id));

  if (userDetails) {
    res.status(200).json({ status: 'sucess', userDetails });
  } else {
    res.status(404).json({ status: 'failed', error: 'User not found' });
  }
};

export const addNewUser = (req, res) => {
  const {
    body: { name, email },
  } = req;

  if (!name || !email) {
    res.status(400).json({ status: 'failed', error: 'User name and email both are required' });
    return;
  }

  const userDetails = { id: users.length + 1, name, email };
  users.push(userDetails);
  res.status(201).json({ status: 'sucess', userDetails });
};

export const updateUserDetails = (req, res) => {
  const {
    params: { id },
    body: { name, email },
  } = req;

  const index = users.findIndex((item) => item.id === Number(id));

  if (index < 0) {
    res.status(404).json({ status: 'failed', error: 'User not found' });
  } else if (!name || !email) {
    res.status(400).json({ status: 'failed', error: 'User name and email both are required' });
  } else {
    let userDetails = users[index];
    userDetails = { ...userDetails, name, email };
    users[index] = userDetails;
    res.status(200).json({ status: 'sucess', userDetails });
  }
};

export const deleteUserDetails = (req, res) => {
  const {
    params: { id },
  } = req;

  const index = users.findIndex((item) => item.id === Number(id));

  if (index < 0) {
    res.status(404).json({ status: 'failed', error: 'User not found' });
  } else {
    users.splice(index, 1);
    res.status(200).json({ status: 'sucess', message: 'user details removed' });
  }
};
