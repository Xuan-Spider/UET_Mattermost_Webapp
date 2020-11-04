// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getStatusForUserId} from 'mattermost-redux/selectors/entities/users';
import {openDirectChannelToUserId} from '../../actions/channel_actions';

import UserListRow from './user_list_row.jsx';

function mapStateToProps(state, ownProps) {
    const user = ownProps.user || {};
    return {
        status: getStatusForUserId(state, user.id),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            openDirectChannelToUserId,
        }, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserListRow);
