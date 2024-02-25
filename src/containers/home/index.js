import Movie from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';
function Home() {
    return (
        <div>
           <FeaturedMovie movie={Movie.results[0]}/>
           <Categories categories={Genres.genres.slice(0,5)}/>
        </div>
    );
}

export default Home;