import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsersAPI, createNewUserAPI } from '../../services/userService';
import ModalUser from './ModalUser';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
        };
    }
    handleAddNewUser = () => {
        this.setState({ isOpenModal: true });
    };
    toggleUserModal = () => {
        this.setState({ isOpenModal: !this.state.isOpenModal });
    };
    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async () => {
        let res = await getAllUsersAPI('ALL');
        if (res && res.errCode === 0) {
            this.setState({ arrUsers: res.users });
        }
    };

    createNewUser = async (data) => {
        try {
            let res = await createNewUserAPI(data);
            if (res && res.errCode !== 0) {
                alert(res.errMessage);
                return false;
            } else {
                await this.getAllUsers();
                this.setState({ isOpenModal: false });
                return true;
            }
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                <div className="title text-center">Manage Users With me</div>
                <div className="mx-4">
                    <button
                        className="btn btn-primary px-3"
                        onClick={() => this.handleAddNewUser()}
                    >
                        <i className="fas fa-plus "></i>
                        Add new users
                    </button>
                </div>
                <div className="users-table mt-5 mx-4">
                    <table id="customers">
                        <tbody>
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
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="btn-delete">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
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
