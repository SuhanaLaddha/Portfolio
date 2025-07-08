# Suhana Laddha - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Works perfectly on all devices
- **Fast Performance**: Optimized with Vite
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern styling framework

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router (if needed)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd project-bolt-sb1-xnwe3ekz/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect your GitHub repository to Netlify**
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy!**

### Manual Deployment

1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📁 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Navbar.tsx
│   ├── hooks/
│   ├── App.tsx
│   └── main.tsx
├── Assets/
│   └── mypic.jpg
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── netlify.toml
```

## 🎨 Customization

- **Profile Picture**: Replace `Assets/mypic.jpg` with your image
- **Personal Info**: Update content in component files
- **Styling**: Modify Tailwind classes in components
- **Colors**: Update color scheme in `tailwind.config.js`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `netlify.toml` - Netlify deployment settings
- `tsconfig.json` - TypeScript configuration

## 📞 Contact

For any questions or issues, please contact [Your Email]

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS** 