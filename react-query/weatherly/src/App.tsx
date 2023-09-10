import "./App.css";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  return (
    <>
      <h1>Weatherly App</h1>
      <p>API key: {apiKey}</p>
    </>
  );
}

export default App;
