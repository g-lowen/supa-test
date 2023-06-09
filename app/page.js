"use client";

import { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { NewTodo } from "../components/NewTodo";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await supabase.from("todos").select("*");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <NewTodo reload={fetchTodos} />
      {todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
}
