import { Sidebar } from "@/components/common/Sidebar";
import EditGym from "@/components/edit/EditGym.js";

export default function GymPage() {
  return (
    <div className="h-screen bg-gray-100">
      <Sidebar />
      <div className="p-4 mt-16 sm:ml-64">
        <div className="rounded bg-gray-50 bg-white lg:w-2/4 w-full">
          <div className="p-2">
            <EditGym />
          </div>
        </div>
      </div>
    </div>
  );
}
