/* # 메인 페이지
1. 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
- createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.
*/


const clickBtn = document.getElementsByTagName('button')[0];
const typeC = document.getElementsByTagName('input')[1];

typeC.addEventListener('click', (event) => {
    clickBtn.style.color = "#3386f2";
     
    clickBtn.addEventListener("click", uploadComment);
    
});

//clickBtn.addEventListener("click", uploadComment);

function uploadComment() { // 댓글 업로드 함수

    
        let comment = document.getElementById("commentPlus");
        let makeDiv = document.createElement('div');
        let makeUser = document.createElement('span');
        let makeMsg = document.createElement('span');
        
        makeUser.className = "commentUser";
        makeMsg.className = "commentMsg";
    
        makeUser.innerHTML = "Kookie_97";
        makeMsg.innerHTML = typeC.value;
         
        comment.append(makeDiv);
        makeDiv.append(makeUser);
        makeDiv.append(makeMsg);
    
    deleteTyped();
    changeBack();
}

function deleteTyped() {
    typeC.value = "";
}

function changeBack() {
    clickBtn.style.color = "#bfe0f2";
}
