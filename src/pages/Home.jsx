import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
        <Main />
        <Row rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row rowId='2' title='popular' fetchURL={requests.requestPopular} />
        <Row rowId='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowId='5' title='Horror' fetchURL={requests.requestHorror} />
    </div>
  )
}

export default Home