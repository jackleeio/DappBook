// src/components/MdxImg.tsx
import React from "react";

interface MdxImgProps {
  src: string;
  alt: string;
}

const MdxImg: React.FC<MdxImgProps> = ({ src, alt }) => (
  <div style={{ textAlign: "center" }}>
    <img src={src} alt={alt} style={{ maxWidth: "100%" }} />
  </div>
);

export default MdxImg;
