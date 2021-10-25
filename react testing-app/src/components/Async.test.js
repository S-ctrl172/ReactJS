import { render, screen } from '@testing-library/react';
import Async from './Async';


describe ( 'Async Component' , () => {

    test( 'Renders Post If Request Succeed', async() => {
        
        // Mock Function
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce( {
            json : async () => [ { id: 'p1', title: 'First post' } ]
        } );
        
        render(<Async/>);

        const asyncTestingElement = await screen.findAllByRole(
            'listitem',
            { exact: false },
            { } // 1 sec
        );
        
        expect(asyncTestingElement).not.toHaveLength(0);

    } );
    
} );