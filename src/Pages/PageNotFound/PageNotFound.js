import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img from '../../images/page-not-found.jpg'

const PageNotFound = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={img} style={{ height: '600px' }} alt="Card image" />
            </Card>
            <Link to='/'><Button>Go to Home</Button></Link>
        </div>
    );
};

export default PageNotFound;