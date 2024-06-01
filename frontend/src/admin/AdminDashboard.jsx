/** @format */
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { postImage } from "../services/image";
import { useAuth, useImage } from "../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminDashBoard() {
  const { getImages } = useImage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (file) {
      console.log("File to be uploaded:", file);

      const form = new FormData();
      form.append("picture", file);

      try {
        const res = await toast.promise(postImage(form), {
          pending: "Processing…",
          success: "Image uploaded successfully!",
          error: "Uploading failed. Please try again.",
        });

        console.log(res);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("No file selected");
    }
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>Upload Image</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Select an image to upload</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
                {preview && (
                  <div className="mb-3">
                    <img src={preview} alt="Preview" className="img-fluid" />
                  </div>
                )}
                <Button variant="primary" type="submit">
                  Upload
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
