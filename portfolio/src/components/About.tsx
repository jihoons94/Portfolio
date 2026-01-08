import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Introduce.</h2>
        <div className="about-content">
          <p>
            <strong>지난 8년간, 저는 하나의 회사에서 장기 근속하며 제 가치와 회사의 가치를 함께 성장시키는 것을 목표로 일해 왔습니다.</strong>
          </p>
          <p>
            처음에는 팀원으로 주어진 업무를 수행했지만, 결과로써 역량을 증명하며 역할을 스스로 넓혀왔습니다. 점차 프로젝트 전체 일정 관리와 팀의 업무 분배를 책임지는 리더 역할을 수행하게 되었습니다.
          </p>
            <p>
             Frontend부터 Backend, AR/Unity, Metaverse, Multiplay에 이르기까지 폭넓은 기술 스택을 활용하여 기획, 개발, 배포, 운영의 전 과정을 경험했습니다. 저는 단순히 주어진 업무를 처리하는 것에 그치지 않고, 근본적인 문제를 파악하고 해결하여 팀 전체의 성장에 기여하는 것을 중요하게 생각합니다. 특히 기획자, 디자이너와의 협업 효율을 극대화하고자, 코딩 지식 없이도 규칙 기반으로 필요한 도구를 바이브코딩으로 직접 생성하고 배포할 수 있는 Chrome Extension 기반의 사내 위젯 플랫폼을 개발했습니다. 이를 통해 비개발 직군의 아이디어가 빠르게 실제 도구로 구현되는 환경을 만들어 소통과 생산성을 크게 향상시킨 경험이 있으며, 문서화와 프로젝트 회고를 통해 팀이 함께 성장하는 문화를 만들어왔습니다.
            </p>
          <p>
            SKT, Samsung 등과의 협업을 통해 대규모 프로젝트를 성공적으로 이끌며 외부 조직과의 유연한 소통 및 협업 역량을 갖추었습니다.
          </p>
          <p>
            기존 방식에 안주하기보다 새로운 접근법으로 더 나은 결과를 만들어내는 과정에서 큰 보람을 느낍니다. 이러한 열정을 바탕으로 기술적 역량을 꾸준히 향상시키며 지금도 계속 성장하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

