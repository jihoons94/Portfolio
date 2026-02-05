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
      title: '이미지 트래킹을 활용한 AR 콘텐츠 배치',
      items: [
        'ARCore와 ARKit의 이미지 트래킹 기능을 활용하여 특정 이미지나 마커를 인식하고 해당 위치에 AR 콘텐츠를 배치하는 기능을 구현했습니다.',
        '사전에 등록된 이미지를 카메라로 인식하면, 해당 이미지의 위치와 방향을 추적하여 AR 콘텐츠를 정확하게 배치할 수 있습니다.',
        '이미지 트래킹은 포스터, 책 표지, 명함 등 평면 이미지를 마커로 활용하여 AR 콘텐츠를 표시하는 데 적합합니다.',
        '이미지의 크기와 방향을 실시간으로 추적하여, 사용자가 이미지를 이동하거나 회전시켜도 AR 콘텐츠가 이미지에 정확하게 고정되도록 구현했습니다.',
        { type: 'image', src: '/ar/Image_Tracking.jpg', alt: '이미지 트래킹', caption: '이미지 트래킹을 활용한 AR 콘텐츠 배치' },
      ],
    },
    {
      title: '바닥 트래킹을 활용한 AR 콘텐츠 배치',
      items: [
        'ARCore와 ARKit의 바닥 트래킹(Plane Detection) 기능을 활용하여 실제 바닥면을 인식하고 해당 위치에 AR 콘텐츠를 배치하는 기능을 구현했습니다.',
        '카메라로 바닥을 스캔하면 평면을 자동으로 감지하고, 감지된 평면 위에 AR 콘텐츠를 정확하게 배치할 수 있습니다.',
        '바닥 트래킹은 테이블, 바닥, 벽 등 평면 표면을 인식하여 가상 오브젝트를 배치하는 데 활용했습니다.',
        '평면의 크기와 경계를 실시간으로 추적하여, 사용자가 이동하거나 각도가 변경되어도 AR 콘텐츠가 안정적으로 유지되도록 구현했습니다.',
        '여러 평면을 동시에 감지하고 각 평면에 독립적으로 AR 콘텐츠를 배치할 수 있도록 구조를 설계했습니다.',
        { type: 'image', src: '/ar/Plane_Tracking.jpg', alt: '바닥 트래킹', caption: '바닥 트래킹을 활용한 AR 콘텐츠 배치' },
      ],
    },
    {
      title: 'Shader Stencil과 RenderTexture를 활용한 AR 포탈 구현',
      items: [
        'AR 환경에서 사용자가 다른 공간으로 이동하는 것처럼 보이는 포탈 효과를 구현하기 위해 Shader Stencil과 RenderTexture 방식을 활용했습니다.',
        '포탈은 실제 공간에 배치된 가상의 문처럼 보이며, 사용자가 포탈을 통해 다른 AR 콘텐츠 공간으로 이동하는 시각적 경험을 제공합니다.',
        { type: 'image', src: '/ar/AR_Portal.jpg', alt: 'AR 포탈 구현', caption: 'AR 포탈 시각적 효과' },

        { type: 'subtitle', text: 'Shader Stencil 방식' },
        'Shader Stencil 방식을 활용하여 포탈 영역에만 특정 콘텐츠가 렌더링되도록 구현했습니다.',
        'Stencil Buffer를 활용하여 포탈 영역을 마스킹하고, 포탈 내부에만 다른 씬이나 콘텐츠가 보이도록 처리했습니다.',
        '이를 통해 포탈이 실제로 다른 공간으로 연결된 것처럼 보이는 시각적 효과를 구현했습니다.',
        { type: 'image', src: '/ar/Shader_Stencil.jpg', alt: 'Shader Stencil 방식', caption: 'Shader Stencil을 활용한 포탈 마스킹' },

        { type: 'subtitle', text: 'RenderTexture 방식' },
        'RenderTexture를 활용하여 포탈 내부에 표시될 콘텐츠를 별도의 카메라로 렌더링하고, 이를 포탈 영역에 텍스처로 표시하는 방식도 구현했습니다.',
        '별도의 카메라를 포탈 위치에 배치하고, 해당 카메라의 렌더링 결과를 RenderTexture로 저장하여 포탈 메시에 적용했습니다.',
        '이 방식을 통해 포탈 내부에 동적인 콘텐츠나 다른 씬을 실시간으로 표시할 수 있었습니다.',
        'RenderTexture의 해상도와 렌더링 주기를 최적화하여 성능을 유지하면서도 시각적 품질을 확보했습니다.',
        { type: 'image', src: '/ar/RenderTexture.jpg', alt: 'RenderTexture 방식', caption: 'RenderTexture를 활용한 포탈 렌더링' },
      ],
    },
  ],
  relatedProjects: ['Jump AR 2.0', 'Jump AR CES', '5GX Massive AR – 서울 숲 (JUMP AR 1.0)', '5GX AR (SKT 이벤트용 AR 게임)'],
};

