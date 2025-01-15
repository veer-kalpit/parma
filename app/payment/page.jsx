"use client";

import React, { useState } from "react";
import Gpay from "../../public/gpay.png";
import Pnb from "../../public/pnb.png";
import Sbi from "../../public/sbi.png";
import Image from "next/image";
import styles from "../../styles/Payment.module.css";

const paymentMethods = [
  {
    image: Gpay,
    alt: "Gpay card",
    details: [
      { label: "Upi No.", value: "9473812000" },
      { label: "Upi id", value: "9473812000@okbizaxis" },
    ],
    button: "Copy UPI details",
  },
  {
    image: Pnb,
    alt: "Pnb card",
    details: [
      { label: "Pnb A/C No", value: "3865002100004650" },
      { label: "IFSC", value: "PUNB386500" },
    ],
    button: "Copy bank details",
  },
  {
    image: Sbi,
    alt: "SBI card",
    details: [
      { label: "SBI A/C", value: "31151279024" },
      { label: "IFSC", value: "SBIN002510" },
    ],
    button: "Copy bank details",
  },
];

const Page = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = (details) => {
    const textToCopy = details.map((d) => `${d.label}: ${d.value}`).join("\n");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => setCopySuccess("Copied!"))
      .catch(() => setCopySuccess("Failed to copy"));
  };

  return (
    <div>
      <div className={styles.container}>
        {paymentMethods.map((method, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={method.image}
              alt={method.alt}
              width={210}
              height={311}
            />

            <button
              className={styles.button}
              onClick={() => handleCopy(method.details)}
            >
              {method.button}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.bg}></div>
    </div>
  );
};

export default Page;
