import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  }
  return(
    <>
    <h2>🏠 Welcome to the Home Page!</h2>
    <button onClick={handleClick}>Go to About </button>

    </>
  )

}
export default Home;
