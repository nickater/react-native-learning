# Core Concepts & Components (5-20 minutes)

## Learning Objectives
- Master the fundamental React Native components
- Understand React Native styling with JavaScript objects
- Learn Flexbox layout principles for mobile

## Core Components Mapping

| Web (React) | React Native | Purpose |
|-------------|--------------|---------|
| `<div>` | `<View>` | Container element |
| `<span>`, `<p>` | `<Text>` | Text display |
| `<img>` | `<Image>` | Images |
| `<input>` | `<TextInput>` | User input |
| `<button>` | `<Pressable>` | Touchable elements |
| `<div>` with overflow | `<ScrollView>` | Scrollable content |

## Styling Differences

### Web CSS vs React Native Styles

**Web (CSS):**
```css
.container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**React Native (JavaScript Object):**
```javascript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
});
```

### Key Styling Rules
1. **No CSS**: All styles are JavaScript objects
2. **camelCase**: CSS properties become camelCase (`background-color` → `backgroundColor`)
3. **Numbers**: No units needed for most properties (defaults to density-independent pixels)
4. **StyleSheet.create**: Use this for performance optimization

## Layout with Flexbox

React Native uses **Flexbox by default** for all layouts:

- Every View is a flex container
- Default `flexDirection` is `column` (unlike web which is `row`)
- Common properties: `justifyContent`, `alignItems`, `flex`, `flexDirection`

## Live Demo Components

The following files demonstrate these concepts in practice:
- `BasicComponents.tsx` - Shows core components
- `StyledCard.tsx` - Demonstrates styling and layout
