import { Text, View } from "react-native";
import { useState } from "react";
import ToDoList from "@/component/ToDoList";

export default function Index() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <ToDoList tasks={tasks}/>
  );
}
