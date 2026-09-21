# Sheet

Extends the Dialog component to display content that complements the main screen of the application.

## Usage

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

## API Reference

### SheetContent Props
- `side` (`"top" | "bottom" | "left" | "right"`): Screen edge from which the sheet enters. Defaults to `"right"`.

## API Reference

### Sheet Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.

## API Reference

### Sheet Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
