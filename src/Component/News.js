import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import Loading from './Loading'






export default function News(props) {
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)

  const country = props.country
  // const apiKey = "d16d1c498a7c4ccdb3daa62cc043ef99"
  const apiKey = "pub_cc71781885ee4b1b8b6184e5c52fed67"
  const category = props.category
  const heading = props.heading

  const api = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${country}&category=${category}`

  async function fetchNews() {
    setLoading(true)
    setNews(null)
    const response = await fetch(api)
    const newsData = await response.json()
    // console.log(newsData)
    setNews(newsData)
    setLoading(false)
  }
  useEffect(() => {
    fetchNews()
  }, [country, category]);



  return (
    <div>
      {loading && <Loading />}
      {news && <NewsCard data={news} heading={heading} country={country} />}

    </div>

  );

}
