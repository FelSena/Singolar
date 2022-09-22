import "./App.css";
import MainModal from "./components/MainModal";
import PostCreate from "./components/PostCreate";
import PostList from "./components/Posts";
import { ModalProvider } from "./components/Providers/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <MainModal />
      <PostCreate />
      <PostList />
    </ModalProvider>
  );
}

export default App;
