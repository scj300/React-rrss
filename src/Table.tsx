
import React from 'react';

const Table = (props: any) => {
    console.log(props);
    var posts_html = props.data.map((post : any, index : any) => {
        return (
            <tr key={index}>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.author}</td>
                <td>{post.created}</td>
                <td>{post.updated}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Author</th>
                  <th>Created</th>
                  <th>Updated</th>
                </tr>
            </thead>
            <tbody>
              {posts_html}
            </tbody>
        </table>
    );
}

export default Table;