import { Login } from "@/components/Login";
import { Navbar } from "@/components/common/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center
      justify-center px-4 py-8 mx-auto"
      >
        <Login />
      </div>
    </>
  );
}
