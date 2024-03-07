import { JiraTasks } from "../../components";
import { useTaskStore } from "../../stores";

export const JiraPage = () => {
  const pendingTasks = useTaskStore((state) => state.getTaskByStatus("Open"));
  const inProgressTasks = useTaskStore((state) =>
    state.getTaskByStatus("InProgress")
  );
  const doneTasks = useTaskStore((state) => state.getTaskByStatus("Done"));

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendientes" status="Open" tasks={pendingTasks} />

        <JiraTasks
          title="Avanzando"
          status="InProgress"
          tasks={inProgressTasks}
        />

        <JiraTasks title="Terminadas" status="Done" tasks={doneTasks} />
      </div>
    </>
  );
};
