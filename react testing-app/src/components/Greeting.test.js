import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';


describe( 'Greeing Component', () => {





    test ( 'Renders "Hello" as a Text', () => {
    
        // 3A 
    

        // Arrange:
        render(<Greeting/>);
    

        // Act:
        // ...nothing
    

        // Assert:
        const testingElement = 
            screen.getByText('Hello Anish', { exact:false } );
    
        expect(testingElement).toBeInTheDocument();
    
        }
    
    );

    

    test('Renders "Good to see you" if button was Not Clicked', () => {

            render(<Greeting/>);

            const buttonNotClickedTesting = 
                screen.getByText( 'Its good to see you', {exact: false} );

            expect(buttonNotClickedTesting).toBeInTheDocument();

        }
    );



    test('Renders "Changed!" if button was Clicked', () => {

            render(<Greeting/>);

            // Act:
            const button = screen.getByRole('button');
            userEvent.click(button);

            const buttonClickedTesting = 
                screen.getByText( 'Changed', {exact: false} );

            expect(buttonClickedTesting).toBeInTheDocument();

        }
    );



    test('Does not Renders "Good to see you" if button was Clicked', () => {

        render(<Greeting/>);

        // Act:
        const button = screen.getByRole('button');
        userEvent.click(button);

        const PNotVisibleTesting = 
            screen.queryByText( 'good to see you', {exact: false} );

        expect(PNotVisibleTesting).toBeNull();

        }
    );
    




    }

);


