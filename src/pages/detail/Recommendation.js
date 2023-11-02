import React from 'react';
import { useRecommendMovieQuery } from '../../features/movieApi';
import ErrorPage from '../../components/ErrorPage';
import VideoCompo from './VideoCompo';
import { useNavigate, useParams } from 'react-router';
import { Image, Shimmer } from 'react-shimmer';
import Loading from '../../components/Loading';

const Recommendation = () => {
  const nav = useNavigate();
  const { id } = useParams();

  // Call the hook unconditionally
  const { isError, isLoading, data, error } = useRecommendMovieQuery({ id });

  console.log('Data:', data); // Log the entire data object
  console.log('Recommendations:', data?.recommendations); // Log the recommendations array
  console.log('Error:', error); // Log any error

  if (isLoading) {
    return Loading;
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }

  // if (id === undefined) {
  //   return <h1>No recommendations available because id is undefined.</h1>;
  // }

  if (!data || !data.results || data.results.length === 0) {
    console.log('No recommendations available.'); // Log if there are no recommendations
    return;
  }

  return (
    <div className='h-[400px] '>
      <h2 className='text-3xl'>Recommended Movies</h2>
      <div className=' overflow-x-auto  flex gap-5'>
        {data.results.map((recommendation) => (
          <div
            key={recommendation.id}
            className='  min-w-[25%] cursor-pointer '
            onClick={() => nav(`/movie/detail/${recommendation.id}`)}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
              fallback={<Shimmer width={300} height={350} />}
            />
            <h3 className='text-xl'>{recommendation.title}</h3>
            <p>{recommendation.overview.substring(0, 100) + '....'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
