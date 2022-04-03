import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPendung } = useFetch("http://localhost:8000/blogs/" + id);

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
                </section>
            ) }
        </div>
     );
}
 
export default BlogDetails;