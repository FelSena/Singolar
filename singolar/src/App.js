import MainModal from "./components/MainModal";
import { ModalProvider } from "./components/Providers/ModalProvider";
import MainRoutes from "./components/Routes";
import GlobalStyle from "./components/Styles/Globals";

function App() {
  return (
    <ModalProvider>
      <GlobalStyle />
      <MainModal />
      <MainRoutes />
    </ModalProvider>
  );
}

export default App;
