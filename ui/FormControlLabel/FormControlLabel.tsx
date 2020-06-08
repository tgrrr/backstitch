import * as React from 'react';
import FormControlLabelStyled from './FormControlLabelStyled';
import { FormControlLabel as MaterialFormControlLabel } from '@material-ui/core';

interface Props {
    control: React.ReactElement<any, any>; // A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
    label: React.ReactNode;
    className?: string;
}

const FormControlLabel: React.FC<Props> = ({ control, className, label, ...rest }) => (
    <FormControlLabelStyled>
        <div className={['Formcontrollabel', className && className].join(' ')} data-testid='Formcontrollabel'>
            <MaterialFormControlLabel
                control={control}
                label={label}
                {...rest}
            />  
        </div>
    </FormControlLabelStyled>
);

export default FormControlLabel;
