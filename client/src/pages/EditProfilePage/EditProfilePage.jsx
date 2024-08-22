import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../utils/axios'
import alertError, { alertSuccess } from "../../utils/toastify";
import NavbarProfilePage from "../../components/Navbar/NavbarProfilePage/NavbarProfilePage";

export default function EditProfilePage() {
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

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios({
                url: `/profile`,
                method: "PUT",
                data: {
                username: username,
                email: email,
            },
                headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
            },
        });

            localStorage.getItem("access_token");
            alertSuccess(data?.message, "message");
            await fetchUser();
            navigate("/profile");
        } catch (error) {
            console.log(error.response.data.message);
            alertError(error.response?.data?.message || error.message, "error");
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
                <form className="max-w-sm mx-auto" onSubmit={handleEditSubmit}>
                <div className="mb-5">
                    <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your Username
                    </label>
                    <input
                    type="text"
                    id="username"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
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
                    required
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Save changes
                </button>
                </form>
            </div>
        </>
    )
}
