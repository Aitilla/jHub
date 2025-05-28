"use client"

import { supabase, supabaseAdmin } from "./lib/supabase";

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabaseAdmin
      .from("Users")
      .insert({ username: "rawr ", email: "rawr@rawr.rawr", password: "rawr" });

      if (data) console.log(data)
      if (error) console.log(error)
  };
  setNewView();

  return (
    <div className={"main"}>

    </div>
  );
}
