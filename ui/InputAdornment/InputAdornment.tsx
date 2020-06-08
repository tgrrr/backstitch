import * as React from 'react';
import InputAdornmentStyled from './InputAdornmentStyled';
import MaterialInputAdornment, {
    InputAdornmentProps as MaterialInputAdornmentProps,
} from '@material-ui/core/InputAdornment';

interface Props
    extends MaterialInputAdornmentProps
        // Uncomment these lines to disable the InputAdornmentProps props:
        // , Omit<
        // MaterialInputAdornmentProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    children: string | React.ReactNode;  // The content of the component, normally an IconButton or string.
    className?: string;
    position: 'start' | 'end';
}

const InputAdornment: React.FC<Props> = ({
    children,
    className,
    position = 'start',
    ...rest
}) => (
    <InputAdornmentStyled>
        <div className={['Inputadornment', className && className].join(' ')} data-testid='Inputadornment'>
            <MaterialInputAdornment 
                position={position}
                {...rest}
            >
                {children}
            </MaterialInputAdornment>            
        </div>
    </InputAdornmentStyled>
);

export default InputAdornment;
