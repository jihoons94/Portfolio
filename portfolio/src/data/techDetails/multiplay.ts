import type { TechDetail } from '../types';

export const multiplay: TechDetail = {
  id: 'multiplay',
  name: 'Real-time Multiplay',
  description: 'Photon Engine을 활용한 실시간 멀티플레이 환경 구축 경험입니다.',
  content: [
    {
      title: 'Photon Engine을 활용한 멀티플레이 개발',
      items: [
        'Photon Engine의 PUN(Photon Unity Networking)을 사용하여 Unity 환경에서 실시간 멀티플레이 기능을 개발했습니다.',
        'Photon은 클라우드 기반의 실시간 멀티플레이 서비스를 제공하여, 서버 구축 없이도 빠르게 멀티플레이 기능을 구현할 수 있습니다.',
        { type: 'image', src: '/multiplay/Photon_Architecture.jpg', alt: 'Photon Engine 구조', caption: 'Photon Engine 아키텍처' },
        
        { type: 'subtitle', text: '로비 시스템 및 자동 매칭' },
        '사용자들이 쉽게 게임에 참여할 수 있도록 로비 시스템을 구현했습니다.',
        '자동 매칭 기능을 통해 사용자들이 빠르게 파티를 구성하고 게임에 입장할 수 있도록 했습니다.',
        '방 생성, 입장, 퇴장 등의 기능을 구현하여 멀티플레이 세션을 관리했습니다.',
        { type: 'image', src: '/multiplay/Lobby_Matching.jpg', alt: '로비 및 매칭 시스템', caption: '로비 시스템 및 자동 매칭 구조' },
        
        { type: 'subtitle', text: '실시간 위치 및 애니메이션 동기화' },
        '여러 사용자의 위치와 애니메이션을 실시간으로 동기화하여 일관된 게임 경험을 제공했습니다.',
        '네트워크 최적화를 위해 필요한 데이터만 전송하고, 보간(Interpolation)을 활용하여 부드러운 동기화를 구현했습니다.',
        'NPC의 움직임과 애니메이션도 동기화하여 모든 사용자가 같은 NPC 상태를 볼 수 있도록 했습니다.',
        { type: 'image', src: '/multiplay/Sync_Animation.jpg', alt: '애니메이션 동기화', caption: '실시간 위치 및 애니메이션 동기화' },
        
        { type: 'subtitle', text: '게임 상태 동기화' },
        '슈팅 게임의 경우 발사, 피격, 점수 등 게임 상태를 실시간으로 동기화했습니다.',
        'RPC(Remote Procedure Call)를 활용하여 중요한 게임 이벤트를 모든 클라이언트에 전달했습니다.',
        '게임 로직의 일관성을 보장하기 위해 마스터 클라이언트를 지정하여 권한을 관리했습니다.',
        { type: 'image', src: '/multiplay/Game_State_Sync.jpg', alt: '게임 상태 동기화', caption: '게임 상태 동기화 구조' },
        
        { type: 'subtitle', text: 'AR 멀티플레이 환경 구축' },
        'AR 환경에서 멀티플레이를 구현하기 위해 Cloud Anchor와 Photon Engine을 결합했습니다.',
        'Cloud Anchor로 공간 좌표계를 공유하고, Photon으로 네트워크 동기화를 처리하여 AR 멀티플레이 게임을 구현했습니다.',
        '여러 사용자가 같은 AR 공간에서 게임을 즐길 수 있도록 공간 인식과 네트워크 동기화를 통합했습니다.',
        { type: 'image', src: '/multiplay/AR_Multiplay.jpg', alt: 'AR 멀티플레이', caption: 'AR 멀티플레이 환경 구축' },
      ],
    },
    {
      title: 'ifland 메타버스 Prop 동기화',
      items: [
        'ifland 메타버스 플랫폼에서 다수의 사용자가 방에 입장하여 활동하고, 방장에 의해 다양한 Prop(인터랙티브 아이템)들이 씬에 배치되거나 제거될 수 있습니다.',
        'Prop의 배치, 제거, 상태 변경 등을 모든 사용자에게 실시간으로 동기화해야 하며, 중간에 방에 진입한 사용자도 기존 Prop의 상태를 정확하게 받아와야 합니다.',
        { type: 'image', src: '/multiplay/Prop_Sync.jpg', alt: 'Prop 동기화', caption: 'ifland Prop 동기화 시스템' },
        
        { type: 'subtitle', text: 'Prop 상태 동기화' },
        'Prop의 위치, 회전, 애니메이션 상태, 상호작용 상태 등 다양한 속성을 효율적으로 동기화할 수 있도록 구조를 설계하고 구현했습니다.',
        '네트워크 지연이나 패킷 손실이 발생해도 Prop 상태가 일관되게 유지되도록 재전송 및 보정 로직을 구현하고, 동기화 실패 시 자동으로 재시도하여 최종적으로 일관된 상태를 보장하는 메커니즘을 개발했습니다.',
        
        { type: 'subtitle', text: '중간 진입 사용자 처리' },
        '중간에 방에 진입한 사용자의 경우, 스냅샷 정보를 활용하여 현재 씬에 존재하는 모든 Prop의 초기 상태를 받아와 동기화하고, 이후 발생하는 Prop의 변경 사항을 실시간으로 받아 처리하도록 구현했습니다.',
        '스냅샷을 통해 방에 입장하는 시점의 Prop 상태를 한 번에 전달받아 빠르게 동기화할 수 있도록 했으며, 늦게 입장한 사용자도 기존 사용자들과 동일한 Prop 상태를 볼 수 있도록 초기 상태 동기화 메커니즘을 개선했습니다.',
        
        { type: 'subtitle', text: 'Pause & Resume 상황 대응' },
        '앱이 백그라운드로 전환되거나 네트워크 연결이 일시적으로 끊겼다가 재연결되는 Pause & Resume 상황에 대응할 수 있도록 구현했습니다.',
        'Pause 상태에서 발생한 Prop 변경 사항을 Resume 시점에 동기화하여, 사용자가 앱을 다시 활성화했을 때 최신 Prop 상태를 정확하게 반영할 수 있도록 했습니다.',
        '네트워크 재연결 시 스냅샷 정보를 활용하여 빠르게 현재 상태를 복원하고, 이후 실시간 동기화로 전환하는 메커니즘을 구현했습니다.',
        
        { type: 'subtitle', text: 'Prop 연출 동기화' },
        'Prop의 연출(애니메이션, 이펙트 등)도 동기화하여 모든 사용자가 같은 연출을 같은 타이밍에 볼 수 있도록 했습니다.',
        'Prop이 시작하는 연출, 진행 중인 연출, 종료 연출 등 다양한 상황을 고려하여 동기화 시스템을 설계했습니다.',
        '연출의 시작 시간과 진행 상태를 동기화하여 모든 사용자가 일관된 시각적 경험을 할 수 있도록 구현했습니다.',
      ],
    },
  ],
  relatedProjects: ['Jump AR CES', '5GX AR (SKT 이벤트용 AR 게임)', 'ifland (Metaverse App)'],
};

