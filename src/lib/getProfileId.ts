import { supabase } from "./supabase";

const KEY = "pricey_profile_id";

export async function getProfileId(): Promise<string> {
  const stored = localStorage.getItem(KEY);

  if (stored) {
    const { data } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", stored)
      .maybeSingle();
    if (data) return stored;
    localStorage.removeItem(KEY);
  }

  const { data, error } = await supabase
    .from("profiles")
    .insert({ name: null, monthly: 0, hourly: 0 })
    .select("id")
    .single();

  if (error || !data) throw new Error("Failed to create profile");

  localStorage.setItem(KEY, data.id);
  return data.id;
}
