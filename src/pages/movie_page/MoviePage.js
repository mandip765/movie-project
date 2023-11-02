import React from 'react'
import { useParams } from 'react-router'
import { useMovieByPageQuery } from '../../features/movieApi';
import CommonMovie from '../../components/CommonMovie';

const MoviePage = () => {

  const { category, page } = useParams();
  const { isLoading, isError, error, data } = useMovieByPageQuery({
    category,
    page
  });
  return (
    <>
      <CommonMovie isError={isError} isLoading={isLoading} category={category} error={error} data={data} />
    </>
  )
}

export default MoviePage
