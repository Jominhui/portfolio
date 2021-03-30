import React from "react";
import "./MemoryLog.scss";
import Memory from "../../assets/images/Memory/memory.svg";
import MemoryIcon from "../../assets/images/Memory/memoryIcon.svg";
import ProjectInfo from "../ProjectInfo";
import Page1 from "../../assets/images/Memory/page1.png";
import Page2 from "../../assets/images/Memory/page2.png";
import Page3 from "../../assets/images/Memory/page3.png";
import Page4 from "../../assets/images/Memory/page4.png";
import Page5 from "../../assets/images/Memory/page5.png";

interface MemoryLogProps {}

const MemoryLog = ({}: MemoryLogProps) => {
  return (
    <>
      <ProjectInfo
        title="memory.log"
        date="2020.08 ~ 2020.12"
        back={Memory}
        photo={MemoryIcon}
        color=""
      >
        <div className="memory">
          <div className="memory-title">⭐소개</div>
          <div className="memory-info">
            롤링페이퍼를 웹 사이트에서 제작하게 하여 롤링 페이퍼를 잃어버리지
            않고 즐길 수 있도록 제작하였습니다. <br />
            대구 ICT 융합 엑스포에서 전시, 발표를 하였습니다
          </div>

          <div className="memory-title">😊멤버</div>
          <div className="memory-info">
            <p>차승호 (Web & Server)</p>
            웹은 롤링페이퍼 인쇄부분, 롤링페이퍼 댓글 수정, 삭제 부분을 맡았고,
            서버는 유저 인증부분, 회원관리 부분, 이미지 업로드 부분을
            맡았습니다.
            <p>제정민 (Server)</p>
            롤링페이퍼 페이지, 댓글, 좋아요 부분을 맡았습니다.
            <p>임규민 (Web)</p>
            메인화면과 롤링페이퍼 조회, 롤링페이퍼 작성, 검색과 UI/UX 디자인을
            맡았습니다.
            <p>조민희 (Web)</p>
            롤링페이퍼 댓글 작성, 롤링페이퍼 댓글 작성자 목록과 UI/UX 디자인을
            맡았습니다.
            <p>정성훈 (Web)</p>
            로그인/회원가입 부분과 프로필 관리 부분을 맡았습니다.
          </div>

          <div className="memory-title">💻사용 기술</div>
          <div className="memory-info">
            <p>Frontend</p>
            React.js, TypeScript, Scss, MobX
            <p>Backend</p>
            SpringBoot, JPA, MariaDB, JSP
          </div>

          <div className="memory-title">주요 기능</div>
          <div className="memory-info">
            <p>📄 롤링 페이퍼 페이지</p>
            - 롤링 페이퍼 페이지를 전체공개/일부공개/나만보기 로 생성할 수
            있습니다. <br />- 전체보기는 메인 페이지에 노출될 수 있으며,
            일부공개는 특정 링크를 통해서만 접근이 가능합니다.
            <p>💬 롤링페이퍼 댓글</p>
            - 전체보기는 메인 페이지에 노출될 수 있으며, 일부공개는 특정 링크를
            통해서만 접근이 가능합니다. <br />- 또한 원하는 위치에 글을 옮겨서
            꾸밀 수 있습니다.
          </div>

          <div className="memory-title">프로젝트를 통해 얻은것</div>
          <div className="memory-info">
            <p>1. 협업 활동</p>
            프로젝트를 하면서 github에서 코드를 합치는 법, organizations에 코드
            커밋하는 법, 역할 분담 등을 친구들을 통해 배우고 익혀나갔습니다.
            <p>2. 파일 구조 (PCC)</p>
            Presentational -{">"} Container -{">"} Component 순의 파일 구조로
            Container에서는 비즈니스로직들을 Component에서는 뷰로직을 적어 보다
            편하고 알기 쉽게 파일을 구분하 정리하는 방식입니다.
            <p>3. API에 관한 문서 Swagger</p>
            혼자 개발하면서는 볼 수 없었던 API문서를 보는 법을 배웠습니다.
            swagger를 보면서 어떤 값을 보내야하고 어떤 값들이 넘어오고, 타입은
            어떤 것이 있는지 확인 할 수 있으니, 개발할 때 매우 도움이
            되었습니다.
            <p>4. JS에서 TS까지</p>
            REACT 처음에는 JS를 많이 사용했습니다. 왜냐하면 강의나 자료들을 보면
            대부분 JS가 많은 비중을 차지하고 있었기 때문입니다. 하지만 JS를
            사용하면서 불편한 점이 있었습니다. 변수나 반환되는 값들의 타입이
            맞지않아 많은 오류가 발생했습니다. 이런점을 어떻게 고칠가 하던중
            나르샤 프로젝트에서 TS를 사용하게 되었습니다. TS를 사용하니 모든
            값들에 타입들을 정의해줘야 하고 맞지 않다면 바로바로 잡아주기 때문에
            개발하는데 많은 편리함을 주었습니다. 앞으로 TS를 왜 사용해야 하는지
            공부해 나갈 것입니다.
            <p>5. MOBX</p>
            MOBX는 REACT 상태 관리 라이브러리 입니다. 여기서 상태 관리
            라이브러리란 간단히 말하자면 REACT의 트리 구조의 props 전달과
            state가 아닌, 특정한 저장소에 데이터를 따로 모아놓고 관리하는
            것입니다.
          </div>

          <div className="memory-title">페이지 구성</div>
          <div className="memory-image">
            <div>
              <img src={Page1} alt="" />
              <img src={Page2} alt="" />
            </div>
            <div>
              <img src={Page3} alt="" />
              <img src={Page4} alt="" />
            </div>
            <div>
              <img src={Page5} alt="" />
            </div>
          </div>

          <div className="memory-title">MORE</div>
          <div className="memory-info">
            <a href="https://github.com/memory-log" target="_blank">
              👋 https://github.com/memory-log
            </a>
          </div>
        </div>
      </ProjectInfo>
    </>
  );
};

export default MemoryLog;
