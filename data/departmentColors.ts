export interface DepartmentColor {
  id: string;
  name: string;
  nameAr: string;
  primary: string;
  secondary: string;
  tertiary: string;
  gradient: string;
  shadowClass: string;
}

export const departmentColors: Record<string, DepartmentColor> = {
  executive: {
    id: 'executive',
    name: 'Executive Leadership',
    nameAr: 'القيادة التنفيذية',
    primary: '#C5A028',
    secondary: '#800020',
    tertiary: '#0A1929',
    gradient: 'linear-gradient(135deg, #C5A028, #800020, #0A1929)',
    shadowClass: 'shadow-dept-executive'
  },
  analysis: {
    id: 'analysis',
    name: 'Financial Analysis',
    nameAr: 'التحليل المالي',
    primary: '#046307',
    secondary: '#115E59',
    tertiary: '#00A36C',
    gradient: 'radial-gradient(circle at 30% 50%, #046307, #115E59, #00A36C)',
    shadowClass: 'shadow-dept-analysis'
  },
  risk: {
    id: 'risk',
    name: 'Risk Management',
    nameAr: 'إدارة المخاطر',
    primary: '#FFBF00',
    secondary: '#B87333',
    tertiary: '#CD7F32',
    gradient: 'linear-gradient(45deg, #FFBF00, #B87333, #CD7F32)',
    shadowClass: 'shadow-dept-risk'
  },
  relations: {
    id: 'relations',
    name: 'Lender Relations',
    nameAr: 'العلاقات مع جهات التمويل',
    primary: '#0F52BA',
    secondary: '#0047AB',
    tertiary: '#1E3A5F',
    gradient: 'linear-gradient(135deg, #0F52BA, #0047AB, #1E3A5F)',
    shadowClass: 'shadow-dept-relations'
  },
  business: {
    id: 'business',
    name: 'Business Development',
    nameAr: 'تطوير الأعمال',
    primary: '#DC143C',
    secondary: '#C5A028',
    tertiary: '#13294B',
    gradient: 'linear-gradient(135deg, #DC143C, #C5A028, #13294B)',
    shadowClass: 'shadow-dept-executive'
  },
  negotiation: {
    id: 'negotiation',
    name: 'Negotiation & Closing',
    nameAr: 'التفاوض والإغلاق',
    primary: '#D4AF37',
    secondary: '#800020',
    tertiary: '#0A1929',
    gradient: 'linear-gradient(135deg, #D4AF37, #800020)',
    shadowClass: 'shadow-dept-executive'
  },
  files: {
    id: 'files',
    name: 'File Management',
    nameAr: 'إدارة الملفات',
    primary: '#9966CC',
    secondary: '#6B2D5C',
    tertiary: '#5D3A6B',
    gradient: 'linear-gradient(135deg, #9966CC, #6B2D5C, #5D3A6B)',
    shadowClass: 'shadow-dept-files'
  },
  operations: {
    id: 'operations',
    name: 'Operations',
    nameAr: 'العمليات',
    primary: '#4682B4',
    secondary: '#708090',
    tertiary: '#C0C0C0',
    gradient: 'conic-gradient(from 90deg, #4682B4, #708090, #C0C0C0)',
    shadowClass: 'shadow-dept-operations'
  },
  compliance: {
    id: 'compliance',
    name: 'Compliance',
    nameAr: 'الامتثال والحوكمة',
    primary: '#2E7D32',
    secondary: '#0A2F1F',
    tertiary: '#00A36C',
    gradient: 'linear-gradient(135deg, #2E7D32, #0A2F1F, #00A36C)',
    shadowClass: 'shadow-dept-compliance'
  },
  client: {
    id: 'client',
    name: 'Client Services',
    nameAr: 'خدمة العملاء',
    primary: '#FF6B6B',
    secondary: '#F43F5E',
    tertiary: '#E0115F',
    gradient: 'linear-gradient(135deg, #FF6B6B, #F43F5E, #E0115F)',
    shadowClass: 'shadow-dept-client'
  },
  investment: {
    id: 'investment',
    name: 'Investment Financing',
    nameAr: 'التمويل الاستثماري',
    primary: '#9966CC',
    secondary: '#D4AF37',
    tertiary: '#5D3A6B',
    gradient: 'linear-gradient(135deg, #9966CC, #D4AF37)',
    shadowClass: 'shadow-dept-files'
  },
  commercial: {
    id: 'commercial',
    name: 'Commercial & Real Estate',
    nameAr: 'التمويل التجاري والعقاري',
    primary: '#B87333',
    secondary: '#CD7F32',
    tertiary: '#0A1929',
    gradient: 'linear-gradient(135deg, #B87333, #CD7F32)',
    shadowClass: 'shadow-dept-risk'
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate & Projects',
    nameAr: 'تمويل الشركات والمشاريع',
    primary: '#13294B',
    secondary: '#0A1929',
    tertiary: '#C5A028',
    gradient: 'linear-gradient(135deg, #13294B, #0A1929, #C5A028)',
    shadowClass: 'shadow-dept-executive'
  },
  post: {
    id: 'post',
    name: 'Post-Financing Support',
    nameAr: 'دعم ما بعد التمويل',
    primary: '#40E0D0',
    secondary: '#00CED1',
    tertiary: '#48D1CC',
    gradient: 'linear-gradient(135deg, #40E0D0, #00CED1, #48D1CC)',
    shadowClass: 'shadow-dept-post'
  }
};