import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const CourseCard = ({ courses }) => {
    const { category_id, title, instructor, total_enrolled, rating, image_url } = courses;
    console.log(courses);
    return (
        <Link to={`/category/${category_id}`} className='text-decoration-none'>
            <div style={{ width: '18rem' }}>
                <img className='img-fluid' style={{ height: '9rem', width: '18rem' }} src={image_url} alt="" />
                <div style={{ lineHeight: '2px' }}>
                    <h6 className='fw-bold text-dark'>{title}</h6>
                    <p className='text-dark'><small>{instructor.name}</small></p>
                    <div className='d-flex'>
                        <p className='mt-1 text-dark'><small>{rating}</small></p>
                        <p className='text-warning ms-2'><small><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalfAlt></FaStarHalfAlt></small></p>
                        <p className='mt-1 ms-2 text-dark'><small>({total_enrolled})</small></p>
                    </div>
                </div>
            </div >
        </Link>
    );
};

export default CourseCard;