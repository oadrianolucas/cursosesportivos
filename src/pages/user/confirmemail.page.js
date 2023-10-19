import { ConfirmEmail } from "@/components/ConfirmEmail";
import { Navbar } from "@/components/common/Navbar";

export default function ConfirmEmailPage() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center
      justify-center px-4 py-8 mx-auto"
      >
        <ConfirmEmail />
      </div>
    </>
  );
}
