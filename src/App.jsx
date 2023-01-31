import './App.scss';
import MainPage from './Components/Pages/MainPage';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {

  return (
    <div className="App">
      <ProSidebarProvider>
        <MainPage></MainPage>
      </ProSidebarProvider>
    </div>
  )
}

export default App
