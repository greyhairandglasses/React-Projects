import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogPost from '../components/BlogPost'

import './Blog.css'


const Blog = () => {

  const dataLink = `https://jsonplaceholder.typicode.com/posts/`
  const [postData, changePostData] = useState({});
  const [errors, changeErrors] = useState(false)
  const [isLoading, updateIsLoading] = useState(true);

  async function fetchData(link) {
    const posts = await fetch(link);
    posts
      .json()
      .then(posts => changePostData(posts))
      .catch(err => console.log(err))
    updateIsLoading(!isLoading);
    }

  useEffect(() => {
    fetchData(dataLink);
  }, []
  )
  
  return (
    <>
      <NavBar />
        <article className="blog-container">
        <h1>BLOG</h1>
        <div className="post-container">
          {
            isLoading ?
              <h3>Loading posts...</h3>
              :
              Object.values(postData)
                .map((post) =>
                  <BlogPost
                    user={post.userId}
                    postId={post.id}
                    title={post.title}
                    body={post.body}
                />)
          }  
        </div>
      </article>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Blog
