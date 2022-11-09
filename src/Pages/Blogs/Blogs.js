import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    // custom title in the website
    useTitle('Blogs');

    return (
        <div className='md:px-0 px-3'>
            <h1 className='md:text-5xl text-3xl text-center font-bold bg-slate-200 rounded-xl shadow-lg md:p-20 p-10 mt-10 mb-16 md:mx-0 mx-3'>All Blogs</h1>
            {/* blog-01 */}
            <div className='bg-gray-100 rounded-xl p-10 md:m-10 mt-10'>
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
            <div className='bg-gray-100 rounded-xl p-10 md:m-10 mt-10'>
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
            {/* blog-03 */}
            <div className='bg-gray-100 rounded-xl p-10 md:m-10 mt-10'>
                <h1 className='text-3xl mb-4'>3. What is the difference between JavaScript and NodeJS?</h1>
                <p>
                    <span>
                        <span className='italic font-bold mr-2'>JavaScript:</span>
                        Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM. Javascript is used in frontend development. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Some of the javascript frameworks are RamdaJS, TypedJS, etc. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                    </span>
                    <br /><br />
                    <span>
                        <span className='italic font-bold mr-2'>NodeJS:</span>
                        NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags. Nodejs is used in server-side development. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Some of the Nodejs modules are Lodash, express etc. Nodejs is written in C, C++ and Javascript.
                    </span>
                </p>
            </div>
            {/* blog-04 */}
            <div className='bg-gray-100 rounded-xl p-10 md:m-10 mt-10'>
                <h1 className='text-3xl mb-4'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blogs;