import { useState } from 'react';


const Create = () => {

    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('');


    return ( 
        <div className='create'>
            <h1>Create New Blog</h1>
            <form>
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
                    <option value="kcsamm">KC Samm</option>
                    <option value="johnjames">John James</option>
                    <option value="jackwarner">Jack Warner</option>
                </select>
                <button>Add Blog</button>
            </form>
            <div> { title } </div>
            <div> { body } </div>
            <div> { author } </div>
        </div>
     );
}
 
export default Create;