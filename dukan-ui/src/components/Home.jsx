import RightCard from "./RightCard";

import { Sidebar } from "./Sidebar";
import "/src/App.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <RightCard />
    </div>
  );
};

export default Home;
