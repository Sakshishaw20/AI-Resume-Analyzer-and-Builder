import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" ">
      <div className="  flex gap-20" style={{ margin: "20px" }}>
        {/* <div className="bg-white content-center ">
          <Link to="/" className="pt-100px">
            <img
              src="https://cdn-icons-png.flaticon.com/512/12454/12454034.png"
              height={20}
              width={100}
            />
          </Link>
        </div> */}

        <div
          className="flex gap-20 text-white text-xl"
          style={{ alignItems: "flex-end" }}
        >
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/choose">Analyze</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
