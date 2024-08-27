import React from 'react';

function BlogPost({ title, content }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default BlogPost;