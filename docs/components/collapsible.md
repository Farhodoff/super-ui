# Collapsible

An interactive component which expands/collapses a panel.

## Usage

```tsx
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </CollapsibleContent>
</Collapsible>
```

## API Reference

### Collapsible Props
- `open` (`boolean`): Controlled open state.
- `defaultOpen` (`boolean`): Initially open state.
- `onOpenChange` (`(open: boolean) => void`): Callback when state changes.
- `disabled` (`boolean`): Prevents interaction when true.

## API Reference

### Collapsible Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Collapsible Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
