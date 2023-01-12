


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]



const navigation = getNode('.navigation');
const visualImg = getNode('.visual img')
// const list = getNodes('.navigation > li');

function makeArray(arrayLike){
  return Array.from(arrayLike)
}

const handler = (e) => {
  let target = e.target.closest('li')
  // 타겟이 아닌 다른걸 눌렀을때는 함수가 return 되도록
  if(!target) return
  
  let list = makeArray(navigation.children);
  let index = attr(target,'data-index');

  
  // Array.from 을 사용하여 진짜 배열로 변환, 그래야 forEach문 사용가능
  list.forEach(item => removeClass(item,'is-active'));
  

  // attr(visualImg,'src',`./assets/part01/visual${index}.jpg`)
  attr(visualImg,'src',`./assets/part01/${data[index-1].src}`);
  attr(visualImg,'alt',data[index-1].alt)


  addClass(target,'is-active');
  
}

navigation.addEventListener('click', handler)


















