import 'nativewind/types';

import { ViewProps, TextProps } from 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string; // Allows `className` prop on `View` components
  }

  interface TextProps {
    className?: string; // Allows `className` prop on `Text` components
  }
}
