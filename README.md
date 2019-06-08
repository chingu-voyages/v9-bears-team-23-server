## Initialization

```
docker run --name skillsharpener_db -e POSTGRES_USER=skillsharpener -e POSTGRES_PASSWORD=skillsharpener -p 5432:5432 -d postgres:11-alpine
```

Create a `.env` file based on `.env.example`:

```
NODE_ENV=development
PORT=3000
DATABASE_URL=DATABASE_URL=postgres://skillsharpener:skillsharpener@localhost:5432/skillsharpner
```
