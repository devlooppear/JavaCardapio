# BackCardapio

## Food Controller
O FoodController é uma classe responsável por lidar com as requisições relacionadas a alimentos em um cardápio em um aplicativo. Ele implementa as operações básicas de CRUD (Create, Read, Update, Delete) para manipular alimentos.

## Métodos
### getAllFood()
---
Este método trata da requisição GET para obter todos os alimentos do cardápio. Retorna uma lista de objetos FoodResponseDTO contendo informações sobre cada alimento, como o título, imagem e preço.

### getFoodById(Long id)
---
Este método trata da requisição GET para obter um alimento específico pelo seu ID. Recebe como parâmetro o ID do alimento e retorna um objeto FoodResponseDTO contendo as informações do alimento correspondente. Se o alimento não for encontrado, lança uma exceção ResponseStatusException com o status HTTP 404 (Not Found).

### saveFood(FoodRequestDTO foodRequestDTO)
---
Este método trata da requisição POST para salvar um novo alimento no cardápio. Recebe um objeto FoodRequestDTO contendo as informações do novo alimento, como título, imagem e preço. O método cria um objeto Food com base nas informações fornecidas e o salva no repositório.

### updateFood(Long id, FoodRequestDTO foodRequestDTO)
---
Este método trata da requisição PUT para atualizar as informações de um alimento existente. Recebe como parâmetro o ID do alimento a ser atualizado e um objeto FoodRequestDTO contendo as novas informações do alimento. O método verifica se o alimento existe no repositório, atualiza suas informações com base no FoodRequestDTO fornecido e o salva de volta no repositório. Se o alimento não for encontrado, lança uma exceção ResponseStatusException com o status HTTP 404 (Not Found).

### deleteFood(Long id)
---
Este método trata da requisição DELETE para excluir um alimento do cardápio. Recebe como parâmetro o ID do alimento a ser excluído. O método verifica se o alimento existe no repositório e o exclui. Se o alimento não for encontrado, lança uma exceção ResponseStatusException com o status HTTP 404 (Not Found).

## Configuração de CORS
O controlador usa a anotação @CrossOrigin para permitir todas as origens (*) e cabeçalhos (*) nas requisições. Isso permite que o aplicativo seja acessado por diferentes domínios.

## Dependências
O FoodController depende das seguintes classes e interfaces:

Food: Uma classe que representa um alimento no cardápio.
FoodRepository: Uma interface que define as operações de acesso ao banco de dados para a entidade Food.
FoodRequestDTO: Um objeto de transferência de dados (DTO) que contém as informações necessárias para criar ou atualizar um alimento.
FoodResponseDTO: Um objeto de transferência de dados (DTO) que contém as informações de um alimento a ser retornado em resposta a uma requisição.

O CardapioApplication é o ponto de entrada da aplicação do cardápio. É responsável por iniciar a aplicação Spring Boot.

## Executando a Aplicação
Para executar a aplicação, você pode seguir as etapas abaixo:

- Certifique-se de que você tenha as dependências necessárias configuradas corretamente.
- Rode o arquivo `CardapioApplication.java` localizado no pacote com.example.cardapio.
- Execute o método `main` dentro da classe CardapioApplication.
- Aguarde até que a aplicação seja inicializada.
- Assim que a aplicação for iniciada com sucesso, você verá uma mensagem indicando que a aplicação está em execução.
- Agora você pode acessar os endpoints definidos nos controladores da aplicação, como o FoodController, para interagir com o cardápio.

---

O CardapioApplication depende das seguintes configurações:

- SpringBootApplication: Uma anotação que configura a aplicação Spring Boot, habilitando a configuração automática, o escaneamento de componentes e outros recursos padrão.
- SpringApplication: Uma classe que inicia uma aplicação Spring Boot. Ela usa a classe CardapioApplication como ponto de entrada e pode receber argumentos adicionais, se necessário.