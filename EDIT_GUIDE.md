# 포트폴리오 편집 가이드

디자인은 그대로 두고 **내용만 채우면** 완성됩니다.

## 1. 채우는 법 (핵심)

채울 자리는 모두 **【 】** 기호로 표시되어 있습니다.

- 텍스트 편집기(메모장, VS Code 등)로 `.html` 파일을 엽니다.
- `【` 를 검색(Ctrl+F / Cmd+F)하면 채울 곳을 하나씩 찾을 수 있습니다.
- **【 】 기호까지 포함해서** 안의 안내문을 지우고 실제 내용을 적습니다.

미리 보려면 `index.html` 을 더블클릭해 브라우저로 엽니다.

## 2. 페이지 구성

3개 페이지로 정리했습니다.

| 파일 | 내용 |
|------|------|
| `index.html` | **Home** — 소개(+프로필 사진), 소개 섹션, 일하는 방식, 기술 스택 |
| `projects.html` | **Projects** — 프로젝트 카드 4개 (요약) |
| `project-1.html` ~ `project-4.html` | 각 프로젝트 **상세 페이지** (카드의 '자세히 보기'로 연결) |
| `experience.html` | **Experience** — 학력·SSAFY, 수상, 자격증 |

> `about.html`, `skills.html`, `contact.html` 은 더 이상 쓰지 않습니다(메인으로
> 자동 이동하는 빈 파일). 삭제하셔도 됩니다.

## 3. 자주 묻는 편집

**프로필 사진 (index.html)**
Home 오른쪽 카드 위의 `JK` 자리. 사진을 쓰려면 이미지 파일을 이 폴더에 넣고:
```html
<div class="hero-photo"><span>JK</span></div>
↓
<div class="hero-photo"><img src="profile.jpg" alt="김주우" /></div>
```

**기술 스택 (index.html)**
카테고리(Language / Backend / Database / Infra & Cloud / Tools)별로 태그를 입력.
태그 하나는 `<span class="skill-pill">기술명</span>` 이며, 복사/삭제로 개수를 조절합니다.

**프로젝트 (projects.html + project-N.html)**
- `projects.html` 의 카드는 요약(제목·한 줄 설명·기술·기간).
- 카드 `<article>` 한 덩어리를 복사/삭제해 개수를 조절할 수 있습니다.
  (개수를 바꾸면 '자세히 보기'의 `href="project-N.html"` 도 맞춰주세요.)
- 상세 내용은 각 `project-N.html` 에서 채웁니다(배경/한 일/결과/스크린샷/링크).

**프로젝트 이미지**
`【대표 이미지】` / `【이미지】` 자리는 이미지 파일을 폴더에 넣고
`<div class="project-cover"><span ...>...</span></div>` 안의 span을
`<img src="shot-1.png" alt="..." />` 로 바꾸면 됩니다.

**링크 연결**
GitHub/LinkedIn/블로그(푸터), 프로젝트의 GitHub/Live Demo 버튼은
`href="#"` 의 `#` 자리에 실제 주소를 넣으세요. 예) `href="https://github.com/내아이디"`

**섹션 통째로 빼기**
수상·자격증처럼 해당 내용이 없으면 그 `<section>` ... `</section>` 덩어리를
통째로 지워도 디자인은 깨지지 않습니다.

## 4. 칸·줄 위치 조정 (레이아웃)

위치·간격은 모두 `styles.css` 안의 **숫자(px)** 로 조절합니다.
규칙을 찾는 법: `styles.css` 를 열고 아래 적힌 **클래스 이름**(예: `.skill-row`)을
검색(Ctrl+F)하면 그 칸을 담당하는 부분이 나옵니다. 숫자만 바꾸고 저장한 뒤
브라우저 새로고침(F5)으로 확인하면 됩니다.

> 기본 개념 한 줄: `padding` = 안쪽 여백, `margin` = 바깥 여백.
> 숫자가 클수록 간격이 넓어집니다. `px` 단위는 그대로 두세요.

### 기술 스택 칸 (Home의 【기술명】 박스들)

`styles.css` 에서 **`.skill-row`** 를 찾으세요.

```css
.skill-row {
  grid-template-columns: 1fr 3fr;  /* 왼쪽 제목 : 오른쪽 태그 영역 비율 */
  gap: 64px;                       /* 제목과 태그 사이 가로 간격 */
  padding: 32px 0;                 /* 위·아래 여백 (행 간격) */
  align-items: start;              /* 태그의 세로 정렬 */
}
```

- **태그를 통째로 더 아래로 / 행 간격 넓히기** → `padding: 32px 0;` 의 첫 숫자(32)를 키움 (예: 48px).
- **태그를 왼쪽으로 당기기** → `gap: 64px;` 를 줄임 (예: 32px), 또는 `1fr 3fr` 의 첫 값을 줄임 (예: `1fr 4fr`).
- **태그를 제목 높이 가운데로** → `align-items: start;` 를 `center` 로 변경.
- **태그만 살짝 내리기** → `.skill-pills` 규칙에 `margin-top: 12px;` 한 줄 추가.

### 경력/학력 줄 (Experience의 세로 선과 점)

`styles.css` 에서 **`.timeline`** 으로 시작하는 4개 규칙을 찾으세요.

```css
.timeline { padding-left: 32px; }              /* 선이 오른쪽으로 밀린 정도 */
.timeline::before { top: 8px; bottom: 8px; }   /* 선의 시작/끝 위치 */
.timeline-item { padding-bottom: 48px; }       /* 점(항목) 사이 세로 간격 */
.timeline-item::before { left: -36px; top: 8px; } /* 점의 위치 */
```

- **점들을 아래로 더 벌리기** → `.timeline-item` 의 `padding-bottom: 48px;` 를 키움 (예: 72px).
- **선을 더 아래에서 시작** → `.timeline::before` 의 `top: 8px;` 를 키움 (예: 24px).
- **선·점 전체를 오른쪽으로** → `.timeline` 의 `padding-left: 32px;` 를 키움.
- **점이 선에서 어긋나 보이면** → `.timeline-item::before` 의 `left` 값(-36px)을 조금씩 조절.

### 한 곳만 살짝 옮기고 싶을 때 (가장 안전)

`styles.css` 를 건드리지 않고, **HTML 파일에서 그 요소에 직접** 한 줄 붙이면 됩니다.

```html
<div class="skill-pills" style="margin-top: 16px;">   <!-- 이 칸만 16px 내림 -->
```

- 아래로: `margin-top`, 위로 올림: `margin-bottom` 또는 `margin-top: -10px`
- 오른쪽으로: `margin-left`, 왼쪽으로: `margin-left: -10px`
- 이 방법은 그 한 군데에만 적용돼서 다른 곳에 영향이 없습니다.

## 5. 배포

내용을 다 채운 뒤 GitHub Pages로 배포합니다. 자세한 순서는
`DEPLOY_GUIDE.md` 를 참고하세요. (먼저 배포해 두고 나중에 수정해도 됩니다.)
