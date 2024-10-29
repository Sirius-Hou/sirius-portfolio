import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set up the PDF worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.mjs`;

// Link to your PDF file (replace with your own)
import pdf from "../../assets/Resume - Sirius Hou.pdf";

function Resume() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = Math.min(dimensions.width / 800, dimensions.height / 1200);

  return (
    <Container fluid className="resume-section">
      {/* Display PDF */}
      <Row className="resume justify-content-center">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={scale} />
        </Document>
      </Row>

      {/* Bottom Download Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;