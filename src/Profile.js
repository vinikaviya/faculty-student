import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import image from "./faculty.jpg"; // Correct image import
import FacultyNav from "./Faculty-navbar"; // Ensure Navbar import path is correct

const FacultyProfile = () => {
  const facultyData = {
    name: "Dr. John Doe",
    department: "Computer Science",
    qualifications: "Ph.D. in Computer Science from MIT",
    contact: {
      phone: "+1 234 567 890",
      email: "john.doe@example.com",
      address: "123 University Lane, City, Country",
    },
    photo: image, // Use the imported image
  };

  return (
    <>
      {/* Navbar */}
      <FacultyNav />

      {/* Main Content Area */}
      <div
        className="flex-grow-1 p-4"
        style={{
          // To avoid overlap with sidebar
          height: "100vh", // Ensure it takes full height
          overflowY: "auto", // Allow scrolling if content exceeds
          backgroundColor: "#f4f6f9", // Background color for main content
        }}
      >
        <Container className="d-flex justify-content-center align-items-center " style={{ minHeight: "50vh" }}>
          <Row className="justify-content-center w-100">
            <Col xs={12} sm={10} md={8} lg={6}>
              <Card className="shadow-lg " style={{ padding: "0.5rem" }}>
                <Card.Header
                  className="text-center "
                  style={{
                    backgroundColor: "#5c6bc0",
                    color: "white",
                    // padding: "0.5rem 1rem", // Adjusted padding for header
                  }}
                >
                  <h3>Faculty Profile</h3>
                </Card.Header>
                <Card.Body style={{ padding: "1rem" }}>
                  <Row className="align-items-center">
                    <Col
                      xs={12}
                      sm={4}
                      className="d-flex justify-content-center mb-1 mb-md-0"
                    >
                      <img
                        src={facultyData.photo} // Displaying the imported image
                        alt="Faculty"
                        className="img-fluid rounded-circle"
                        style={{
                          width: "120px", // Reduced image size
                          height: "120px",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                    <Col xs={12} sm={8} className="text-center text-sm-start">
                      <h4>{facultyData.name}</h4>
                      <p className="text-muted">{facultyData.department}</p>
                      <p>{facultyData.qualifications}</p>
                    </Col>
                  </Row>

                  <ListGroup variant="flush" className="mt-2">
                    <ListGroup.Item>
                      <FaPhoneAlt className="me-2" />
                      <strong>Phone:</strong> {facultyData.contact.phone}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <FaEnvelope className="me-2" />
                      <strong>Email:</strong> {facultyData.contact.email}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <FaMapMarkerAlt className="me-2" />
                      <strong>Address:</strong> {facultyData.contact.address}
                    </ListGroup.Item>
                  </ListGroup>

                  <Button
                    variant="primary"
                    className="w-100 mt-1"
                    style={{
                      backgroundColor: "#5c6bc0",
                      borderColor: "#5c6bc0",
                      padding: "0.5rem", // Reduced padding for the button
                    }}
                  >
                    Contact Faculty
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FacultyProfile;
