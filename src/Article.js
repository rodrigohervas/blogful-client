import React from 'react'
import {Link} from 'react-router-dom'
import './Article.css'

function Article(props) {

    const article = props.article

    return (
        <div className='article'>
            <h4>{article.title}</h4>
            <p>{article.content}</p>
            <p>In {article.style}</p>
            <p>Published on: {article.published_date}</p>
            <Link to={ {
                pathname: `/update/${article.id}`, 
                articleId: article.id} }>Edit Article</Link>
        </div>
    )
}

export default Article