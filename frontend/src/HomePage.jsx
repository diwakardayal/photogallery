/** @format */

import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { parseDate } from "./utils";
import { useImage } from "./hooks";
import { fetchImages } from "./services/image";

export default function HomePage() {
  // eslint-disable-next-line no-unused-vars
  // const { images, getImages } = useImage();
  const [images, setImages] = useState([]);

  async function fetchBlogs() {
    const res = await fetchImages();
    setImages(res);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Container style={{ maxWidth: "80%" }}>
        <Row className="w-100" style={{ marginTop: "2rem" }}>
          {images &&
            images.map((image, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="image-col"
              >
                <div className="image-container">
                  <img
                    src={image.image_url}
                    alt={`Gallery image ${index + 1}`}
                    className="gallery-image"
                  />
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

let images = [
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
  {
    id: 1,
    image_url:
      "https://images.pexels.com/photos/22475982/pexels-photo-22475982/free-photo-of-historic-stone-house-with-a-roof-overgrown-with-grass-in-an-icelandic-fjord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    image_url:
      "https://images.pexels.com/photos/22475982/pexels-photo-22475982/free-photo-of-historic-stone-house-with-a-roof-overgrown-with-grass-in-an-icelandic-fjord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/dgwonhl7c/image/upload/v1717205561/photo_gallery/e8i600j8mlzqzkz4bmne.jpg",
  },
];
