import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) =>{

    console.log('DemoOutPut Running');

    return(
       <MyParagraph>
           {props.show ? 'This is New!' : ''}
        </MyParagraph>
    );

}


// Fuctional Component Only
// Only If props change Then Only Re-evaluate
export default React.memo(DemoOutput);
// Stores and Compare 