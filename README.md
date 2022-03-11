# Movester

## MUS : Move U, Start U, With me

움직여라, 시작하라, 함께하자.

## 폴더 구조

```js
/src
  App.js
  /components
    /common
      /modal
        ModalPortal.js
        PwChangeModal.js
      Header.js
      Footer.js
      Main.js
      MoveLink.js
      Nav.js
      ReCaptcha.js
    /elements
      Button.js
      NavProfileButton.js
      ProfileTitle.js
      ProfileInput.js
    /molecules
      ProfileDropMenu.js
      WeeklyCard.js
    /UI
      /home
        HomeComponent.js
```

[디자인패턴](https://velog.io/@holim0/React-Design-Pattern)

- elements: html 요소 단위 컴포넌트 (`ex) button, input ...`)
- molecules: 2개 이상의 elements 요소의 결합 단위 컴포넌트 (`ex) ProfileDropMenu, WeeklyCard ...`)
- common: 2개 이상의 molecules 요소의 결합 단위 컴포넌트 (`ex) Modal, Header, Footer, Nav ... `)
- UI: page 단위의 컴포넌트(`ex) HomeComponent ... `)
