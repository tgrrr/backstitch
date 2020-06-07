import * as React from 'react';
import ClickAwayListenerStyled from './ClickAwayListenerStyled';
import { ClickAwayListener as MaterialClickAwayListener } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ClickAwayListener: React.FC<Props> = ({ children, className, ...rest }) => (
    <ClickAwayListenerStyled>
        <div className={['Clickawaylistener', className && className].join(' ')} data-testid='Clickawaylistener'>
            <MaterialClickAwayListener {...rest}>
                {children}
            </MaterialClickAwayListener>            
        </div>
    </ClickAwayListenerStyled>
);

export default ClickAwayListener;
