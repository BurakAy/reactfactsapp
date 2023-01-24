// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

// imperative code
const h1 = document.createElement("h1");
h1.textContent = "header content";
h1.className = "header";

const root = document.querySelector("#root");
root.append(h1);
