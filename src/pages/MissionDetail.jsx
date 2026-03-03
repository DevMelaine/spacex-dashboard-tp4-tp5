import { useParams } from "react-router-dom";

function MissionDetail() {
  const { id } = useParams();
  return <h2>Détail mission : {id}</h2>;
}

export default MissionDetail;