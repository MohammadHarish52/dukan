import Payments from "./Payments";
import SearchBar from "./SearchBar";
import "/src/App.css";

const RightCard = () => {
  return (
    <div className="Maincard">
      <SearchBar />
      <Payments />
    </div>
  );
};

export default RightCard;
