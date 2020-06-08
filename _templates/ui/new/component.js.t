---
to: src/common/ui/<%= name %>/<%= name %>.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import * as React from 'react';
import <%= name %>Styled from './<%= name %>Styled';
import Material<%= name %>, {
    <%= name %>Props as Material<%= name %>Props,
} from '@material-ui/core/<%= name %>';

interface Props
    extends Material<%= name %>Props
        // Uncomment these lines to disable the <%= name %>Props props:
        // , Omit<
        // Material<%= name %>Props,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
        children?: React.ReactNode;
        className?: string;
    }

<% if(locals.stateful) { -%>
interface State {
    myStateValue?: boolean;
}

const INITIAL_STATE: State = {
    myStateValue: true,
};


class <%= name %> extends React.PureComponent<Props, State> {
    public state = INITIAL_STATE;

    public render() {

        const { className, children, ...rest } = this.props;

        return (
            <<%= name %>Styled>
                <div className={['<%= comp %>', className && {className}].join(' ')} data-testid='<%= comp %>'>
                    <Material<%= name %> {...rest}>
                        {children}
                    </Material<%= name %>>
                </div>
            </<%= name %>Styled>
        );
    }
}
<% } else { -%>
const <%= name %>: React.FC<Props> = ({ children, className, ...rest }) => (
    <<%= name %>Styled>
        <div className={['<%= comp %>', className && className].join(' ')} data-testid='<%= comp %>'>
            <Material<%= name %> {...rest}>
                {children}
            </Material<%= name %>>            
        </div>
    </<%= name %>Styled>
);
<% } -%>

export default <%= name %>;
