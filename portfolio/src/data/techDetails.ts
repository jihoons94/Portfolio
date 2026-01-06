export interface TechDetail {
  id: string;
  name: string;
  description: string;
  content: {
    problem: string[];
    solution: string[];
    outcome: string[];
  };
  relatedProjects: string[];
}

export const coreCompetencies = [
    { id: 'script-engine', name: 'Script Engine', icon: '📜' },
    { id: 'ar', name: 'AR', icon: '📱' },
    { id: 'unity', name: 'Unity', icon: '🎮' },
    { id: 'multiplay', name: 'MultiPlay', icon: '🌐' },
    { id: 'metaverse', name: 'Metaverse', icon: '🌌' },
    { id: 'frontend', name: 'Frontend', icon: '💻' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'problem-solving', name: 'Problem Solving', icon: '💡' },
]

export const techDetails: TechDetail[] = [
  {
    id: 'script-engine',
    name: 'TypeScript Compiler Customization',
    description: 'TypeScript 컴파일러를 직접 제어하여 개발 생산성을 혁신한 경험입니다.',
    content: {
      problem: [
        'ifland의 대규모 코드베이스에서 반복적으로 사용되는 특정 로직들이 많았고, 이는 코드 중복과 잠재적인 휴먼 에러의 원인이 되었습니다.',
        '특히 3D 공간 및 벡터 연산과 관련된 부분에서 TypeScript의 기본 타입 시스템만으로는 복잡한 로직을 간결하게 표현하기 어려웠습니다.',
      ],
      solution: [
        'TypeScript Compile API를 직접 활용하여 프로젝트 맞춤형 컴파일러를 구축했습니다. 빌드 프로세스에 커스텀 Transformer를 추가하여, 특정 패턴의 코드를 AST(추상 구문 트리) 레벨에서 분석하고 최적화된 JavaScript 코드로 자동 변환하는 로직을 구현했습니다.',
        'Language Service API를 확장하여 Visual Studio Code와 같은 에디터에서 TypeScript가 기본적으로 지원하지 않는 벡터(Vector) 타입에 대한 커스텀 연산자(e.g., +, -)를 인식하고 자동 완성 기능을 제공하도록 개발했습니다. 이를 통해 개발자들은 마치 네이티브 기능처럼 편리하게 벡터 연산을 사용할 수 있게 되었습니다.',
      ],
      outcome: [
        '벡터 및 3D 관련 코드 작성량을 평균 30% 이상 감소시켰고, 복잡한 로직을 추상화하여 개발팀의 전반적인 생산성을 크게 향상시켰습니다.',
        '컴파일 타임에 커스텀 규칙을 강제하여 특정 유형의 런타임 에러를 원천적으로 방지하고, 코드의 안정성과 유지보수성을 높였습니다.',
      ],
    },
    relatedProjects: ['ifland (Metaverse App)'],
  },
  {
    id: 'ar',
    name: 'Augmented Reality',
    description: '모바일 환경에서의 AR 콘텐츠 개발 및 상용화 경험입니다.',
    content: {
      problem: ['Placeholder problem statement for AR.'],
      solution: ['Placeholder solution statement for AR.'],
      outcome: ['Placeholder outcome statement for AR.'],
    },
    relatedProjects: ['Jump AR 2.0', 'Jump AR CES', '5GX Massive AR – 서울 숲 (JUMP AR 1.0)', '5GX AR (SKT 이벤트용 AR 게임)'],
  },
  {
    id: 'unity',
    name: 'Unity Development',
    description: 'Unity 엔진을 활용한 인터랙티브 콘텐츠 및 게임 개발 전문성을 보유하고 있습니다.',
    content: {
      problem: ['Placeholder problem statement for Unity.'],
      solution: ['Placeholder solution statement for Unity.'],
      outcome: ['Placeholder outcome statement for Unity.'],
    },
    relatedProjects: ['ifland (Metaverse App)', 'Jump AR 2.0', 'Jump AR CES', '5GX Massive AR – 서울 숲 (JUMP AR 1.0)', '5GX AR (SKT 이벤트용 AR 게임)'],
  },
  {
    id: 'multiplay',
    name: 'Real-time Multiplay',
    description: 'Photon Engine을 활용한 실시간 멀티플레이 환경 구축 경험입니다.',
    content: {
      problem: ['Placeholder problem statement for Multiplay.'],
      solution: ['Placeholder solution statement for Multiplay.'],
      outcome: ['Placeholder outcome statement for Multiplay.'],
    },
    relatedProjects: ['Jump AR CES', '5GX AR (SKT 이벤트용 AR 게임)'],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'React, TypeScript 등을 활용한 인터랙티브 웹 콘텐츠 개발 경험입니다.',
    content: {
      problem: ['Placeholder problem statement for Frontend.'],
      solution: ['Placeholder solution statement for Frontend.'],
      outcome: ['Placeholder outcome statement for Frontend.'],
    },
    relatedProjects: ['천재교육 – 한글', 'Portfolio Website'],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Node.js 기반의 서비스 엔진 개발 및 API 설계 경험입니다.',
    content: {
      problem: ['Placeholder problem statement for Backend.'],
      solution: ['Placeholder solution statement for Backend.'],
      outcome: ['Placeholder outcome statement for Backend.'],
    },
    relatedProjects: ['ifland (Metaverse App)'],
  },
  {
    id: 'problem-solving',
    name: 'Creative Problem Solving',
    description: '복잡하고 정의되지 않은 문제에 대해 창의적인 해결책을 제시하고 구현한 경험입니다.',
    content: {
      problem: ['Placeholder problem statement for Problem Solving.'],
      solution: ['Placeholder solution statement for Problem Solving.'],
      outcome: ['Placeholder outcome statement for Problem Solving.'],
    },
    relatedProjects: ['ifland (Metaverse App)', 'Jump AR 2.0', '천재교육 – 한글'],
  },
  {
    id: 'metaverse',
    name: 'Metaverse Platform Development',
    description: '대규모 사용자를 위한 메타버스 플랫폼의 핵심 기능 개발 및 유지보수 경험입니다.',
    content: {
      problem: ['Placeholder problem statement for Metaverse.'],
      solution: ['Placeholder solution statement for Metaverse.'],
      outcome: ['Placeholder outcome statement for Metaverse.'],
    },
    relatedProjects: ['ifland (Metaverse App)'],
  },
];

