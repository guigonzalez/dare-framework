# DARE Framework Documentation

Welcome to the comprehensive documentation for the **DARE Framework** (Design AI Reliable Engagement Framework).

---

## 📚 Documentation Index

This documentation suite provides complete technical and architectural analysis of the DARE Framework project.

### Core Documents

1. **[PROJECT_ANALYSIS.md](./PROJECT_ANALYSIS.md)**
   - Complete project overview and analysis
   - Executive summary
   - Technical architecture breakdown
   - Code quality metrics
   - Recommendations for improvements
   - **Start here** for a comprehensive understanding

2. **[TECHNICAL_STACK.md](./TECHNICAL_STACK.md)**
   - Complete inventory of all technologies used
   - Detailed dependency documentation
   - Version information for all libraries
   - Configuration file explanations
   - Future technology considerations
   - **Reference guide** for all technical choices

3. **[COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md)**
   - Detailed component hierarchy
   - Component-by-component documentation
   - Props, state, and interactions
   - Design patterns used
   - Responsive design strategy
   - **Developer guide** for understanding the codebase

---

## 🎯 Project Overview

### What is DARE Framework?

The DARE Framework is an open-source educational web application that presents a strategic approach to AI adoption in design processes. It defines 6 progressive levels of AI integration:

- **Level 0:** Manual Total (No AI)
- **Level 1:** IA Assistiva (AI for operational tasks)
- **Level 2:** Acelerador Visual (AI generates design elements)
- **Level 3:** Copiloto (AI suggests layouts and flows)
- **Level 4:** Co-criação Modular (AI generates entire screens)
- **Level 5:** Automação Guiada (Fully prompt-driven design)

### Key Statistics

- **Technology:** React 18 + TypeScript + Vite
- **UI Framework:** Tailwind CSS + Radix UI
- **Lines of Code:** ~6,897
- **Components:** 66 TypeScript files
- **License:** MIT
- **Status:** Production-ready, deployed on GitHub Pages

---

## 🚀 Quick Start

### For Users

Visit the deployed application:
- **Production URL:** [Check repository for live URL]
- **Documentation:** This Docs folder

### For Developers

```bash
# Clone the repository
git clone https://github.com/guigonzalez/dare-framework

# Install dependencies
cd dare-framework
npm run install:client

# Run development server
npm run dev

# Access at http://localhost:5173
```

---

## 📂 Documentation Structure

```
Docs/
├── README.md                        # This file - Documentation index
├── PROJECT_ANALYSIS.md              # Complete project analysis
├── TECHNICAL_STACK.md               # Technology inventory
└── COMPONENT_ARCHITECTURE.md        # Component documentation

prompts/                              # Prompt registry (Exploration → Candidates → Registry)
├── README.md                        # Visão geral e fluxo
├── SCHEMA.md                        # Schema de prompts
├── WORKFLOW.md                      # Promoção exploration → candidates → registry
├── registry.yaml                    # Registry principal (produção)
├── exploration/                     # Rascunhos e experimentos
├── candidates/                      # Prompts em avaliação
├── registry/                        # Registries estruturados (project.yaml)
└── context/                         # Contexto do histórico de commits
```

---

## 🏗️ Project Structure

```
dare-framework/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── ui/                 # Reusable UI primitives (54+ components)
│   │   │   └── [Feature]Section/   # Page section components
│   │   ├── pages/                  # Route components
│   │   ├── data/                   # Static data (framework levels)
│   │   ├── lib/                    # Utilities and types
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── App.tsx                 # Main app component
│   │   └── main.tsx                # Entry point
│   ├── public/                     # Static assets
│   ├── vite.config.ts             # Vite configuration
│   ├── tailwind.config.ts         # Tailwind configuration
│   └── package.json               # Dependencies
├── .github/workflows/              # CI/CD pipelines
│   └── gh-pages.yml               # GitHub Pages deployment
├── Docs/                          # This documentation
├── package.json                   # Root scripts
└── README.md                      # Project README
```

---

## 🎨 Technical Highlights

### Core Technologies

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18, TypeScript 5.6 |
| **Build Tool** | Vite 5.4 |
| **Styling** | Tailwind CSS 3.4, PostCSS |
| **UI Components** | Radix UI (25+ primitives), shadcn/ui |
| **Routing** | Wouter (lightweight) |
| **Forms** | React Hook Form + Zod |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages + GitHub Actions |

### Key Features

✅ **Fully Responsive** - Mobile-first design
✅ **Type-Safe** - 100% TypeScript
✅ **Accessible** - WCAG 2.1 AA compliant (Radix UI)
✅ **Fast** - Vite build tool with HMR
✅ **Automated Deployment** - CI/CD with GitHub Actions
✅ **Modern Stack** - Latest versions of all dependencies
✅ **Open Source** - MIT licensed

---

## 📖 How to Use This Documentation

### For Project Stakeholders
Start with **[PROJECT_ANALYSIS.md](./PROJECT_ANALYSIS.md)** to understand:
- What the project does
- Technical foundation
- Current state and quality
- Future recommendations

### For Developers Joining the Project
Read in order:
1. **[PROJECT_ANALYSIS.md](./PROJECT_ANALYSIS.md)** - Get the big picture
2. **[COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md)** - Understand the code structure
3. **[TECHNICAL_STACK.md](./TECHNICAL_STACK.md)** - Reference for specific technologies

