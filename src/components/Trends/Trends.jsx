import { useEffect, useState } from "react"

// API / React router
import { getTrending } from "service/MovieAPI"
import { useLocation } from "react-router-dom"

// emotion
import { Title, Ul, LinkStyled } from "./Trends.styled"
import { Helmet } from "react-helmet"

const Trends = () => {

  const [results, setResults] = useState([])
  const location = useLocation()

  useEffect(() => {

    async function fetchAPI() {
      try {
        const response = await getTrending()
        setResults([...response.results])
      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [])

  return (
    <>
      <Helmet>
        <title>Title | Home Page</title>
        <meta property="og:url" content="https://a-gulinsky.github.io/goit-react-hw-05-movies" />
        <meta property="og:title" content="Title | Home Page" />
        <meta property="og:site_name" content="Movies" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Description: Best Movie in Ukraine 2. Best Movie in Ukraine 3. Best Movie in Ukraine" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://img.freepik.com/free-photo/fresh-natural-green-schefflera-arboricola-background_53876-153311.jpg?w=996&t=st=1701474143~exp=1701474743~hmac=50682caf3fdfd630dff9ea401437b10bd57f30234e16b1f53a14a718a5ea0498" />
        <meta name="description" content="Description: Best Movie in Ukraine 2. Best Movie in Ukraine 3. Best Movie in Ukraine"/>
      </Helmet>

      <Title>Trending Today</Title>

      <Ul>
        {results.map(result => (
          <li key={result.id}>
            <LinkStyled to={`/movies/${result.id}`} state={{from: location}}>{result.title}</LinkStyled>
          </li>
        ))}
      </Ul>
    </>
  )
}

export default Trends