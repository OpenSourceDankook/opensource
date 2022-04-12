# opensource
## NFT 프로젝트
- NFT: 블록기술을 이용해서 디지털 자산의 소유주를 증명하는 가상의 토큰으로 대상이 되는 그림, 영상 등의 디지털 파일을 가리키는 주소를 토큰안에 담음으로써 일종의 가상 진품 증명서

- 기능
   - NFT Trading Platform: NFT 거래 시장 플랫폼 
   - Opensea의 OpenAPI: 최대 규모의 NFT 시장인 OpenSea의 OpenAPI를 이용하여 오픈소스를 활용하고 기여할 예정
   - floor-price finder: 관심있는 NFT의 특성별로 가격의 하한선 및 하한선의 깊이를 탐색하는 방법. chain별 프로젝트 제공 및 데이터를 필터링하여 보여줄 수 있는 기능을 구현할 예정 
   - 가상 지갑 주소: 주 해킹 요소인 가상 지갑을 사용하는 대신 가상 지갑 주소를 사용할 예정 

- 컴포넌트 구성 
  - Page: 1) User Docs와 Developer Docs(오픈소스 기여방법 및 홈페이지 사용 방법)을 담은 Main 페이지
          2) NFT 프로젝트에서 필요한 정보를 제공해주는 페이지 
  - Component: 1) 공통으로 작업 가능한 Common 컴포넌트
               2) 사용자들에게 서비스 사용법과 기여방법을 보여주는 Main 컴포넌트
               3) NFT 관련 데이터 요청 방식을 맞게 보여주는 Detail 컴포넌트

- 사용할 라이브러리: Axios(서버 통신), react-router-dom(라우터 기능), context API(전역 상태 관리), styled-components(스타일 시트)
- 협업 방식: git flow를 통한 브랜치 분할
- 역할 분담: 
   *김연홍 - Detail component 제작 및 디자인 기획 
   *박주희 - Main component 제작 및 디자인 기획 
   *부재희 - Detail component 제작 및 디자인 기획
   *정재현 - Common compoenent 제작 및 React 개발 환경 세팅 
   
[임시 시안] (https://www.figma.com/file/FIbBCzhiF4Tgxc6Szdz2lv/Untitled?node-id=0%3A1) 
