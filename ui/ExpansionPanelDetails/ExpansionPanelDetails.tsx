import * as React from 'react';
import ExpansionPanelDetailsStyled from './ExpansionPanelDetailsStyled';
import { ExpansionPanelDetails as MaterialExpansionPanelDetails } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ExpansionPanelDetails: React.FC<Props> = ({ children, className, ...rest }) => (
    <ExpansionPanelDetailsStyled>
        <div className={['Expansionpaneldetails', className && className].join(' ')} data-testid='Expansionpaneldetails'>
            <MaterialExpansionPanelDetails {...rest}>
                {children}
            </MaterialExpansionPanelDetails>            
        </div>
    </ExpansionPanelDetailsStyled>
);

export default ExpansionPanelDetails;
