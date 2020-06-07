import * as React from 'react';
import SwitchStyled from './SwitchStyled';
import { Switch as MaterialSwitch } from '@material-ui/core';

interface Props {
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
