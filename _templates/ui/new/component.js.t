---
to: src/common/ui/<%= name %>/<%= name %>.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import * as React from 'react';
import <%= name %>Styled from './<%= name %>Styled';
import { <%= name %> as Material<%= name %> } from '@material-ui/core';

interface Props {
    name: string;
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
        return (
            </<%= name %>Styled>
                <div className={['<%= comp %>', this.props.className].join(' ')} data-testid='<%= comp %>'>
                    <Material<%= name %> name={name} {...props}>
                        {this.props.children}
                    </Material<%= name %>>
                </div>
            </<%= name %>Styled>
        );
    }
}
<% } else { -%>
const <%= name %>: React.FC<Props> = ({ children, className, name, ...props }) => (
    <<%= name %>Styled>
        <div className={['<%= comp %>', {className}].join(' ')} data-testid='<%= comp %>'>
            <Material<%= name %> name={name} {...props}>
                {children}
            </Material<%= name %>>            
        </div>
    </<%= name %>Styled>
);
<% } -%>

export default <%= name %>;
