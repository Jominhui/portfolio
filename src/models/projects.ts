import memory from "../assets/images/Memory/memory.svg";
import Ida from "../assets/images/Ida/idaback.png";
import Iport from "../assets/images/Iport/Iport.svg";
import FDT from "../assets/images/FDT/FDTback.png";

const Project = [
  {
    name: "memory.log",
    info:
      "롤링페이퍼를 웹 사이트에서 제작하게 하여 롤링 페이퍼를 잃어버리지 않고 즐길 수 있도록 제작하였습니다. 대구 ICT 융합 엑스포에서 전시, 발표를 하였습니다.",
    date: "2020년 08월 | 2020년 12월",
    url: "/project/memory.log",
    image: memory,
  },

  {
    name: "FDT 무인 기숙사 관리 시스템",
    info:
      "코로나 19로 비대면이 중요시된 요즘, 기숙사에서 점호도 무인으로 할 수 있도록 시스템을 개발하였습니다. 사감선생님의 일거리가 훨씬 줄어 학생들, 선생님들 모두 편리하게 사용할 수 있습니다. 2020 마이스터고 연합 해커톤에서 제작하였습니다.",
    date: "2020년 11월 | 2020년 11월",
    url: "/project/fdt",
    image: FDT,
  },
  {
    name: "IDa",
    info:
      "대구소프트웨어고등학교 신입생 입학 시스템입니다. 학생들이 쉽고 편리하게 원서 접수를 할 수 있도록 제작 중입니다. 프론트엔드는 React, MobX, Scss, TypeScript로 제작 중이며, 백엔드은 SpringBoot, Kotlin, Swagger, Thymeleaf 로 제작 중입니다.",
    date: "2020년 09월 | 2021년 03월",
    url: "/project/ida",
    image: Ida,
  },
  {
    name: "I`Prot",
    info:
      "나만의 포트폴리오 사이트를 만들기 위해 시작한 프로젝트입니다. 디자인과 프론트 복습을 주 목적으로 하여 개발하였고, 앞으로 개인 프로젝트 정리 사이트로 사용할 생각입니다.",
    date: "2021년 03월 | 진행중",
    url: "/project/iport",
    image: Iport,
  },
];

export default Project;
