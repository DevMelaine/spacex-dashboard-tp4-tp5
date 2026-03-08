import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AlertSystem from "../Components/AlertSystem";

function MissionDetail() {
  const { id } = useParams();

  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMission = async () => {
      try {
        let response;

        // first try to load by the provided id (SpaceX _id string)
        if (!/^[0-9]+$/.test(id)) {
          response = await axios.get(
            `https://api.spacexdata.com/v4/launches/${id}`
          );
        } else {
          // the URL contains only digits, the user may have supplied
          // a flight_number rather than a document id.  the v4 API
          // requires a query endpoint for that use‑case.
          const query = {
            query: { flight_number: Number(id) },
            options: { limit: 1 }
          };
          const res = await axios.post(
            "https://api.spacexdata.com/v4/launches/query",
            query
          );

          if (res.data.docs && res.data.docs.length > 0) {
            response = { data: res.data.docs[0] };
          } else {
            const notFound = new Error("not found");
            notFound.response = { status: 404 };
            throw notFound;
          }
        }

        setMission(response.data);
      } catch (err) {
        console.error(err);
        // show a friendlier message for 404, otherwise generic
        if (err.response?.status === 404) {
          setError("Mission introuvable");
        } else {
          setError("Erreur lors du chargement");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMission();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) {
    return <AlertSystem message={error} type="error" />;
  }

  return (
    <div className="card mission-detail">
      <h2>{mission.name}</h2>
      <p>{mission.details}</p>

      {mission.links?.patch?.small && (
        <img src={mission.links.patch.small} alt={mission.name} />
      )}
      <p>
        <Link to="/" className="back-link">
          ← Retour à la liste
        </Link>
      </p>
    </div>
  );
}

export default MissionDetail;