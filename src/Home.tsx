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
        <div className="my-4 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-semibold head mb-1">Good Morning!</h2>
            <p>You got some task to do.</p>
          </div>
          <div className="d-none d-lg-block">
            <button className="create-btn p-2 border rounded head">
              + Create New Task
            </button>
          </div>
        </div>

        <div>
          <TodoList />
        </div>
      </main>
    </>
  );
}
