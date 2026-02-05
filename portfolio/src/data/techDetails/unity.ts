import type { TechDetail } from '../types';

export const unity: TechDetail = {
  id: 'unity',
  name: 'Unity Development',
  description: 'Unity 엔진을 활용한 인터랙티브 콘텐츠 및 게임 개발 전문성을 보유하고 있습니다.',
  content: [
    {
      title: '확장 가능한 프로젝트 구조 설계',
      items: [
        '대규모 Unity 프로젝트에서 기능 추가와 변경이 프로젝트 전반에 미치는 영향을 최소화하기 위해, 프로젝트 규모가 커져도 흔들리지 않는 구조를 우선 설계했습니다.',
        '기능을 단순히 "추가"하는 방식이 아니라, 컴포넌트 기반 아키텍처를 통해 테스트, 재사용, 인수인계가 가능한 형태로 정리했습니다.',
        { type: 'image', src: '/unity/Unity_Architecture.jpg', alt: 'Unity 프로젝트 구조', caption: '프로젝트 규모 확장에 대응하기 위한 구조 설계' },
        
        { type: 'subtitle', text: '컴포넌트 및 씬 구조 표준화' },
        '씬은 "구성"에 집중하고 로직은 컴포넌트로 분리하여, 테스트/재사용/인수인계가 가능한 형태로 정리했습니다.',
        '프리팹 단위로 책임을 명확히 나누고, 데이터(설정)와 로직을 분리해 수정 범위를 최소화했습니다.',
        'Unity의 컴포넌트 기반 아키텍처를 최대한 활용하여, 각 기능이 독립적인 컴포넌트로 동작하도록 설계했습니다.',
        '각 기능은 혼자 독자적으로 존재 가능하도록 설계하여, 다른 기능에 의존하지 않고도 동작할 수 있도록 했습니다. 이를 통해 기능 간 결합도를 낮추고, 개별 기능의 테스트와 유지보수가 용이하도록 했습니다.',
        { type: 'image', src: '/unity/Component_Scene_Structure.jpg', alt: '컴포넌트 구조', caption: '표준화된 컴포넌트 및 씬 구조' },
        
        { type: 'subtitle', text: '메시지 라이프사이클 설계' },
        '프로젝트마다 요구사항과 제약사항이 다르기 때문에, 메시지 라이프사이클을 매번 프로젝트 상황에 맞게 구현했습니다.',
        '각 프로젝트의 특성에 맞는 메시지 전달 방식, 우선순위, 생명주기 관리를 설계하여 효율적인 시스템 간 통신을 구현했습니다.',
        '이벤트 기반, 커맨드 패턴, 옵저버 패턴 등 다양한 패턴을 프로젝트 상황에 맞게 선택하여 적용했습니다.',
      ],
    },
    {
      title: '모바일 성능 최적화',
      items: [
        '모바일 환경(특히 AR)에서는 프레임 드랍과 발열, 메모리 사용량 문제가 곧바로 사용자 경험에 영향을 주기 때문에, "동작하는 구현"을 넘어 "지속적으로 유지 가능한 성능"을 확보하는 것이 필수였습니다.',
        'Unity Profiler, Frame Debugger 등을 활용하여 CPU, GPU, 메모리 사용량을 분석하고 최적화했습니다.',
        '런타임 성능을 기준으로 리소스 로딩/언로딩, GC(가비지 컬렉션) 발생, 드로우콜/오버드로우, 업데이트 루프 비용을 측정하고 개선했습니다.',
        { type: 'image', src: '/unity/Mobile_Optimization.jpg', alt: '모바일 성능 최적화', caption: 'Unity 모바일 성능 최적화 과정' },
        
        { type: 'subtitle', text: '성능 병목 지점 개선' },
        'Profile 기반으로 병목을 찾아 개선했습니다(업데이트 루프 비용, 메모리 할당, 렌더링 비용, 로딩 스파이크).',
        '불필요한 할당을 줄이고(특히 반복 Update 구간), 오브젝트 재사용(풀링)과 로딩 타이밍 제어로 프레임 안정성을 확보했습니다.',
        '드로우 콜 배치(Batching), 오브젝트 풀링(Object Pooling), 텍스처 압축, LOD(Level of Detail) 적용 등 다양한 기법을 통해 모바일 기기에서의 성능을 극대화했습니다.',
      ],
    },
    {
      title: 'AssetBundle 기반 콘텐츠 관리',
      items: [
        '앱 업데이트 없이 콘텐츠를 운영할 수 있도록, AssetBundle 기반의 동적 로딩 시스템을 구축했습니다.',
        '공통 리소스/프로젝트 리소스를 계층적으로 정리하고 필요한 것만 로드하도록 구성하여 메모리와 용량을 최적화했습니다.',
        '다운로드/캐시/버전 관리를 고려해 번들 단위 업데이트가 가능하도록 설계했습니다.',
        { type: 'image', src: '/unity/Asset_Bundle_Management.jpg', alt: 'AssetBundle 관리', caption: 'AssetBundle 기반 콘텐츠 관리 시스템' },
        
        { type: 'subtitle', text: 'AssetBundle 의존성 관리' },
        'AssetBundle 의존성 관리 툴을 개발하여 중복 리소스 로딩을 방지하고, 메모리 사용량을 효율적으로 제어했습니다.',
        '트리 구조로 공통 리소스를 관리하여 메모리와 용량을 최적화하고, 필요한 콘텐츠만 선택적으로 다운로드할 수 있도록 구현했습니다.',
        '비개발자도 AssetBundle을 쉽게 빌드하고 관리할 수 있도록 에디터 툴을 제공했습니다.',
      ],
    },
    {
      title: '에디터 툴링 및 디버깅 환경 개선',
      items: [
        '개발 생산성 향상을 위해 커스텀 에디터 툴을 개발했습니다. 예를 들어, 복잡한 데이터 설정을 위한 커스텀 인스펙터, 반복 작업을 자동화하는 유틸리티 스크립트 등을 구현했습니다.',
        '반복 작업을 줄이기 위한 에디터 도구(검증/배치/일괄 수정)를 만들고, 런타임 디버그 UI로 운영 이슈를 빠르게 확인할 수 있게 했습니다.',
        '런타임 디버깅을 위한 인게임 콘솔, 로그 시스템을 구축하여 문제 발생 시 빠르게 원인을 파악하고 해결할 수 있도록 지원했습니다.',
        { type: 'image', src: '/unity/Editor_Tooling.jpg', alt: 'Unity 에디터 툴', caption: '커스텀 에디터 툴 및 디버깅 환경' },
      ],
    },
    {
      title: '애니메이션 및 IK 상호작용 구현',
      items: [
        'Unity Animator Controller를 활용하여 복잡한 캐릭터 애니메이션 상태 머신을 설계하고 구현했습니다.',
        'IK(Inverse Kinematics) 시스템을 적용하여 캐릭터가 환경과 자연스럽게 상호작용하거나 특정 오브젝트를 잡는 등의 동적인 모션을 구현했습니다.',
        '캐릭터/오브젝트 상호작용에서 IK, 애니메이션 상태 제어, 타임라인 기반 연출 등을 활용해 자연스러운 움직임을 구현했습니다.',
        { type: 'image', src: '/unity/Animation_IK.jpg', alt: '애니메이션 IK', caption: '캐릭터 애니메이션 및 IK 구현' },
      ],
    },
    {
      title: 'Timeline을 활용한 연출 반영',
      items: [
        'Unity Timeline을 활용하여 게임 내 연출과 시네마틱을 시간 기반으로 제어하는 시스템을 구현했습니다.',
        'Timeline을 통해 애니메이션, 오디오, 이펙트, 카메라 움직임 등 다양한 요소를 하나의 타임라인에서 동기화하여 정확한 타이밍의 연출을 구현했습니다.',
        '게임 플레이 중 특정 이벤트나 상호작용에 따라 Timeline을 재생하여 일관된 연출 경험을 제공했습니다.',
        { type: 'image', src: '/unity/Timeline.jpg', alt: 'Unity Timeline', caption: 'Unity Timeline을 활용한 연출 구현' },

        { type: 'subtitle', text: '다양한 트랙 활용' },
        'Animation Track, Activation Track, Audio Track, Signal Track 등 다양한 트랙을 활용하여 복잡한 연출을 구현했습니다.',
        'Signal Track을 통해 Timeline 재생 중 특정 시점에 게임 로직을 트리거하여 연출과 게임플레이를 자연스럽게 연결했습니다.',
        '카드 게임의 카드 제출 연출, 보스전 연출, 이벤트 시퀀스 등 다양한 상황에서 Timeline을 활용하여 시각적으로 풍부한 경험을 제공했습니다.',

        { type: 'subtitle', text: '재사용 가능한 Timeline 에셋 설계' },
        '공통 연출 패턴을 Timeline 에셋으로 만들어 재사용 가능하도록 설계했습니다.',
        'Timeline 에셋을 프리팹이나 씬에 연결하여 필요할 때 재생할 수 있도록 구조를 설계했습니다.',
        '비개발자도 Timeline 에디터를 통해 연출을 수정하고 조정할 수 있도록 워크플로우를 구축했습니다.',
        { type: 'image', src: '/unity/Timeline_Workflow.jpg', alt: 'Timeline 워크플로우', caption: 'Timeline을 활용한 연출 워크플로우' },
      ],
    },
  ],
  relatedProjects: ['ifland (Metaverse App)', 'Jump AR 2.0', 'Jump AR CES', '5GX Massive AR – 서울 숲 (JUMP AR 1.0)', '5GX AR (SKT 이벤트용 AR 게임)'],
};

