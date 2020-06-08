import * as React from 'react';
import InputBaseStyled from './InputBaseStyled';
import MaterialInputBase, {
    InputBaseProps as MaterialInputBaseProps,
} from '@material-ui/core/InputBase';

interface Props
    extends MaterialInputBaseProps
        // Uncomment these lines to disable the InputBaseProps props:
        // , Omit<
        // MaterialInputBaseProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    className?: string;
}

const InputBase: React.FC<Props> = ({ className, ...rest }) => (
    <InputBaseStyled>
        <div className={['Inputbase', className && className].join(' ')} data-testid='Inputbase'>
            <MaterialInputBase {...rest} />          
        </div>
    </InputBaseStyled>
);

export default InputBase;
