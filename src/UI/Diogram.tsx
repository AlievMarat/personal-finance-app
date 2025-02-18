import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useTypedSelector } from "../customHooks/useTypedSelector";
import "../UI/Diogram.css";
import { useDarkMode } from "../customHooks/useDarkMode";
export default function MyDonutChart() {
  const budgets = useTypedSelector((state) => state.board.data.budgets) || [];
  const darkMode = useDarkMode();
  const reversedBudgets = [...budgets]
    .sort((a, b) => b.maximum - a.maximum)
    .reverse();
  const sum = budgets.reduce((acc, budget) => acc + budget.maximum, 0);

  if (!reversedBudgets.length) return null;

  return (
    <PieChart width={240} height={240} className="diogram">
      <Pie
        data={reversedBudgets}
        startAngle={90}
        endAngle={450}
        cx="50%"
        cy="50%"
        innerRadius={81}
        outerRadius={120}
        stroke="none"
        fill="#8884d8"
        dataKey="maximum"
        nameKey="category"
        label={false}
      >
        {reversedBudgets.map((entry) => (
          <Cell key={entry.category} fill={entry.theme} />
        ))}
      </Pie>
      <Tooltip />
      <g>
        <text
          x="50%"
          y="43%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="32px"
          font-weight="bold"
          fill={darkMode ? "#201F24" : "#fff"}
        >
          0
        </text>
        <text
          x="50%"
          y="50%"
          dy="8px"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16px"
          fill="#696868"
        >
          {`of ${sum}$ limit`}
        </text>
      </g>
    </PieChart>
  );
}
