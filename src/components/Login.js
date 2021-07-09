import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { signIn } from '../Redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Dashboard.css';

const Login = (props) => {


    const onFinish = async (values) => {
        await props.signIn(values);
        if (props.error==="") {
            props.history.push('./dashboard')
        }
    }

    const onFinishFailed = () => {

    }

    return (
        <Form className="form"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={signIn}>
                    Login
                </Button>
            </Form.Item>
            {props.error !== "" &&
                <div className="error-div">{props.error}</div>
            }
        </Form>
    )
}
const mapStateToProps = (state) => {
    const { error } = state;
    return {
        error
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
