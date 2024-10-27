import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome to <span>TRPC</span> client</h1>
    <h3>Hello route Output: <span id="hello"></span></h3>
  </div>
`
