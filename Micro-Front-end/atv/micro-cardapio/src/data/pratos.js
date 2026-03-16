/**
 * pratos.js - Base de dados local do cardápio
 *
 * Em um cenário real, esses dados viriam de uma API REST.
 * Aqui usamos dados estáticos para simular o cardápio do restaurante.
 */
export const pratos = [
  // ── Entradas ──
  {
    id: 1,
    nome: "Bruschetta ao Tomate",
    descricao: "Pão tostado com tomate fresco, manjericão e azeite extra virgem.",
    preco: 24.9,
    categoria: "entrada",
    emoji: "🍅",
  },
  {
    id: 2,
    nome: "Carpaccio de Carne",
    descricao: "Fatias finíssimas de filé mignon com alcaparras e parmesão.",
    preco: 38.9,
    categoria: "entrada",
    emoji: "🥩",
  },
  {
    id: 3,
    nome: "Salada Caprese",
    descricao: "Tomate, mozzarella de búfala, manjericão e redução de balsâmico.",
    preco: 29.9,
    categoria: "entrada",
    emoji: "🥗",
  },

  // ── Principais ──
  {
    id: 4,
    nome: "Risoto de Funghi",
    descricao: "Arroz arbóreo cremoso com mix de cogumelos e trufa negra.",
    preco: 68.9,
    categoria: "principal",
    emoji: "🍄",
  },
  {
    id: 5,
    nome: "Filé ao Molho Madeira",
    descricao: "Filé mignon grelhado com molho madeira e batatas rústicas.",
    preco: 89.9,
    categoria: "principal",
    emoji: "🥩",
  },
  {
    id: 6,
    nome: "Salmão ao Limão Siciliano",
    descricao: "Salmão grelhado com manteiga de ervas e legumes salteados.",
    preco: 79.9,
    categoria: "principal",
    emoji: "🐟",
  },
  {
    id: 7,
    nome: "Massa ao Vôngole",
    descricao: "Linguine com vôngoles frescos, alho, vinho branco e salsinha.",
    preco: 64.9,
    categoria: "principal",
    emoji: "🍝",
  },

  // ── Sobremesas ──
  {
    id: 8,
    nome: "Tiramisu",
    descricao: "Clássico italiano com mascarpone, espresso e cacau em pó.",
    preco: 32.9,
    categoria: "sobremesa",
    emoji: "☕",
  },
  {
    id: 9,
    nome: "Crème Brûlée",
    descricao: "Creme de baunilha com casquinha de açúcar caramelizado.",
    preco: 28.9,
    categoria: "sobremesa",
    emoji: "🍮",
  },
  {
    id: 10,
    nome: "Petit Gâteau",
    descricao: "Bolinho quente de chocolate com sorvete de baunilha.",
    preco: 34.9,
    categoria: "sobremesa",
    emoji: "🍫",
  },

  // ── Bebidas ──
  {
    id: 11,
    nome: "Água com Gás",
    descricao: "Água mineral gaseificada importada, 500ml.",
    preco: 9.9,
    categoria: "bebida",
    emoji: "💧",
  },
  {
    id: 12,
    nome: "Suco de Maracujá",
    descricao: "Suco natural de maracujá com toque de hortelã.",
    preco: 18.9,
    categoria: "bebida",
    emoji: "🥤",
  },
  {
    id: 13,
    nome: "Vinho Tinto da Casa",
    descricao: "Taça de vinho tinto seco, seleção do sommelier.",
    preco: 32.9,
    categoria: "bebida",
    emoji: "🍷",
  },
];
