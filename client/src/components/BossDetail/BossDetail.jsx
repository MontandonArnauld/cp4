import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BossDetail.css";

function BossDetail() {
  const { id } = useParams();
  const [boss, setBoss] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/bosses/${id}`)
      .then((response) => {
        setBoss(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading data:", err);
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div
      className="boss-detail"
      style={{
        backgroundImage:
          "url('https://images8.alphacoders.com/118/thumb-1920-1186452.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <img src={boss.image1} alt={boss.name} className="boss-detail-img" />
      <div className="boss-detail-informations">
        <h2 className="boss-detail-name">{boss.name}</h2>
        <p>{boss.description}</p>
        <p>Location: {boss.location}</p>
        <p>Health: {boss.health}</p>
        <p>Defense: {boss.defense}</p>
        <p>Drops: {boss.drops}</p>
        <a href={boss.link} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

export default BossDetail;
