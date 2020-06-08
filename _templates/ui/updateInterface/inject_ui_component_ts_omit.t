---
inject: true
to: src/common/ui/<%= name %>/<%= name %>.tsx
after: interface Props
skip_if: extends Material<%= name %>Props
message: "NOTE: Afterwards, do a find and replace for `interface Props {` with `interface Props`"
---
    extends Material<%= name %>Props
        // Uncomment these lines to disable the <%= name %>Props props:
        // , Omit<
        // Material<%= name %>Props,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {