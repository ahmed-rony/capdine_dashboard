import { Fade, Modal, Paper } from '@mui/material';
import './OrderDetail.scss';
import { RxCross2 } from 'react-icons/rx';
import { MdFoodBank } from 'react-icons/md';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: "#fcfcfc",
    border: 'none',
    boxShadow: 24,
};

const OrderDetail = ({ order, open, handleClose }) => {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper elevation={3} sx={style} className='detail'>
                        <div className="content">
                            <h4>Orders <MdFoodBank/></h4>
                            <div className="order-box">
                                {order?.map((item) => (
                                    <div key={item.id} className="item">
                                        <div className="food">
                                            <img src={item.imgUrl} alt="" />
                                            <h5>{item.name}</h5>
                                        </div>
                                        <small><RxCross2 />{item.quantity}</small>
                                    </div>
                                ))}
                            </div>
                            <h4>Your customers are hungry!</h4>
                        </div>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
};

export default OrderDetail;