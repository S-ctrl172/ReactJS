import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

import React,{ Suspense } from 'react';

const NewQuote = React.lazy( () => import('./pages/NewQuote') );
const QuoteDetail = React.lazy( () => import('./pages/QuoteDetail') );
const NotFound = React.lazy( () => import('./pages/NotFound') );


function App() {


  return (
    
    <Layout>
      <Switch>
        <Suspense fallback={
            <div className='centered'>
              <LoadingSpinner/>
            </div>
          }
        >

          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>

          <Route path='/quotes' exact>
            <AllQuotes/>
          </Route>

          <Route path='/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>

          <Route path='/new-quote'>
            <NewQuote/>
          </Route>

          {/* If any match Found */}
          <Route path='*'>
            <NotFound/>
          </Route>

        </Suspense>
      </Switch>
    </Layout>

  );


}

export default App;
