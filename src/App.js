import './App.css'; // Importing CSS styles for the App component
import Login from './pages/Login'; // Importing the Login component
import '@aws-amplify/ui-react/styles.css'; // Importing CSS styles for AWS Amplify UI components

function App() {
  return (
    <div className="App"> {/* The root container of the application */}
      <Login /> {/* Rendering the Login component */}
    </div>
  );
}

export default App; // Exporting the App component as the default export
