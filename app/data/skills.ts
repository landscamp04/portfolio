export interface Skill {
    name: string;
    category: 'language' | 'framework' | 'cloud' | 'GIS';
    icon?: string;
}

export const skills: Skill[] = [
    //languages
    { name: 'Python', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'C#', category: 'language' },
    { name: 'SQL', category: 'language' },

    // GIS & Geospatial
    { name: 'ArcGIS', category: 'GIS' },
    { name: 'Geospatial Analysis', category: 'GIS' },

    // Frameworks & Libraries
    { name: 'Next.js', category: 'framework' },
    { name: 'React', category: 'framework' },
    { name: 'ASP.NET', category: 'framework' },
    { name: 'Node.js', category: 'framework' },

    // Cloud & DevOps
    { name: 'Azure', category: 'cloud' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Git', category: 'cloud' },
]