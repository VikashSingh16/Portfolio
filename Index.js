import  ReactDOM  from "react-dom/client";
import App from "./src/App";
const Index = () => {
    return <App/>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index/>);