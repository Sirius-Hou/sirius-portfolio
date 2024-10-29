import { useEffect } from "react";

function ScrollToSection({ sectionId }) {
  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [sectionId]);

  return null;
}

export default ScrollToSection;