import type { TechDetail } from '../types';

export const scriptEngine: TechDetail = {
  id: 'script-engine',
  name: 'Runtime Script Engine',
  description: 'Runtime Script Engine과 TypeScript 컴파일러를 직접 제어하여 개발 생산성을 혁신한 경험입니다.',
  content: [
    {
      title: 'Problem',
      items: [
        '다수의 인원이 참여하는 프로젝트에서 서로 다른 다양한 요소들이 App에 반영되면서 빌드 파이프라인이 길어지고 복잡해졌습니다.',
        '신규 인원이 작은 실수라도 해서 다시 빌드해야 한다면, 그 거대한 빌드 파이프라인에서 발생하는 문제들을 해결해야 했습니다. ',
        '빌드 시간이 길어지고, 빌드 실패 시 전체 프로세스를 다시 시작해야 하는 문제가 발생했습니다.',
      ],
    },
    {
      title: 'Solution',
      items: [
        '여기서 도입한 방식은 PuerTS라는 JavaScript 기반 런타임 스크립트 엔진을 활용하는 방식 입니다.',
        'PuerTS는 V8 JavaScript 엔진과 C# 간의 상호 운용성을 제공하기 위해 만들어진 라이브러리입니다.',
        'PuerTS는 V8 라이브러리를 C++로 래핑하여 사용하며, 이 래핑된 V8 라이브러리를 사용하여 JavaScript 코드를 실행합니다.',
        '결과적으로 C# 코드와 JavaScript 코드가 상호작용할 수 있게 되어, Unity 환경에서 TypeScript로 작성된 런타임 스크립트를 실행할 수 있습니다.',
        { type: 'image', src: '/script-engine/PuerTS.jpg', alt: 'PuerTS 아키텍처', caption: 'V8, PuerTS, Unity 간의 상호작용 구조' },
      ],
    },
    {
      title: 'Implementation',
      items: [
        'PuerTS를 사용해 JS 코드로 Unity 로직을 작성하는 일은 간단하지 않았습니다.',
        '간단한 오브젝트 회전 조차 기존 유니티 개발자라면 이걸 JS와 C# 통신으로 구현하기는 어려운 작업 이었습니다.',
        '때문에 Unity와 최대한 유사한 개발 환경을 제공하기 위해 PuerTS를 활용한 Script Engine을 개발했습니다.',
        { type: 'image', src: '/script-engine/PuerTS_Rotate_code.jpg', alt: 'PuerTS 예제 코드', caption: 'PuerTS 예제 코드 - 회전 로직' },
        
        { type: 'subtitle', text: 'IFSBehavior 개발' },
        '먼저 Unity MonoBehaviour와 유사한 Lifecycle 구현을 TypeScript로 제공하기 위한 전용 IFSBehavior를 개발했습니다.',
        '구현 된 IFSBehavior는 C#으로 작성된 코드와 매우 유사한 형태를 제공하며, 이를 통해 기존 Unity 개발자가 쉽게 적응할 수 있도록 설계했습니다.',
        'IFSBehavior로 인해 Tyscript 형태로 Unity의 오브젝트나 씬등을 Component 형태로 접근 및 제어가 가능해졌고 코루틴 역시 지원 하였습니다.',
        '해당 내용의 구현을 위해서는 V8 엔진과 C# 딴에서의 다양한 통신이 요구되었고 이를 개인의 힘으로 완성하였습니다.',
        { type: 'image', src: '/script-engine/PuerTS_SE_code.jpg', alt: 'IFSBehavior 코드', caption: 'IFSBehavior 코드 - Unity MonoBehaviour와 유사한 Lifecycle 구현' },
        
        { type: 'subtitle', text: 'IFSAsset 및 IFSContainer 개발' },
        'Typescript파일은 Unity에서 Asset으로 인식되지 않습니다.',
        '이를 위해 file Importer에서 Typescript 파일을 ScriptableObject로 변환 Asset으로 관리 하도록 개발 하였습니다.',
        '나아가 Asset을 오브젝트에 단순 드래그 앤 드랍으로 컴포넌트로 부착이 가능하도록 IFSContainer를 개발 하였습니다.',
        { type: 'image', src: '/script-engine/IFSAsset.gif', alt: 'IFSAsset&IFSContainer', caption: 'IFSAsset&IFSContainer 기능 동작 예시' },

        { type: 'subtitle', text: '상속 및 확장' },
        'IFSBehavior를 상속받아 새로운 Behavior를 개발하는 것이 가능합니다.',
        '이를 통해 기존 Behavior의 기능을 확장하거나 새로운 Behavior를 개발하는 것이 가능합니다.',
        { type: 'image', src: '/script-engine/IFSContainer_MC.jpg', alt: 'IFSBehavior 와 IFSContainer 상속 관계', caption: 'IFSBehavior 와 IFSContainer 상속 관계' },
        { type: 'image', src: '/script-engine/PropContainer_MC.jpg', alt: 'PropBehavior 와 PropContainer 로 확장 관계', caption: 'PropBehavior 와 PropContainer 로 확장 관계' },

        { type: 'subtitle', text: '전용 Compiler 개발 - Typescript Compiler API' },
        'Typescript Compiler API를 활용하여 커스텀 된 전용 변환 Compiler를 개발 하였습니다.',
        '이를 통해 Typescript 코드를 JavaScript로 컴파일 시, 커스텀한 변환이 가능하도록 하였고 런타임에 실행할 수 있는 복잡한 코드로 자동 변환하는 기능을 제공합니다.',
        { type: 'image', src: '/script-engine/Compiler_API.jpg', alt: 'Typescript Compiler API 활용', caption: 'Typescript Compiler API 활용' },

        { type: 'subtitle', text: '전용 Compiler 개발 - Language Service API 활용' },
        'Unity에 존재하는 다양한 Type은 대부분 Typescript에서는 지원하지 않습니다.',
        '이는 코드를 작성 시, Syntax Error가 발생하여 코드 작성이 어려워지는 문제가 발생합니다.',
        '이를 해결하기 위해 Language Service API를 활용, Language Server Protocol을 통해 코드 작성 시, 자동완성 및 확장 된 오류 검증 기능을 제공합니다.',
        '결과적은 Vector 나 사용자가 C# 상에서 작성한 다양한 타입에 대한 Syntax Error를 해결 할 수 있게 되었습니다.',
        { type: 'image', src: '/script-engine/Overloading.jpg', alt: 'Overloading 미지원', },
        { 
          type: 'imageGroup', 
          images: [
            { src: '/script-engine/auto_complete.gif', alt: 'auto complete 기능', caption: 'auto complete 기능 동작 예시' },
            { src: '/script-engine/error_check.gif', alt: 'error check 기능', caption: 'error check 기능 동작 예시' }
          ]
        },

      ],
    },
    {
      title: 'Others',
      items: [
        '그외에도 다양한 기능들이 있었지만 중요한 내용들만 기술 하였습니다.',
      ],
    }
  ],
  relatedProjects: ['ifland (Metaverse App)'],
};

