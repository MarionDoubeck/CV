import Navigation from "../components/Navigation";
import Hobbies from "../components/cognition/Hobbies";
import Chart from "../components/cognition/Chart";
import Logos from "../components/cognition/Logos";

const Cognition = () => {
  return (
    <div className="cognition">
      <Navigation />
      <div className="cognition-content">
        <Chart />
        <Logos />
        <Hobbies />
        
      </div>
    </div>
  );
};

export default Cognition;