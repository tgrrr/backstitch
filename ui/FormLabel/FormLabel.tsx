import * as React from 'react';
import FormLabelStyled from './FormLabelStyled';
import { FormLabel as MaterialFormLabel } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const FormLabel: React.FC<Props> = ({ children, className, ...rest }) => (
    <FormLabelStyled>
        <div className={['Formlabel', className && className].join(' ')} data-testid='Formlabel'>
            <MaterialFormLabel {...rest}>
                {children}
            </MaterialFormLabel>            
        </div>
    </FormLabelStyled>
);

export default FormLabel;
