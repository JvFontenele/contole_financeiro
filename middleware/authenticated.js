export default ({ $supabase, redirect }) => {
  if (!$supabase.auth.session()) {
    return redirect("/main/login");
  }
};
