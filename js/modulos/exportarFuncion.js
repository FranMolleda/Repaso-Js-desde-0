//Exportar una funcion

//Creamos la función y en app.js le pasamos los valores
export const crearTarea = (tarea, urgencia) => {
  return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
};

export const tareaCompletada = () => {
  console.log("La tarea se completó");
};
