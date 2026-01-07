import React from 'react';
import './Projects.css';

interface Task {
  content: string;
  details?: string[];
}

interface Project {
  name: string;
  client: string;
  role: string;
  team: string;
  period: string;
  tasks: Task[];
}

interface WorkExperienceData {
  company: string;
  companyUrl: string;
  companyDesc: string;
  isCurrent: boolean;
  projects: Project[];
}

const workExperience: WorkExperienceData = {
  company: 'Morph Interactive (모프)',
  companyUrl: 'https://morph.kr/',
  companyDesc: 'Web, AR, VR, MR, 3D, VFX 콘텐츠를 제작하는 크리에이티브 기술 회사',
  isCurrent: true,
  projects: [
    {
      name: 'Magic Masters',
      client: 'Morph Internal Project',
      role: 'Lead Developer',
      team: '2인 개발',
      period: '2025.08 - 2025.12',
      tasks: [
        { content: '사내 신규 프로젝트 기획 및 프로토타입 개발 총괄' },
      ],
    },
    {
      name: 'GALAXY Z FLIP7 & Z FOLD7 / 한국 UNPACKED 체험 웹사이트',
      client: 'SAMSUNG',
      role: 'Lead Developer',
      team: '2인 개발',
      period: '2025.04 - 2025.07',
      tasks: [
        { content: 'Google Analytics 이벤트 설계, 사용자 데이터 수집 및 분석 총괄' },
        { content: '사용자 유입 경로 및 행동 패턴 분석을 통한 웹사이트 개선 전략 도출 및 리포팅' },
      ],
    },
    {
      name: 'GALAXY S25 시리즈 / GLOBAL UNPACKED 체험 웹사이트',
      client: 'SAMSUNG',
      role: 'Lead Developer',
      team: '3인 개발',
      period: '2024.07 - 2025.03',
      tasks: [
        { content: 'Node.js, Express 기반 Backend 서버 개발 및 API 설계' },
        { content: 'MySQL, Redis를 활용한 DB 설계 및 구축' },
        { content: '대규모 동시 접속 환경을 고려한 예약 시스템의 경쟁 문제(Race Condition) 해결' },
        { content: 'React, TypeScript 기반 Frontend 웹사이트 개발' },
        { content: 'Google Analytics를 활용한 사용자 행동 데이터 분석 및 리포팅' },
      ],
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
        },
        {
          content: 'Runtime Script Engine 개발 및 유지보수',
          details: [
            'PuerTS를 활용한 Unity Runtime Script Engine 개발',
            'Language Service 및 TypeScript Compile API를 활용한 전용 Compiler 개발',
            'Prop 개발 및 앱 문제 해결',
          ],
        },
        {
          content: 'Prop Engine 개발 및 유지보수',
        },
        {
          content: 'Prop 개발 및 앱 문제 해결',
        },
      ],
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
    },
    {
      name: 'Jump AR 2.0',
      client: 'SKT',
      role: 'Unity Part Lead Developer',
      team: '5인 이상 개발',
      period: '2020.02 - 2021.01',
      tasks: [
        { content: '기존 Jump AR 1.0 콘텐츠를 2.0 앱 환경에 맞게 이관 및 최적화' },
        { content: '<a href="https://docs.unity3d.com/6000.3/Documentation/Manual/InverseKinematics.html" target="_blank" rel="noopener noreferrer">IK(Inverse Kinematics)</a>를 활용한 미니동물 콘텐츠 신규 개발 및 자연스러운 모션 구현' },
        { content: '미니동물 코스튬 관리를 위한 별도의 확인/보고용 앱 및 Unity Editor 기능 개발' },
        { content: 'Asset Bundle 기반의 콘텐츠 업데이트 시스템 고도화 및 구조 개선' },
      ],
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
        { content: '<a href="https://www.photonengine.com/" target="_blank" rel="noopener noreferrer">Photon Engine</a>을 활용한 실시간 멀티플레이 환경 구축 및 동기화 (슈팅, NPC 움직임/애니메이션)' },
      ],
    },
    {
      name: '5GX Massive AR – 서울 숲 (JUMP AR 1.0)',
      client: 'SKT',
      role: 'AR/Unity Developer',
      team: '5인 이상 개발',
      period: '2019.06 - 2020.01',
      tasks: [
        { content: 'Unity, ARCore, ARKit을 사용하여 서울 숲 컨셉의 거대/미니 동물 AR 증강 콘텐츠 개발' },
        { content: '사용자 응원 메시지 조회를 위한 API 연동 및 AR 포탈 이동 기능 구현' },
        { content: 'Face Tracking을 활용한 AR 페이스 필터(모자, 타투) 콘텐츠 개발' },
        { content: 'Asset Bundle 기반의 콘텐츠 업데이트 시스템 설계 및 구현 (리소스 관리 및 비개발자용 업데이트 환경 제공)' },
      ],
    },
    {
      name: '5GX AR (SKT 이벤트용 AR 게임)',
      client: 'SKT',
      role: 'AR/Unity Developer',
      team: '1인 개발',
      period: '2019.01 - 2019.03',
      tasks: [
        { content: 'Unity와 C#을 사용한 야구 컨셉의 AR 카드 멀티플레이/싱글 게임 개발 총괄' },
        { content: 'Unity Timeline을 활용한 카드 제출 연출 및 게임 로비/인게임 UI 구현' },
        { content: 'Google ARCore의 <a href="https://developers.google.com/ar/develop/cloud-anchors?hl=ko" target="_blank" rel="noopener noreferrer">Cloud Anchor</a>를 활용하여 3D 콘텐츠 AR 증강 환경 개발' },
        { content: '<a href="https://www.photonengine.com/" target="_blank" rel="noopener noreferrer">Photon Engine</a> 기반 실시간 멀티플레이 환경 구축 (로비, 자동 매칭, 위치/애니메이션 동기화)' },
      ],
    },
  ],
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-list">
          <div className="company-item">
            <div className="company-header">
              <h3>
                <a href={workExperience.companyUrl} target="_blank" rel="noopener noreferrer">
                  {workExperience.company}
                </a>
                {workExperience.isCurrent && <span className="current-badge">재직중</span>}
              </h3>
              <p>{workExperience.companyDesc}</p>
            </div>
            <div className="project-list">
              {workExperience.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h4>{project.name}</h4>
                  <div className="project-details">
                    <div className="project-info">
                      <p className="project-role">{project.role}</p>
                      <p className="project-team">{project.team}</p>
                      <span>{project.period}</span>
                    </div>
                    <ul className="project-tasks">
                      {project.tasks.map((task, i) => (
                        <li key={i}>
                          <span dangerouslySetInnerHTML={{ __html: task.content }} />
                          {task.details && (
                            <ul className="task-details">
                              {task.details.map((detail, j) => (
                                <li key={j} dangerouslySetInnerHTML={{ __html: detail }} />
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
