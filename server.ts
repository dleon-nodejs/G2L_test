require("dotenv/config")

import app from "./app"

app.listen(process.env.SERVER_PORT, () => {
    console.log("> Server Started http://127.0.0.1:%s", process.env.SERVER_PORT)
})
