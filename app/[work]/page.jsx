export default async function WorkDetails({ params }) {
  const { work } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${work}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div className="col-lg-8 offset-lg-2">
      <div class="card text-bg-dark">
        <img src={imagePath + res.backdrop_path} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h1 class="card-title">{res.title}</h1>
          <p class="card-text">{res.overview}</p>          
        </div>
      </div>
    </div>
  );
}
