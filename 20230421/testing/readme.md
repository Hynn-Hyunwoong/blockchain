# Interface.ts

각각 아래의 특성으로 구현함

1. Commnet : 댓글 객체를 정의하는 Interface
2. User : 사용자 객체를 정의하는 Interface
3. ISatate : 댓글의대한 목록, 사용자 정보를 담는 상태 객체를 정의하는 Interface, 댓글은 리스트로 구현되므로, 배열 내 객체로 정의

# Abstract.ts

1. 추상화 클래스에서 상태의 타입을 정의하고, 상태를 초기화하는 setup 메서드를 정의함
2. JavaScript 로직대로, Target 을 매개변수로 받고, this.state 에 할당
3. 할당된 targt 을 setup 으로 상태 초기화를 처리
4. Render 를 사용하여 컴포넌트를 랜더링

setup

1. 상태를 초기화하는 것이므로, 리턴값이 존재하지 않음, 따라서 Type 은 void 로 정의함

template

1. 컴포넌트의 HTML 템플릿을 스트링으로 반환해야 하므로, 타입은 string, HTML 요소를 문자열로 전달받음 (JSX)

render

1. template 의 반환값을 사용
2. target 의 innerHTML 에 할당하고 랜더링 처리

setState

1. newState 를 사용해 상태를 업데이트 함
2. setState 에서는 prevState 와 newState 를 각각 분리하여 구조분해할당으로 this.state 에 할당
3. 선택적 프로퍼티를 인터페이스에 직접 지정하거나, Partial 타입을 사용하여 인터페이스를 감싸서 사용할 수 있음
4. 이전상태와 현재 상태를 JSON.stringify() 메서드를 이용하여 문자열로 변환하여 비교하여, 상태가 변경되었을 때만 랜더링을 수행하도록 함

# Class.tsx
