import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../../utils/axios'
import alertError, { alertSuccess } from "../../utils/toastify";

import NavbarRegisterPage from "../../components/Navbar/NavbarRegisterPage/NavbarRegisterPage";

export default function RegisterPage() {
    const [username, setCreateUsername] = useState("");
    const [email, setCreateEmail] = useState("");
    const [password, setCreatePassword] = useState("");

    const navigate = useNavigate();

    const createUser = async (event) => {
        event.preventDefault();
        try {
            let { data } = await axios({
                method: "POST",
                url: "/register",
                data: {
                    username: username,
                    email: email,
                    password: password,
                },
            });

            setCreateUsername("");
            setCreateEmail("");
            setCreatePassword("");
            navigate("/login");
            alertSuccess(data?.message, "message")
        } catch (error) {
            alertError(error.response?.data?.message || error.message, "error");
            console.error(error);
        }
    };

    return (
        <>
            <NavbarRegisterPage />
            <div
                style={{
                paddingTop: "165px",
                width: "100%",
                justifyContent: "center",
                display: "flex",
                }}
            >
            <form
                className="max-w-sm mx-auto"
                onSubmit={createUser  }
                >
            <div className="mb-5">
                <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                Username
                </label>
                <input
                type="text"
                id="username"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="enter username"
                required=""
                value={username}
                onChange={(event) => {
                    setCreateUsername(event.target.value);
                }}
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                Email
                </label>
                <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@mail.com"
                required=""
                value={email}
                onChange={(event) => {
                    setCreateEmail(event.target.value);
                }}
                />
            </div>
            <div className="mb-1">
                <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                Password
                </label>
                <input
                type="password"
                id="password"
                placeholder="enter password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
                value={password}
                onChange={(event) => {
                    setCreatePassword(event.target.value);
                }}
                />
            </div>
            <div className="flex items-start mb-5"></div>
                <button
                    type="submit"
                    className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ width: "100%" }}
                >
                    Register
                </button>
                    <div style={{ justifyContent: "center", marginTop: "10px" }}>
                            <label
                            htmlFor="terms"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Have an account?{" "}
                            <Link
                                to={"/login"}
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Login here
                            </Link>
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}