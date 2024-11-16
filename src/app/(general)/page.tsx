import React from "react";
import Image from "next/image";
import home from "../../../public/images/home1.jpg";
export default function page() {
  return (
    <div>
      {" "}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <Image
          src={home}
          alt="home"
          fill
          style={{
            objectFit: "cover",
            objectPosition: " middle",
            backgroundRepeat: "no-repeat", // Add this line to prevent repeating
          }}
          placeholder="blur"
          quality={75}
        />
      </div>
    </div>
  );
}
