import NavLinks from "./Navlinks";
import NavActions from "./NavActions";

const Navbar = () => {
  return (
    <div className="flex justify-around shadow bg-orange-100 h-20 items-center">
      <header className="text-xl font-bold">Om Jewellers</header>
      <NavLinks />
      <NavActions />
    </div>
  );
};

export default Navbar;
