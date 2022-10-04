// 스크롤
const toTopEl = document.querySelector(".right-side-area #to-top");
console.log(toTopEl);
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 0) {
      //   gsap.to(요소, 지속시간s, 요소) 해당요소가 지속시간에 걸쳐 요소에 해당하는 설정이 됨.
      //스크롤 버튼 나타나기
      gsap.to(toTopEl, 0.2, {
        y: 0,
        opacity: 1,
      });
    } else {
      //스크롤 버튼 오른쪽으로 숨기기
      gsap.to(toTopEl, 0.2, {
        y: 100,
        opacity: 0,
      });
    }
  }, 300) // _throttle(함수, 지연시간ms) 는 함수를 천천히 실행되게 만든다.
);

toTopEl.addEventListener("click", function () {
  //윈도우를 0.7초 동안
  gsap.to(window, 0.4, {
    scrollTo: 0, // 스크롤의 위치를 0으로
  });
});

// section2 토글 설정
// display 스와이프
const s2_displaySwiperUp = new Swiper(".section2 .display-up .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".section2 .abc-next",
    prevEl: ".section2 .abc-prev",
  },
  pagination: {
    el: ".section2 .inner-left .display-up .nav-bar .controller .page",
    type: "fraction",
  },
});
const s2_displaySwiperDown = new Swiper(".section2 .display-down .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl:
      ".section2 .inner-left .display-down .nav-bar .controller .display-next",
    prevEl:
      ".section2 .inner-left .display-down .nav-bar .controller .display-prev",
  },
  pagination: {
    el: ".section2 .inner-left .display-down .nav-bar .controller .page",
    type: "fraction",
  },
});
//display-up 재생버튼 토글 설정
const s2_displayUpPlayBtn = document.querySelector(
  ".section2 .inner-left .display-up .nav-bar .controller .display-playToggle "
);
//// .play 클래스가 있는가?(=play모양인가?) false 디폴트
let s2_displayUpPlayBtnBool = false;
const s2_upDisplayActiveSlide = document.querySelector(
  ".section2 .display-up.display-on .swiper .swiper-slide-active"
);

function handlePlayBtn(event) {
  console.log("플레이버튼 클릭");
  if (s2_displayUpPlayBtnBool === false) {
    //play 가 아닌경우 모양 바꾸기
    s2_displayUpPlayBtn.textContent = "play_arrow";
    s2_displaySwiperUp.autoplay.pause();
  } else {
    //play 가 맞는 경우 pause로 모양 바꾸기
    s2_displayUpPlayBtn.textContent = "pause";
    s2_displaySwiperUp.autoplay.run();
  }
  s2_displayUpPlayBtnBool = !s2_displayUpPlayBtnBool; //boolean 전환
}
s2_displayUpPlayBtn.addEventListener("click", handlePlayBtn);
console.log("hello");

//display-down 재생버튼 토글 설정
const s2_displayDownPlayBtn = document.querySelector(
  ".section2 .inner-left .display-down .nav-bar .controller .display-playToggle "
);
//// .play 클래스가 있는가?(=play모양인가?) false 디폴트
let s2_displayDownPlayBtnBool = false;
const s2_downDisplayActiveSlide = document.querySelector(
  ".section2 .display-down.display-on .swiper .swiper-slide-active"
);

function handleDownPlayBtn(event) {
  console.log("플레이버튼 클릭");
  if (s2_displayDownPlayBtnBool === false) {
    //play 가 아닌경우 모양 바꾸기
    s2_displayDownPlayBtn.textContent = "play_arrow";
    s2_displaySwiperDown.autoplay.pause();
  } else {
    //play 가 맞는 경우 pause로 모양 바꾸기
    s2_displayDownPlayBtn.textContent = "pause";
    s2_displaySwiperDown.autoplay.run();
  }
  s2_displayDownPlayBtnBool = !s2_displayDownPlayBtnBool; //boolean 전환
}
s2_displayDownPlayBtn.addEventListener("click", handleDownPlayBtn);

//주요뉴스-시민참여 토글 파트
// toggle-up 에 .toggle-on 클래스가 달려있는가? 디폴트 true
let isTogUpOn = true;

const s2_togUp = document.querySelector(
  ".section2 .inner .inner-left .toggle-up "
);
const s2_togDown = document.querySelector(
  ".section2 .inner .inner-left .toggle-down "
);
const s2_displayUp = document.querySelector(
  ".section2 .inner .inner-left .display .display-up"
);
const s2_displayDown = document.querySelector(
  ".section2 .inner .inner-left .display .display-down"
);

function s2HandleTogDown(event) {
  console.log("아래 클릭");
  //이미 아래쪽 토글이 켜져있으면 조기종료
  if (isTogUpOn === false) {
    return;
  }
  //toggle-on 클래스를 바꿔 달아준다.
  s2_togUp.classList.remove("toggle-on");
  s2_togDown.classList.add("toggle-on");
  //display-on 클래스를 바꿔 달아준다.
  s2_displayUp.classList.remove("display-on");
  s2_displayDown.classList.add("display-on");
}
function s2HandleTogUp(event) {
  console.log("위클릭");
  //이미 위쪽 토글이 켜져있으면 조기종료
  if (isTogUpOn === false) {
    return;
  }
  //toggle-on 클래스를 바꿔 달아준다.
  s2_togUp.classList.add("toggle-on");
  s2_togDown.classList.remove("toggle-on");
  //display-on 클래스를 바꿔 달아준다.
  s2_displayUp.classList.add("display-on");
  s2_displayDown.classList.remove("display-on");
}

