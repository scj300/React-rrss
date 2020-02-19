
import React from 'react';
import {Table, TableHead, TableRow, TableCell} from "@material-ui/core"

const THead = (props: any) => {
    return(
        <TableHead>
            <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Updated</TableCell>
            </TableRow>
        </TableHead>
    );
}

const TBody = (props: any) => {
    let {data} = props;

    data = data.map((post : any, i : any) => {
        return (
            <TableRow>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.content}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.created}</TableCell>
                <TableCell>{post.updated}</TableCell>
            </TableRow>
        );
    });

    return (
        <tbody>
            {data}
        </tbody>
    );
}

const Tabla = (props: any) => {
    return (
        <Table>
            <THead/>
            <TBody data={props.data}/>
        </Table>
    );
}

export default Tabla;