# SSSKit.io

SvelteKit SaaS starter kit.

## 🏗 Project Structure

- `src/web`: SvelteKit frontend
- `src/backend`: PocketBase backend

## ⭐️ Features

- SvelteKit frontend with TailwindCSS
- PocketBase backend with SQLite
- Docker deployment ready
- Authentication system
- CRUD with drag & drop
- Dark/Light mode
- File upload system
- Email integration
- Mobile optimized

## 🚀 Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/wasylmowczan/ssskit.io.git
   cd ssskit.io
   ```

2. Set up environment:

   ```bash
   # Create .env in src/web
   PUBLIC_PB_URL=http://localhost:8090
   ORIGIN=http://localhost:5173
   ```

3. Start backend:

   ```bash
   cd src/backend
   ./pocketbase serve
   ```

4. Start frontend:

   ```bash
   cd src/web
   npm install
   npm run dev
   ```

5. Open `http://localhost:5173`

## 🌐 Deployment

### Using Coolify (Recommended)

1. Set up on Hetzner
2. Configure in Coolify:

   ```bash
   PUBLIC_PB_URL=https://api.your-domain.com
   ORIGIN=https://your-domain.com
   ```

3. Deploy via Coolify interface

## 🔧 Configuration

### PocketBase

- Admin panel: `http://localhost:8090/_/`
- Uses `pb_migrations` for schema
- Uses `pb_hooks` for custom logic
- Data in `pocketbase_data` volume

### Frontend

- Components in `src/web/src`
- Uses shadcn-svelte components
- Tailwind for styling
- Superforms for form handling

## 🔒 Security

- Use environment variables
- Keep dependencies updated
- Enable HTTPS in production
- Proper authentication implemented

## 🛠 Troubleshooting

- Check environment variables
- Verify CORS settings
- View logs:

  ```bash
  docker-compose logs -f
  ```

## 📚 Documentation

- [SvelteKit](https://kit.svelte.dev/docs)
- [PocketBase](https://pocketbase.io/docs/)
- [Coolify](https://coolify.io/docs)
- [Hetzner](https://docs.hetzner.com/)

## 💖 Contributing

Issues and PRs welcome!
