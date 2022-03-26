import Cars from "./components/Cars/Cars";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";

function App() {
    return (
        <div className="App container-fluid">
            <Header></Header>
            <Cars></Cars>
            <Questions></Questions>
        </div>
    );
}

export default App;
