import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import hospital from '../../assets/hospital.png';
import phone from '../../assets/phone.png';
import noteBook from '../../assets/133744-khamtongquat.png';
import lookup from '../../assets/133744-dichvuxetnghiem.png';
import header from '../../assets/133744-suckhoetinhthan.png';
import teeth from '../../assets/104635-khamnhakhoa.png';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-header">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.speciality" />
                                    </b>
                                </div>
                                <div className="sub-header">
                                    <FormattedMessage id="home-header.search-doctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.health-facility" />
                                    </b>
                                </div>
                                <div className="sub-header">
                                    <FormattedMessage id="home-header.select-room" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.doctor" />
                                    </b>
                                </div>
                                <div className="sub-header">
                                    <FormattedMessage id="home-header.select-doctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.package" />
                                    </b>
                                </div>
                                <div className="sub-header">
                                    <FormattedMessage id="home-header.check-health" />
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i class="fas fa-question-circle"></i>
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className="language-vn">VN</div>
                            <div className="language-en">EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-container">
                    <div className="home-header-banner">
                        <div className="title">
                            <FormattedMessage id="banner.title" />
                        </div>
                        <div className="description">
                            <FormattedMessage id="banner.description" />
                        </div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Tìm bệnh viện"
                                alt="search"
                            />
                        </div>
                        <div className="options">
                            <div className="options-child">
                                <div
                                    className="icon-child"
                                    style={{
                                        backgroundImage:
                                            'url(' + hospital + ')',
                                    }}
                                ></div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.specialized" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div
                                    className="icon-child"
                                    style={{
                                        backgroundImage: 'url(' + phone + ')',
                                    }}
                                ></div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.remote" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div
                                    className="icon-child"
                                    style={{
                                        backgroundImage:
                                            'url(' + noteBook + ')',
                                    }}
                                ></div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.general" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div
                                    className="icon-child"
                                    style={{
                                        backgroundImage: 'url(' + lookup + ')',
                                    }}
                                ></div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.medical" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div
                                    className="icon-child"
                                    style={{
                                        backgroundImage: 'url(' + header + ')',
                                    }}
                                ></div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.mental" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div
                                    className="icon-child"
                                    style={{
                                        backgroundImage: 'url(' + teeth + ')',
                                    }}
                                ></div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.dental" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.user.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
