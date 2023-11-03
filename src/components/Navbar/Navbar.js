import NavLinks from "./Navlinks";
import NavActions from "./NavActions";

const Navbar = () => {
  return (
    <header className="flex sticky top-0 z-10 justify-around shadow bg-orange-100 h-20 items-center">
      <h1 className="text-3xl font-bold">Om Jewellers</h1>
      <NavLinks />
      <NavActions />
    </header>
  );
};

export default Navbar;
