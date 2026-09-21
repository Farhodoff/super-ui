# Aspect Ratio

Displays content within a desired ratio.

## Usage

```tsx
import { AspectRatio } from '@/components/ui/aspect-ratio'

<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <img
      src="..."
      alt="Photo"
      className="rounded-md object-cover"
    />
  </AspectRatio>
</div>
```

## API Reference

### AspectRatio Props
- `ratio` (`number`): Ratio (width / height). Defaults to `1`.

## API Reference

### AspectRatio Props

This component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.
