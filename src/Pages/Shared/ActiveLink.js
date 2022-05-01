import React from 'react';
import { Nav } from 'react-bootstrap';
import { useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Nav.Link
                style={{ color: match ? 'orange': 'white'}}
                to={to}
                {...props}
            >
                {children}
            </Nav.Link>
        </div>
    );
}

export default ActiveLink;