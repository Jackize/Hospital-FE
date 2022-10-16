import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        };
    }

    async componentDidMount() {
        let res = await getAllUsers('ALL');
        if (res && res.errCode === 0) {
            this.setState({ arrUsers: res.users });
        }
        console.log(this.state.arrUsers);
    }

    render() {
        return (
            <div className="users-container">
                <div className="title text-center">Manage Users With me</div>
                <div className="users-table mt-5 mx-4">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>

                        {this.state.arrUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className="btn-edit">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    <button className="btn-delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
