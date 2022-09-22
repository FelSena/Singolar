import "./App.css";
import MainModal from "./components/MainModal";
import { ModalProvider } from "./components/Providers/ModalProvider";
import MainRoutes from "./components/Routes";

function App() {
  return (
    <ModalProvider>
      <MainModal />
      <MainRoutes />
    </ModalProvider>
  );
}

export default App;
