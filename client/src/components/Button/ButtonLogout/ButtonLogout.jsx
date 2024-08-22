import { Link, useNavigate } from "react-router-dom";
import { alertSuccess } from "../../../utils/toastify";

export default function ButtonLogout() {
    const navigate = useNavigate();
  
    const handleLogout = async () => {
        localStorage.clear();
        alertSuccess(`You're signed out.`);
        navigate("/login");
    };
  
    return (
      <>
        <Link
          to={"/"}
          type="button"
          className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </>
    );
  }
  