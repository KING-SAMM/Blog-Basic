const BlogList = ({ blogs, pageTitle }) => {

    return ( 
        <div className="blog-list">
            <h1>{ pageTitle } </h1>

            {
                blogs.map(
                    (blog) => (
                        <div 
                            className="blog-preview"
                            key={ blog.id }
                        >
                            <h2>{ blog.title }</h2>
                            by <span>{ blog.author }</span>
                        </div>
                    )
                )
            }
        </div>
     );
}
 
export default BlogList;