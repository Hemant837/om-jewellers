const NavLinks = () => {
  return (
    <nav>
      <ul className="flex w-[32rem] justify-between text-md font-semibold uppercase">
        <li>
          <a className="cursor-pointer">Jewelry</a>
        </li>
        <li>
          <a className="cursor-pointer">Collection</a>
        </li>
        <li>
          <a className="cursor-pointer">About Us</a>
        </li>
        <li>
          <a className="cursor-pointer">Blog</a>
        </li>
        <li>
          <a className="cursor-pointer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
