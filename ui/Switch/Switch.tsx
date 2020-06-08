import * as React from 'react';
import SwitchStyled from './SwitchStyled';
import MaterialSwitch, {
    SwitchProps as MaterialSwitchProps,
} from '@material-ui/core/Switch';


interface Props
    extends MaterialSwitchProps
        // Uncomment these lines to disable the SwitchProps props:
        // , Omit<
        // MaterialSwitchProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    children?: React.ReactNode;
    className?: string;
}

const Switch: React.FC<Props> = ({ children, className, ...rest }) => (
    <SwitchStyled>
        <div className={['Switch', className && className].join(' ')} data-testid='Switch'>
            <MaterialSwitch {...rest}>
                {children}
            </MaterialSwitch>            
        </div>
    </SwitchStyled>
);

export default Switch;
