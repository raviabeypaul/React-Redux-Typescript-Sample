import "./App.css";
import ConfigStore from "./store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import InitialCircularProgress from "./components/CircularProgress";
import AppRoutes from "./routes/AppRoutes";
import MessageHandler from "./components/MessageHandler";
import { AppDialog } from "./components/AppDialog";
function App() {
  return (
    <Provider store={ConfigStore().store}>
      <PersistGate
        loading={<InitialCircularProgress />}
        persistor={ConfigStore().persistor}
      >
        <MessageHandler>
          <AppDialog>
            <AppRoutes />
          </AppDialog>
        </MessageHandler>
      </PersistGate>
    </Provider>
  );
}

export default App;
