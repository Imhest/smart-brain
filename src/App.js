// Lo primero que se hace en un componente de React es importar los demas componentes y recursos que necesitamos. 
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

// En éste caso app.js es un functional stateful component:
function App() {
  return (
    <div className="App">
      <Navigation />
      {/*<Logo />
      <ImageLinkForm />
      <FaceRecognition />*/}
    </div>
  );
}

// Al final el componente se exporta para poder ser importado por los demás.
export default App;