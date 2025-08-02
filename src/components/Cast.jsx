import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../service/api.js';
import {
  CastWrapper,
  CastList,
  CastItem,
  CastImage,
  Placeholder
} from './Cast.styled.js';

function Cast() {
  const { id } = useParams(); 
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await API.Cast(id);
        setCastList(data || []);
      } catch (error) {
        console.error('Помилка завантаження акторського складу:', error);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <CastWrapper>
      {castList.length > 0 ? (
        <CastList>
          {castList.map(cast => (
            <CastItem key={cast.id}>
              {cast.profile_path ? (
                <CastImage 
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} 
                  alt={cast.name} 
                />
              ) : (
                <Placeholder>Фото недоступне</Placeholder>
              )}
              <p><strong>{cast.name}</strong></p>
              <p>{cast.character}</p>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>Нічого не знайдено.</p>
      )}
    </CastWrapper>
  );
}

export default Cast;