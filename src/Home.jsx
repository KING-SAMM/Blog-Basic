import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then( res => { return res.json() })
            .then( data => {
                console.log( data );
                setBlogs( data ) ;
            });
    }, [])

    return ( 
        <div className="home">
            { blogs && <BlogList blogs={ blogs } pageTitle="Blogs" /> }
            { blogs && <BlogList 
                blogs={ blogs.filter((blog) => blog.author === 'KC Samm') } 
                pageTitle="KC Samm's Blogs"
            /> }
        </div>
     );
}
 
export default Home;