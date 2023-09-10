import TodoList from "./components/ToDoList";
import "./App.css";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
      <header className="mt-4 border-bottom">
        <Navbar />
      </header>
      <main className="mx-3">
        <TodoList />
      </main>
    </>
  );
}
