import React from 'react';
import {Container, Input, Text, Button, Break} from './styles/optform.js'

const OptForm = ({children, ...restProps}) => {
    return ( 
        <Container {...restProps}>{children}</Container>
     );
}
 
OptForm.Input = function OptFormInput({...restProps }){
    return (<Input {...restProps}/>)
}

OptForm.Button = function OptFormButton({children, ...restProps }){
    return (
    <Button {...restProps}>{children} <img src="/images/icons/chevron-right.png" alt="Try Now!"></img></Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}
OptForm.Break = function OptFormBreak({...restProps }){
    return <Break {...restProps}/>
}


export default OptForm;