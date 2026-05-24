export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export interface Project {
  id: string
  categoryId: string
  name: string
  image: string
  location: string
  colors: string[]
  material: string
  dimensions: string
}

export interface VideoProject {
  id: string
  title: string
  thumbnail: string
  videoUrl: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Cocinas',
    slug: 'cocinas',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    description: 'Cocinas modulares diseñadas para optimizar cada espacio'
  },
  {
    id: '2',
    name: 'Escritorios',
    slug: 'escritorios',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    description: 'Espacios de trabajo funcionales y elegantes'
  },
  {
    id: '3',
    name: 'Closets',
    slug: 'closets',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
    description: 'Soluciones de almacenamiento personalizadas'
  },
  {
    id: '4',
    name: 'Centros de Entretenimiento',
    slug: 'centros-entretenimiento',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    description: 'Diseños modernos para tu sala de estar'
  },
  {
    id: '5',
    name: 'Recibidores',
    slug: 'recibidores',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'Primera impresión con estilo'
  },
  {
    id: '6',
    name: 'Barras de Cocina',
    slug: 'barras-cocina',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
    description: 'Espacios para compartir y disfrutar'
  },
  {
    id: '7',
    name: 'Baños',
    slug: 'banos',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    description: 'Mobiliario de baño con diseño premium'
  },
  {
    id: '8',
    name: 'Salas Modulares',
    slug: 'salas-modulares',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'Confort y versatilidad en cada pieza'
  }
]

export const projects: Project[] = [
  // Cocinas
  {
    id: 'c1',
    categoryId: '1',
    name: 'Cocina Integral Blanca',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    location: 'Bogotá, Colombia',
    colors: ['Blanco mate', 'Roble natural'],
    material: 'MDF lacado + Madera de roble',
    dimensions: '4.5m x 2.8m x 2.4m'
  },
  {
    id: 'c2',
    categoryId: '1',
    name: 'Cocina Moderna Gris',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    location: 'Medellín, Colombia',
    colors: ['Gris antracita', 'Negro'],
    material: 'Melamina + Acero inoxidable',
    dimensions: '3.8m x 2.5m x 2.4m'
  },
  {
    id: 'c3',
    categoryId: '1',
    name: 'Cocina Rústica',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
    location: 'Cali, Colombia',
    colors: ['Madera natural', 'Verde oliva'],
    material: 'Madera maciza + Piedra natural',
    dimensions: '5.0m x 3.0m x 2.6m'
  },
  // Escritorios
  {
    id: 'e1',
    categoryId: '2',
    name: 'Escritorio Ejecutivo',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    location: 'Bogotá, Colombia',
    colors: ['Nogal oscuro', 'Negro'],
    material: 'MDF enchapado + Metal',
    dimensions: '1.8m x 0.8m x 0.75m'
  },
  {
    id: 'e2',
    categoryId: '2',
    name: 'Estación de Trabajo Home Office',
    image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800&q=80',
    location: 'Barranquilla, Colombia',
    colors: ['Blanco', 'Roble claro'],
    material: 'MDF + Madera de pino',
    dimensions: '1.5m x 0.6m x 0.75m'
  },
  // Closets
  {
    id: 'cl1',
    categoryId: '3',
    name: 'Closet Vestidor Completo',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
    location: 'Bogotá, Colombia',
    colors: ['Blanco', 'Espejo'],
    material: 'MDF lacado + Vidrio espejo',
    dimensions: '4.0m x 0.6m x 2.5m'
  },
  {
    id: 'cl2',
    categoryId: '3',
    name: 'Closet Minimalista',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80',
    location: 'Cartagena, Colombia',
    colors: ['Gris claro', 'Aluminio'],
    material: 'Melamina + Perfiles de aluminio',
    dimensions: '3.5m x 0.55m x 2.4m'
  },
  // Centros de Entretenimiento
  {
    id: 'ce1',
    categoryId: '4',
    name: 'Centro Multimedia Flotante',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    location: 'Medellín, Colombia',
    colors: ['Negro mate', 'Roble'],
    material: 'MDF + Madera de roble',
    dimensions: '2.8m x 0.45m x 0.5m'
  },
  // Recibidores
  {
    id: 'r1',
    categoryId: '5',
    name: 'Recibidor Moderno',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    location: 'Bogotá, Colombia',
    colors: ['Blanco', 'Dorado'],
    material: 'MDF lacado + Detalles metálicos',
    dimensions: '1.2m x 0.35m x 0.9m'
  },
  // Barras de Cocina
  {
    id: 'b1',
    categoryId: '6',
    name: 'Barra Americana',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
    location: 'Cali, Colombia',
    colors: ['Mármol blanco', 'Negro'],
    material: 'Granito + MDF lacado',
    dimensions: '2.0m x 0.6m x 1.1m'
  },
  // Baños
  {
    id: 'ba1',
    categoryId: '7',
    name: 'Mueble de Baño Flotante',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    location: 'Bogotá, Colombia',
    colors: ['Roble claro', 'Blanco'],
    material: 'MDF resistente a humedad',
    dimensions: '1.2m x 0.5m x 0.55m'
  },
  // Salas Modulares
  {
    id: 's1',
    categoryId: '8',
    name: 'Sistema Modular Sala',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    location: 'Medellín, Colombia',
    colors: ['Gris', 'Verde oliva'],
    material: 'Tela premium + Espuma HD',
    dimensions: '3.2m x 1.0m x 0.85m'
  }
]

export const videoProjects: VideoProject[] = [
  {
    id: 'v1',
    title: 'Proyecto Cocina Integral',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    videoUrl: '#'
  },
  {
    id: 'v2',
    title: 'Instalación Closet Vestidor',
    thumbnail: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
    videoUrl: '#'
  },
  {
    id: 'v3',
    title: 'Diseño Centro Entretenimiento',
    thumbnail: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    videoUrl: '#'
  },
  {
    id: 'v4',
    title: 'Remodelación Baño Completo',
    thumbnail: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    videoUrl: '#'
  },
  {
    id: 'v5',
    title: 'Proyecto Escritorio Home Office',
    thumbnail: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    videoUrl: '#'
  }
]

export const contactInfo = {
  phone: '+57 300 123 4567',
  email: 'info@creativosestudio.com',
  address: 'Calle 100 #15-20, Bogotá, Colombia',
  whatsappNumber: '573001234567',
  socialMedia: {
    instagram: 'https://instagram.com/creativosestudio',
    facebook: 'https://facebook.com/creativosestudio',
    pinterest: 'https://pinterest.com/creativosestudio'
  }
}
