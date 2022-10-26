import { Outlet } from "@remix-run/react";

const AuthRoute = () => {
  return (
    <main className="bg-auth-gradient h-full w-full text-white flex justify-center items-center gap-4">
      <div className="p-5 w-1/3 text-left">
        <h1 className="text-6xl">Welcome</h1>
        <h2 className="text-lg mt-1 text-gray-300">
          This is React Remix Todo App. The purpose of this project is to groom
          myself and learn awesomeness of Web3.
        </h2>
      </div>
      <div className="flex">
        <Outlet />
      </div>
    </main>
  );
};
export default AuthRoute;
