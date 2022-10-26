import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2' className='mt-4'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10' className='course-container mt-5'>
                        {
                            allCourses.map(courses => <CourseCard
                                key={courses.id}
                                courses={courses}
                            ></CourseCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;