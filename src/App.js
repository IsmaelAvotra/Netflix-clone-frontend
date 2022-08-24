import { useState } from 'react'
import { useEffect } from 'react'
import ApiMovie from './ApiMovie'
import './App.css'
import MovieSection from './components/MovieSection'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

function App() {
  const [moviesList, setMoviesList] = useState([])
  const [futuredData, setFuturData] = useState(null)

  useEffect(() => {
    const loadAllMovies = async () => {
      let list = await ApiMovie.getHomeMovies()
      setMoviesList(list)

      //un seul film à l'affiche
      let originals = list.filter((oneMovie) => oneMovie.slug === 'top-rated')
      let chooseRandomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      let choosen = originals[0].items.results[chooseRandomMovie]
      let chooseInfo = await ApiMovie.getMovieInfo(choosen.id, 'movie')
      setFuturData(chooseInfo)
    }
    loadAllMovies()
  }, [])

  return (
    <div className='App'>
      <Header />
      {futuredData && <FeaturedMovie films={futuredData} />}
      <section className='list'>
        {moviesList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
