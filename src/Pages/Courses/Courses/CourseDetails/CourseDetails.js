import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseContent from '../CourseContent/CourseContent';

const CourseDetails = () => {
    const contentDetails = useLoaderData();
    console.log(contentDetails)
    return (
        <div>
            {
                contentDetails.map(contents => <CourseContent
                    key={contents.id}
                    contents={contents}
                ></CourseContent>)
            }
        </div>
    );
};

export default CourseDetails;