import Button from "./components/Button/Button";

function App() {
  return (
    <div className="bg-slate-900 text-white w-screen-xl h-screen p-8">
      <h1>Hello World</h1>
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
