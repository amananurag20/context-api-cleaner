import { ThemeProvider } from "./themeContext";
import { AuthProvider } from "./authContext";
import { UserProvider } from "./userContext";
import { CartProvider } from "./cartContext";
import { ColorProvider } from "./colorContext";

// eslint-disable-next-line react/prop-types
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
