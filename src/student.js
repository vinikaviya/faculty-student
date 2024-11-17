import React, { useState, useEffect } from "react";
import { Table, Button, Form, Modal, Alert } from "react-bootstrap";
import { FaUser, FaBirthdayCake, FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Faculty-navbar"; // Import Navbar component

// Helper function to generate random student data
const generateRandomStudent = (id) => {
  const names = ["Alice", "Bob", "Charlie", "David", "Emma"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomDate = `19${Math.floor(Math.random() * 10 + 80)}-${Math.floor(
    Math.random() * 12 + 1
  )
    .toString()
    .padStart(2, "0")}-${Math.floor(Math.random() * 28 + 1)
    .toString()
    .padStart(2, "0")}`;
  const randomContact = `98765${Math.floor(Math.random() * 100000)}`;

  return {
    id,
    name: randomName,
    dob: randomDate,
    contactNumber: randomContact,
  };
};

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    contactNumber: "",
  });

  // Generate initial random students
  useEffect(() => {
    const initialStudents = Array.from({ length: 3 }, (_, index) =>
      generateRandomStudent(index + 1)
    );
    setStudents(initialStudents);
  }, []);

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ name: "", dob: "", contactNumber: "" });
    setShowModal(true);
  };

  const openEditModal = (student) => {
    setIsEditing(true);
    setCurrentStudent(student.id);
    setFormData({
      name: student.name,
      dob: student.dob,
      contactNumber: student.contactNumber,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === currentStudent ? { ...student, ...formData } : student
        )
      );
      setAlertMessage("Student details updated successfully!");
    } else {
      const newStudent = { ...formData, id: students.length + 1 };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
      setAlertMessage("New student added successfully!");
    }
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex flex-column"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
          padding: "1rem 0", // Removed side padding here, only keeping vertical padding
        }}
      >
        <div
          className="flex-grow-1 d-flex flex-column align-items-center"
          style={{
            padding: "1rem", // Inner padding for better spacing
          }}
        >
          <div
            className="shadow-lg w-100"
            style={{
              maxWidth: "1200px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "1rem", // Card padding for better spacing
            }}
          >
            <h2 className="text-center my-4" style={{ color: "green" }}>
              Student List
            </h2>
            {alertMessage && (
              <Alert
                variant="success"
                className="mb-3"
                style={{
                  backgroundColor: "#d4edda",
                  borderColor: "#c3e6cb",
                  color: "#155724",
                }}
              >
                {alertMessage}
              </Alert>
            )}
            <Button
              variant="primary"
              onClick={openAddModal}
              className="mb-3"
              style={{
                backgroundColor: "#5c6bc0",
                borderColor: "#5c6bc0",
              }}
            >
              Add New Student
            </Button>
            <Table striped bordered hover responsive>
              <thead className="table-primary">
                <tr>
                  <th>S.NO</th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.dob}</td>
                    <td>{student.contactNumber}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {isEditing ? "Edit Student" : "Add New Student"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>
                  <FaUser className="me-2" /> Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group controlId="dob" className="mb-3">
                <Form.Label>
                  <FaBirthdayCake className="me-2" /> DOB
                </Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="contactNumber" className="mb-3">
                <Form.Label>
                  <FaPhoneAlt className="me-2" /> Contact Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter contact number"
                />
              </Form.Group>
              <Button variant="success" type="submit" style={{ width: "100%" }}>
                {isEditing ? "Update Student" : "Add Student"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default StudentList;
