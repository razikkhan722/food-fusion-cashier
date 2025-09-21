
import "./App.css";
import "./styles/global.css"
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  return (
    <>
      <Button onClick={() => alert("Button Clicked!")} size="full" color="blue">Me</Button>
       <Input
        label="Name"
        name="name"
        placeholder="Enter your name"
        // value={formData.name}
        // onChange={handleChange}
      />
    </>
  );
}

export default App;
