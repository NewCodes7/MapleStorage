const mediaQuery = window.matchMedia("(max-width: 1128px)");

function handleOrientationChange(event) {
  if (event.matches) {
    taxiInfo.style.visibility = 'hidden';
    quest.style.visibility = 'hidden';
  }
}

mediaQuery.addEventListener("change", handleOrientationChange); // 쿼리가 참일 때 실행할 함수 등록
handleOrientationChange(mediaQuery); // 초기에 실행할 함수 호출