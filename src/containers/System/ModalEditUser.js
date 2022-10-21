import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils';
import _ from 'lodash';

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            address: '',
        };
    }
    toggle() {
        this.props.toggleFromParent();
    }

    handleOnchangeInput = (e, id) => {
        let coppyState = { ...this.state };
        coppyState[id] = e.target.value;
        this.setState({
            ...coppyState,
        });
    };

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            });
        }
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['lastName', 'firstName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing required field: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    };
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid) {
            this.props.editUser(this.state);
        }
    };
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={'modal-user-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>
                    Edit user {this.state.email}
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        {/* <div className="input-container">
                            <label>Email</label>
                            <input
                                type="email"
                                onChange={(e) =>
                                    this.handleOnchangeInput(e, 'email')
                                }
                                value={this.props.currentUser.email}
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={(e) =>
                                    this.handleOnchangeInput(e, 'password')
                                }
                                value={this.props.currentUser.password}
                            />
                        </div> */}
                        <div className="input-container">
                            <label>First Name</label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    this.handleOnchangeInput(e, 'firstName')
                                }
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    this.handleOnchangeInput(e, 'lastName')
                                }
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="input-container max-width">
                            <label>Address</label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    this.handleOnchangeInput(e, 'address')
                                }
                                value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => this.handleSaveUser()}
                    >
                        Save
                    </Button>{' '}
                    <Button
                        color="secondary"
                        className="px-3"
                        onClick={() => this.toggle()}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
