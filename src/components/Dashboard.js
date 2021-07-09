import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';

import Login from './Login';
import { getUsers } from '../Redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launch_year: null,
            launch_success: null,
            land_success: null
        }
    }

    componentDidMount = () => {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props;
       const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
          },
        {
            title: 'Phone',
            dataIndex: 'phoneNo',
            key: 'phoneNo',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          }
       ]
        return (
            <Table columns={columns} dataSource={users} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);