import useAuthStore from "@/lib/stores/authStore";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { FC } from "react";
import { Link } from "react-router-dom";

const FormSection = () => {
  const { loginWithGoogle, loginWithGitHub, loading, user, logout } = useAuthStore();

  console.log(user);
  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        className=" bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        className=" bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Link to="" className="text-right text-white font-normal">
        Forgot password?
      </Link>
      <Button className="bg-white text-secondary text-lg py-1 hover:bg-secondary-100 transition-[background]">
        Submit
      </Button>
      <div className="flex items-center justify-center gap-2">
        <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
        <span className="text-white">or</span>
        <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
      </div>

      {/* Login With Google Button */}
      <Button onClick={loginWithGoogle} disabled={loading} className="bg-secondary-200 text-primary">
        <span>G</span>
        <span>Login with Google</span>
      </Button>
      {/* Login With Github Button */}
      <Button onClick={loginWithGitHub} disabled={loading} className="bg-secondary-200 text-primary">
        <span>G</span>
        <span>Login with Github</span>
      </Button>

      <button onClick={logout} type="button" className="bg-secondary-200 text-primary">
        Logout
      </button>

      {/* Signup Link */}
      <div className=" text-center !font-normal text-white ">
        Don't have an account?
        <Link to="/signup" className="font-semibold rounded-md py-2 text-blue-700 underline">
          {" "}
          Signup
        </Link>
      </div>
    </form>
  );
};

const LoginPage: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 relative overflow-hidden">
      {/* Floating Squares */}
      <ul className="absolute w-full h-full flex flex-wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="w-22 h-22 bg-white bg-opacity-30 rounded-md"
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `moveSquare ${Math.random() * 5 + 5}s infinite linear`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></li>
        ))}
      </ul>

      {/* Login Container */}
      <div className="bg-white bg-opacity-5 shadow-lg rounded-lg p-8 w-[435px] relative">
        <header className="flex justify-center gap-10 items-center mb-16">
          <img src="/src/assets/images/kpi-alumni-logo.png" alt="Logo" className="w-12 h-12 " />
          <h1 className="text-[40px] font-semibold text-white">Login</h1>
        </header>
        <FormSection />
      </div>

      <style>{`
        @keyframes moveSquare {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(
              ${Math.random() * 100}%,
              ${Math.random() * 100}%
            );
          }
          50% {
            transform: translate(
              ${Math.random() * 100}%,
              ${Math.random() * 100}%
            );
          }
          75% {
            transform: translate(
              ${Math.random() * 100}%,
              ${Math.random() * 100}%
            );
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
