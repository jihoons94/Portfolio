export interface Task {
  content: string;
  details?: string[];
}

export interface Project {
  name: string;
  client: string;
  role: string;
  team: string;
  period: string;
  tasks: Task[];
  techStack: string[];
  thumbnail: string;
}

export interface WorkExperienceData {
  company: string;
  companyUrl: string;
  companyDesc: string;
  isCurrent: boolean;
  projects: Project[];
}

import fiveGXARThumb from '../assets/images/5GXARThumb.jpg'; 
import seoulForestThumb from '../assets/images/seoulForestThumb.jpg'; 
import jumpARCESThumb from '../assets/images/jumpARCESThumb.jpg'; 
import jumpAR2Thumb from '../assets/images/jumpAR2Thumb.jpg'; 
import hangeulThumb from '../assets/images/hangeulThumb.jpg'; 
import iflandThumb from '../assets/images/iflandThumb.jpg'; 
import galaxyS25Thumb from '../assets/images/galaxyS25Thumb.jpg'; 
import galaxyZFlip7ZFold7Thumb from '../assets/images/galaxyZFlip7ZFold7Thumb.webp'; 

export const workExperience: WorkExperienceData = {
  company: 'Morph Interactive (모프)',
  companyUrl: 'https://morph.kr/',
  companyDesc: 'Web, AR, VR, MR, 3D, VFX 콘텐츠를 제작하는 크리에이티브 기술 회사',
  isCurrent: true,
  projects: [
    {
      name: 'TCG - Magic Masters',
      client: 'Morph Internal Project',
      role: 'Lead Developer',
      team: '2인 개발',
      period: '2025.08 - 2025.12',
      tasks: [
        { content: '사내 신규 프로젝트 기획 및 프로토타입 개발 총괄' },
        { content: '메세지 버스 패턴을 활용한 컴포넌트 간 통신 구조 설계 및 구현' },
        { content: '메세지 버스를 활용한 게임 리플레이 기능 개발' },
        { content: '카드 게임 기능 개발' },
      ],
      techStack: ['Unity', 'C#', "Message Bus Dispatcher"],
      thumbnail: 'magicMastersThumb',
    },
    {
      name: 'GALAXY Z FLIP7 & Z FOLD7 / 한국 UNPACKED 체험 웹사이트',
      client: 'SAMSUNG',
      role: 'Lead Developer',
      team: '2인 개발',
      period: '2025.04 - 2025.07',
      tasks: [
        { content: 'Google Analytics 이벤트 설계, 사용자 데이터 수집 및 분석 총괄' },
        { content: 'BigQuery를 활용한 수집 된 정보 분석 및 리포팅'},
        { content: 'Looker Studio를 활용한 대시보드 구축 및 관리'},
        { content: '사용자 유입 경로 및 행동 패턴을 엑셀 형태로 리포팅' },
      ],
      techStack: ['Google Analytics', 'BigQuery', 'Looker Studio'],
      thumbnail: galaxyZFlip7ZFold7Thumb,
    },
    {
      name: 'GALAXY S25 시리즈 / GLOBAL UNPACKED 체험 웹사이트',
      client: 'SAMSUNG',
      role: 'Lead Developer',
      team: '3인 개발',
      period: '2024.07 - 2025.03',
      tasks: [
        { content: 'NestJS를 활용한 Backend 서버 개발',
          details: [
            'API 설계 및 구축',
            'MySQL를 활용한 DB 설계 및 구축',
            '예약 시스템의 경쟁 문제(Race Condition) 해결',
            '대규모 동시 접속 환경을 고려한 예약 시스템 개발',
            '경품 추첨 및 등록/관리 시스템 개발',
            'Admin 관리자 페이지 개발',
          ]
        },
        { content: 'AWS를 통한 서버 및 프론트엔드 배포 관리',
          details: [
            'AWS S3를 활용한 정적 파일 배포',
            'AWS CloudFront를 활용한 콘텐츠 전송 최적화',
            'AWS Route 53를 활용한 도메인 관리',
            'AWS DB를 활성화 및 연결',
            'GitHub Actions를 통한 CI/CD 파이프라인 구축',
          ]
        },
        { content: 'React, TypeScript 기반 Frontend 웹사이트 개발' },
        { content: 'Google Analytics를 활용한 사용자 행동 데이터 분석 및 리포팅' },
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'NextJS', 'MySQL', 'Google Analytics', 'AWS'],
      thumbnail: galaxyS25Thumb,
    },
    {
      name: 'ifland (Metaverse App)',
      client: 'SKT',
      role: 'Prop Team Lead Developer',
      team: '5인 이상 개발',
      period: '2022.02 - 2024.02',
      tasks: [
        {
          content: 'SKT ifland 메타버스 앱의 Prop(인터랙티브 아이템) 관련 기능 개발 총괄',
          details: [
            'App ifland에서 메타버스의 3대 요소 중 Activity를 담당'
          ]
        },
        {
          content: 'Runtime Script Engine 개발 및 유지보수',
          details: [
            '<a href="https://puerts.github.io/en/docs/puerts/unity/install" target="_blank" rel="noopener noreferrer">PuerTS</a>를 활용한 <a href="/#/tech/script-engine">Unity Runtime Script Engine</a> 개발',
            '<a href="https://github.com/microsoft/typescript/wiki/using-the-language-service-api" target="_blank" rel="noopener noreferrer">Language Service API</a> 및 <a href="https://github.com/microsoft/typescript/wiki/using-the-language-service-api" target="_blank" rel="noopener noreferrer">TS Compiler API</a>를 활용한 전용 Compiler 개발',
            'Unity MonoBehaviour와 유사한 Lifecycle 구현을 TypeScript로 제공하기 위한 전용 IFSBehavior 개발',
            'TS 파일 전용 Import Asset 및 Component 에디터 기능 개발'
          ],
        },
        {
          content: 'Prop Engine 인계, 안정화 및 고도화',
          details: [
            'Prop을 저작하고 에셋 번들로 빌드 및 업로드 하는 기능에 자동 최적화 과정 반영',
            '다양한 Prop이 공존 하면서 발생하는 메모리 및 성능 문제 개선',
            'Prop 동기화 문제 해결 및 고도화',
          ],
        },
        {
          content: 'Prop 개발',
          details: [
            '기획 과정에서 선정된 다양한 메타버스 속 Prop 개발 참여',
            '노래방, 탈것, 미니오락기 등',
          ],
        },
        {
          content: 'NPC AI 개발',
          details: [
            '메타버스 환경에 적합한 AI Framework 개발',
            '게임 심즈와 유사한 Utility AI 기반의 행동 선택 로직 개발',
          ]
        },
        {
          content: 'Sprint 별 업무 계획 수립 및 이슈 관리',
        },
      ],
      techStack: ['Unity', 'C#', 'TypeScript', 'JavaScript', 'Runtime Script Engine', 'PuerTS', 'Language Service API', 'TS Compiler API'],
      thumbnail: iflandThumb,
    },
    {
      name: '천재교육 – 한글',
      client: '천재교육',
      role: 'Lead Developer',
      team: '3인 개발',
      period: '2021.02 - 2021.08',
      tasks: [
        { content: 'Animate CC와 JavaScript(JSFL)를 활용하여 유아용 한글 교육 인터랙티브 콘텐츠 개발' },
        { content: '콘텐츠 양산을 위한 템플릿 및 공통 모듈 개발 주도' },
        { content: 'Unity 물리 엔진으로 생성한 움직임을 키프레임으로 변환하여 Animate에 적용하는 에디터 기능 개발' },
      ],
      techStack: ['Unity', 'C#', 'Animate CC', 'JavaScript', 'JSFL'],
      thumbnail: hangeulThumb,
    },
    {
      name: 'Jump AR 2.0',
      client: 'SKT',
      role: 'Unity Part Lead Developer',
      team: '5인 이상 개발',
      period: '2020.02 - 2021.01',
      tasks: [
        { content: '기존 Jump AR 1.0 콘텐츠를 2.0 앱 환경에 맞게 이관 및 최적화' },
        { content: 'IK(Inverse Kinematics)를 활용한 미니동물 콘텐츠 신규 개발 및 자연스러운 모션 구현' },
        { content: '미니동물의 다양한 코스튬 지원',
          details: [
            '코스튬 관리를 위한 별도의 확인/보고용 앱 개발',
            '코스튬 장착 시 미니동물 털 Shader의 의상 관통 문제로 코스튬 메쉬와 겹치는 동물 신체 폴리곤을 제거하는 기능 개발',
          ],
        },
        { content: 'Asset Bundle 기반의 콘텐츠 업데이트 시스템 고도화 및 구조 개선',
          details: [
            '트리 구조 형태로 공통 리소스 정리 및 관리를 통해 메모리 및 용량 최적화',
            'App Update 없이 오브젝트 증강 콘텐츠 업데이트가 가능하도록 관련 구조 개선',
          ],
         },
         { content: "확장성과 유지보수성을 높이기 위해 경량 Message Dispatcher 아키텍처를 설계 및 구현",
          details: [
            'Pub/Sub 패턴을 기반으로 구현하여, 각 기능 모듈이 서로 직접적인 참조 없이 메시지를 통해 통신하도록 구조를 개선',
            '코드의 결합도가 낮아져 신규 기능 추가 및 변경 시 발생하는 사이드 이펙트를 최소화',
            '신규 인원도 전체 구조를 파악할 필요 없이 쉽게 AR 컨텐츠를 개발 가능하게 제공'
          ],
         }
      ],
      techStack: ['Unity', 'C#'],
      thumbnail: jumpAR2Thumb,
    },
    {
      name: 'CES - Jump AR 아쿠아월드',
      client: 'SKT',
      role: 'Lead Developer',
      team: '2인 개발',
      period: '2019.11 - 2019.12',
      tasks: [
        { content: '<a href="https://news.sktelecom.com/120019" target="_blank" rel="noopener noreferrer">CES</a> 전시용 해양 정화 컨셉의 AR 멀티플레이 슈팅 게임 개발 총괄' },
        { content: '<a href="https://developers.google.com/ar/develop/cloud-anchors?hl=ko" target="_blank" rel="noopener noreferrer">Cloud Anchor</a>를 활용한 AR 증강 환경 및 Unity/C# 기반 게임 콘텐츠 개발 (슈팅, 쉐이더, 동적 Path, 보스 스테이지)' },
        { content: 'Photon Engine을 활용한 실시간 멀티플레이 환경 구축 및 동기화 (슈팅, NPC 움직임/애니메이션)' },
      ],
      techStack: ['Unity', 'C#', 'ARCore', 'Photon Engine'],
      thumbnail: jumpARCESThumb,
    },
    {
      name: '5GX Massive AR – 서울 숲 (JUMP AR 1.0)',
      client: 'SKT',
      role: 'AR/Unity Developer',
      team: '5인 이상 개발',
      period: '2019.06 - 2020.01',
      tasks: [
        { content: 'Unity, ARCore, ARKit을 사용하여 서울 숲 컨셉의 거대/미니 동물 AR 증강 콘텐츠 개발',
          details: [
            '동영상 형태의 거대 동물 콘텐츠 증강 개발',
            '3D 모델 형태의 미니 동물 콘텐츠 증강 개발',
          ]
        },
        { content: '<a href="https://inthenews.co.kr/news/article.html?no=17537" target="_blank" rel="noopener noreferrer">LCK AR 응원 컨텐츠</a> 제작',
          details: [
            '사용자 응원 메시지 조회를 위한 API 연동',
            'AR 포탈 이동 기능 구현',
          ]
        },
        { content: 'Face Tracking을 활용한 AR 페이스 필터(모자, 타투) 콘텐츠 개발' },
        { content: 'Asset Bundle 기반의 콘텐츠 업데이트 시스템 설계 및 구현',
          details: [
            '리소스 관리 및 비개발자용 업데이트 환경 제공',
            'App Theme를 AssetBundle로 관리 및 업데이트 가능하도록 구조 개선'
          ],
        },
      ],
      techStack: ['Unity', 'C#', 'ARCore', 'ARKit'],
      thumbnail: seoulForestThumb,
    },
    {
      name: '5GX AR (SKT 이벤트용 AR 게임)',
      client: 'SKT',
      role: 'AR/Unity Developer',
      team: '1인 개발',
      period: '2019.01 - 2019.03',
      tasks: [
        { content: '야구 컨셉의 AR 카드 멀티플레이/싱글 게임 개발',
          details: [
            '게임 컨셉 및 게임 규칙 등 기획',
            '전체 게임 구조 및 플로우 설계 및 개발 구현',
            '싱글 게임 구현'
          ],
        },
        { content: 'Unity Timeline을 활용한 카드 제출 연출 작성'},
        { content: 'Google ARCore의 <a href="https://developers.google.com/ar/develop/cloud-anchors?hl=ko" target="_blank" rel="noopener noreferrer">Cloud Anchor</a>를 활용하여 3D 콘텐츠 AR 증강 환경 개발' },
        { content: 'Photon Engine 기반 실시간 멀티플레이 환경 구축 (로비, 자동 매칭, 위치/애니메이션 동기화)' },
      ],
      techStack: ['Unity', 'C#', 'ARCore', 'Photon Engine'],
      thumbnail: fiveGXARThumb,
    },
  ],
};

