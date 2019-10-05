import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <h1>
                Profile {this.props.match.params.profile}
            </h1>
        );
    }
}

export default Profile;