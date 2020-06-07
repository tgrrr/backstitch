import * as React from 'react';
import TabStyled from './TabStyled';
import { Tab as MaterialTab } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Tab: React.FC<Props> = ({ children, className, ...rest }) => (
    <TabStyled>
        <div className={['Tab', className && className].join(' ')} data-testid='Tab'>
            <MaterialTab {...rest}>
                {children}
            </MaterialTab>            
        </div>
    </TabStyled>
);

export default Tab;
