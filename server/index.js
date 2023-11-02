import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { errorResponseHandler } from './middleware/errorHandler.js';
import { invalidPathHandler } from './middleware/errorHandler.js';

const app = express();

dotenv.config();

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database is connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB();

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.use("/api/users", userRoutes);
app.use(invalidPathHandler)
app.use(errorResponseHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
