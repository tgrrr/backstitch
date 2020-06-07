import * as React from 'react';
import TextFieldStyled from './TextFieldStyled';
import { TextField as MaterialTextField } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TextField: React.FC<Props> = ({ children, className, ...rest }) => (
    <TextFieldStyled>
        <div className={['Textfield', className && className].join(' ')} data-testid='Textfield'>
            <MaterialTextField {...rest}>
                {children}
            </MaterialTextField>            
        </div>
    </TextFieldStyled>
);

export default TextField;
