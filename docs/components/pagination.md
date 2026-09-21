# Pagination

Pagination with page navigation, previous and next controls, and responsive truncation.

## Usage

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## API Reference

### Pagination Props
- `className` (`string`): Additional classes for the pagination element.

## API Reference

### Pagination Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Pagination Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
