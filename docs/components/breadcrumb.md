# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

## Usage

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## API Reference

### Breadcrumb Props
- `separator` (`ReactNode`): Custom separator element between items.
- `className` (`string`): Additional CSS classes.

## API Reference

### Breadcrumb Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Breadcrumb Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
