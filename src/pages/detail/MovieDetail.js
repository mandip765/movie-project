import React from 'react'
import { useParams } from 'react-router'
import VideoCompo from './VideoCompo';
import { useGetMovieDetailQuery } from '../../features/movieApi';
import Recommendation from './Recommendation';

const MovieDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetMovieDetailQuery(id);
  return (
    <div className='p-6 space-y-5'>
      <h1 className='text-2xl'>{data?.original_title}</h1>

      <VideoCompo id={id} />
      <p>{data?.overview}</p>
      <Recommendation />
    </div>
  )
}

export default MovieDetail
