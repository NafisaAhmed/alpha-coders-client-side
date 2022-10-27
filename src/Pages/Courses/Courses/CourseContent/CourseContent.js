import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print'
import { Button } from 'react-bootstrap';

const CourseContent = ({ contents }) => {
    const { category_id, title, total_enrolled, instructor, details, content_url, price, rating } = contents;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'data',
        onAfterPrint: () => alert('printed')
    });
    return (
        <>
            <div ref={componentRef}>
                <Card className="text-white">
                    <Card.Img className='w-100' style={{ height: '350px', filter: 'brightness(30%)' }} src={content_url} alt="Card image" />
                    <Card.ImgOverlay className='mx-5 px-5 mt-5'>
                        <div className='d-flex'>
                            <Card.Title className='fs-2'>{title}</Card.Title>
                            <button onClick={handlePrint} className='fs-3 p-0 bg-dark text-white ms-2'><FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon></button>
                        </div>
                        <Card.Text>
                            {details.length > 300 ?
                                <>{details.slice(0, 300) + '...'}</>
                                :
                                <>{details}</>
                            }
                        </Card.Text>
                        <div className='d-flex'>
                            <Card.Text className='mt-1 text-warning fw-semibold'><small>{rating}</small></Card.Text>
                            <Card.Text className='text-warning ms-2'><small><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStarHalfAlt></FaStarHalfAlt></small></Card.Text>
                            <Card.Text className='mt-1 ms-2'><small> {total_enrolled}</small> students</Card.Text>
                        </div>
                        <Card.Text><small>Created by <Link className='text-light fw-semibold'>{instructor.name}</Link></small></Card.Text>
                        <Card.Text className='fw-bold fs-5'>{price}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <Link to={`/checkout/${category_id}`} className='d-flex justify-content-center mt-5 mx-5'><Button>Get Premium Access</Button></Link>

        </>
    );
};

export default CourseContent;