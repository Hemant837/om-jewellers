import NavLinks from "./Navlinks";
import NavActions from "./NavActions";

const Navbar = () => {
  return (
    <header className="flex sticky top-0 z-10 justify-around shadow bg-orange-100 h-20 items-center">
      <a href="/" className="text-3xl font-bold">
        Om Jewellers
      </a>
      <NavLinks />
      <NavActions />
    </header>
  );
};

export default Navbar;
