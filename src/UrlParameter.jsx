import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameter</h1>
      <p> ID is {id} </p>
      <p> name is {query.get("name")}; </p>
    </div>
  );
};
