import './App.css';
import CovidReportManager from './pages/CovidReports/container/CovidMain';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CovidReportManager />
      </Provider>

    </div>
  );
}

export default App;
