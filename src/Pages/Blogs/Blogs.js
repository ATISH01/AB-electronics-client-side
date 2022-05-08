import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Row className='g-0'>
                <Col className='mx-auto' md={6}>
                    <div className='p-3'>
                    <h3>Difference between JavaScript and Node JS</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>JavaScript</th>
                                <th>Node JS</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>JavaScript is a programming language.It is an implementation of ECMAScript,.</td>
                                <td>Npde JS is a interpreator.It also called JavaScripts Running environment</td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>In web-application for client side action Javascript is used.</td>
                                <td>Node JS is used for non-blocking operation for any operationg system.</td>
                               
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >JavaScript can run any browser engine</td>
                                <td >Node JS can only run in google V* engine</td>
                                
                            </tr>
                            <tr>
                                <td>4</td>
                                <td >JavaScript is a java-progamming standard programming language.</td>
                                <td >Node JS is written with C++.</td>
                                
                            </tr>
                            <tr>
                                <td>5</td>
                                <td >JavaScript used in client side.</td>
                                <td >Node JS used in server side.</td>
                                
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                    <div className='p-3'>
                        <h3>When should you use nodejs and when should you use mongodb?</h3>
                        <article>
                            <strong>MongoDB:-</strong>
                            MOngoDB is Non-Sql database.We need a cloud database to access out data from anywhere.So when we need to store our website data we will MongoDb as Database.It is a document oriented database.So when our data is document oriented and doesn't fit to relational database schema then we can use mongoDB like simple database system.<br />
                            <strong>
                                NodeJS:-
                            </strong>
                            Node JS is a Javasripts run-time.It is open source server side script.It's used in server side programming.And it use javascript as programming language.So when we javascript we can use Node Js for non-blocking and real-time feature.
                        </article>
                    </div>
                    <div className='p-3'>
                        <h3>Differences between sql and nosql databases.</h3>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>SQL Database</th>
                                <th>Non-SQL Database</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>SQL(Structured Query language).It is a language for Relational database system.</td>
                                <td>It is a non relational database system.Not required any schema.</td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Use of SQL is effective in insert, search, update, delete database records.</td>
                                <td>Non SQL used as realtime database in web application.</td>
                               
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >It is a table based database.</td>
                                <td >It is a document oriented database.</td>
                                
                            </tr>
                            <tr>
                                <td>4</td>
                                <td >SQL requires specialized DB hardware for better performance.</td>
                                <td >NoSQL uses commodity hardware..</td>
                                
                            </tr>
                            <tr>
                                <td>5</td>
                                <td >Its supports dynamic queries.</td>
                                <td >When need to scale based on changing requirements.</td>
                                
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                    <div className='p-3'>
                        <h3>What is the purpose of jwt and how does it work?</h3>
                        <strong>Purpose of jwt</strong>
                        <article>
                            Purpose of jwt is to creating data with optional signature to prevent unauthorized access.The tokens are signed using a private secret or a public key.
                        </article>
                        <strong>How JWT works?</strong>
                        <article>
                        In server-side server generates a token that holds user identity, and sends it to the client-side.From client the token send back to the server for every subsequent rquest and server match the user that token contains.
                        </article>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Blogs;