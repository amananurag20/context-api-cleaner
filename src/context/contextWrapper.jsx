import React from 'react';
import { ThemeProvider } from './themeContext';
import { AuthProvider } from './authContext';
import { UserProvider } from './userContext';
import { CartProvider } from './cartContext';
import { ColorProvider } from './colorContext';
import { combineComponents } from '../utils/combineComponents';

const providers = [
  AuthProvider,
  CartProvider,
  ColorProvider,
  ThemeProvider,
  UserProvider,
];

const ContextWrapper = combineComponents(...providers);

export default ContextWrapper;
