import Main from "./experience/main";
import Works from "./[work]/work";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log("data: ", res.results);
  return (
    <>
      <Main />
      <div className="row">
        <div className="col-lg-8 offset-lg-2 mt-5 text-center pt-5">
          <h2>Selected works</h2>
        </div>

        <div className="col-12 col-xl-8 offset-xl-2 mt-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 mb-5">
            {res.results.map((movie) => (
              <Works
                key={movie.id}
                title={movie.title}
                imageSrc={movie.backdrop_path}
                id={movie.id}
                tag={movie.genre_ids}                
              />
              // console.log(movie.genre_ids)
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
