"use server";

import { supabaseAdmin, supabase } from "../lib/supabase";

export async function login(formData: FormData) {
  let session = false;
  const input = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };
  console.log(input);
  const getUser = async (username: string, password: string) => {
    console.log(username);
    const { data: users, error } = await supabase
      .from("Users")
      .select("*")
      .eq("username", username);
    if (error) {
      console.log(error);
    }
    const user = users?.[0]; 

    if (user.password === password) {
      session = true;
      console.log(password)
      console.log(session);
    } else {
      console.log("rawrrr");
    }
  };
  getUser(input.username, input.password);
}

export async function signup(formData: FormData) {
  const data = {
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };
}
