import * as React from 'react';
import FilledInputStyled from './FilledInputStyled';
import MaterialFilledInput, {
    FilledInputProps as MaterialFilledInputProps,
} from '@material-ui/core/FilledInput';

interface Props
    extends MaterialFilledInputProps
        // Uncomment these lines to disable the FilledInputProps props:
        // , Omit<
        // MaterialFilledInputProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    className?: string;
}

const FilledInput: React.FC<Props> = ({ className, ...rest }) => (
    <FilledInputStyled>
        <div className={['Filledinput', className && className].join(' ')} data-testid='Filledinput'>
            <MaterialFilledInput {...rest} />           
        </div>
    </FilledInputStyled>
);

export default FilledInput;
