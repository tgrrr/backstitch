import * as React from 'react';
import TabsStyled from './TabsStyled';
import MaterialTabs, {
    TabsProps as MaterialTabsProps,
} from '@material-ui/core/Tabs';


interface Props
    extends MaterialTabsProps
        // Uncomment these lines to disable the TabsProps props:
        // , Omit<
        // MaterialTabsProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
        children?: React.ReactNode;
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
