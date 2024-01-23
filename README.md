# 코딩허브 프론트엔드 실무 과제 _ 홍승재

<br/>

## 1. 사용한 기술
- Next.js / Typescript
- Recoil + Recoil-Persist
  : 별도의 DB가 없으므로, recoil persist를 이용하여 localStorage에 상태를 저장하여 관리하였습니다.
- Tailwind CSS

<br/>

## 2. 디렉토리 구조
L pages <br/>
&nbsp;&nbsp;&nbsp;L board <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L [page] : 게시판 페이지 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L index.tsx <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L paging.tsx : pagination <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L tool.tst : button set <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L create : 게시물 작성 페이지 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L index.tsx <br/>
&nbsp;&nbsp;&nbsp;&nbsp;L post : 개별 게시물 페이지 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L index.tsx <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L modity : 게시물 수정 페이지 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L index.tsx <br/>
<br/>
&nbsp;&nbsp;&nbsp;L components <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L header.tsx <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L btn.tsx <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L title.tsx <br/>
<br/>
L atom.tsx : recoil atom 관련 파일

<br/>

## 3. 구현 기능
### 1) 게시판
: 게시물을 5개씩 표시하고, 5개 이상일 경우 페이지네이션을 통해 페이지 이동 가능

### 2) 개별 게시물
: 게시물의 title과 content를 표시하고, content에 다른 게시물의 title이 포함되어 있을 경우, 자동으로 링크 생성. 게시물은 수정 가능

### 3) 게시물 작성
: title과 content를 작성. 내용 미작성 시 업로드 불가.

### 4) 게시물 수정
: 기존 게시물을 수정 가능. 작성과 마찬가지로 내용 미작성 시 업로드 불가.

<br/>

## 4. 배포
vercel 배포 주소 : https://hsj-wiki-page-git-main-sjhong98s-projects.vercel.app
