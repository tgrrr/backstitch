import * as React from 'react';
import FormHelperTextStyled from './FormHelperTextStyled';
import { FormHelperText as MaterialFormHelperText } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const FormHelperText: React.FC<Props> = ({ children, className, ...rest }) => (
    <FormHelperTextStyled>
        <div className={['Formhelpertext', className && className].join(' ')} data-testid='Formhelpertext'>
            <MaterialFormHelperText {...rest}>
                {children}
            </MaterialFormHelperText>            
        </div>
    </FormHelperTextStyled>
);

export default FormHelperText;
