
import MoviesCarousel from "@/components/MoviesCarousel";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies} from "@/lib/getMovies";
export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <div>
     
{/* carousel Banner wrapper */}
<CarouselBannerWrapper/>
<div className="flex flex-col space-y-2 xl:-mt-48">
  <MoviesCarousel movies={upcomingMovies} title="upcoming"/>
  <MoviesCarousel movies={topRatedMovies} title="top Rated" />
  <MoviesCarousel movies={popularMovies} title="popular Movies" />
</div>
    </div>
  );
}
