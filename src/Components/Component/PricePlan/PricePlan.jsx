import { Paper } from '@mui/material';
import React, { useState } from 'react';
import { pricePlan } from '../../Data/mockData';
import './PricePlan.scss';
import { BiFoodTag } from 'react-icons/bi';

const PricePlan = () => {
    const [plan, setPlan] = useState(null);
    console.log(plan);

    const handleSelect = (i) => {
        setPlan(i);
    }
    return (
        <section className='price-plan'>
            <div className="content">
                {
                    pricePlan.map((i) => (
                        <Paper key={i.id} elevation={3} className="item">
                            <h4 className={
                                `${i.title == 'Basic' && `basic`}
                                ${i.title == 'Premium' && `premium`}
                                ${i.title == 'Popular' && `popular`}`
                            }
                            >{i.title}</h4>
                            <div className="details">
                                <div className={`permonth ${plan !== null && plan.id === i.id && 'darkbg'}`}>
                                    <div>
                                        <span>${i.perMonth}</span>
                                        <small>/mo</small>
                                    </div>
                                </div>
                                <h5>{i.subtitle}</h5>
                                <span>$ {i.perDay} /day</span>
                                <button className="brand-btn" onClick={() => handleSelect(i)}>Select</button>
                            </div>
                            <hr />
                            <div className='feature'>
                                <h5>Features</h5>
                                {
                                    (i.features).map((f) => (
                                        <div className='list' key={f.id}>
                                            <div>
                                                <BiFoodTag className='icon' />
                                            </div>
                                            <span>{f.detail}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </Paper>
                    ))
                }
            </div>
        </section>
    );
};

export default PricePlan;