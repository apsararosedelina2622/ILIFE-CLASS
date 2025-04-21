// import React, { useState } from "react";

// const ToggleButton = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [style, setStyle] = useState({
//     height: "0px",
//     opacity: 0,
//     overflow: "hidden",
//     transition: "all 0.5s ease",
//   });

//   const toggleContent = () => {
//     if (isVisible) {
//       // Hide effect
//       setStyle({
//         height: "0px",
//         opacity: 0,
//         overflow: "hidden",
//         transition: "all 0.5s ease",
//       });
//     } else {
//       // Show effect
//       setStyle({
//         height: "100px", // Adjust this based on your content's height
//         opacity: 1,
//         overflow: "hidden",
//         transition: "all 0.5s ease",
//       });
//     }
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       {/* Toggle Button */}
//       <button onClick={toggleContent} style={{ padding: "10px 20px", cursor: "pointer" }}>
//         {isVisible ? "Hide Content" : "Show Content"}
//       </button>

//       {/* Smooth Content */}
//       <div style={style}>
//         <h3>This is the content!</h3>
//         <p>You can hide or show this section with a smooth effect by clicking the button above.</p>
//       </div>
//     </div>
//   );
// };

// export default ToggleButton;

import React, { useState } from "react";
import { Container, Button, Collapse } from "react-bootstrap";

const ProductDescription = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container className="mt-4"  onClick={() => setIsVisible(!isVisible)}>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
        <h5 className="mb-0">Description</h5>
        <Button
          
        >
          {isVisible ? "-" : "+"}
        </Button>
      </div>

      <Collapse in={isVisible}>
        <div className="mt-3">
          <p className="text-secondary">
            In WooCommerce, a product description refers to the written content
            that provides information about a specific product listed on an
            online store. It serves to inform potential customers about the
            features, benefits, specifications, and other relevant details of
            the product. A well-crafted product description can play a crucial
            role in influencing a customer's purchasing decision.
          </p>
          <p className="text-secondary">
            In WooCommerce, you can create and manage product descriptions
            through the WordPress dashboard. Each product has its own page
            where you can input and format the description, add images, set
            prices, and manage other product-related details. Effective product
            descriptions are essential for e-commerce success as they help
            customers make informed decisions and contribute to a positive
            shopping experience.
          </p>
        </div>
      </Collapse>
    </Container>
  );
};

export default ProductDescription;

