import * as React from 'react';
import FormControlLabelStyled from './FormControlLabelStyled';
import { FormControlLabel as MaterialFormControlLabel } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const FormControlLabel: React.FC<Props> = ({ children, className, ...rest }) => (
    <FormControlLabelStyled>
        <div className={['Formcontrollabel', className && className].join(' ')} data-testid='Formcontrollabel'>
            <MaterialFormControlLabel {...rest}>
                {children}
            </MaterialFormControlLabel>            
        </div>
    </FormControlLabelStyled>
);

export default FormControlLabel;
