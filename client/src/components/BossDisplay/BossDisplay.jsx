import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BossDisplay.css";

function BossDisplay() {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    const fetchBosses = async () => {
      const response = await axios.get("http://localhost:3310/api/bosses");
      setBosses(response.data);
    };

    fetchBosses();
  }, []);

  return (
    <div
      className="bosses-card-container"
      style={{
        backgroundImage:
          "url('https://images8.alphacoders.com/118/thumb-1920-1186452.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {bosses.map((boss) => (
        <div key={boss.id} className="boss-card">
          <Link to={`/boss/${boss.id}`}>
            <div className="boss-card-image">
              <img src={boss.image2} alt={boss.name} className="boss-image" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BossDisplay;
