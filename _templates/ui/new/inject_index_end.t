---
inject: true
to: src/common/ui/index.ts
before: \}\;
skip_if:    <%= name %>,
prepend: true
---
    <%= name %>,