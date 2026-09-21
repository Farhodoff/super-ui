# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.

## Usage

```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

## API Reference

### RadioGroup Props
- `defaultValue` (`string`): The value of the radio item that should be checked when initially rendered.
- `value` (`string`): The controlled value of the radio item to check.
- `onValueChange` (`(value: string) => void`): Event handler called when the value changes.
- `disabled` (`boolean`): When true, prevents the user from interacting with the radio group.

## API Reference

### RadioGroup Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
