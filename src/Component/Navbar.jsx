import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/" className="font-bold text-xl uppercase">
        Project
      </Link>
      <div className="flex gap-5">
        <Link
          to="/income"
          className="bg-green-500 hover:bg-green-700 px-3 py-2 rounded font-bold text-white"
        >
          Income
        </Link>
        <Link
          to="/expense"
          className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded font-bold text-white"
        >
          Expense
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
