import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';

type Props = {
params:{
  searchId: string;
};
};

const page = async ({params: {searchId} }:Props) => {
 if(!searchId) notFound();
 const termToUse = decodeURI(searchId);
 const movies = await getSearchedMovies(termToUse);
 const popularMovies = await getPopularMovies();
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for {termToUse} </h1>

        {/* Ai suggestion */}
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="Movies you may also like " movies={popularMovies} isVertical />
      </div> 
      </div>
  )
}

export default page
