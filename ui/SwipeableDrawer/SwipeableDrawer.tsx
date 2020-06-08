import * as React from 'react';
import SwipeableDrawerStyled from './SwipeableDrawerStyled';
import { SwipeableDrawer as MaterialSwipeableDrawer } from '@material-ui/core';

interface Props {
    onClose: React.ReactEventHandler<{}>;
    onOpen: React.ReactEventHandler<{}>;
    open: boolean;
    children?: React.ReactNode;
    className?: string;
}

const SwipeableDrawer: React.FC<Props> = ({
    onClose,
    onOpen,
    open = false,
    children,
    className,
    ...rest
}) => (
    <SwipeableDrawerStyled>
        <div className={['Swipeabledrawer', className && className].join(' ')} data-testid='Swipeabledrawer'>
            <MaterialSwipeableDrawer
                onClose={onClose}
                onOpen={onOpen}
                open={open}
                {...rest}
            >
                {children}
            </MaterialSwipeableDrawer>            
        </div>
    </SwipeableDrawerStyled>
);

export default SwipeableDrawer;
