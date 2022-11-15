import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { AiOutlineTeam, AiOutlineUserAdd } from 'react-icons/ai';
import eLogo from '../../assets/images/e-logo.png';
import './AdminSidebar.less';
import { useNavigate } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const AdminSidebar = (props) => {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Quản lý tài khoản',
      key: '1',
      icon: <AiOutlineTeam />,
      onClick: () => {
        navigate('/admin/home', { replace: true });
      },
    },
    {
      label: 'Tạo tài khoản',
      key: '2',
      icon: <AiOutlineUserAdd />,
      onClick: () => {
        navigate('/admin/create-new-employee', { replace: true });
      },
    },
    // {
    //   label: 'Danh sách vận đơn',
    //   key: '2',
    //   icon: <CiViewList />,
    //   onClick: () => {
    //     navigate('/user/view-bills', { replace: true });
    //   },
    // },
    // { label: 'Yêu cầu chỉnh sửa', key: '3', icon: <BsChatRight /> },
    // {
    //   label: 'Sổ địa chỉ',
    //   key: 'sub1',
    //   icon: <BiBookBookmark />,
    //   children: [
    //     { label: 'Điểm lấy hàng', key: '4' },
    //     { label: 'Điểm trả hàng', key: '5' },
    //     { label: 'Tạo từ file', key: '6' },
    //   ],
    // },
    // {
    //   label: 'Thống kê',
    //   key: 'sub2',
    //   icon: <TfiPieChart />,
    //   children: [
    //     { label: 'Thống kê vận đơn', key: '7' },
    //     { label: 'Thống kê COD', key: '8' },
    //     { label: 'Thống kê cước', key: '9' },
    //     { label: 'Thống kê đơn từ file', key: '10' },
    //   ],
    // },
    // {
    //   label: 'Tạo vận đơn',
    //   key: 'sub3',
    //   icon: <AiOutlineShoppingCart />,
    //   children: [
    //     {
    //       label: 'Tạo đơn hàng',
    //       key: '11',
    //       onClick: () => {
    //         navigate('/user/create-new-order', { replace: true });
    //       },
    //     },
    //     { label: 'Tạo đơn từ file', key: '12' },
    //     { label: 'Tạo đơn nhiều điểm gửi', key: '13' },
    //     { label: 'Tạo đơn File N/nhận gửi', key: '14' },
    //   ],
    // },
    // { label: 'Phản ánh/ Khiếu nại', key: '15', icon: <BiError /> },
    // { label: 'Quản lý cửa hàng', key: '16', icon: <BiStore /> },
    // { label: 'Cấu hình tài khoản', key: '17', icon: <IoPersonOutline /> },
  ];

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed} width='256px'>
      <div
        className='logo'
        onClick={() => {
          navigate('/admin/home', { replace: true });
        }}
        style={{ cursor: 'pointer' }}
      >
        <img src={eLogo} alt='Sidebar logo' className='logo-icon' />
        {props.collapsed ? (
          <span />
        ) : (
          <span className='logo-text'>E-shipping</span>
        )}
      </div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={items}
        style={{ fontSize: '16px' }}
      />
    </Sider>
  );
};

export default AdminSidebar;
