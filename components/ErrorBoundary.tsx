import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  language?: 'tr' | 'en';
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Production'da error tracking servisine gönderilebilir (Sentry, vb.)
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      const { language = 'tr' } = this.props;
      
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
              <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold">
              {language === 'en' ? 'Something went wrong' : 'Bir hata oluştu'}
            </h1>
            
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'We apologize for the inconvenience. Please try refreshing the page or return to the homepage.'
                : 'Rahatsızlık için özür dileriz. Lütfen sayfayı yenileyin veya ana sayfaya dönün.'}
            </p>

            {import.meta.env.DEV && this.state.error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg text-left">
                <p className="text-sm font-mono text-red-600 dark:text-red-400">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleReset}
                className="btn-primary"
              >
                <Home className="mr-2 h-4 w-4" />
                {language === 'en' ? 'Go to Homepage' : 'Ana Sayfaya Dön'}
              </Button>
              
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="btn-secondary"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                {language === 'en' ? 'Refresh Page' : 'Sayfayı Yenile'}
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
