import { CreateUser } from "@/components/Create/CreateUser";
import { Navbar } from "@/components/common/Navbar";

export default function CreateUserPage() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center
      justify-center px-4 py-8 mx-auto"
      >
        <CreateUser />
      </div>
    </>
  );
}
