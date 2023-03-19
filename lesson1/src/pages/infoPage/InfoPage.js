import React, { useEffect, useState } from 'react'
import axios from 'axios'



const src = 'https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test'

function InfoPage() {
    const [articles , setArticles]=useState([]);

    useEffect(()=>{
        axios
            .get(src)
            .then(data => {
                setArticles(data.data.response.results)
            })
    } , []);
    return (
        <>
            <h1>Info Page</h1>
            {articles.map(article => {
                return(
                    <p className='violet'><a href={article.webUrl}>{article.webTitle}</a></p>
                )
            })}
        </>
    )
}
export default InfoPage
