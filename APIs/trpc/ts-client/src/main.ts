import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome to <span>TRPC</span> client</h1>
    <h3>Hello route Output: <span id="hello"></span></h3>
    <label>Enter a greeting to send to the server</label>
    <input type="text" id="greeting" placeholder="Enter a greeting">

    <h3>Input from server: <span id="input"></span></h3>
  </div>
`
