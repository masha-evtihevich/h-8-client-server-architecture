import React, { Component } from 'react'
import axios from 'axios'

class UserList extends Component {

    state = {
        users: []
    }
// Метод жизненного цикла, который выполяет запросы для отрисовки компонента (список пользователей)
    componentDidMount() {
        axios.get('http://localhost:3001/users')
        .then((response) => {
            this.setState({ users: response.data })
        });
    }

    render() {
        return (
            <ul>
                {this.state.users.map(user => {
                    return (
                        <li key={user._id}>{user.name.first} {user.name.last}</li>
                    )
                })}
            </ul>
        )
    }
}

export default UserList