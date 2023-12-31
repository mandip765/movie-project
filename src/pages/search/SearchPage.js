import React from 'react'
import { Image, Shimmer } from 'react-shimmer'
import { useNavigate, useParams } from 'react-router';
import { useSearchMovieQuery } from '../../features/movieApi';
import Loading from '../../components/Loading';
import ErrorPage from '../../components/ErrorPage';
const SearchPage = () => {

  const { query } = useParams();
  const nav = useNavigate();

  const { isLoading, isError, error, data } = useSearchMovieQuery(query);
  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    console.log(error);
    return <ErrorPage error={error} />
  }

  if (data.results.length === 0) {
    return <h1 className='text-red-800 text-2xl p-10'>OH!     Unfortunately, no results were found for "{query}"
    </h1>
  }

  return (
    <div className='grid grid-cols-3 p-5 gap-5'>
      {data && data.results.map((movie) => {
        return <div key={movie.id} className='cursor-pointer hover:scale-105 duration-75 ease-in' onClick={() => nav(`/movie/detail/${movie.id}`)}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            fallback={<Shimmer width={300} height={350} />}
          />

          <h1>{movie.overview.substring(0, 100) + '....'}</h1>
        </div>
      })}

    </div>
  )
}

export default SearchPage