import "./summary.css";
interface ISummary {
  title: string;
  balance: number;
  color?: string;
}
export function Summary({ title, balance, color }: ISummary) {
  return (
    <div className="summary-card" style={{ backgroundColor: color }}>
      <p className="summary-card__title">{title}</p>
      <p className="summary-card__balance">{balance}</p>
    </div>
  );
}
