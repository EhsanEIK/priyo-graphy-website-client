import React from 'react';

const Blogs = () => {
    return (
        <div className='md:px-0 px-3'>
            {/* blog-01 */}
            <div className='bg-gray-100 rounded-lg p-10'>
                <h1 className='text-3xl mb-4'>1. Difference between SQL and NoSQL.</h1>
                <p>
                    <span>
                        <span className='italic font-bold mr-2'>SQL:</span> It's a Relational Database Management System (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable.
                    </span>
                    <br /><br />
                    <span>
                        <span className='italic font-bold mr-2'>NoQL:</span>It's a Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Blogs;