import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../../utils/axios'
import alertError, { alertSuccess } from "../../utils/toastify";
import NavbarProfilePage from "../../components/Navbar/NavbarProfilePage/NavbarProfilePage";

export default function ProfilePage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const fetchUser = async () => {
        try {
            let { data } = await axios.get(`/profile`, {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });

            setUsername(data.username);
            setEmail(data.email);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios({
                url: `/account`,
                method: "DELETE",
                headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
                },
            });

            localStorage.clear();
            navigate("/login");
            alertSuccess(data?.message, "message");
        } catch (error) {
            alertError(error.response?.data?.message || error.message, "error");
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);
    
    return (
        <>
            <NavbarProfilePage />
            <div
                style={{ marginTop: "200px" }}
                className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
            >
                <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your Username
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    value={username}
                    disabled
                    />
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    value={email}
                    disabled
                    />
                </div>
                <Link
                    to={"/editprofile"}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 me-2"
                >
                    Edit Profile
                </Link>
                <Link
                    onClick={handleDeleteSubmit}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Delete Account
                </Link>
                </form>
            </div>
        </>
    )
}