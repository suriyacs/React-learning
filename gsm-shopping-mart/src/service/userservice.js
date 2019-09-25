const url = 'https://jsonplaceholder.typicode.com/users/';
class UserService {
  getUserList = async () => {
    return fetch(url).then(resp => resp.json()).then((data) => data);
  }
}

export default UserService;