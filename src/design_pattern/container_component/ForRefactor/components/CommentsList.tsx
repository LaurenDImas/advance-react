interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

interface CommentsProps {
    comment: Comment | null;
}

const CommentsList = ({comment}: CommentsProps) => {
    const {id, name, email, body} = comment || {};
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    )
}
export default CommentsList
