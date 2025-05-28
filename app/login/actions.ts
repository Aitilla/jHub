"use server";

import { encrypt } from "../lib/encrypt";
import { supabaseAdmin, supabase } from "../lib/supabase";

export async function login(formData: FormData) {
  let session = false;
  const input = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };
  const getUser = async (username: string, password: string) => {
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
      const hashedPassword = await encrypt(password);
      console.log(hashedPassword);
    } else {
      console.log("raawrrr");
    }
  };
  await getUser(input.username, input.password);
}

export async function signup(formData: FormData) {
  const input = {
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    password: await encrypt(formData.get("password") as string),
  };
  const createUser = async (email: string, username: string, password: any) => {
    if (email || username || password === "") {
      console.log("incorrect input");
    }
    const { data: users, error } = await supabaseAdmin
      .from("Users")
      .insert({ username: "", email: "", password: "" });
  };
  await createUser(input.email, input.username, input.password);
}
