# Slider

An input where the user selects a value from within a given range.

## Usage

```tsx
import { Slider } from '@/components/ui/slider'

<Slider defaultValue={[33]} max={100} step={1} />
```

## API Reference

### Slider Props
- `defaultValue` (`number[]`): The value of the slider when initially rendered.
- `value` (`number[]`): The controlled value of the slider.
- `onValueChange` (`(value: number[]) => void`): Event handler called when the value changes.
- `min` (`number`): The minimum value for the range. Defaults to `0`.
- `max` (`number`): The maximum value for the range. Defaults to `100`.
- `step` (`number`): The stepping interval. Defaults to `1`.
- `disabled` (`boolean`): When true, prevents the user from interacting with the slider.

## API Reference

### Slider Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Slider Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
