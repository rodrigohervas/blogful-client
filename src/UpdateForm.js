import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'


function UpdateForm(props) {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [style, setStyle] = useState()

    const history = useHistory()

    useEffect( () => {
        setTitle(props.article.title)
        setContent(props.article.content)
        setStyle(props.article.style)
    }, []) //[props.article.title, props.article.content, props.article.style])

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleStyle = (e) => {
        setStyle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newArticle = {
            id: props.article.id, 
            title: title,
            content: content, 
            style: style, 
            date_published: props.article.date_published
        }

        const url = process.env.REACT_APP_URL + newArticle.id
        const options = {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `${process.env.REACT_APP_API_KEY}`,
            }, 
            method: 'PATCH', 
            body: JSON.stringify(newArticle)
        }
        
        fetch(url, options)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Error updating article')
                }
            })
            .then( () => {
                props.onChange(newArticle)
                history.push('/')
            })
            .catch(error => console.log('Error:', error))
    }

    const styles = ['Listicle', 'How-to', 'News', 'Interview', 'Story']
    const article = props.article
    return (
        <div className='updateForm'>
            <h3>Update Form:</h3>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form_group">
                    <label htmlFor="id">Id</label>
                    <label id='id'>{article.id}</label>
                </div>
                
                <div className="form_group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={e => handleTitle(e)} value={title} />
                </div>

                <div className="form_group">
                    <label htmlFor="content">Content:</label>
                    <input type="text" id="content" onChange={e => handleContent(e)} value={content} />
                </div>

                <div className="form_group">
                    <label htmlFor="date_published">A</label>
                    <label id="date_published" >{article.date_published}</label>
                </div>

                <div className="form_group">
                    <label htmlFor="style">Style:</label>
                    <input type="text" id="style" onChange={e => handleStyle(e)} value={style} />
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm