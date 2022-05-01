import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import { signOut } from 'firebase/auth';

const NAvigationBar = () => {
    const [user]=useAuthState(auth);
    console.log(user?.displayName);
    
    return (    
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        { user? 
                            <button className='btn btn-link text-decoration-none' onClick={()=>signOut(auth)}>LogOut</button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {
                            user&&<Nav.Link as={Link} to="/manageitems">ManageItems</Nav.Link>
                            
                        }
                        {
                            user&&<Nav.Link as={Link} to="/myitem">MyItems</Nav.Link>
                        }
                        <Nav.Link >{user?.displayName}</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NAvigationBar;