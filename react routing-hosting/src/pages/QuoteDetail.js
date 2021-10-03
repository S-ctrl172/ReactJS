import { useParams, Route, Link, useRouteMatch} from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";



const QuoteDetail = () => {

    const match =  useRouteMatch();
    const params = useParams();

    console.log(params.quoteId);
    console.log(match.path);
    console.log(match.url);

    const { quoteId } = params;

    const {sendRequest, status, data: loadedQuote, error } = useHttp(
        getSingleQuote, true
    );


    useEffect( () => {
        sendRequest(quoteId);
    } , [ sendRequest,quoteId ] );


    if(status === 'pending'){
        return (
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        );
    }


    if(error){
        return <p className='centered'>{error}</p>
    }
    
    

    if(!loadedQuote.text){
        return <p>No Quote Found!</p>;
    }

    
    
    return (
        <div>

            <HighlightedQuote 
                text={loadedQuote.text} 
                author={loadedQuote.author}
            />

                        {/* /quotes/:quoteId */}
            <Route path={`${match.path}`} exact> 
                <div className='centered'>
                             {/* /quotes/q2 */}
                    <Link to={`${match.url}/comments`}
                        className='btn--flat'
                    >
                        Load Comments
                    </Link>
                </div>
            </Route>
            
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>

        </div>
    );
};

export default QuoteDetail;