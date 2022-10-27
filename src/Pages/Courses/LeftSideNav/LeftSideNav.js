import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://alpha-coders-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            {
                categories.map(category => <p key={category.id}>
                    <Link className='text-dark' to={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;