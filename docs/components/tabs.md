# Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

## Usage

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

## API Reference

### Tabs Props
- `defaultValue` (`string`): The value of the tab that should be active when initially rendered.
- `value` (`string`): The controlled value of the tab to activate.
- `onValueChange` (`(value: string) => void`): Event handler called when the value changes.
- `orientation` (`"horizontal" | "vertical"`): The orientation of the tabs. Defaults to `"horizontal"`.

## API Reference

### Tabs Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Tabs Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
