import React from 'react';
import BlogPost from '../components/BlogPost';

function Blog() {
    const posts = [
        { id: 1, title: 'First Blog Post', content: 'This is my first blog post.' },
        { id: 2, title: 'React Tips', content: 'Some useful tips for React development.' },
        // 你可以在这里添加更多博客文章
    ];

    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post) => (
                <BlogPost key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
}

export default Blog;