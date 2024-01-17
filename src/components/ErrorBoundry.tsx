import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React from 'react';
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Xəta baş verdi!</AlertTitle>
          <AlertDescription>Zəhmət olmasa, yenidən cəhd edin.</AlertDescription>
        </Alert>
      );
    } else {
      return <>{children}</>;
    }
  }
}
export default ErrorBoundary;