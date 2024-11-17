// src/Login.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Hook to navigate programmatically

  // Hardcoded credentials for faculty and user
  const facultyCredentials = { username: 'faculty@gmail.com', password: 'faculty123' };
  const userCredentials = { username: 'student@gmail.com', password: 'student123' };

  const handleLogin = (e) => {
    e.preventDefault();

    if (credentials.username === '' || credentials.password === '') {
      setErrorMessage('Username and password are required.');
    } else {
      // Check for the credentials for Faculty and User
      if (
        credentials.username === facultyCredentials.username &&
        credentials.password === facultyCredentials.password
      ) {
        navigate('/Faculty-dashboard'); // Navigate to Faculty Dashboard
      } else if (
        credentials.username === userCredentials.username &&
        credentials.password === userCredentials.password
      ) {
        navigate('/Student-dashboard'); // Navigate to Student Dashboard
      } else {
        setErrorMessage('Invalid username or password.');
      }
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg p-4" style={{ borderColor: '#007bff' }}>
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: '#007bff' }}>
                Login
              </h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label style={{ color: '#007bff' }}>
                    <FaUser className="me-2" />
                    Username
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter username"
                    value={credentials.username}
                    onChange={(e) =>
                      setCredentials({ ...credentials, username: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label style={{ color: '#007bff' }}>
                    <FaLock className="me-2" />
                    Password
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={credentials.password}
                      onChange={(e) =>
                        setCredentials({ ...credentials, password: e.target.value })
                      }
                    />
                    <Button
                      variant="outline-secondary"
                      className="ms-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
                </Form.Group>

                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  type="submit"
                  style={{ backgroundColor: '#007bff', border: 'none' }}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
