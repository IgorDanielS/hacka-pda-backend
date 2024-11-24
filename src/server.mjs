import express from 'express';
import cors from 'cors';
import hotelRoutes from './routes/hotelRoutes.js';
import sequelize from './../db/db.js'; 
import fs from 'fs';
import path from 'path';
import Hotel from './models/Hotel.js';





const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors()); 
app.use(express.json());

app.use('/api', hotelRoutes); 

const startServer = async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.sync(); 
    console.log('Banco de dados sincronizado com sucesso!');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

const importarDados = async () => {
  try {
    const [results, metadata] = await sequelize.query("SELECT COUNT(*) as count FROM Hotels");
    
    if (results[0].count > 0) {
      console.log('Dados já foram importados. Ignorando a importação.');
      return;
    }

    await Hotel.sync({ force: true });
    console.log('Tabela Hotels recriada com sucesso!');

    const sql = fs.readFileSync(path.resolve('src', 'data', 'Hotels_202411222154.sql'), 'utf-8');
    await sequelize.query(sql);

    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao importar dados:', error);
  }
};


startServer();
importarDados();
