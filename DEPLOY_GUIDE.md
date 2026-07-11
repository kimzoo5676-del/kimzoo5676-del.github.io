# GitHub Pages 배포 가이드

이 포트폴리오를 무료로 인터넷에 공개하는 방법입니다.
(내용을 다 채운 뒤 배포해도 되고, 먼저 배포하고 나중에 수정해도 됩니다.)

배포가 끝나면 주소는 다음과 같이 만들어집니다:
```
https://<GitHub아이디>.github.io/<저장소이름>/
```

---

## 방법 A. 웹에서 업로드 (가장 쉬움, 추천)

명령어를 쓰지 않고 마우스로만 할 수 있는 방법입니다.

### 1) GitHub 계정 만들기
- https://github.com 에서 가입 (이미 있으면 로그인).

### 2) 새 저장소(Repository) 만들기
- 오른쪽 위 **+** → **New repository** 클릭.
- **Repository name**: 예) `portfolio`
- **Public** 선택 (Pages는 공개 저장소에서 무료).
- **Create repository** 클릭.

### 3) 파일 업로드
- 만든 저장소 화면에서 **uploading an existing file** 링크 클릭.
  (또는 **Add file → Upload files**)
- 이 폴더 안의 파일들을 **드래그**해서 올립니다:
  `index.html`, `projects.html`, `experience.html`,
  `project-1.html` ~ `project-4.html`, `styles.css`
  (사진을 넣었다면 이미지 파일들도 함께)
  - `EDIT_GUIDE.md`, `DEPLOY_GUIDE.md` 는 올리지 않아도 됩니다(올려도 무방).
  - `about.html`, `skills.html`, `contact.html` 은 안 쓰는 파일이라 올리지 않아도 됩니다.
  - 숨김 폴더 `.git` 이 보이면 올리지 마세요.
- 아래 **Commit changes** 버튼 클릭.

### 4) Pages 켜기
- 저장소 상단 **Settings** → 왼쪽 메뉴 **Pages**.
- **Source** 를 **Deploy from a branch** 로 두고,
  **Branch** 를 **main** / 폴더 **/ (root)** 선택 후 **Save**.
- 1~2분 기다리면 같은 화면 위쪽에 공개 주소가 나타납니다. 끝!

### 수정하고 싶을 때
- 저장소에서 해당 파일을 클릭 → 연필 아이콘(✏️) → 내용 수정 →
  **Commit changes**. 잠시 뒤 사이트에 반영됩니다.

---

## 방법 B. 명령어(git) 사용 (개발 도구에 익숙하다면)

본인 컴퓨터의 터미널에서 이 폴더로 이동한 뒤:

```bash
# 1. 저장소 초기화 & 첫 커밋
git init
git add index.html projects.html experience.html project-*.html styles.css
git commit -m "포트폴리오 첫 배포"
git branch -M main

# 2. GitHub에서 만든 빈 저장소와 연결 (주소는 본인 것으로 교체)
git remote add origin https://github.com/<아이디>/portfolio.git
git push -u origin main
```

이후 GitHub 저장소 **Settings → Pages** 에서 Branch를 **main / root** 로
지정하면 동일하게 배포됩니다.

수정 후 재배포:
```bash
git add -A
git commit -m "내용 수정"
git push
```

---

## 참고
- 이 폴더에 숨김 `.git` 폴더가 남아 있을 수 있습니다. 방법 A를 쓴다면
  휴지통으로 삭제해도 되고, 방법 B를 쓴다면 그냥 두면 됩니다.
- 커스텀 도메인(예: `kimjoowoo.dev`)을 연결하고 싶으면 Settings → Pages
  의 **Custom domain** 에서 설정할 수 있습니다.
