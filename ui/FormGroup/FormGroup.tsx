import * as React from 'react';
import FormGroupStyled from './FormGroupStyled';
import { FormGroup as MaterialFormGroup } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const FormGroup: React.FC<Props> = ({ children, className, ...rest }) => (
    <FormGroupStyled>
        <div className={['Formgroup', className && className].join(' ')} data-testid='Formgroup'>
            <MaterialFormGroup {...rest}>
                {children}
            </MaterialFormGroup>            
        </div>
    </FormGroupStyled>
);

export default FormGroup;
