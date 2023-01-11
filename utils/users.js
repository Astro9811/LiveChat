//Creating an simple array that takes the place of a database to hold our users
const users = [];

// Join user to chat; adds user to users array
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

// Gets current user by their id
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat; finds index of user in users; if index was returned (if not, returns -1), removes user from users and returns user  
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users, by filtering users for user with the same room
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
