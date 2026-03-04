import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/launches"
        );
        setMissions(response.data.slice(0, 10));
      } catch (err) {
        setError("Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  if (loading) return <p>Chargement...</p>; 
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Liste des missions</h1>

      {missions.map((mission) => (
  <div key={mission.id}>
    <Link to={`/mission/${mission.id}`}>
      <h3>{mission.name}</h3>
    </Link>
  </div>
))}
    </div>
  );
}

export default Home;