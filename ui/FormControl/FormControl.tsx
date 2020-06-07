import * as React from 'react';
import FormControlStyled from './FormControlStyled';
import { FormControl as MaterialFormControl } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const FormControl: React.FC<Props> = ({ children, className, ...rest }) => (
    <FormControlStyled>
        <div className={['Formcontrol', className && className].join(' ')} data-testid='Formcontrol'>
            <MaterialFormControl {...rest}>
                {children}
            </MaterialFormControl>            
        </div>
    </FormControlStyled>
);

export default FormControl;
