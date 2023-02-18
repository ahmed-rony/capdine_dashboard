import { useState } from 'react';
import { Fade, Modal, Paper } from '@mui/material';
import { MdCelebration } from 'react-icons/md';
import { CiBurger } from 'react-icons/ci';
import './OrderPopUp.scss';
import { newOrder } from '../../Data/mockData';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: "#fff2cd",
    border: 'none',
    boxShadow: 24,
};

const OrderPopUp = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <button className='brand-btn p-2' onClick={handleOpen}>Open modal</button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper elevation={3} sx={style} className="modal-content">

                        <div className="top">
                            <MdCelebration className='icon1' />
                            <MdCelebration className='icon2' />
                            <span>new order</span>
                            <div className='head-icon'><CiBurger /></div>
                        </div>
                        
                        <div className="content">
                            <div className="new-order">
                                {
                                    newOrder.map((item) => (
                                        <div className="item" key={item.id}>
                                            <div className='name'>
                                                <img src={item.imgUrl} alt="" />
                                                <h5>{item.name}</h5>
                                            </div>
                                            <span>x{item.quantity}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="decision">
                            <button className='accept' onClick={handleClose}>Accept</button>
                            <button className='forward' onClick={handleClose}>Forward</button>
                        </div>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
};

export default OrderPopUp;