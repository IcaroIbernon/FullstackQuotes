import express, { Express, Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'
import cors from 'cors'

const app: Express = express();
const prisma = new PrismaClient()
app.use(cors())
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post(`/quote`, async (req, res) => {
  try {
    const { email, localFrom, localDest, depDate, retDate, transport, name, qtPeople, price } = req.body
    const result = await prisma.quote.create({
      data: {
        email,
        localFrom,
        localDest,
        depDate,
        retDate,
        transport,
        name,
        qtPeople,
        price,
      },
    })
    res.json(result)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.get('/quotes', async (req, res) => {
  const quotes = await prisma.quote.findMany()
  res.json(quotes)
})

app.delete(`/quote/:id`, async (req, res) => {
  try {
    const { id } = req.params
    const quote = await prisma.quote.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(quote)
  } catch (error) {
    res.json( error )
  }
})

app.listen(8000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:8000`);
});