import { useState, useEffect } from "react";

const useFetch = ( url ) => {
    const [ data, setData ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {

        // Get abort controller which will be used to 
        // abort fetch operation when we do not need it to 
        // complete and upate the state. 
        // We want to abort fetch if component is unmounted suddenly
        // before fetch operation completes.
        // Not doing this results in an (unhandled) error.
        const abortCtrl = new AbortController();

        // Associate the abort controller to the fetch function 
        // by passing it as second parameter using the 
        // signal property

        setTimeout(() => {
            fetch( url, { signal: abortCtrl.signal } )
            .then( res => { 
                if( !res.ok ) throw Error('Could not fetch data');
                return res.json() 
            })
            .then( data => {
                console.log( data );
                setData( data );
                setIsPending( false );
                setError( null );
            })
            .catch( err => {
                // Aborted error is caught here and that still tries to update state. 
                // So we handle it
                if (err.name === 'AbortError')
                {
                    console.log('Fetch Aborted.');
                }
                else
                {
                    // For any other type of error we can update the state
                    setIsPending( false );
                    setError( err.message );
                }
            });
        }, 1000);

        // Return cleanup function with the abort controller, 
        // which aborts the fetch it is associated with.
        return () => abortCtrl.abort();

    }, [url]);

    return { data, isPending, error };
}
 
export default useFetch;