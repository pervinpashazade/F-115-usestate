import Counter from "./Counter"

function App() {

  const students = [{
    id: 1,
    name: "Nergiz",
    age: 20,
  }, {
    id: 2,
    name: "Arzu",
    age: 21,
  }, {
    id: 3,
    name: "Huseyn",
    age: 25,
  }, {
    id: 4,
    name: "Murad",
    age: 22,
  }]

  const sayHello = () => {
    alert("Second button clicked!")
  }

  return (
    <div>
      {/* <button
        onClick={() => { alert("ok") }}
      >
        First button
      </button>
      <br />
      <button
        onClick={sayHello}
      >
        Second button
      </button> */}
      <br />
      <br />
      {/* {
        students.map((item, index) => {
          return <p key={index}>{item.name} {item.age}</p>
        })
      } */}
      <br />
      <br />
      <Counter />
    </div>
  )
}

export default App