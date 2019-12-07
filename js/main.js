/* # 메인 페이지
1. 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
- createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.
*/

const v = document.getElementsByClassName("commentUser")
console.log(v);

const clickBtn = document.getElementsByTagName('button')[0];
const typeC = document.getElementsByTagName('input')[1];

typeC.addEventListener('click', () => {
    clickBtn.style.color = "#3386f2";
        
});

typeC.addEventListener("keyup", uploadComment);
clickBtn.addEventListener("click", uploadComments);


function uploadComment(e) {
    if(e.keyCode === 13) {

        let comment = document.getElementById("commentPlus");
        let makeDiv = document.createElement('div');
        let makeUser = document.createElement('span');
        let makeMsg = document.createElement('span');
        let makeBtn = document.createElement('BUTTON');
        
        makeDiv.className = "commentDiv"
        makeUser.className = "commentUser";
        makeMsg.className = "commentMsg";
        makeBtn.className = "deleteBtn"
        
        makeMsg.innerHTML = typeC.value;
        makeUser.innerHTML = "Kookie_97";
        makeBtn.innerHTML = "삭제"
        
        makeDiv.appendChild(makeUser);
        comment.appendChild(makeDiv);
        makeDiv.appendChild(makeBtn);
        makeDiv.appendChild(makeMsg);
          
        deleteTyped();
   
        changeBack(); 

    makeBtn.addEventListener("click", (e) => {
        //let deleteSelected = document.getElementsByClassName("commentDiv")[0];
       
        const btn = event.target; // => 버튼 태그, 클릭한 버튼 태그
        const deleteAll = btn.parentNode; // btn의 부모 노드 => commentDiv(버튼 태그를 감싸는 상위태그)
        
        comment.removeChild(deleteAll); // commentDiv를 감싸는 상위 div 태그 => comment : comment의 자식 노드를 삭제한다 => deleteAll을 (commentDiv태그를)
    })

}}
    
function uploadComments() { // 댓글 업로드 함수
     
    
        let comment = document.getElementById("commentPlus");
        let makeDiv = document.createElement('div');
        let makeUser = document.createElement('span');
        let makeMsg = document.createElement('span');
        let makeBtn = document.createElement('BUTTON');
        
        makeDiv.className = "commentDiv"
        makeUser.className = "commentUser";
        makeMsg.className = "commentMsg";
        makeBtn.className = "deleteBtn"
    
        makeUser.innerHTML = "Kookie_97";
        makeMsg.innerHTML = typeC.value;
        makeBtn.innerHTML = "삭제"
         
        comment.appendChild(makeDiv);
        makeDiv.appendChild(makeUser);
        makeDiv.appendChild(makeBtn); 
        makeDiv.appendChild(makeMsg);
    

        deleteTyped();
   
        changeBack(); 


        makeBtn.addEventListener("click", (e) => {
               
            const btn = event.target; // => 버튼 태그, 클릭한 버튼 태그
            const deleteAll = btn.parentNode; // btn의 부모 노드 => commentDiv(버튼 태그를 감싸는 상위태그)
                
            comment.removeChild(deleteAll); // commentDiv를 감싸는 상위 div 태그 => comment : comment의 자식 노드를 삭제한다 => deleteAll을 (commentDiv태그를)
        })

}

function deleteTyped() {
    typeC.value = "";
}

function changeBack() {
    clickBtn.style.color = "#bfe0f2";
}



