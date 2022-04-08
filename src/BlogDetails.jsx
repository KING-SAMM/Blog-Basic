import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { data: blog, error, isPendung } = useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = () => 
    {
        fetch('http://localhost:8000/blogs/' + blog.id, 
        { method: 'DELETE' } )
            .then( () =>  navigate('/') )
            .catch( (error) =>  console.error('Error deleting blog post') );
    }

    return ( 
        <div className="blog-details">
            { isPendung && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <section>
                    <h2>{ blog.title }</h2>
                    <p> by { blog.author }</p>
                    <article>
                        <p>{ blog.body }</p>
                    </article>
                    <button onClick={ handleDelete }>Delete</button>
                </section>
            ) }
        </div>
     );
}
 
export default BlogDetails;