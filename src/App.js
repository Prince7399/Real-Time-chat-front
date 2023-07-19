import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginForm from './Pages/Form';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/core/styles';
import { THEME } from './commonStyle/theme';
import GlobalStyle from './commonStyle/commonCss';


function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={THEME}>
          <GlobalStyle demo={false} />
          <div className="">
            <LoginForm />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
