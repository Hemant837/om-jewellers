import { RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";

const NavActions = () => {
  return (
    <div className="flex w-32 text-xl justify-between items-center">
      <RiSearch2Line />
      <RxPerson />
      <RiShoppingCartLine />
    </div>
  );
};

export default NavActions;
