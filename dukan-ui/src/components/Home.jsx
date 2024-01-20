import RightCard from "./RightCard";
import SearchBar from "./SearchBar";

import { Sidebar } from "./Sidebar";
import "/src/App.css";

const Home = () => {
  return (
    <div className="home bg-gray-100 ">
      <Sidebar />
      <SearchBar />
      <RightCard />
    </div>
  );
};

export default Home;
