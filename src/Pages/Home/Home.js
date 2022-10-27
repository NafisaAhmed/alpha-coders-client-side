import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/bg.jpg';
import data from '../../images/data.png';
import light from '../../images/light.png';
import machine from '../../images/machine.png';

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-center' style={{ backgroundColor: 'transparent', backgroundImage: 'radial-gradient(at center left, #6af2be 25%, #1fc585 100%)' }}>
                <div className='w-50 m-5'>
                    <img className='w-50 m-5' src={img} alt="" />
                </div>
                <div className='w-50 mt-5'>
                    <h1 className='fw-bold' style={{ fontSize: '4rem', fontFamily: '"Anton",Sans-serif' }}>Explore our exciting online courses</h1>
                    <p className='fs-5'>One of the great fears we face is that despite our efforts, we will discover that we have wasted our life. This website gives you the tools to overcome your fears and reach your dreams</p>
                    <Button className='fw-bold fs-5 my-5' variant="light">Go & Check</Button>
                </div>
            </div>
            <div style={{ backgroundColor: '#f8faf9' }}>
                <div className='mt-5'>
                    <h1 className='text-center'>Topics Covered</h1>
                </div>
                <div className='d-flex justify-content-around mt-5'>
                    <div>
                        <img className='p-3' style={{ backgroundColor: '#1fc585' }} src={data} alt="" />
                        <h5>Data <br /> Structure</h5>
                        <p className='text-muted'><small>All you need <br /> to learn</small></p>
                    </div>
                    <div>
                        <img className='p-3' style={{ backgroundColor: '#1fc585' }} src={light} alt="" />
                        <h5>Coding <br /> Concept</h5>
                        <p className='text-muted'><small>All you need <br /> to learn</small></p>
                    </div>
                    <div>
                        <img className='p-3' style={{ backgroundColor: '#1fc585' }} src={machine} alt="" />
                        <h5>Machine <br /> Learning</h5>
                        <p className='text-muted'><small>All you need <br /> to learn</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;