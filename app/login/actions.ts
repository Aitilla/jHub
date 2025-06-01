"use server";

import { encrypt, verify } from "../lib/encrypt";
import { supabaseAdmin, supabase } from "../lib/supabase";

export async function login(formData: FormData): Promise<{ success: boolean }> {
  const input = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };
  const { data: users, error } = await supabase
    .from("Users")
    .select("*")
    .eq("username", input.username);
  if (error) {
    console.log(error);
    return { success: false };
  }

  const user = users?.[0];
  if (!user) return { success: false };

  const isValid = await verify(input.password, user.password);
  if (!isValid) return { success: false };

  return { success: true };
}

export async function signup(
  formData: FormData
): Promise<{ success: boolean }> {
  const input = {
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    password: await encrypt(formData.get("password") as string),
  };
  const { data: users, error } = await supabaseAdmin.from("Users").insert({
    email: input.email,
    username: input.username,
    password: input.password,
  });
  if (error) {
    console.log(error);
    return { success: false };
  }

  return { success: true };
}
