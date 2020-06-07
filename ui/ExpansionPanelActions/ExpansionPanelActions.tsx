import * as React from 'react';
import ExpansionPanelActionsStyled from './ExpansionPanelActionsStyled';
import { ExpansionPanelActions as MaterialExpansionPanelActions } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ExpansionPanelActions: React.FC<Props> = ({ children, className, ...rest }) => (
    <ExpansionPanelActionsStyled>
        <div className={['Expansionpanelactions', className && className].join(' ')} data-testid='Expansionpanelactions'>
            <MaterialExpansionPanelActions {...rest}>
                {children}
            </MaterialExpansionPanelActions>            
        </div>
    </ExpansionPanelActionsStyled>
);

export default ExpansionPanelActions;
