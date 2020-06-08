import * as React from 'react';
import CheckboxStyled from './CheckboxStyled';
import MaterialCheckbox, {
    CheckboxProps as MaterialCheckboxProps,
} from '@material-ui/core/Checkbox';

interface Props
    extends MaterialCheckboxProps
    // Uncomment these lines to disable the CircularProgressProps props:
    // , Omit<
    // MaterialCheckboxProps,
    // | 'checked'
    // | 'type'
    // > 
    {
        className?: string;
    }


const Checkbox: React.FC<Props> = ({ className, ...rest }) => (
    <CheckboxStyled>
        <div className={['Checkbox', className && className].join(' ')} data-testid='Checkbox'>
            <MaterialCheckbox {...rest} />
        </div>
    </CheckboxStyled>
);

export default Checkbox;
