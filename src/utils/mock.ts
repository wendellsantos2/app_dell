const produtos = [
  {
    categoria: 'Cerveja',
    items: [
      {
        id: 1,
        titulo: 'Cherry Healthy',
        preco: '25,00R$',
        imageUrl: 'url_da_imagem_1',
        rating: 4.5,
        promotion: '10% OFF'
      },
      // ... outros produtos de cerveja
    ]
  },
  {
    categoria: 'Comida',
    items: [
      {
        id: 2,
        titulo: 'Produto Julio',
        preco: '30,00R$',
        imageUrl: 'url_da_imagem_2',
        rating: 4.0,
        promotion: '5% OFF'
      },
      // ... outros produtos de comida
    ]
  },
  {
    categoria: 'Sobremessa',
    items: [
      {
        id: 3,
        titulo: 'Produto SP',
        preco: '35,00R$',
        imageUrl: 'url_da_imagem_3',
        rating: 4.3,
        promotion: '15% OFF'
      },
      // ... outros petiscos
    ]
  }
]

export { produtos };
