import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then( res => { 
                if( !res.ok ) throw Error('Could not fetch data');
                return res.json() 
            })
            .then( data => {
                console.log( data );
                setBlogs( data );
                setIsPending( false );
                setError( null );
            })
            .catch( err => {
                setIsPending( false );
                setError( err.message );
            });
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } pageTitle="Blogs" /> }
            { blogs && <BlogList 
                blogs={ blogs.filter((blog) => blog.author === 'KC Samm') } 
                pageTitle="KC Samm's Blogs"
            /> }
        </div>
     );
}
 
export default Home;