import * as React from 'react';
import SlideStyled from './SlideStyled';
import { Slide as MaterialSlide } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Slide: React.FC<Props> = ({ children, className, ...rest }) => (
    <SlideStyled>
        <div className={['Slide', className && className].join(' ')} data-testid='Slide'>
            <MaterialSlide {...rest}>
                {children}
            </MaterialSlide>            
        </div>
    </SlideStyled>
);

export default Slide;
