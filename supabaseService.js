// supabaseService.js (GitHub Pages sem build)
(() => {
  const SUPABASE_URL = "https://odkreyonlrjlpflnoagr.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ka3JleW9ubHJqbHBmbG5vYWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5Nzk3MjYsImV4cCI6MjA4MTU1NTcyNn0.uAfanVL-6wbngUnbZwhjefPiGJlQIQf0zGmA5HvrAVY";

  window.sb = window.sb || window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  window.db = {
    listarProdutos: () =>
      window.sb.from("produtos").select("*").order("nome"),

    inserirProduto: (nome, estoque_minimo = 0) =>
      window.sb.from("produtos").insert({ nome, estoque_minimo })
  };
})();
