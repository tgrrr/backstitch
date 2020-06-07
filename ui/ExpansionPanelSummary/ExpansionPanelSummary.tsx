import * as React from 'react';
import ExpansionPanelSummaryStyled from './ExpansionPanelSummaryStyled';
import { ExpansionPanelSummary as MaterialExpansionPanelSummary } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ExpansionPanelSummary: React.FC<Props> = ({ children, className, ...rest }) => (
    <ExpansionPanelSummaryStyled>
        <div className={['Expansionpanelsummary', className && className].join(' ')} data-testid='Expansionpanelsummary'>
            <MaterialExpansionPanelSummary {...rest}>
                {children}
            </MaterialExpansionPanelSummary>            
        </div>
    </ExpansionPanelSummaryStyled>
);

export default ExpansionPanelSummary;
