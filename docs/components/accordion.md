# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Usage

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## API Reference

### Accordion Props
- `type` (`"single" | "multiple"`): Determines whether one or multiple items can be opened at the same time.
- `collapsible` (`boolean`): When type is "single", allows closing content when clicking trigger for an open item.
- `defaultValue` (`string | string[]`): The default open item(s).
- `value` (`string | string[]`): The controlled open item(s).
- `onValueChange` (`(value: string | string[]) => void`): Event handler called when the open item changes.

## API Reference

### Accordion Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Accordion Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
