---
to: src/common/ui/<%= name %>/<%= name %>.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import * as React from 'react';
import { <%= name %> as Material<%= name %> } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
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
            <Material<%= name %> {...props}>
                {this.props.children}
            </Material<%= name %>>
        );
    }
}
<% } else { -%>
const <%= name %>: React.FC<Props> = ({ children, ...props }) => (
    <Material<%= name %> {...props}>
        {children}
    </Material<%= name %>>
);
<% } -%>

export default <%= name %>;
