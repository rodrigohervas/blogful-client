import React, {useState, useEffect} from 'react';
import './App.css';
import BlogfulContext from './BlogfulContext'
import { Route, useHistory } from 'react-router-dom'
import UpdateForm from './UpdateForm'
import ArticlesList from './ArticlesList'
require('dotenv').config()

function App() {

  const [articles, setArticles] = useState([])

  const history = useHistory()

  useEffect( () => {
    const url = process.env.REACT_APP_URL
    const options = {
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `${process.env.REACT_APP_API_KEY}`,
      }, 
      'Method': 'GET'
    }
    
    fetch(url, options)
      .then(response => {
        if(!response) {
          throw new Error('Error getting articles')
        }
        return response.json()
      })
      .then(articles => {
        setArticles(articles)
      })
      .catch(error => console.log('Error:', error))

  }, [setArticles])


  const addArticle = () => {
    console.log('addArticle')
  }
  
  const deleteArticle = () => {
    console.log('deleteArticle')
  } 
  
  const updateArticle = () => {
    console.log('updateArticle')
  }

  const handleArticles = (article) => {
    const id = article.id
    let articleList = articles.filter(article => article.id !== id)
    const updatedArticles = [...articleList, article]
    setArticles(updatedArticles)
  }

  const contextValue = {
    articles: articles, 
    addArticle: addArticle,
    deleteArticle: deleteArticle, 
    updateArticle: updateArticle
  }

  return (

    <div className="App">
      <BlogfulContext.Provider value={contextValue}>
        <div className='mainContainer'>
          <Route exact path='/'>
            <ArticlesList articles={articles}></ArticlesList>
          </Route>

          <Route path='/update/:id'>
            <UpdateForm 
              article={
                articles.filter(article => article.id === history.location.articleId)[0]
              } 
              articleId={history.location.articleId} 
              onChange={handleArticles} />
          </Route>
        </div>
      </BlogfulContext.Provider>
    </div>
  );
}

export default App;

