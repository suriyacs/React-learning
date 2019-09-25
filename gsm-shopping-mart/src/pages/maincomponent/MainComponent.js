import React from 'react';
import UserService from '../../service/userservice';
import './MainComponent.scss';

class MainComponent extends React.Component {
  constructor() {
    super();
    this.userService = new UserService();
  }
  state = {
    userList: [
      {"id":"56252","employee_name":"hhhhh","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"56254","employee_name":"updated_name_test","employee_salary":"999999","employee_age":"99","profile_image":""},
      {"id":"56256","employee_name":"fggfgf","employee_salary":"250","employee_age":"34","profile_image":""},
      {"id":"56257","employee_name":"achs","employee_salary":"123","employee_age":"23","profile_image":""}
    ]
  }

  componentDidMount() {
    this.userService.getUserList().then(data => {
      this.setState({userList: data});
    })
  }

  render() {
    const { userList }= this.state;
    return (
      <div className="container">
        <div className="row">
          {
            userList.map(user => (
              <div className="col-xs-12  col-md-5 col-lg-6" key={user.id}>
                <div className="user-info-grid">
                  <span className="user-info">
                    {user.name}
                  </span>                  
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default MainComponent;