import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const data = [
  { name: "Ativos", value: 400 },
  { name: "Inativos", value: 300 },
];

const colors = ["#ef4444", "#22c55e"];

export function ExampleChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            dataKey="value"
            cx={55}
            cy={80}
            labelLine={false}
            innerRadius={30}
            outerRadius={48}
            fill="#8884d8"
            startAngle={0}
            endAngle={180}
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      )}
    </>
  );
}
