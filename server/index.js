let express = require(`express`);
let cors = require('cors');

const app = express();
const PORT = 3000;

app.listen(PORT, console.log('http://127.0.0.1:' + PORT));

// use app
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173/'}))

app.get("/", (req, res) => {
    res.send(`hi`);
});