import React from "react";

export default function FirstLetterCapital(text: String) {
  return (
    <>
      <span>{text.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</span>
    </>
  );
}
