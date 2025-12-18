// supabaseService.js
// Serviço isolado para acesso ao Supabase (produtos, locais, movimentações)

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// CONFIGURAÇÃO DO SUPABASE
const SUPABASE_URL = 'https://odkreyonlrjlpflnoagr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ka3JleW9ubHJqbHBmbG5vYWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5Nzk3MjYsImV4cCI6MjA4MTU1NTcyNn0.uAfanVL-6wbngUnbZwhjefPiGJlQIQf0zGmA5HvrAVY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// =========================
// PRODUTOS
// =========================

export async function listarProdutos() {
  const { data, error } = await supabase
    .from('produtos')
    .select('*')
    .order('nome')

  if (error) {
    console.error('Erro ao listar produtos:', error)
    throw error
  }
  return data
}

export async function salvarProduto({ nome, estoque_minimo, local_id }) {
  const { data, error } = await supabase
    .from('produtos')
    .insert([{ nome, estoque_minimo, local_id }])
    .select()

  if (error) {
    console.error('Erro ao salvar produto:', error)
    throw error
  }
  return data
}

// =========================
// LOCAIS DE ESTOQUE
// =========================

export async function listarLocaisEstoque() {
  const { data, error } = await supabase
    .from('locais_estoque')
    .select('*')
    .order('nome')

  if (error) {
    console.error('Erro ao listar locais de estoque:', error)
    throw error
  }
  return data
}

// =========================
// MOVIMENTAÇÕES
// =========================

export async function salvarMovimentacao({ produto_id, local_id, tipo, quantidade }) {
  const { data, error } = await supabase
    .from('movimentacoes')
    .insert([{ produto_id, local_id, tipo, quantidade }])
    .select()

  if (error) {
    console.error('Erro ao salvar movimentação:', error)
    throw error
  }
  return data
}

export async function listarMovimentacoes() {
  const { data, error } = await supabase
    .from('movimentacoes')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Erro ao listar movimentações:', error)
    throw error
  }
  return data
}
