/* 
! Node.js 설치 
: JavaScript의 '런타임'
: JavaScript의 프로그램들을 실행할 수 있는 환경

: TypeScript는 JS의 슈퍼셋이므로 'Node.js' 환경에서 동작

? Node,js 설치 전 삭제

- 윈도우(windows)
  : 윈도우 키 > 프로그램 추가/제거 > Node.js 삭제

  : 아래 경로에 해당하는 디렉터리 삭제
    윈도우 키 > 파일 탐색기
      C:\Program Files\Node.js
      C:\Program Files(x86)\Node.js
      C:\사용자\User\AppData\Roaming\npm
      C:\User\User\AppData\Roaming\npm

  : 윈도우 + r > cmd 입력(명령 프롬프트 실행)
    node -v
    npm -v
    : 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
    : 삭제 완료

- 맥(MacOS)
  : Homebrew를 사용하여 Node 제거하는 방법
    응용 프로그램 > 유틸리 폴더 > 터미널 실행
    brew uninstall --force node

  : 터미널 실행
    node -v
    npm -v
    : 삭제 완료

? Node.js 설치
: 공식 웹사이트(구글 > Node.js 검색)
: https://nodejs.org/en

: LTS(Long Term Support) 버전 설치를 권장 - 안정적

: 파일 탐색기 > 다운로드 > 다운로드 된 node.js 실행

: 설치 완료 여부 확인
  윈도우 + r > cmd 입력(명령 프롬프트 실행)
  node -v
  npm -v

    : npm 버전 변경
      - 최신 버전 npm 업데이트
      npm install -g npm@latest
      (2023.11.28 수강일 기준 10.2.4)

      - 특정 버전으로 변경
        npm install -g npm@10.2.3

? Windows에서 npm 실행이 되지 않을 경우
  (Node.js 설치 후에도 npm 실행이 안되는 경우)

  윈도우 키 > 시스템 환경 변수 편집 > 시스템 속성
  > 고급 > 환경 변수 클릭 

  : 사용자 변수에서 Path 설정
    '사용자 이름; 에 대한 사용자 변수
    파일 탐색기 > C드라이브 > Users(사용자)
    >  자신의 컴퓨터 이름(ITPS) > AppData > Roaming > npm의 경로를 복사

    > Path(변수) > 환경 변수 편집 창
    > 새로 만들기 > 복사한 npm 경로를 삽입
    > 확인 버튼 클릭

  : 시스템 변수에서 Path 설정
  파일 탐색기 > C드라이브 > Program Files
  > nods.js의 경로를 복사

  > Path(뱐수) > 환경 변수 편집 > 새로 만들기
  > 복사한 nodejs경로를 삽입
    삽입 시 마지막에 \(원화)기호 첨부)
*/