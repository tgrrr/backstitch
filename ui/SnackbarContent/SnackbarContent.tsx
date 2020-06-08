import * as React from 'react';
import SnackbarContentStyled from './SnackbarContentStyled';
import MaterialSnackbarContent, {
    SnackbarContentProps as MaterialSnackbarContentProps,
} from '@material-ui/core/SnackbarContent';


interface Props
    extends MaterialSnackbarContentProps
        // Uncomment these lines to disable the SnackbarContentProps props:
        // , Omit<
        // MaterialSnackbarContentProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    children?: React.ReactNode;
    className?: string;
}

const SnackbarContent: React.FC<Props> = ({ children, className, ...rest }) => (
    <SnackbarContentStyled>
        <div className={['Snackbarcontent', className && className].join(' ')} data-testid='Snackbarcontent'>
            <MaterialSnackbarContent {...rest}>
                {children}
            </MaterialSnackbarContent>            
        </div>
    </SnackbarContentStyled>
);

export default SnackbarContent;
