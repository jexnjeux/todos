# todos

todos 웹 어플리케이션 구현

## 디자인

![todosScreenshot](`/image/todoScreenshot.png`)

## 적용 기술

- React
- hooks
- SCSS

## Setup

```
$ npm install
$ npm start
```

## 구현기능

### 할 일 등록하기

- 상단에 할 일 입력 후 엔터키로 등록
- 새롭게 등록한 할 일을 목록 제일 상단에 표시
- 하단 왼쪽에 모든 할 일의 수 표시

### 할 일 관리하기

- 왼쪽 빈 동그리미 클릭시 완료된 할 일 상태로 변경
- 오른쪽 X 클릭시 화면에서 해당 할 일 삭제
- 하단 중앙에 All 클릭시 모든 할 일 보기
- 하단 중앙에 Active 클릭시 완료되지 않은 할 일만 보기
- 하단 중앙에 Completed 클릭시 완료된 할 일만 보기
- 하단 오른쪽 Clear completed 클릭시 완료된 할 일 모두 삭제
- 모든 할 일 완료된 상태에서 상단 화살표 클릭시 모두 완료되지 않은 할 일로 변경

### 할 일 변경하기

- 해당 할 일 더블 클릭시 텍스트 변경 가능
- 텍스트 변경 후 엔터키 누르면 변경 완료

### 할 일 모두 완료하기

- 상단 왼쪽 화살표 클릭시 모두 완료된 할 일로 변경
- 모두 완료된 할 일로 변경되면 화살표 색 변경
