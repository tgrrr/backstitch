---
inject: true
to: src/common/ui/index.ts
after: export {
skip_if:    <%= name %>,
prepend: true
---
    <%= name %>,