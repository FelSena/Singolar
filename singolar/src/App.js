import { ToastContainer } from "react-toastify";
import MainModal from "./components/MainModal";
import { ModalProvider } from "./components/Providers/ModalProvider";
import MainRoutes from "./components/Routes";
import "react-toastify/dist/ReactToastify.css";
import "App.css";

function App() {
  return (
    <ModalProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainModal />
      <MainRoutes />
    </ModalProvider>
  );
}

export default App;
