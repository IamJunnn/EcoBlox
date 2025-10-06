import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation files
const translations = {
  en: {
    // Navigation
    'nav.program': 'Program',
    'nav.timeline': 'Timeline',
    'nav.safety': 'Safety',
    'nav.studentRoles': 'Student Roles',
    'nav.scheduleCall': 'Schedule Discovery Call',
    'nav.joinCohort': 'Join Next Cohort',
    'nav.ecoblox': 'EcoBlox',
    
    // Hero Section
    'hero.title': 'Turn Gaming Passion into',
    'hero.title.environmental': 'Environmental',
    'hero.title.action': 'Action',
    'hero.description': '10-week program where students create real games while learning environmental problem-solving and digital citizenship',
    'hero.smallGroups': 'Small Groups',
    'hero.safeEnvironment': 'Safe Environment',
    'hero.realGameLaunch': 'Real Game Launch',
    'hero.scheduleCall': 'Schedule Discovery Call',
    'hero.watchSample': 'Watch Sample Class',
    'hero.tagline': 'Nurture digital native talent who think about the environment through games in a safe online environment!',
    'hero.environmentalFocus': 'Environmental Focus',
    'hero.realLearning': 'Real Learning',
    
    // Program Highlights
    'program.title': 'Why EcoBlox is Different',
    'program.description': 'Unlike traditional coding classes, EcoBlox combines environmental education, real game development, and digital citizenship in a comprehensive STEM program',
    'program.realGameDev': 'Real Game Development',
    'program.realGameDevDesc': 'Students build actual games in Roblox Studio that launch on our platform',
    'program.environmentalEdu': 'Environmental Education',
    'program.environmentalEduDesc': 'Every project addresses real environmental challenges and solutions',
    'program.teamCollab': 'Team Collaboration',
    'program.teamCollabDesc': 'Work in specialized roles with project management skills for real outcomes',
    'program.onlineSafety': 'Online Safety Training',
    'program.onlineSafetyDesc': 'Comprehensive digital citizenship and healthy gaming culture education',
    'program.actualLaunch': 'Actual Game Launch',
    'program.actualLaunchDesc': 'Games are published on Tamra Republic platform for real players',
    'program.technicalSkills': 'Technical Skills',
    'program.technicalSkillsDesc': 'Learn Lua scripting, 3D design, and project management fundamentals',
    
    // Game Plan
    'gameplan.title': 'Game Plan',
    'gameplan.description': 'Students create an interactive sustainability game where they manage energy resources and keep real-world events powered through smart upcycling',
    'gameplan.coreConcept': 'Core Concept: EV Battery Upcycling Game',
    'gameplan.mechanic.battery': 'Battery Conversion',
    'gameplan.mechanic.batteryDesc': 'Process used EV batteries into 1kWh blocks',
    'gameplan.mechanic.transport': 'Transportation',
    'gameplan.mechanic.transportDesc': 'Move blocks to exchange stations',
    'gameplan.mechanic.power': 'Power Management',
    'gameplan.mechanic.powerDesc': 'Supply energy to E-Charger Centers',
    'gameplan.mechanic.event': 'Event Success',
    'gameplan.mechanic.eventDesc': 'Keep concerts and events running',
    'gameplan.exampleTitle': 'Example: K-pop Concert Challenge',
    'gameplan.challenge': 'The Challenge',
    'gameplan.challengeDesc': 'A concert with 100 people requires 100 kWh per hour. For a 2-hour concert, students must supply 200 kWh total.',
    'gameplan.solution': 'The Solution',
    'gameplan.solutionDesc': 'Students process used EV batteries at the Battery Conversion Center, creating 200 individual 1kWh blocks.',
    'gameplan.stakes': 'The Stakes',
    'gameplan.stakesDesc': 'If supply runs low, the concert experiences a blackout! This teaches students that careful energy planning and teamwork are essential.',
    'gameplan.learningOutcomes': 'Learning Outcomes',
    'gameplan.outcome.energyPlanning': 'Energy planning and resource management',
    'gameplan.outcome.sustainabilityConcepts': 'Environmental sustainability concepts',
    'gameplan.outcome.collaboration': 'Collaborative problem-solving',
    'gameplan.outcome.realWorldStem': 'Real-world application of STEM skills',
    
    // Timeline
    'timeline.title': '10-Week Program Journey',
    'timeline.description': 'A structured learning path that takes students from introduction to game publication',
    'timeline.week1': 'Week 1',
    'timeline.week2to5': 'Week 2-5',
    'timeline.week6to9': 'Week 6-9',
    'timeline.week10': 'Week 10',
    'timeline.introduction': 'Introduction',
    'timeline.roleTraining': 'Role Training',
    'timeline.gameBuild': 'Game Build',
    'timeline.reviewPublish': 'Review & Publish',
    'timeline.kickoff': 'Program Kickoff',
    'timeline.skillDevelopment': 'Skill Development',
    'timeline.collaborativeDevelopment': 'Collaborative Development',
    'timeline.launchShowcase': 'Launch & Showcase',
    'timeline.kickoffDesc': 'Get familiar with the platform, safety guidelines, and basic concepts',
    'timeline.skillDesc': 'Learn specialized skills in your chosen role: Builder, Scripter, or Tester/Planner',
    'timeline.collaborativeDesc': 'Work as a team to build your environmental sustainability game',
    'timeline.launchDesc': 'Final testing, review, and publishing your game to the Tamra Republic platform',
    'timeline.stat.totalWeeks': 'Total Weeks',
    'timeline.stat.learningPhases': 'Learning Phases',
    'timeline.stat.publishedGame': 'Published Game',
    
    // Student Roles
    'roles.title': 'Choose Your Specialization',
    'roles.description': 'Every student chooses a role that matches their interests and strengths. All roles collaborate to create impactful environmental games.',
    'roles.builder': 'Builder',
    'roles.builderSubtitle': '3D Design & Architecture',
    'roles.builderDesc': 'Create stunning 3D environments and structures that bring environmental concepts to life.',
    'roles.scripter': 'Scripter',
    'roles.scripterSubtitle': 'Game Logic & Programming',
    'roles.scripterDesc': 'Write the code that makes environmental systems work and games come alive.',
    'roles.tester': 'Tester/Planner',
    'roles.testerSubtitle': 'Quality & Project Management',
    'roles.testerDesc': 'Ensure games work perfectly and projects stay on track for successful launches.',
    
    // Footer
    'footer.getStarted': 'Get Started',
    'footer.contactUs': 'Contact Us',
    'footer.brandDescription': 'Revolutionary STEM education program combining environmental education, coding, and project management through multiplayer game creation.',
    'footer.tagline': 'Nurture digital native talent who think about the environment through games in a safe online environment!',
    'footer.quick.program': 'Program',
    'footer.quick.programDetails': 'Program Details',
    'footer.quick.timeline': 'Timeline',
    'footer.quick.safety': 'Safety & Digital Citizenship',
    'footer.quick.roles': 'Student Roles',
    'footer.copyright': '© 2024 EcoBlox. All rights reserved. Building the next generation of environmental innovators.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contactLink': 'Contact',

    // Roles labels
    'roles.keySkills': 'Key Skills:',
    'roles.exampleProjects': 'Example Projects:',
    'roles.learnMore': 'Learn More',

    // Program Highlight stats
    'program.stats.weeksProgram': 'Weeks Program',
    'program.stats.minutesPerClass': 'Minutes per Class',
    'program.stats.studentRoles': 'Student Roles',
    'program.stats.gameLaunchRate': 'Game Launch Rate',

    // Contact Popup
    'contact.title': 'Schedule Discovery Call',
    'contact.description': 'Get in touch with us to schedule your discovery call',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.gotIt': 'Got it!'
  },
  ko: {
    // Navigation
    'nav.program': '프로그램',
    'nav.timeline': '타임라인',
    'nav.safety': '안전',
    'nav.studentRoles': '학생 역할',
    'nav.scheduleCall': '상담 예약',
    'nav.joinCohort': '다음 기수 참여',
    'nav.ecoblox': '에코블록스',
    
    // Hero Section
    'hero.title': '게임 열정을',
    'hero.title.environmental': '환경',
    'hero.title.action': '실천으로',
    'hero.description': '학생들이 환경 문제 해결과 디지털 시민의식을 배우며 실제 게임을 만드는 10주 프로그램',
    'hero.smallGroups': '소규모 그룹',
    'hero.safeEnvironment': '안전한 환경',
    'hero.realGameLaunch': '실제 게임 출시',
    'hero.scheduleCall': '상담 예약하기',
    'hero.watchSample': '샘플 수업 보기',
    'hero.tagline': '안전한 온라인 환경에서 게임을 통해 환경을 생각하는 디지털 네이티브 인재를 육성하세요!',
    'hero.environmentalFocus': '환경 중심',
    'hero.realLearning': '실제 학습',
    
    // Program Highlights
    'program.title': '에코블록스가 다른 이유',
    'program.description': '전통적인 코딩 수업과 달리, 에코블록스는 환경 교육, 실제 게임 개발, 디지털 시민의식을 포괄적인 STEM 프로그램으로 결합합니다',
    'program.realGameDev': '실제 게임 개발',
    'program.realGameDevDesc': '학생들이 우리 플랫폼에서 출시되는 실제 게임을 Roblox Studio에서 제작합니다',
    'program.environmentalEdu': '환경 교육',
    'program.environmentalEduDesc': '모든 프로젝트가 실제 환경 문제와 해결책을 다룹니다',
    'program.teamCollab': '팀 협력',
    'program.teamCollabDesc': '실제 결과를 위해 프로젝트 관리 기술과 전문 역할로 협력합니다',
    'program.onlineSafety': '온라인 안전 교육',
    'program.onlineSafetyDesc': '포괄적인 디지털 시민의식과 건전한 게임 문화 교육',
    'program.actualLaunch': '실제 게임 출시',
    'program.actualLaunchDesc': '게임이 실제 플레이어를 위해 Tamra Republic 플랫폼에 출판됩니다',
    'program.technicalSkills': '기술적 기술',
    'program.technicalSkillsDesc': 'Lua 스크립팅, 3D 디자인 및 프로젝트 관리 기본을 배우세요',
    
    // Game Plan
    'gameplan.title': '게임 계획',
    'gameplan.description': '학생들은 에너지 자원을 관리하고 스마트 업사이클링을 통해 실제 이벤트에 전력을 공급하는 상호작용 지속가능성 게임을 만듭니다',
    'gameplan.coreConcept': '핵심 개념: EV 배터리 업사이클링 게임',
    'gameplan.mechanic.battery': '배터리 전환',
    'gameplan.mechanic.batteryDesc': '사용된 EV 배터리를 1kWh 블록으로 가공',
    'gameplan.mechanic.transport': '운송',
    'gameplan.mechanic.transportDesc': '블록을 교환 스테이션으로 이동',
    'gameplan.mechanic.power': '전력 관리',
    'gameplan.mechanic.powerDesc': 'E-충전 센터에 에너지 공급',
    'gameplan.mechanic.event': '이벤트 성공',
    'gameplan.mechanic.eventDesc': '콘서트와 이벤트를 지속 운영',
    'gameplan.exampleTitle': '예시: K-pop 콘서트 챌린지',
    'gameplan.challenge': '도전 과제',
    'gameplan.challengeDesc': '100명의 관객이 있는 콘서트는 시간당 100kWh가 필요합니다. 2시간 콘서트에는 총 200kWh를 공급해야 합니다.',
    'gameplan.solution': '해결 방법',
    'gameplan.solutionDesc': '학생들은 배터리 전환 센터에서 사용된 EV 배터리를 가공하여 1kWh 블록 200개를 만듭니다.',
    'gameplan.stakes': '중요성',
    'gameplan.stakesDesc': '공급이 부족하면 콘서트가 정전됩니다! 이를 통해 세심한 에너지 계획과 팀워크의 중요성을 배웁니다.',
    'gameplan.learningOutcomes': '학습 성과',
    'gameplan.outcome.energyPlanning': '에너지 계획 및 자원 관리',
    'gameplan.outcome.sustainabilityConcepts': '환경 지속가능성 개념',
    'gameplan.outcome.collaboration': '협력적 문제 해결',
    'gameplan.outcome.realWorldStem': 'STEM 기술의 실제 적용',
    
    // Timeline
    'timeline.title': '10주 프로그램 여정',
    'timeline.description': '학생들을 소개부터 게임 출판까지 이끄는 구조화된 학습 경로',
    'timeline.week1': '1주차',
    'timeline.week2to5': '2-5주차',
    'timeline.week6to9': '6-9주차',
    'timeline.week10': '10주차',
    'timeline.introduction': '소개',
    'timeline.roleTraining': '역할 훈련',
    'timeline.gameBuild': '게임 제작',
    'timeline.reviewPublish': '검토 및 출판',
    'timeline.kickoff': '프로그램 시작',
    'timeline.skillDevelopment': '기술 개발',
    'timeline.collaborativeDevelopment': '협력 개발',
    'timeline.launchShowcase': '런칭 및 전시',
    'timeline.kickoffDesc': '플랫폼, 안전 가이드라인 및 기본 개념을 숙지하세요',
    'timeline.skillDesc': '선택한 역할에서 전문 기술을 배우세요: 빌더, 스크립터, 또는 테스터/플래너',
    'timeline.collaborativeDesc': '환경 지속가능성 게임을 만들기 위해 팀으로 협력하세요',
    'timeline.launchDesc': '최종 테스트, 검토 및 Tamra Republic 플랫폼에 게임 출판',
    'timeline.stat.totalWeeks': '총 주차',
    'timeline.stat.learningPhases': '학습 단계',
    'timeline.stat.publishedGame': '출판된 게임',
    
    // Student Roles
    'roles.title': '전문 분야 선택',
    'roles.description': '모든 학생은 자신의 관심사와 강점에 맞는 역할을 선택합니다. 모든 역할이 함께 협력하여 임팩트 있는 환경 게임을 만듭니다.',
    'roles.builder': '빌더',
    'roles.builderSubtitle': '3D 디자인 및 건축',
    'roles.builderDesc': '환경 개념을 생생하게 만드는 멋진 3D 환경과 구조물을 만드세요.',
    'roles.scripter': '스크립터',
    'roles.scripterSubtitle': '게임 로직 및 프로그래밍',
    'roles.scripterDesc': '환경 시스템이 작동하고 게임이 살아나도록 하는 코드를 작성하세요.',
    'roles.tester': '테스터/플래너',
    'roles.testerSubtitle': '품질 및 프로젝트 관리',
    'roles.testerDesc': '게임이 완벽하게 작동하고 프로젝트가 성공적인 출시를 위해 정상적으로 진행되도록 하세요.',
    
    // Footer
    'footer.getStarted': '시작하기',
    'footer.contactUs': '문의하기',
    'footer.brandDescription': '환경 교육, 코딩, 프로젝트 관리를 멀티플레이어 게임 제작과 결합한 혁신적인 STEM 교육 프로그램입니다.',
    'footer.tagline': '안전한 온라인 환경에서 게임을 통해 환경을 생각하는 디지털 네이티브 인재를 육성하세요!',
    'footer.quick.program': '프로그램',
    'footer.quick.programDetails': '프로그램 상세',
    'footer.quick.timeline': '타임라인',
    'footer.quick.safety': '안전 및 디지털 시민의식',
    'footer.quick.roles': '학생 역할',
    'footer.copyright': '© 2024 에코블록스. 모든 권리 보유. 환경 혁신가의 다음 세대를 양성합니다.',
    'footer.privacy': '개인정보 처리방침',
    'footer.terms': '이용 약관',
    'footer.contactLink': '문의',

    // Roles labels
    'roles.keySkills': '핵심 기술:',
    'roles.exampleProjects': '예시 프로젝트:',
    'roles.learnMore': '자세히 보기',

    // Program Highlight stats
    'program.stats.weeksProgram': '주 프로그램',
    'program.stats.minutesPerClass': '수업 당 분',
    'program.stats.studentRoles': '학생 역할',
    'program.stats.gameLaunchRate': '게임 출시율',

    // Contact Popup
    'contact.title': '상담 예약',
    'contact.description': '상담 예약을 위해 저희에게 연락해주세요',
    'contact.phone': '전화',
    'contact.email': '이메일',
    'contact.gotIt': '확인'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    return savedLanguage === 'ko' ? 'ko' : 'en';
  });

  useEffect(() => {
    // Save language preference
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    // Reflect language in HTML tag for accessibility and SEO
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
