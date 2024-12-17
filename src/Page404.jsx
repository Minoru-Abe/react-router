import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">GoToHome</Link>
    </div>
  );
};
