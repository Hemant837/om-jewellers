const NavLinks = () => {
  return (
    <nav>
      <ul className="flex w-[32rem] justify-between text-md font-semibold uppercase">
        <li>
          <a href="/jewelry" className="cursor-pointer">
            Jewelry
          </a>
        </li>
        <li>
          <a href="/collection" className="cursor-pointer">
            Collection
          </a>
        </li>
        <li>
          <a href="/aboutus" className="cursor-pointer">
            About Us
          </a>
        </li>
        <li>
          <a className="cursor-pointer">Blog</a>
        </li>
        <li>
          <a href="/contact" className="cursor-pointer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
