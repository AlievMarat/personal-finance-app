import "./header.css";
interface ITitle {
  title: string;
  children?: React.ReactNode;
}
export default function Header({ title, children }: ITitle) {
  return (
    <header className="header">
      {title}
      {children}
    </header>
  );
}
