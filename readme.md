Aqui está a versão aprimorada do README com as rotas, descrições e informações sobre como usar a versão no **Render**:

---

# 📚 Documentação da API de Categorização de Hotéis 🌍

## 🚀 Visão Geral

A **API de Categorização de Hotéis** tem como objetivo categorizar hotéis automaticamente com base em suas descrições e nomes. Utilizando a biblioteca **string-similarity-js** para comparar palavras-chave e uma **API de Geolocalização** (Nominatim OpenStreetMap) para localizar o hotel, a API pode categorizar hotéis de forma eficiente e precisa.

---

## 🔍 Funcionalidades

1. **Categorização por Descrição** 📝:
   - Analisamos a descrição do hotel e verificamos a presença de palavras-chave específicas (ex: "luxo", "spa", "piscina") para categorizar o hotel automaticamente.

2. **Categorização com Localização** 🌍:
   - Consultamos a **API de Geolocalização Nominatim OpenStreetMap** para identificar o hotel e definir sua categoria automaticamente com base na localização.

3. **Categorização para Banco de Dados** 💾:
   - A API percorre os hotéis no banco de dados e atualiza a categoria de cada um conforme os critérios definidos.

---

## 📦 Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/IgorDanielS/hacka-pda-backend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor localmente**:
   ```bash
   npm run dev
   ```

4. **Se necessario execute o index.js para transformar as categorias dos dados**:




   O servidor estará disponível em [http://localhost:3000/api](http://localhost:3000/api).

---

## 🚀 Como Usar na Versão Render

Se você preferir usar a API na versão hospedada pelo **Render**, siga os passos abaixo:

1. Acesse o link da versão hospedada em [https://hacka-pda-backend.onrender.com/api](https://hacka-pda-backend.onrender.com/api).
2. Você pode usar a API diretamente no ambiente de produção.

---

## 🛠️ Rotas da API

Aqui estão as principais rotas da API e o que elas fazem:

### **1. Criar um Hotel**
- **URL**: `/hotels`
- **Método**: `POST`
- **Descrição**: Cria um novo hotel no banco de dados com as informações fornecidas.

### **2. Atualizar um Hotel**
- **URL**: `/hotels/:id`
- **Método**: `PUT`
- **Descrição**: Atualiza os dados de um hotel específico pelo seu `id`.

### **3. Obter Todos os Hotéis**
- **URL**: `/hotels`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de todos os hotéis cadastrados no banco de dados.

### **4. Obter Hotéis por Categoria**
- **URL**: `/hotels/category/:category`
- **Método**: `GET`
- **Descrição**: Retorna todos os hotéis pertencentes à categoria especificada (ex: "Resort", "Hotel Fazenda").

### **5. Obter Hotéis por Cidade**
- **URL**: `/hotels/city/:city`
- **Método**: `GET`
- **Descrição**: Retorna todos os hotéis localizados na cidade especificada.

### **6. Obter Hotéis por Categoria e Cidade**
- **URL**: `/hotels/category/:category/city/:city`
- **Método**: `GET`
- **Descrição**: Retorna todos os hotéis de uma determinada categoria e cidade.

### Documentação
[PDF](https://drive.google.com/file/d/16uz35_APMNimoXta61YOawl2B6T22eu8/view?usp=drive_link).

### Pitch de Apresentação
[Slides](https://www.canva.com/design/DAGXbShGHak/mwyY5zFIrDnfTNUDXTfnaw/edit?utm_content=DAGXbShGHak&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton).

### Front-end
[Front-end](https://github.com/Monteiro-Let/Hackathon_Onfly).


---

