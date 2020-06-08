import * as React from 'react';
import SlideStyled from './SlideStyled';
import MaterialSlide, {
    SlideProps as MaterialSlideProps,
} from '@material-ui/core/Slide';


interface Props
    extends MaterialSlideProps
        // Uncomment these lines to disable the SlideProps props:
        // , Omit<
        // MaterialSlideProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
        children?: React.ReactElement<any, any>;
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
