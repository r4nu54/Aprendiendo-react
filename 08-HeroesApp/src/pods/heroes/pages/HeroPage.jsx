import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers/getHeroesById';
import { useMemo } from 'react';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroesById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/Marvel" />;
  }

  const { superhero, alter_ego, publisher, first_appearance, characters } = hero;

  const heroImageUrl = `/src/assets/${id}.webp`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={heroImageUrl} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3"> Characters </h5>
        <p>{characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Volver
        </button>
      </div>
    </div>
  );
};
