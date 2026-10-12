import { WHATSAPP } from "../constants";
import WhatsAppIcon from "./WhatsAppIcon";

const GetStarted = () => (
  <a
    href={WHATSAPP}
    target="_blank"
    rel="noreferrer"
    aria-label="Escribime por WhatsApp"
    className="whatsapp-bubble"
  >
    <WhatsAppIcon />
  </a>
);

export default GetStarted;
