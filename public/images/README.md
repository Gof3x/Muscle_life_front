# Pasta de imagens públicas

Coloque aqui as imagens que você quer servir diretamente pelo site.

Como referenciar as imagens no projeto (Vite):

- No HTML ou em tags <img> estáticas use o caminho relativo a partir da raiz pública: `/images/nome-do-arquivo.jpg`
- Em CSS: `background-image: url('/images/nome-do-arquivo.jpg')`
- Em componentes React (JSX), você pode usar caminhos absolutos começando com `/images/` para que Vite sirva o arquivo diretamente.

Exemplo de uso em JSX:

<img src="/images/exemplo.jpg" alt="Exemplo" />

Convenção de nomes sugerida

- Para este projeto eu usei nomes padrão para os produtos com o formato: `/images/<product-id>-1.jpg`, `/images/<product-id>-2.jpg` quando houver múltiplas imagens.
- Exemplos:
	- `/images/whey-01-1.jpg`
	- `/images/whey-01-2.jpg`
	- `/images/creatine-01-1.jpg`

Coloque os arquivos de imagem nesta pasta com os nomes correspondentes para que os produtos exibam as fotos locais.

Observações:
- Arquivos colocados em `public/` não passam pelo pipeline do Vite (não são otimizados pelo bundler). Use esta pasta para assets estáticos que precisam de caminhos fixos.
- Se preferir que imagens passem pelo bundler (hashing/otimização), coloque-as em `src/assets` e as importe diretamente nos componentes.
