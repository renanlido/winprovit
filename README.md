## Inicio

Primeiro, rode o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra Abra [http://localhost:3000](http://localhost:3000) no seu broweser para ver o resultado. no seu broweser para ver o resultado.

## Projeto

Eu imaginei o projeto como uma rede social.

O projeto foi criado com o Next.js por ele dispor de um backend e um frontend bem próximos, o que facilitaria demonstrar skills na construção de uma api onde eu pudesse fazer o consumo dos dados da api disponibilizada, fazer o parse e produzir uma apresentação no menor tempo possível e com a menor latência possível entre o backend e o frontend.

O projeto foi desenhado para ser rápido por ser produzido via server side e por possuir rotas dinâmicas com cache para que a página tenha alta disponibilidade e o menor consumo de API.

Na pasta CORE está toda a abstração da API com alguns testes de unidade.

Infelizmente não consegui realizar os testes de unidade nos componentes de frontend, mas eu os faria utilizando o vitest, jest e testing library. Possivelmente, nos componentes com integração, eu utilizaria o cypress para atomação dos testes.

Para estliziação utilizei o Stitches que é uma lib para CSS in JS.

Criei duas páginas, uma para apresentação dos posts de todos os usuários separadas por usuário. E uma com a apresentação do usuário, com apenas os seus posts.

Infelizmente não utilizei todas as props disponíveis, mas elas estão parseadas conforme o requisitado e disponíveis para você em  [http://localhost:3000/api/letters](http://localhost:3000/api/letters).
