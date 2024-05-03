import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors()); 

app.post('/verify', (req: Request, res: Response) => {
  const { code } = req.body;
  if (code.length !== 6 || code.charAt(5) === '7') {
    res.status(400).json({ error: 'Verification Error' });
  } else {
    res.status(200).json({ message: 'Success' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
