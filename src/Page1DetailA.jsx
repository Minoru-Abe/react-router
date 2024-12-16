import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const {state} = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);
  
  return (
    <div>
      <h1>Page1DetailA</h1>
      <br />
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
