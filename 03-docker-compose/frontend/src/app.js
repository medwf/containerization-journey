import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the articles!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      axios.put(`http://localhost:5000/articles/${currentArticle.id}`, { title, content })
        .then(response => {
          setArticles(articles.map(article => article.id === currentArticle.id ? { ...article, title, content } : article));
          setTitle('');
          setContent('');
          setEditMode(false);
          setCurrentArticle(null);
        })
        .catch(error => console.error('Error updating article:', error));
    } else {
      axios.post('http://localhost:5000/articles', { title, content })
        .then(response => {
          setArticles([...articles, { title, content }]);
          setTitle('');
          setContent('');
        })
        .catch(error => console.error('Error creating article:', error));
    }
  };

  const handleEdit = (article) => {
    setTitle(article.title);
    setContent(article.content);
    setEditMode(true);
    setCurrentArticle(article);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/articles/${id}`)
      .then(response => {
        setArticles(articles.filter(article => article.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the article!', error);
      });
  };

  return (
    <div>
      <h1>Articles</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">{editMode ? 'Update' : 'Create'} Article</button>
      </form>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <button onClick={() => handleEdit(article)}>Edit</button>
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
