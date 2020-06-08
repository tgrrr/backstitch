import * as React from 'react';
import TooltipStyled from './TooltipStyled';
import { Tooltip as MaterialTooltip } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
    title: string;
}

const Tooltip: React.FC<Props> = ({ children, className, title, ...rest }) => (
    <TooltipStyled>
        <div className={['Tooltip', className && className].join(' ')} data-testid='Tooltip'>
            <MaterialTooltip
                title={title}
                {...rest}
            >
                {children}
            </MaterialTooltip>            
        </div>
    </TooltipStyled>
);

export default Tooltip;
