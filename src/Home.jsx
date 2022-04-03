import BlogList from './BlogList';
// Import useFetch custom hook
import useFetch from './useFetch';

const Home = () => {
    // Call useFetch custom hook
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

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