import { Img } from "components/App.styled";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
     <Link to="/">Повернутися на головну</Link>
      <Img src="../../public/404.jpeg" alt="Page not found"/>

    </div>
  )
}
