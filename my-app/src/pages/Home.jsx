import Component from "../Component/MovieCard";
import MovieGallery from "../Component/MovieGallery";
import { movies } from "../data";


function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <div className="mx-auto max-w-5xl p-8">
        {movies.slice(0, 3).map((movie) => (
          <Component key={movie.id} title={movie.title} year={movie.year} />
        ))}
      </div>
      <h2 className="mt-6 text-xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
      <div className="mx-auto mt-8 max-w-md">
        <MovieGallery />
      </div>

    </div>
  );
}

export default Home;