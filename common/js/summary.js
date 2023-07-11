const SMainQEn={
    Init(){//인스턴스화
        let prevBtn = document.querySelector(".prev");
        let nextBtn = document.querySelector(".next");

            //페이지 이동
        let pages = document.querySelectorAll(".page");
        let totalPages = document.querySelector(".total_page");
        let curPages = document.querySelector(".cur_page");

        totalPages.innerHTML = pages.length;


        // console.log(pages);
        let currentPage = 0;
        console.log('        ' + pages.length);

        curPages.innerHTML = currentPage+1;

        //next버튼 누르면 다음 페이지
        nextBtn.addEventListener("click", function(){
            console.log('next 눌렀을 때 현재 페이지  ' + currentPage);
            
            if(currentPage < pages.length-1){
                pages[currentPage].style.display = "none";
                currentPage++;
                console.log(currentPage);
                pages[currentPage].style.display = "block";
                
            }else if(currentPage == pages.length-1){
                pages[currentPage].style.display = "block";
            }
            curPages.innerHTML = currentPage+1;
        });


        //prev버튼 누르면 이전 페이지    
        prevBtn.addEventListener("click", function(){
            console.log('prev 눌렀을 때 현재 페이지  ' + currentPage);

            if(currentPage > 0){
                pages[currentPage].style.display = "none";
                currentPage--;
                console.log(currentPage);
                pages[currentPage].style.display = "block";

            }else if(currentPage === 0){
                pages[currentPage].style.display = "block";
            }
            curPages.innerHTML = currentPage+1;
        });

        //프린트
        let print = document.querySelector(".print");

        function printTrigger(elementId) {
            let getMyFrame = document.getElementById(elementId);
            getMyFrame.focus();
            getMyFrame.contentWindow.print();
        }

        print.addEventListener("click", function(){
            printTrigger('summaryPdf');
        });


        //모바일 전환 시 프린트, 다운로드 버튼 안보이게
        function detectMobileDevice(agent) {
            const mobileRegex = [
            /Android/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
            /Opera Min/i
            ]
        
            return mobileRegex.some(mobile => agent.match(mobile))
        }
        
        const isMobile = detectMobileDevice(window.navigator.userAgent)
        
        if (isMobile) {
            console.log('current device is mobile')
            document.body.classList.add("mob")
        } else {
            console.log('current device is not mobile')
            document.body.classList.remove("mob")
        }
    }
}