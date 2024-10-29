import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

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

  const iframeWidth = Math.min(dimensions.width * 0.8, 800); // 80% of window width or max 800px
  const iframeHeight = Math.min(dimensions.height * 0.8, 1200); // 80% of window height or max 1200px

  return (
    <Container fluid className="resume-section">
      {/* Display PDF */}
      <Row className="resume justify-content-center">
        <iframe
          src={pdf}
          width={iframeWidth}
          height={iframeHeight}
          style={{ border: "none" }}
          title="Resume"
        />
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