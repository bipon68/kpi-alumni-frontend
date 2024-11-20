import { FC } from "react";

const LoginPage: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 relative overflow-hidden">
      {/* Floating Squares */}
      <ul className="absolute w-full h-full top-0 left-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="nora-box w-16 h-16 bg-white bg-opacity-30 rounded-md animate-floating"
            style={{
              position: "absolute",
              animation: `floating 10s linear infinite ${Math.random() * 2}s`, // Randomize the start delay for a staggered effect
              top: "0%", // Start from the top
              left: `${Math.random() * 100}%`, // Random horizontal position
            }}
          ></li>
        ))}
      </ul>

      {/* Login Container */}
      <div className="bg-white bg-opacity-5  shadow-lg rounded-lg p-8 w-[435px] relative">
        <header className="flex justify-center gap-10 items-center mb-16">
          <img
            src="/src/assets/images/kpi-alumni-logo.png"
            alt="Logo"
            className="w-12 h-12 mb-4"
          />
          <h1 className="text-[40px] font-semibold text-white">Login</h1>
        </header>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="border bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="border bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
          />
          <button
            type="submit"
            className="bg-white text-2xl font-semibold rounded-md py-2 text-blue-400 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
