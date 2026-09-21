# Switch

A control that allows the user to toggle between checked and not checked.

## Usage

```tsx
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

## API Reference

### Switch Props
- `checked` (`boolean`): The controlled checked state of the switch.
- `defaultChecked` (`boolean`): The checked state of the switch when it is initially rendered.
- `onCheckedChange` (`(checked: boolean) => void`): Event handler called when the checked state of the switch changes.
- `disabled` (`boolean`): When true, prevents the user from interacting with the switch.

## API Reference

### Switch Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Switch Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
