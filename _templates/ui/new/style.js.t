---
to: src/common/ui/<%= name %>/<%= name %>Styled.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import styled from 'styled-components';

const <%= name %>Styled = styled.div`
    //.<%= comp %>
`;

export default <%= name %>Styled;
