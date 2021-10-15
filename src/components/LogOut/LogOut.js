import React from 'react';
import { Container, Button } from 'react-bootstrap';

const LogOut = () => {
    return (
        <div className="text-center my-5">
            <Container>
                <Button variant="danger">LogOut</Button>{' '}
            </Container>
        </div>
    );
};

export default LogOut;