import { Tarea } from "./Tarea";

type ListaTareas = {
  listaTareas: string[];
  borrarTareas: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTareas }: ListaTareas) => {
  return (
    <div>
      {listaTareas.map((tarea: string, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          borrarTarea={() => borrarTareas(index)}
        ></Tarea>
      ))}
    </div>
  );
};
