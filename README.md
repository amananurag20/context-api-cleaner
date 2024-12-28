# React Context API - Cleaner Structure

This guide demonstrates a cleaner and modular way to implement and use React Context API by separating each context into its own file and consolidating them into a single `ContextWrapper` for simplicity.

---

## Project Structure

```plaintext
src/
├── context/
│   ├── authContext.jsx
│   ├── cartContext.jsx
│   ├── colorContext.jsx
│   ├── themeContext.jsx
│   ├── userContext.jsx
│   ├── contextWrapper.jsx
├── App.jsx
├── index.jsx
```

---

## Step-by-Step Guide

### **1. Create Individual Contexts**

Each context has its own file for better modularity.

#### Example: `colorContext.jsx`
```javascript
import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('red');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
```

Repeat this pattern for other contexts like `authContext.jsx`, `cartContext.jsx`, etc., replacing the state and logic as needed.

---

### **2. Consolidate Contexts in a Wrapper**

Create a `contextWrapper.jsx` file to combine all the context providers. This simplifies the `App.jsx` file by reducing clutter.

#### `contextWrapper.jsx`
```javascript
import React from 'react';
import { ColorProvider } from './colorContext';
import { AuthProvider } from './authContext';
import { CartProvider } from './cartContext';
import { ThemeProvider } from './themeContext';
import { UserProvider } from './userContext';

const ContextWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ColorProvider>
          <ThemeProvider>
            <UserProvider>{children}</UserProvider>
          </ThemeProvider>
        </ColorProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default ContextWrapper;
```

---

### **3. Use Context Wrapper in the Root Component**

Wrap the root component (`App`) with `ContextWrapper` to provide context data throughout the application.

#### `index.jsx`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextWrapper from './context/contextWrapper';

ReactDOM.render(
  <ContextWrapper>
    <App />
  </ContextWrapper>,
  document.getElementById('root')
);
```

---

### **4. Access Context Data**

Use the `useContext` hook to access context data in any component.

#### Example: Accessing `ColorContext`
```javascript
import React, { useContext } from 'react';
import { ColorContext } from './context/colorContext';

const SomeComponent = () => {
  const { color, setColor } = useContext(ColorContext);

  return (
    <div>
      <p>Current Color: {color}</p>
      <button onClick={() => setColor('blue')}>Change to Blue</button>
    </div>
  );
};

export default SomeComponent;
```

---

### **5. Debugging Tips**

- Ensure all components consuming a context are wrapped inside the respective provider.
- Verify the value provided in each `Provider` using `console.log`.
- Use default values in `createContext` for easier debugging.

#### Example:
```javascript
export const ColorContext = createContext({
  color: 'defaultColor',
  setColor: () => {},
});
```

---

### Benefits of This Approach

1. **Separation of Concerns**: Each context is self-contained, making it easier to maintain.
2. **Scalability**: Adding a new context requires minimal changes.
3. **Clean Code**: The `ContextWrapper` simplifies the root component and avoids nesting in `App.jsx`.