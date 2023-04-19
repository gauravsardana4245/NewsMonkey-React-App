import express from 'express';
import cors from 'cors'
import axios from 'axios'
const app = express();
const port = 5000;


app.use(express.json());

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', "https://newsmonkey-react-app-gaurav.onrender.com/");
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
app.use(cors())
app.post('/news', async (req, res) => {
    const { country, category, page, pagesize } = req.body;
    try {
        const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: country,
                category: category,
                page: page,
                pagesize: pagesize,
                apiKey: '2f6e5d2c1f9a447fa0c57f1a88558a05'
            }
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
})
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
})