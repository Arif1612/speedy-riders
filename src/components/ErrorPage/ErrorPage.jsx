import { useRouteError } from "react-router-dom";
import img from "../../assets/img404.jpg";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <img src={img} className="w-full max-h-screen" alt="" />
    
    </div>
  );
}
