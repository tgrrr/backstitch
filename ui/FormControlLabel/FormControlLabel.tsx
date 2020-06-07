import * as React from 'react';
import FormControlLabelStyled from './FormControlLabelStyled';
import { FormControlLabel as MaterialFormControlLabel } from '@material-ui/core';

interface Props {
    control: React.ReactElement<any, any>;
    className?: string;
}

const FormControlLabel: React.FC<Props> = ({ className, ...rest }) => (
    <FormControlLabelStyled>
        <div className={['Formcontrollabel', className && className].join(' ')} data-testid='Formcontrollabel'>
            <MaterialFormControlLabel {...rest} />           
        </div>
    </FormControlLabelStyled>
);

export default FormControlLabel;
