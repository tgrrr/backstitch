import * as React from 'react';
import ExpansionPanelStyled from './ExpansionPanelStyled';
import { ExpansionPanel as MaterialExpansionPanel } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ExpansionPanel: React.FC<Props> = ({ children, className, ...rest }) => (
    <ExpansionPanelStyled>
        <div className={['Expansionpanel', className && className].join(' ')} data-testid='Expansionpanel'>
            <MaterialExpansionPanel {...rest}>
                {children}
            </MaterialExpansionPanel>            
        </div>
    </ExpansionPanelStyled>
);

export default ExpansionPanel;
