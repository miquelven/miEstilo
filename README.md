<div align="center">
  <h1>🌟 MiEstilo - Landing Page</h1>
  <p><strong>Uma landing page moderna e elegante para moda e estilo</strong></p>
  
  ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
</div>

---

## 📋 Sobre o Projeto

O **MiEstilo** é uma landing page moderna e responsiva desenvolvida para uma loja de moda e estilo. O projeto foi criado com foco na experiência do usuário, apresentando um design elegante, animações suaves e uma interface intuitiva que destaca produtos e coleções de forma atrativa.

### ✨ Principais Características

- 🎨 **Design Moderno**: Interface elegante com gradientes, sombras e efeitos visuais sofisticados
- 📱 **Totalmente Responsivo**: Adaptado para todos os dispositivos (desktop, tablet, mobile)
- ⚡ **Performance Otimizada**: Carregamento rápido com Vite e otimizações de build
- 🎭 **Animações Fluidas**: Transições suaves usando Vue Motion
- 🛍️ **Showcase de Produtos**: Carrosséis interativos para exibição de produtos e coleções
- 💬 **Depoimentos de Clientes**: Seção de reviews com design profissional
- 📞 **Integração WhatsApp**: Botões de contato direto via WhatsApp
- 🎯 **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Vue.js 3** - Framework JavaScript progressivo
- **Composition API** - API moderna do Vue para melhor organização do código
- **Tailwind CSS** - Framework CSS utilitário para estilização rápida
- **Vite** - Build tool moderna e rápida

### Bibliotecas e Plugins

- **@vueuse/motion** - Animações e transições avançadas
- **vue3-carousel** - Componente de carrossel responsivo
- **PrimeVue** - Biblioteca de componentes UI
- **Vuetify** - Framework de componentes Material Design
- **oh-vue-icons** - Biblioteca de ícones para Vue

### Ferramentas de Desenvolvimento

- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Prefixos CSS automáticos
- **PurgeCSS** - Remoção de CSS não utilizado
- **Terser** - Minificação de JavaScript

## 🏗️ Estrutura do Projeto

```
miEstilo/
├── public/
│   ├── images/
│   │   ├── banner/          # Imagens do banner principal
│   │   ├── collections/     # Imagens das coleções
│   │   ├── products/        # Imagens dos produtos
│   │   ├── rating/          # Imagens dos depoimentos
│   │   └── socialMedia/     # Imagens das redes sociais
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── About/           # Seção sobre a empresa
│   │   ├── Banner/          # Banner principal
│   │   ├── Collections/     # Showcase de coleções
│   │   ├── Header/          # Cabeçalho e navegação
│   │   ├── Products/        # Vitrine de produtos
│   │   ├── Rating/          # Depoimentos de clientes
│   │   ├── SocialMedia/     # Contato e redes sociais
│   │   └── Footer/          # Rodapé
│   ├── assets/
│   │   ├── main.css         # Estilos globais
│   │   └── animations.css   # Animações customizadas
│   ├── App.vue              # Componente principal
│   └── main.js              # Ponto de entrada
├── tailwind.config.js       # Configuração do Tailwind
├── vite.config.js          # Configuração do Vite
└── package.json            # Dependências do projeto
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/miquelven/miEstilo.git
   ```

2. **Navegue até o diretório do projeto**

   ```bash
   cd miEstilo
   ```

3. **Instale as dependências**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   Abra seu navegador e navegue até `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 🎨 Funcionalidades Implementadas

### 🏠 Banner Principal

- Hero section com imagens rotativas
- Textos com gradientes e sombras
- Botões de call-to-action para WhatsApp e exploração
- Badges de desconto e novidades
- Elementos decorativos animados

### 🛍️ Showcase de Produtos

- Carrossel responsivo de produtos
- Cards elegantes com efeitos hover
- Badges de desconto
- Botões de ação interativos

### 📚 Coleções

- Grid responsivo de coleções
- Imagens otimizadas em WebP
- Botões "Ver Coleção" estilizados

### ⭐ Depoimentos

- Carrossel de reviews de clientes
- Sistema de avaliação por estrelas
- Indicadores de confiança
- Design profissional com aspas decorativas

### 📱 Header Responsivo

- Logo com gradiente e efeitos hover
- Menu mobile com animações
- Navegação suave entre seções

### 📞 Contato

- Integração direta com WhatsApp
- Informações de endereço e telefone
- Links para redes sociais

## 🎯 Otimizações Implementadas

- **Performance**: Lazy loading de imagens e componentes
- **SEO**: Meta tags otimizadas e estrutura semântica
- **Acessibilidade**: Contraste adequado e navegação por teclado
- **Mobile-First**: Design responsivo com breakpoints otimizados
- **Bundle Size**: Remoção de CSS não utilizado com PurgeCSS

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
