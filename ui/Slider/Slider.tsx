import * as React from 'react';
import SliderStyled from './SliderStyled';
import { Slider as MaterialSlider } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Slider: React.FC<Props> = ({ children, className, ...rest }) => (
    <SliderStyled>
        <div className={['Slider', className && className].join(' ')} data-testid='Slider'>
            <MaterialSlider {...rest}>
                {children}
            </MaterialSlider>            
        </div>
    </SliderStyled>
);

export default Slider;
