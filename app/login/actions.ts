"use server";

import { encrypt, verify } from "../lib/encrypt";
import { supabaseAdmin, supabase } from "../lib/supabase";

export async function login(formData: FormData) {
  let session = false;
  const input = {
    username: formData.get("username") as string,
    password: "password" as string,
  };
  const getUser = async (username: string, password: any) => {
    const { data: users, error } = await supabase
      .from("Users")
      .select("*")
      .eq("username", username);
    if (error) {
      console.log(error);
    }
    const user = users?.[0];

    

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
    const { data: users, error } = await supabaseAdmin
      .from("Users")
      .insert({
        email: input.email,
        username: input.username,
        password: input.password,
      });
      console.log(users)
      console.log(error)
  };

  await createUser(input.email, input.username, input.password);
}
