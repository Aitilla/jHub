"use client"

import Login from "./components/Login/Login";
import { supabaseAdmin } from "./lib/supabase";

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabaseAdmin
      .from("User")
      .insert({ username: "tammajahhhh " });

      if (data) console.log(data)
      if (error) console.log(error)
  };
  setNewView();
  return (
    <div className={"main"}>
      <Login />
    </div>
  );
}
