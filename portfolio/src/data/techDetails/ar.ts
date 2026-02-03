import type { TechDetail } from '../types';

export const ar: TechDetail = {
  id: 'ar',
  name: 'Augmented Reality',
  description: '모바일 환경에서의 AR 콘텐츠 개발 및 상용화 경험입니다.',
  content: [
    {
      title: '소개',
      items: [
        'Placeholder content for AR.',
        // 예시: 이미지 추가
        // { type: 'image', src: '/path/to/image.jpg', alt: 'AR 이미지', caption: 'AR 개발 예시' },
        // 예시: 비디오 추가
        // { type: 'video', src: '/path/to/video.mp4', caption: 'AR 데모', controls: true },
        // 예시: 코드 블록 추가
        // { type: 'code', language: 'typescript', code: 'const arSession = new ARSession();', caption: 'AR 세션 초기화 코드' },
      ],
    },
  ],
  relatedProjects: ['Jump AR 2.0', 'Jump AR CES', '5GX Massive AR – 서울 숲 (JUMP AR 1.0)', '5GX AR (SKT 이벤트용 AR 게임)'],
};

