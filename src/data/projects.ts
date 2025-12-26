import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Medical Insurance Fraud Detection',
    category: 'machine-learning',
    year: '2023',
    slug: 'fraud-detection',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Built a machine learning model to detect fraudulent medical insurance claims by analyzing patterns in structured health insurance data. Adapted a U.S.-based fraud detection framework to work with Indian datasets.',
    client: 'SDLtek',
    camera: 'Python, Scikit-learn',
    location: 'Remote',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Healthcare data analysis',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Data visualization dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '1-3',
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Machine learning pipeline',
        aspectRatio: 'landscape'
      },
      {
        id: '1-4',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Fraud detection metrics',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '2',
    title: 'Gold Price Prediction',
    category: 'data-science',
    year: '2024',
    slug: 'gold-prediction',
    coverImage: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Developed a machine learning model for gold price prediction utilizing Linear Regression, Random Forest, and Logistic Regression algorithms. Features preprocessing from historical gold price data with comprehensive model evaluation metrics.',
    client: 'Academic Project',
    camera: 'Python, NumPy, Pandas',
    location: 'Pune',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Gold market analysis',
        aspectRatio: 'landscape'
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Price prediction chart',
        aspectRatio: 'landscape'
      },
      {
        id: '2-3',
        src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Statistical analysis',
        aspectRatio: 'landscape'
      },
      {
        id: '2-4',
        src: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Regression models',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '3',
    title: 'AI Snake Game',
    category: 'reinforcement-learning',
    year: '2024',
    slug: 'ai-snake-game',
    coverImage: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Implements a snake game using Reinforcement Learning (RL) techniques. The AI agent learns to navigate the game environment, consume food items, and avoid obstacles through reward-based training.',
    client: 'Personal Project',
    camera: 'Python, PyTorch, RL',
    location: 'Self-directed',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Game AI visualization',
        aspectRatio: 'landscape'
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Neural network architecture',
        aspectRatio: 'landscape'
      },
      {
        id: '3-3',
        src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Reinforcement learning diagram',
        aspectRatio: 'landscape'
      },
      {
        id: '3-4',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Training metrics',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '4',
    title: 'Business Analytics Dashboard',
    category: 'data-analysis',
    year: '2025',
    slug: 'business-analytics',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Led sales and operations strategies to boost client acquisition and retention in mutual funds and financial advisory services. Utilized data-driven methods to enhance client targeting, engagement, and revenue growth.',
    client: 'Shrivas Wealth',
    camera: 'Python, SQL, Excel',
    location: 'Pune',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Analytics dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '4-2',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Financial metrics',
        aspectRatio: 'landscape'
      },
      {
        id: '4-3',
        src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'Data visualization',
        aspectRatio: 'landscape'
      },
      {
        id: '4-4',
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
        alt: 'KPI tracking',
        aspectRatio: 'square'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
