import { Checkbox, Form, Input, Button, Alert } from 'antd';
import React from 'react';
import logo from '../../../assets/images/e-shipping-logo.png';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import jwt_decode from 'jwt-decode';
import './Login.less';
import { login } from './../../../services/login';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [invalidLogin, setInvalideLogin] = useState(false);
  function alertClose() {
    setInvalideLogin(false);
  }
  function handleFinish(value) {
    login(value)
      .then((data) => {
        const errLogin = 'Invalid Login';

        if (data.localeCompare(errLogin, 'en', { sensitivity: 'base' }) == 0) {
          setInvalideLogin(true);
        } else {
          const decoded = jwt_decode(data);
          localStorage.setItem('loginUser', JSON.stringify(decoded));
          switch (decoded.Role) {
            case 'admin':
              return navigate('/admin/home', { replace: true });
            case 'customer':
              return navigate('/user/home', { replace: true });
            case 'manager':
              return navigate('/manager/home', { replace: true });
            default:
              return null;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='login-background'>
      <div className='login-card'>
        <div className='login-card-head'>
          <div className='login-card-head-left'>
            <h1>Đăng nhập</h1>
            <h4>Chào mừng trở lại</h4>
          </div>

          <img src={logo} alt='Pet transport logo' className='login-logo' />
        </div>
        {invalidLogin && (
          <Alert
            message='Sai tên đăng nhập hoặc mật khẩu'
            type='error'
            showIcon
            closable
            onClose={alertClose}
          />
        )}
        <div className='login-input'>
          <Form name='basic' onFinish={handleFinish}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập đúng tên đăng nhập!',
                },
              ]}
            >
              <Input placeholder='Tên đăng nhập' prefix={<AiOutlineUser />} />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập đúng mật khẩu!',
                },
              ]}
              style={{ margin: '0' }}
            >
              <Input.Password
                placeholder='Mật khẩu'
                prefix={<AiOutlineLock />}
                type='password'
              />
            </Form.Item>
            <Form.Item style={{ margin: '0' }}>
              <a className='login-form-forgot' href='#'>
                Quên mật Khẩu?
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              Bạn chưa có tài khoản? <a href='/register'>Đăng ký ngay!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
