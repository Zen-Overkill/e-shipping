import React, { useState } from 'react'
import './UserUpdateBill.less';
import Image1 from '../../../assets/images/UserUpdateBill1.png';
import Image2 from '../../../assets/images/UserUpdateBill2.png';
import { useNavigate } from 'react-router-dom';

import UserAddOrder from './../UserAddOrder/UserAddOrder';


function UserUpdateBill() {
    const [getBillId, setGetBillId] = useState('');
    
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        localStorage.setItem('updateId', getBillId);
        navigate('/user/action-update-bill', { replace: true });
    }
    const handleChange = (event)=>{
        setGetBillId(event.target.value);
    }
    return (
        <div className='page-update-bill'>
            <div className='frame-enter-codeBill'>
                <div className='div-update-bill'>Nhập mã đơn hàng để tiến hành chỉnh sửa</div>
                <input
                    type='text'
                    className='input-user-update'
                    placeholder='Mã đơn hàng'
                    onChange={(event) =>
                        handleChange(event)
                    }
                />
                <button className='btn-update-bill'
                onClick={(event) => handleSubmit(event)}
                >
                    Thay đổi
                </button>
                <div>
                    <img
                        src={Image1}
                        alt='ahihi'
                        className='image-header-user-overview'
                    />
                </div>
            </div>

            <div>
                <img
                    src={Image2}
                    alt='ahihi'
                    className='image-user-update-bill'
                />
            </div>
        </div>
    )
}

export default UserUpdateBill