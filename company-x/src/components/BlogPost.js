import React from 'react'

const BlogPost = (props) => {
  const { user, postId, title, body } = props;
  return (
    <article className="blog-post" key={postId}>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-body">{body}</p>
      <p className="blog-user">Post Author</p>
    </article>
  )
}

export default BlogPost
