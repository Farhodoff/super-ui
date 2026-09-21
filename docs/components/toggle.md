# Toggle

A two-state button that can be either on or off.

## Usage

```tsx
import { Toggle } from '@/components/ui/toggle'
import { Bold } from 'lucide-react'

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>
```

## API Reference

### Toggle Props
- `pressed` (`boolean`): Controlled pressed state.
- `defaultPressed` (`boolean`): Initially pressed state.
- `onPressedChange` (`(pressed: boolean) => void`): Callback when pressed state changes.
- `variant` (`"default" | "outline"`): Style variant.
- `size` (`"default" | "sm" | "lg"`): Size of toggle.

## API Reference

### Toggle Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Toggle Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
