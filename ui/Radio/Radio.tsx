import * as React from 'react';
import RadioStyled from './RadioStyled';
import MaterialRadio, {
    RadioProps as MaterialRadioProps,
} from '@material-ui/core/Radio';

interface Props
    extends MaterialRadioProps
        // Uncomment these lines to disable the RadioProps props:
        // , Omit<
        // MaterialRadioProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    children?: React.ReactNode;
    className?: string;
}

const Radio: React.FC<Props> = ({ children, className, ...rest }) => (
    <RadioStyled>
        <div className={['Radio', className && className].join(' ')} data-testid='Radio'>
            <MaterialRadio {...rest}>
                {children}
            </MaterialRadio>            
        </div>
    </RadioStyled>
);

export default Radio;
