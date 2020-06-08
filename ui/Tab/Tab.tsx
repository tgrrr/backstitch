import * as React from 'react';
import TabStyled from './TabStyled';
import { Tab as MaterialTab } from '@material-ui/core';

interface Props {
    className?: string;
}

const Tab: React.FC<Props> = ({ className, ...rest }) => (
    <TabStyled>
        <div className={['Tab', className && className].join(' ')} data-testid='Tab'>
            <MaterialTab {...rest} />           
        </div>
    </TabStyled>
);

export default Tab;
