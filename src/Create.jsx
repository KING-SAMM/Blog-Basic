import { useState } from 'react';


const Create = () => {

    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('');
    const [ isPending, setIsPending ] = useState(false);

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        
        const blog = { title, body, author };

        setIsPending( true );
        
        fetch( "http://localhost:8000/blogs", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( blog )
        } )
        .then( () => {
            console.log('New Blog Added!');
            setIsPending( false );
        });
    }


    return ( 
        <div className='create'>
            <h1>Create New Blog</h1>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    value={ title }
                    onChange={ (e) => setTitle( e.target.value ) } 
                    required 
                />
                <label>Blog Body:</label>
                <textarea
                    value={ body }
                    onChange={ (e) => setBody( e.target.value ) } 
                    required
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={ author }
                    onChange={ (e) => setAuthor( e.target.value ) } 
                >
                    <option value="">Choose an author</option>
                    <option value="KC Samm">KC Samm</option>
                    <option value="John James">John James</option>
                    <option value="Jack Warner">Jack Warner</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
            <div> { title } </div>
            <div> { body } </div>
            <div> { author } </div>
        </div>
     );
}
 
export default Create;