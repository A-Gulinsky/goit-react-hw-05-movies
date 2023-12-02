import { useEffect, useState } from "react"

// api /react router
import { getSearchMovie } from "service/MovieAPI"
import { useLocation, useSearchParams } from "react-router-dom"

// emotion
import { Container, Ul, LinkStyled } from "./Movies.styled"
import { Helmet } from "react-helmet"

const Movies = () => {

  const [searchParams,setSearchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  
  const location = useLocation()
  const query = searchParams.get("query") ?? ''

  const handleOnSubmit = e => {
    e.preventDefault()
    
    if (!e.target.elements.input.value) {
      return setSearchParams({})
    }

    setSearchParams({query: e.target.elements.input.value})
  }

  useEffect(() => {

    if (!query) {
      return
    }

    async function fetchAPI() {

      try {
        const response = await getSearchMovie(query)
        setMovies([...response.results])
      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [query])

  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>

      <Container>

        <form onSubmit={handleOnSubmit}>
          <input type="text" name="input" />
        
          <button type="submit">Search</button>
        </form>

        <Ul>
          {movies.map(movie => (
            <li key={movie.id}>

              <LinkStyled to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</LinkStyled>
            </li>
          ))}
        </Ul>
      </Container>
    </>
  )
}

export default Movies