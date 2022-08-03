import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
        <Main />
        <Row title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row title='popular' fetchURL={requests.requestPopular} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Horror' fetchURL={requests.requestHorror} />
    </div>
  )
}

export default Home