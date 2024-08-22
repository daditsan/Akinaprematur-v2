import { useState } from "react";
import axios from "../../utils/axios";
import alertError from "../../utils/toastify";
import NavbarGamePage from "../../components/Navbar/NavbarGamePage/NavbarGamePage";
// import { Link } from "react-router-dom";

export default function GamePage() {
  const [gameState, setGameState] = useState("not_start");
  const [AIResponse, setAIResponse] = useState({});
  const [AIRequest, setAIRequest] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const startGame = async () => {
    try {
      let { data } = await axios({
        method: "GET",
        url: `/thread`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      localStorage.setItem("threadId", data.threadId);
      console.log(data);
    } catch (error) {
      alertError(error.response?.data?.message || error.message, "error");
      console.error(error);
    }
  };

  const play = async (message) => {
    try {
      setIsLoading(true);
      let { data } = await axios({
        method: "POST",
        url: `/message`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },

        data: {
          threadId: localStorage.getItem("threadId"),
          message: message,
        },
      });

      let { messages } = data;

      let abc = messages[0];
      let def = abc[0];

      setIsLoading(false);

      setAIResponse(def["text"]["value"]);
      setAIRequest("");
    } catch (error) {
      setIsLoading(false);
      alertError(error.response?.data?.message || error.message, "error");
      console.error(error);
    }
  };

  return (
    <>
      <NavbarGamePage />
      <div style={{  backgroundColor: '#2B2A4C', height: '100vh' }}>
      <div
        className="flex flex-col items-center justify-center min-h-screen pt-16"
        style={{ paddingTop: "300px" }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mb-5">
          <h1 className="text-xl font-semibold mb-4">Akinaprematur:</h1>
          <p className="text-gray-600">
            {Object.keys(AIResponse).length !== 0
              ? JSON.stringify(AIResponse)
              : ""}
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        {gameState === "not_start" && (
          <button
            onClick={() => {
              setGameState("started");
              startGame();
            }}
            className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Start Game
          </button>
        )}

        {gameState === "started" && (
          <ul>
            <li>
              <button
                type="button"
                onClick={() => {
                  setGameState("ongoing");
                  play("character");
                }}
                className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Character
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setGameState("ongoing");
                  play("animal");
                }}
                className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Animal
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setGameState("ongoing");
                  play("Thing");
                }}
                className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Thing
              </button>
            </li>
          </ul>
        )}

        {
          // isLoading && (<p>Loading...</p> )
          isLoading && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // style={{ justifyContent: 'center', alignItems: 'center' }}
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )
        }

        {Object.keys(AIResponse).length !== 0 && gameState === "ongoing" && (
          <ul>
            <li>
              <button
                type="button"
                onClick={() => play("yes")}
                className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Yes
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => play("no")}
                className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                No
              </button>
            </li>
          </ul>
        )}
      </div>
      </div>
    </>
  );
}
