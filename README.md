# Kriti Portfolio

A modern, responsive portfolio website built with Next.js 13+ and Material UI, showcasing my experience as a Full-Stack Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional layout with Material UI components
- **Responsive**: Fully responsive design that works on all device sizes
- **Interactive Navigation**: Smooth scrolling navigation with sticky header
- **Animated Components**: Smooth animations and transitions
- **Performance Optimized**: Built with Next.js 13+ App Router for optimal performance

## 🛠️ Technologies Used

- **Next.js 13+** with App Router
- **TypeScript** for type safety
- **Material UI (MUI) v5** for styling and components
- **Emotion** for CSS-in-JS styling
- **React** 18+ with modern hooks

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Hero section with name and contact info
│   ├── Navbar.tsx          # Navigation bar with smooth scrolling
│   ├── Section.tsx         # Reusable section wrapper
│   ├── Education.tsx       # Education section
│   ├── Experience.tsx      # Work experience section
│   ├── ExperienceCard.tsx  # Individual job experience card
│   ├── Projects.tsx        # Projects showcase section
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Skills.tsx          # Technical skills section
│   └── Footer.tsx          # Contact footer
├── theme/
│   └── theme.ts            # Custom Material UI theme
└── public/                 # Static assets
```

## 🎨 Sections

1. **Header/Hero**: Introduction with name, title, and call-to-action buttons
2. **Education**: University degree and academic information
3. **Experience**: Professional work experience with detailed achievements
4. **Projects**: Key projects with technologies used and accomplishments
5. **Skills**: Technical skills organized by category
6. **Footer/Contact**: Contact information and social links

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kriti_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## ✨ Customization

To customize this portfolio for your own use:

1. Update personal information in each component
2. Modify the theme colors in `theme/theme.ts`
3. Replace project data in `components/Projects.tsx`
4. Update experience data in `components/Experience.tsx`
5. Customize skills in `components/Skills.tsx`

## 🎯 Key Features

- **Smooth Scrolling**: Navigation links provide smooth scrolling to sections
- **Mobile-First**: Designed with mobile users in mind
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized images and lazy loading

## 📧 Contact

Feel free to reach out if you have any questions or would like to connect:

- **Email**: [kriti@example.com](mailto:kriti@example.com)
- **GitHub**: [github.com/kriti](https://github.com/kriti)
- **LinkedIn**: [linkedin.com/in/kriti](https://linkedin.com/in/kriti)

---

Built with ❤️ using Next.js and Material UI
