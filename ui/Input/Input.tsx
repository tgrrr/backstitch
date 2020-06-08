import * as React from 'react';
import InputStyled from './InputStyled';
import MaterialInput, {
    InputProps as MaterialInputProps,
} from '@material-ui/core/Input';

interface Props
    extends MaterialInputProps
        // Uncomment these lines to disable the InputProps props:
        // , Omit<
        // MaterialInputProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    className?: string;
}

const Input: React.FC<Props> = ({ className, ...rest }) => (
    <InputStyled>
        <div className={['Input', className && className].join(' ')} data-testid='Input'>
            <MaterialInput {...rest} />           
        </div>
    </InputStyled>
);

export default Input;
