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
        <title>Title | Movie Page</title>
        <meta property="og:url" content="https://a-gulinsky.github.io/goit-react-hw-05-movies/movies" />
        <meta property="og:title" content="Title | Movie Page" />
        <meta property="og:site_name" content="Movies" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Description: Best Movie in Ukraine 2. Best Movie in Ukraine 3. Best Movie in Ukraine" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://img.freepik.com/free-photo/fresh-natural-green-schefflera-arboricola-background_53876-153311.jpg?w=996&t=st=1701474143~exp=1701474743~hmac=50682caf3fdfd630dff9ea401437b10bd57f30234e16b1f53a14a718a5ea0498" />
        <meta name="description" content="Description: Best Movie in Ukraine 2. Best Movie in Ukraine 3. Best Movie in Ukraine"/>
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