import type { TechDetail } from '../types';

export const metaverse: TechDetail = {
  id: 'metaverse',
  name: 'Metaverse Platform Development',
  description: '대규모 사용자를 위한 메타버스 플랫폼의 핵심 기능 개발 및 유지보수 경험입니다.',
  content: [
    {
      title: '유틸리티 AI를 활용한 NPC 개발',
      items: [
        'ifland 메타버스 플랫폼에서 NPC(Non-Player Character)의 행동을 구현하기 위해 유틸리티 AI(Utility AI) 시스템을 개발했습니다.',
        '심즈(Sims) 시리즈에서 사용된 유틸리티 AI 방식을 참고하여, 각 행동에 점수를 부여하여 가장 적합한 행동을 선택하는 방식으로 NPC가 상황에 맞게 자연스럽게 반응할 수 있도록 구현했습니다.',
        '유틸리티 AI는 각 행동에 점수를 부여하여 가장 적합한 행동을 선택하는 방식으로, NPC가 상황에 맞게 자연스럽게 반응할 수 있도록 구현했습니다.',
        { type: 'image', src: '/metaverse/Utility_AI.jpg', alt: '유틸리티 AI 구조', caption: '유틸리티 AI를 활용한 NPC 행동 시스템' },
        
        { type: 'subtitle', text: '유틸리티 AI 시스템 설계' },
        '심즈의 유틸리티 AI 방식을 참고하여, NPC가 가질 수 있는 다양한 행동(이동, 대기, 상호작용 등)에 대해 각 행동의 유틸리티 점수를 계산하는 시스템을 설계했습니다.',
        '심즈에서 사용된 것과 유사하게, 상황에 따라 동적으로 점수가 변하도록 설계하여, NPC가 현재 상황에 가장 적합한 행동을 선택할 수 있도록 했습니다.',
        '예를 들어, 사용자가 가까이 있으면 상호작용 행동의 점수가 높아지고, 멀리 있으면 이동 행동의 점수가 높아지도록 구현했습니다.',
        '심즈의 유틸리티 AI에서 사용된 점수 계산 방식과 행동 선택 메커니즘을 Unity 환경에 맞게 적용하여, 자연스러운 NPC 행동을 구현했습니다.',
        
        { type: 'subtitle', text: 'NPC 행동 패턴 구현' },
        '다양한 NPC 타입에 맞는 행동 패턴을 구현했습니다. 예를 들어, 가이드 NPC는 사용자를 따라다니며 안내하고, 상점 NPC는 특정 위치에서 대기하며 상호작용을 기다립니다.',
        'NPC의 상태(대기, 이동, 상호작용 등)에 따라 적절한 애니메이션과 행동을 연결하여 자연스러운 NPC 동작을 구현했습니다.',
        '여러 NPC가 동시에 존재하는 환경에서도 각 NPC가 독립적으로 행동할 수 있도록 설계했습니다.',
        { type: 'image', src: '/metaverse/NPC_Behavior.jpg', alt: 'NPC 행동 패턴', caption: '유틸리티 AI 기반 NPC 행동 패턴' },
      ],
    },
    {
      title: 'Prop 개발 및 AssetBundle 관리 시스템',
      items: [
        'ifland 메타버스 플랫폼에서 사용자가 배치하고 상호작용할 수 있는 Prop(인터랙티브 아이템)을 AssetBundle로 관리하는 시스템을 개발했습니다.',
        '각 Prop은 독립적인 AssetBundle로 패키징되어, 필요한 Prop만 선택적으로 다운로드하고 로드할 수 있도록 구조를 설계했습니다.',
        { type: 'image', src: '/metaverse/Prop_System.jpg', alt: 'Prop 시스템', caption: 'Prop AssetBundle 관리 시스템' },
        
        { type: 'subtitle', text: 'Prop 런타임 관리' },
        '런타임에서 Prop의 로딩, 언로딩, 인스턴스화를 효율적으로 관리하는 시스템을 구현했습니다.',
        'Prop의 메타데이터(이름, 설명, 썸네일 등)와 실제 에셋을 분리하여 관리하여, Prop 목록을 빠르게 표시하고 필요한 경우에만 에셋을 로드하도록 최적화했습니다.',
        '메모리 사용량을 최적화하기 위해 사용하지 않는 Prop은 자동으로 언로드하고, Prop 인스턴스를 풀링하여 재사용할 수 있도록 구현했습니다.',
        { type: 'image', src: '/metaverse/Prop_Runtime.jpg', alt: 'Prop 런타임 관리', caption: 'Prop 런타임 관리 시스템' },
        
        { type: 'subtitle', text: '에디터 업로드 파이프라인 개발' },
        'Prop을 AssetBundle로 빌드하고 서버에 업로드하는 과정을 자동화하는 에디터 툴을 개발했습니다.',
        '에디터에서 Prop을 선택하고 빌드 버튼을 누르면, 자동으로 AssetBundle을 생성하고 서버에 업로드하는 파이프라인을 구축했습니다.',
        '업로드 전 Prop의 메타데이터를 자동으로 추출하고, 서버에 필요한 정보를 전송하는 기능을 구현했습니다.',
        { type: 'image', src: '/metaverse/Prop_Upload_Pipeline.jpg', alt: 'Prop 업로드 파이프라인', caption: 'Prop 에디터 업로드 파이프라인' },
        
        { type: 'subtitle', text: '에셋 최적화 자동화' },
        'Prop을 AssetBundle로 빌드할 때 자동으로 에셋을 최적화하는 기능을 개발했습니다.',
        '텍스처 압축, 메시 최적화, 애니메이션 압축 등 다양한 최적화 작업을 자동으로 수행하도록 구현했습니다.',
        'Prop의 타입과 용도에 따라 적절한 최적화 설정을 자동으로 적용하여, 용량을 최소화하면서도 품질을 유지할 수 있도록 했습니다.',
        '최적화 결과를 리포트로 제공하여, 개발자가 최적화 효과를 확인할 수 있도록 했습니다.',
        { type: 'image', src: '/metaverse/Prop_Optimization.jpg', alt: 'Prop 최적화', caption: 'Prop 에셋 최적화 자동화' },
      ],
    },
  ],
  relatedProjects: ['ifland (Metaverse App)'],
};

