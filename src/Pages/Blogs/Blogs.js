import React from 'react';

const Blogs = () => {
    return (
        <div className='md:px-0 px-3'>
            {/* blog-01 */}
            <div className='bg-gray-100 rounded-lg p-10 m-10'>
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
            {/* blog-02 */}
            <div className='bg-gray-100 rounded-lg p-10 m-10'>
                <h1 className='text-3xl mb-4'>2. What is JWT? and How does it work?</h1>
                <p>
                    <span>
                        <span className='italic font-bold mr-2'>JWT:</span> JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. It is pronunced by 'JOT' token.
                    </span>
                    <br /><br />
                    <span>
                        <span className='italic font-bold mr-2'>Working process of JWT:</span>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        <br /><br />
                        Once decoded, we will get two JSON strings:
                        <br />

                        i. The header and the payload.
                        <br />
                        ii. The signature.

                        <br /><br />
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Blogs;