s2_togDown.addEventListener("click", s2HandleTogDown);
s2_togUp.addEventListener("click", s2HandleTogUp);

//////////////////////////////////////////////////////////////////////// section9
const section9_swiper = new Swiper(".section9 .swiper", {
  autoplay: {
    delay: 3000, //(단위:ms) 3초 딜레이로 자동재생
  },
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// 재생정지 버튼 토글 설정
const playToggleEl = document.querySelector(
  ".section9 .swiper-controller .swiper-playToggle"
);
const playIcon = document.querySelector(
  ".section9 .swiper-playToggle .material-icons"
);

function s9ToggleHandle(event) {
  let classes = playToggleEl.classList;

  if (classes[1] === "play") {
    //play 클래스가 있으면 제거하여 pause 아이콘으로 바꾸고 autoplay 실행
    classes.remove("play");
    playIcon.textContent = "pause";
    section9_swiper.autoplay.run();
  } else {
    // play 클래스가 없으면 추가하여 play_arrow 아이콘으로 바꾸고 autoplay 정지.
    classes.add("play");
    playIcon.textContent = "play_arrow";
    section9_swiper.autoplay.pause();
  }
}
playToggleEl.addEventListener("click", s9ToggleHandle);

// 바디클릭 테스트
// const bodyClick = document.querySelector("body");
// function handleBodyClick(event) {
//   console.log(event.target);
// }
// bodyClick.addEventListener("click", handleBodyClick);

///////////////////////////////////////////////////////////////////////// section10
//펼치기할 버튼
const s10_btn1 = document.querySelector(".section10 .item:nth-child(2)");
const s10_btn2 = document.querySelector(".section10 .item:nth-child(3)");
const s10_btn3 = document.querySelector(".section10 .item:nth-child(4)");
const s10_btn5 = document.querySelector(".section10 .item:nth-child(6)");
//display 에 표시할 ul
const s10_ul1 = document.querySelector(".section10 .display .first");
const s10_ul2 = document.querySelector(".section10 .display .second");
const s10_ul3 = document.querySelector(".section10 .display .third");
const s10_ul5 = document.querySelector(".section10 .display .fifth");
// 리스트화
const s10_btns = [s10_btn1, s10_btn2, s10_btn3, null, s10_btn5];
const s10_uls = [s10_ul1, s10_ul2, s10_ul3, null, s10_ul5];
let s10_displayBools = [false, false, false, false, false];

//버튼눌러서 .display에 .hide 없앴다 생겼다 해주기
const displayEl = document.querySelector(".section10 .inner .display");
let toggleDisplay = false;

//버튼이 클릭돼있으면 true 반환. 아니면 false
function isClicked(s10_btn) {
  const classes = s10_btn.classList;
  if (classes[1] === "clicked") {
    return true;
  } else {
    return false;
  }
}
//모든 clicked 삭제함수
function removeAllClicked() {
  for (let i = 0; i < 5; i++) {
    if (i !== 3) {
      s10_btns[i].classList.remove("clicked");
    }
  }
}
//모든 ul 감추기 함수
function hideAllUl() {
  for (let i = 0; i < 5; i++) {
    if (i !== 3) {
      // display: grid -> none
      s10_uls[i].classList.remove("show");
    }
  }
}

//디스플레이 내용물 표시
function handleDisplayByOrder(btnOrder) {
  // 이미 다른 버튼에 의해 열려있었다면, 닫아준다.
  for (let i = 0; i < 5; i++) {
    if (btnOrder !== i && s10_displayBools[i] === true) {
      console.log(i, "가 열려있길래 닫았어요!");
      displayEl.classList.add("hide");
      s10_displayBools[i] = false;
      console.log(s10_displayBools);
    }
  }

  if (s10_displayBools[btnOrder]) {
    // 열려있으면 닫아준다.
    console.log(btnOrder, "닫았어요!");
    displayEl.classList.add("hide");
    s10_displayBools[btnOrder] = false;
    console.log(s10_displayBools);
  } else {
    // 닫혀있으면 열어준다.
    console.log(btnOrder, "열었어요!");
    displayEl.classList.remove("hide");
    s10_displayBools[btnOrder] = true;
    console.log(s10_displayBools);
  }
}

//버튼 핸들
function handleBtn(event) {
  let btnOrder = Number(this.id[this.id.length - 1]);
  hideAllUl(); // 모든 ul 없앤 후
  s10_uls[btnOrder].classList.add("show"); // 원하는 순서의 ul 보여주기

  if (isClicked(this)) {
    //클릭 됐으면 클래스 삭제
    this.classList.remove("clicked");
  } else {
    //클릭 안됐을 경우
    removeAllClicked(); // 우선 모든 clicked 제거 후
    this.classList.add("clicked"); // clicked 추가
  }

  //디스플레이 열고 닫기
  handleDisplayByOrder(btnOrder);
}
s10_btns[0].addEventListener("click", handleBtn);

//버튼2 핸들
s10_btns[1].addEventListener("click", handleBtn);

//버튼3 핸들
s10_btns[2].addEventListener("click", handleBtn);

//버튼5 핸들
s10_btns[4].addEventListener("click", handleBtn);
