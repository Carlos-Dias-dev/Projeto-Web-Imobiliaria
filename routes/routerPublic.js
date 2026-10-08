const express = require('express');
const router = express.Router();

const itens = [
  { id: 1, nome: 'Item Alpha', descricao: 'Descrição detalhada do Item Alpha.', preco: 'R$ 99,90' },
  { id: 2, nome: 'Item Beta', descricao: 'Descrição detalhada do Item Beta.', preco: 'R$ 149,90' },
  { id: 3, nome: 'Item Gamma', descricao: 'Descrição detalhada do Item Gamma.', preco: 'R$ 199,90' }
];

router.get('/', (req, res) => {
  res.render('home', { title: 'Página Inicial', itens });
});


router.get('/detalhes/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = itens.find(i => i.id === itemId);

  if (!item) {
    return res.status(404).send('Item não encontrado');
  }

  res.render('detalhes', { title: `Detalhes - ${item.nome}`, item });
});


router.get('/sobre', (req, res) => {
  res.render('sobre', { title: 'Sobre Nós' });
});

module.exports = router;