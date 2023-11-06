import { BsFacebook } from "react-icons/bs";
import FooterBItem from "./FooterBItem";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const FooterIcons = () => {
  return (
    <>
      <FooterBItem icon={<BsFacebook />} text="Facebook" />
      <FooterBItem icon={<AiOutlineInstagram />} text="Instagram" />
      <FooterBItem icon={<AiOutlineWhatsApp />} text="Whatsapp" />
    </>
  );
};

export default FooterIcons;
