import { Sidebar } from "@/components/common/Sidebar";

export default function DashboardPage() {
  return (
    <div className="h-screen bg-gray-100">
      <Sidebar />
      <div className="p-4 mt-3 sm:ml-64">
        <div
          className="p-4 border-2 border-gray-200 border-dashed 
        rounded-lg dark:border-gray-700 mt-14"
        >
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Exemplo de bloco */}
            <div
              className="flex items-center justify-center 
            h-24 rounded bg-gray-50 dark:bg-gray-800"
            >
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            {/* Adicione mais blocos conforme necessário */}
          </div>
          {/* Continue adicionando seções de blocos conforme necessário */}
        </div>
      </div>
    </div>
  );
}
