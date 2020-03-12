import React from 'react'

const BlogfulContext = React.createContext({
    articles: [], 
    addArticle: () => {}, 
    deleteArticle: () => {}, 
    updateArticle: () => {}
})

export default BlogfulContext