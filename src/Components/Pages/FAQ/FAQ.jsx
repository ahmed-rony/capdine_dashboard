import { Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material';
import React from 'react';
import './FAQ.scss';
import { MdExpandMore } from 'react-icons/md';

const FAQ = () => {
    return (
        <section className='faq'>
            <div className="title">
                <h1>FAQ</h1>
            </div>
            <div className="content">
                <div className="left">
                    <Paper elevation={2}>
                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </div>
                <div className="right">
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                    <Paper elevation={2}>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='header'>
                                <h4>Random Question</h4>
                            </AccordionSummary>
                            <AccordionDetails className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </div>
            </div>
        </section>
    );
};

export default FAQ;