### For Technical Auditors
All documents provide:
- Complete dependency lists
- Security considerations
- Code quality metrics
- Architecture patterns

### For Designers
**[COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md)** shows:
- UI component library
- Design patterns
- Responsive strategies
- Accessibility features

---

## 🧩 Component Overview

### Page Components
- **HomePage** - Main landing page
- **NotFound** - 404 error page

### Section Components
- **HeroSection** - Hero banner with CTA
- **AboutSection** - Project introduction
- **FrameworkSection** - Interactive 6-level framework (513 lines, most complex)
- **ResourcesSection** - Curated tools and resources
- **BenefitsSection** - Framework benefits
- **ManifestoSection** - Philosophy and principles
- **ContributeSection** - Community engagement

### Layout Components
- **Header** - Global navigation
- **Footer** - Site footer
- **App** - Root component with routing

### UI Component Library
50+ reusable components including:
- Form controls (Button, Input, Select, Checkbox, etc.)
- Layout (Card, Tabs, Accordion, Dialog, etc.)
- Navigation (Menu, Dropdown, Breadcrumb, etc.)
- Feedback (Alert, Toast, Tooltip, Progress, etc.)

---

## 📊 Code Metrics

| Metric | Value |
|--------|-------|
| Total TypeScript Files | 66 |
| Total Lines of Code | ~6,897 |
| Average File Size | ~104 lines |
| Largest Component | FrameworkSection.tsx (513 lines) |
| UI Components | 54+ |
| Main Dependencies | 45+ |
| Dev Dependencies | 7 |

---

## 🔧 Development Commands

```bash
# Install dependencies
npm run install:client

# Start development server (port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚢 Deployment

### Automated via GitHub Actions

**Trigger:** Push to `main` branch

**Process:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Build project (`npm run build`)
5. Deploy to GitHub Pages

**Deployment Configuration:**
- Workflow: `.github/workflows/gh-pages.yml`
- Output: `client/dist/`
- Custom domain: `client/public/CNAME`

---

## 🎯 Framework Levels (Core Content)

### Level Metrics

Each level tracks 3 key metrics:

1. **Human Control** 🧠
   - Level 0: 100% (full control)
   - Level 5: 20% (minimal control)

2. **Speed** ⚡
   - Level 0: 16% (slowest)
   - Level 5: 95% (fastest)

3. **AI Dependency** 🤖
   - Level 0: 0% (no AI)
   - Level 5: 95% (highly dependent)

### Level Information Structure

Each level includes:
- **ID** (0-5)
- **Name** (full name)
- **Short Name** (display name)
- **Tagline** (memorable quote)
- **Description** (detailed explanation)
- **Tools** (recommended tools)
- **Appropriate Uses** (use cases)
- **Pros** (benefits)
- **Cons** (drawbacks)
- **Risks** (potential issues)

---

## ♿ Accessibility

### Standards
- **Target:** WCAG 2.1 Level AA
- **Strategy:** Radix UI accessible primitives

### Features
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Color contrast compliance
- ✅ Semantic HTML

---

## 🔐 Security

### Considerations
- All dependencies from trusted npm sources
- React 18 XSS protections
- No secrets in repository
- GitHub Actions isolated environments
- Reproducible builds (`npm ci`)

---

## 📝 License

**MIT License** - See repository LICENSE file for details.

All dependencies are also MIT or similarly permissive licenses.

---

## 🤝 Contributing

See **ContributeSection** in the application and repository CONTRIBUTING.md for:
- Contribution guidelines
- Code of conduct
- Development workflow
- Pull request process

---

## 📞 Contact & Support

- **Repository:** https://github.com/guigonzalez/dare-framework
- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions

---

## 📅 Documentation Metadata

- **Created:** October 13, 2025
- **Version:** 1.0.0
- **Maintained By:** Project Contributors
- **Language:** English (Application is in Portuguese)

---

## 🔄 Keeping Documentation Updated

This documentation should be updated when:
- ✏️ New components are added
- ✏️ Dependencies are updated
- ✏️ Architecture changes occur
- ✏️ New features are implemented
- ✏️ Major refactoring happens

---

## 📚 Additional Resources

### External Links
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [shadcn/ui Components](https://ui.shadcn.com)

### Related Files in Repository
- **README.md** - User-facing project documentation
- **DOMAIN_SETUP.md** - Custom domain configuration
- **package.json** - Project metadata and scripts

---

## 🎓 Learning Path

### For New React Developers
1. Understand React basics (components, props, state)
2. Learn TypeScript fundamentals
3. Study Tailwind CSS utility classes
4. Explore Radix UI component patterns
5. Review FrameworkSection.tsx as a complex example

### For Experienced Developers
1. Review component architecture patterns
2. Study the type definitions in lib/types.ts
3. Understand the build configuration (vite.config.ts)
4. Analyze the deployment workflow
5. Consider the recommendations section

---

**Welcome to the DARE Framework project! 🚀**

For questions or clarifications, please refer to the specific documentation files or open an issue in the repository.

---

*This documentation was generated on October 13, 2025, as part of a comprehensive project analysis.*
