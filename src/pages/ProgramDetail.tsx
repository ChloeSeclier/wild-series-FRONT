import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ButtonRetour from "../components/ButtonRetour";
import ProgramDeleteForm from "./ProgramDeleteForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

export default function ProgramDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);
  // console.log(id==="1");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    // program && (
    <>
      <ButtonRetour />
      {/* partie à supprimer si on met le back */}
      {id === "1" ? (
        <div className="container-detail">
          <div className="container-detail-1">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrVOEJBhur8BOjMgBwv0e-35wjy6AEG5Nv1tF4J4hzPlD6OGZZxwOGYGlq4ihhWbMzp6qs-2uVoZ12J7WcfOkXtmyRP3TTmwE_1taS8g"
              alt="poster"
            />
          </div>
          <div className="container-detail-2">
            <h1>Night Agent</h1>
            <p>
              <b className="underline">Synopsis :</b>{" "}
            </p>
            <p>
              L'agent du FBI, Peter Sutherland, se retrouve impliqué dans une
              vaste conspiration. Pour sauver la nation, Peter se lance dans une
              chasse à l'homme afin d'arrêter une taupe russe qui évolue dans
              les plus hautes sphères du gouvernement américain.
            </p>
            <p>
              <b className="underline">Origine :</b>
            </p>
            <p>U.S.A.</p>
            <p>
              <b className="underline">Année :</b>
            </p>
            <p>2023</p>
          </div>
        </div>
      ) : (
        <div className="container-detail">
          <div className="container-detail-1">
            <img
              src="https://m.media-amazon.com/images/I/91YtjKGJk0L.jpg"
              alt="poster"
            />
          </div>
          <div className="container-detail-2">
            <h1>The good place</h1>
            <p>
              <b className="underline">Synopsis :</b>{" "}
            </p>
            <p>
              Après avoir été percutée et tuée par un semi-remorque, Eleanor se
              réveille dans ce qui semble être la vie après la mort. Lorsque
              Michael, l'Architecte des lieux, lui apprend qu'elle est au "Bon
              endroit" compte tenu ses bonnes actions, elle réalise qu'elle a
              été confondue avec quelqu'un d'autre. L'arrivée d'Eleanor pourrait
              bien mettre en péril l'équilibre de ce monde où personne ne jure
              ou ne boit de l'alcool à outrance. La jeune femme va devoir
              travailler sur elle-même afin de devenir une meilleure personne si
              elle souhaite conserver sa place dans l'au-delà. Bien entendu,
              elle sera épaulée par de nouvelles connaissances à l'instar de
              Chidi, son "âme soeur" qui voit toujours le bon côté des gens, ses
              voisins un peu trop parfaits Tahani et Jianyu, et enfin Janet,
              véritable source de savoir ambulante...
            </p>
            <p>
              <b className="underline">Origine :</b>
            </p>
            <p>U.S.A.</p>
            <p>
              <b className="underline">Année :</b>
            </p>
            <p>2016</p>
          </div>
        </div>
      )}
      {/* fin de la partie à supprimer */}

      {/* <div className="container-detail">
          <div className="container-detail-1">
            <img src={program.poster} alt="poster" />
          </div>
          <div className="container-detail-2">
            <h1>{program.title}</h1>
            <p>
              <b className="underline">Synopsis :</b>{" "}
            </p>
            <p>{program.synopsis}</p>
            <p>
              <b className="underline">Origine :</b>
            </p>
            <p> {program.country}</p>
            <p>
              <b className="underline">Année :</b>
            </p>
            <p> {program.year}</p>
          </div>
        </div> */}
      <div className="selection-choix">
        <Link to={`/programs/${id}/edit`}>Modifier ✏️</Link>
        <ProgramDeleteForm id={id}>Supprimer ❌</ProgramDeleteForm>
      </div>
    </>
    // )
  );
}
