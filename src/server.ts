import app from "./app";

const PORT: Number = 8080;

app.listen(PORT, (): void => console.log(`Running on port ${PORT}`));