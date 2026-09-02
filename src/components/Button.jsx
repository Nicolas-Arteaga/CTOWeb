import React from "react";
import { WHATSAPP } from "../constants";

const Button = ({ styles, label = "Escribime por WhatsApp" }) => (
  <a
    href={WHATSAPP}
    target="_blank"
    rel="noreferrer"
    className={`inline-block py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {label}
  </a>
);

export default Button;
