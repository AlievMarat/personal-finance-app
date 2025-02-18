import { Link } from "react-router-dom";
import "./smallServiceTitle.css";
interface ITitle {
  title: string;
  route: string;
  linkTitle?: string;
}
export function SmallServiceTitle({
  title,
  route,
  linkTitle = "See Details",
}: ITitle) {
  return (
    <div className="title-container">
      <p className="title">{title}</p>
      <Link
        to={route}
        style={{ textDecoration: "none" }}
        className="link-to--service"
      >
        <p className="link-to--service">
          {linkTitle}
          <svg
            className="link-to--service-vector"
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.765312 0.984696L4.51531 4.7347C4.55018 4.76952 4.57784 4.81088 4.59671 4.85641C4.61558 4.90193 4.62529 4.95073 4.62529 5.00001C4.62529 5.04929 4.61558 5.09809 4.59671 5.14361C4.57784 5.18914 4.55018 5.23049 4.51531 5.26532L0.765313 9.01532C0.712867 9.06783 0.646022 9.10359 0.57324 9.11808C0.500458 9.13258 0.425012 9.12515 0.356454 9.09674C0.287895 9.06834 0.229307 9.02023 0.188105 8.9585C0.146903 8.89678 0.124942 8.82422 0.125 8.75001L0.125 1.25001C0.124941 1.1758 0.146903 1.10324 0.188105 1.04152C0.229306 0.979793 0.287895 0.931684 0.356453 0.903276C0.425012 0.874868 0.500458 0.867442 0.57324 0.881936C0.646022 0.89643 0.712867 0.932192 0.765312 0.984696Z"
              fill="#696868"
            />
          </svg>
        </p>
      </Link>
    </div>
  );
}
