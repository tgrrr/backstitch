import * as React from 'react';
import TabsStyled from './TabsStyled';
import { Tabs as MaterialTabs } from '@material-ui/core';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Tabs: React.FC<Props> = ({ children, className, ...rest }) => (
    <TabsStyled>
        <div className={['Tabs', className && className].join(' ')} data-testid='Tabs'>
            <MaterialTabs {...rest}>
                <div>
                    {children}
                </div>
            </MaterialTabs>            
        </div>
    </TabsStyled>
);

export default Tabs;
