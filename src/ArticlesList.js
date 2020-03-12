import React from 'react'
import Article from './Article'

function ArticlesList(props) {

    const articles = props.articles
    
    const articleList = articles.map(article => 
            <Article key={article.id} article={article} />
        )

    return (
        <div className='articlesList'>
            <h3>Articles:</h3>
            {articleList}
        </div>
    )
}

export default ArticlesList