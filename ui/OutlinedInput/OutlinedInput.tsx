import * as React from 'react';
import OutlinedInputStyled from './OutlinedInputStyled';
import MaterialOutlinedInput, {
    OutlinedInputProps as MaterialOutlinedInputProps,
} from '@material-ui/core/OutlinedInput';


interface Props
    extends MaterialOutlinedInputProps
        // Uncomment these lines to disable the OutlinedInputProps props:
        // , Omit<
        // MaterialOutlinedInputProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    children?: React.ReactNode;
    className?: string;
}

const OutlinedInput: React.FC<Props> = ({ children, className, ...rest }) => (
    <OutlinedInputStyled>
        <div className={['Outlinedinput', className && className].join(' ')} data-testid='Outlinedinput'>
            <MaterialOutlinedInput {...rest}>
                {children}
            </MaterialOutlinedInput>            
        </div>
    </OutlinedInputStyled>
);

export default OutlinedInput;
