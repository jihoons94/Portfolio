import type { TechDetail } from '../types';

export const ar: TechDetail = {
  id: 'ar',
  name: 'Augmented Reality',
  description: '모바일 환경에서의 AR 콘텐츠 개발 및 상용화 경험입니다.',
  content: [
    {
      title: 'ARCore/ARKit 크로스 플랫폼 개발',
      items: [
        'Google ARCore와 Apple ARKit을 활용하여 Android와 iOS 모두에서 동작하는 AR 콘텐츠를 개발했습니다.',
        'ARCore와 ARKit은 각각 다른 API를 제공하지만, Unity의 AR Foundation을 활용하여 플랫폼별 차이를 최소화하고 공통 인터페이스로 개발할 수 있도록 구조를 설계했습니다.',
        '플랫폼별 특화 기능(예: ARKit의 Face Tracking)도 필요에 따라 활용할 수 있도록 확장 가능한 구조로 구현했습니다.',
        { type: 'image', src: '/ar/ARCore_ARKit.jpg', alt: 'ARCore와 ARKit 구조', caption: 'ARCore와 ARKit의 크로스 플랫폼 구조' },
        { type: 'image', src: '/ar/Cross_Platform.jpg', alt: '크로스 플랫폼 AR 구조', caption: 'ARCore와 ARKit의 크로스 플랫폼 개발 구조' },
      ],
    },
    {
      title: 'Cloud Anchor를 활용한 공간 고정 및 재인식',
      items: [
        'AR 개발의 핵심은 실제 공간을 정확하게 인식하고, 가상 콘텐츠를 안정적으로 배치하는 것이었습니다.',
        'Google ARCore의 Cloud Anchor를 활용하여 실제 공간의 특징점을 클라우드에 저장하고, 세션 재진입 시 동일한 AR 콘텐츠 위치를 복원할 수 있도록 구현했습니다.',
        'Cloud Anchor는 공간 특징점을 클라우드에 저장하고, 이후 동일 공간을 다시 스캔했을 때 동일한 기준점(좌표계)을 복원하는 방식으로 동작합니다.',
        '이를 통해 세션이 끊기거나 앱이 재실행되어도 "같은 장소에 같은 오브젝트가 있는 것처럼" AR 경험을 이어갈 수 있었습니다.',
        '실제 공간의 특징점을 클라우드에 저장하고, 이를 통해 AR 세션 간의 공간 좌표계를 일관되게 유지하여 사용자 경험의 연속성을 확보했습니다.',
        { type: 'image', src: '/ar/Cloud_Anchor.jpg', alt: 'Cloud Anchor 동작 원리', caption: 'Cloud Anchor를 활용한 공간 고정 및 재인식' },
      ],
    },
    {
      title: 'Face Tracking을 활용한 AR 페이스 필터',
      items: [
        'ARKit의 Face Tracking 기능을 활용하여 실시간으로 사용자의 얼굴을 인식하고 필터를 적용하는 기능을 개발했습니다.',
        '모자, 타투 등 다양한 AR 필터를 구현하여 사용자 경험을 향상시켰습니다.',
        { type: 'image', src: '/ar/Face_Tracking.jpg', alt: 'Face Tracking 예시', caption: 'Face Tracking을 활용한 AR 페이스 필터' },
      ],
    },
    {
      title: 'Asset Bundle 기반 콘텐츠 업데이트 시스템',
      items: [
        'AR 콘텐츠를 앱 재배포 없이 업데이트할 수 있도록 Asset Bundle 기반의 동적 로딩 시스템을 구축했습니다.',
        '트리 구조로 공통 리소스를 관리하여 메모리와 용량을 최적화하고, 필요한 콘텐츠만 선택적으로 다운로드할 수 있도록 구현했습니다.',
        '비개발자도 콘텐츠를 업데이트할 수 있도록 관리 도구를 제공했습니다.',
        { type: 'image', src: '/ar/Asset_Bundle.jpg', alt: 'Asset Bundle 구조', caption: 'Asset Bundle 기반 콘텐츠 관리 구조' },
      ],
    },
  ],
  relatedProjects: ['Jump AR 2.0', 'Jump AR CES', '5GX Massive AR – 서울 숲 (JUMP AR 1.0)', '5GX AR (SKT 이벤트용 AR 게임)'],
};

