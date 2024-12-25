const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/file', fileRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
