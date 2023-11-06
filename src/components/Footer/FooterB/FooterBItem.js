const FooterBItem = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-2">
      {icon}
      <a href="#" className="text-gray-900">
        {text}
      </a>
    </li>
  );
};

export default FooterBItem;
