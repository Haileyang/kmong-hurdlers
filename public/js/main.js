const body = document.querySelector('body');
const gnb = document.querySelector('.gnb-wrap');
const gnbList = document.querySelectorAll('.gnb-menu');
const mbBtn = document.querySelector('.mobile-menu-btn');
const header = document.querySelector('#header');
let sticky = header.offsetTop;

if (document.location.pathname === '/' || document.location.pathname.indexOf('index') > -1) {
    // console.log(header)
    header.classList.add("main-header");
    //   body.style.overflow = "hidden"
}

function mobileBtnHandler(){
    gnb.classList.toggle('is_active')
    mbBtn.classList.toggle('is_active')
    body.classList.toggle('lock-body-scroll')
}

function headerSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("is_active");
    } else {
        header.classList.remove("is_active");
    }
}

const gnbs = document.querySelector('.gnb-wrap')
const lnbBg = document.querySelector('.header-bg')
gnbs.addEventListener("mouseenter", function(){
    lnbBg.classList.add('is_active')
})
gnbs.addEventListener("mouseleave", function(){
    lnbBg.classList.remove('is_active')
})

window.onload = function () {
    headerSticky()
};
window.onscroll = function () {
    headerSticky()
    
};

//ACCODRIAN DROPBOX EVENT (multiple) -start
const accordianItemHeaders = document.querySelectorAll(
    ".accordianItem_header"
);

accordianItemHeaders.forEach(accordianItemHeader => {
    accordianItemHeader.addEventListener("click", () => {
        const current = document.querySelector(".accordianItem_header.active");

        if (current && current !== accordianItemHeader) {
            current.classList.toggle("active");
            current.nextElementSibling.style.maxHeight = 0;
        }
        accordianItemHeader.classList.toggle("active");

        const accordianItemBody = accordianItemHeader.nextElementSibling;

        if (accordianItemHeader.classList.contains("active")) {
            accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
        } else {
            accordianItemBody.style.maxHeight = 0;
        }
    });
});

//ACCODRIAN DROPBOX EVENT (multiple) -end

//TAB MENU VISIBILITY EVENT -start
const tabLists = document.querySelectorAll('.recruit-tab-list')
const tabContents = document.querySelectorAll('.recruit-tab-content')

tabLists.forEach((item, idx) => {
    item.addEventListener('click', () => {
      hideAllContents()
      hideAllItems()

      item.classList.add('active')
      tabContents[idx].classList.add('active')
    })

})

function hideAllContents() {
    tabContents.forEach(tabContent => tabContent.classList.remove('active'))
}

function hideAllItems() {
    tabLists.forEach(tabList => tabList.classList.remove('active'))
}

//TAB PORTFOLIO VISIBILITY
const portfolioTabLists = document.querySelectorAll('.sub-filter-list');
const portfolioTabContents = document.querySelectorAll('.port-tab-content');
const blogTabContents = document.querySelectorAll('.blog-tab-content');
//const portfolio_tab_content = document.querySelectorAll('');

portfolioTabLists.forEach((item, idx) => {
    item.addEventListener('click', function(){
        hidePortAllItems();
        hidePortAllcontents();
        item.classList.add('is_active');

        if (portfolioTabContents[idx]){
            portfolioTabContents[idx].classList.add('active');
        } else {
            blogTabContents[idx].classList.add('active');
        }
    });
})

function hidePortAllcontents() {
    portfolioTabContents.forEach(tab => tab.classList.remove('active'));
    blogTabContents.forEach(tab => tab.classList.remove('active'));
}

function hidePortAllItems() {
    portfolioTabLists.forEach(tab => tab.classList.remove('is_active'));
    blogTabContents.forEach(tab => tab.classList.remove('is_active'));
}


// swiper
var swiper = new Swiper(".serviceSwiper", {
    slidesPerView: 3.5,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1.05,
            spaceBetween: 5,
        },
        800: {
            slidesPerView: 3.01,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3.01,
            spaceBetween: 25,
        }
    }
});

/* 
    ** 문의하기 폼 제출 
*/
$(function(){
    $('.contact-btn').on('click', sendContact);
});

function sendContact() {
    var service = $('#service').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var content = $('#content').val();
    var check = $('#pricheck2').prop('checked');

    if (!service) {
		alert('서비스를 입력해주십시오.');
		return false;
	}

	if (!phone) {
		alert('전화번호를 입력해주십시오.');
		return false;
	}

	if (!email) {
		alert('이메일을 입력해주십시오.');
		return false;
	}

	if (!content) {
		alert('문의 내용을 입력해주십시오.');
		return false;
	}

	if (!check) {
		alert('개인정보취급 약관에 동의해주십시오.');
		return false;
	}

    return true;
}

/*
    ** 구독하기 폼 제출
*/
$(function(){
    $('.subscription-btn').on('click', sendSubscribe);
});

function validateEmail(email){
    var regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}

function sendSubscribe(){
    var email = $('#subscribe_email').val();
    var check = $('#pricheck').prop('checked');

    if(!email) {
        alert('이메일을 입력해주십시오.');
        return false;
    }

    if(!validateEmail(email)) {
        alert('유효하지 않은 이메일 입니다.');
        return false;
    }

    if(!check) {
        alert('개인정보취급 약관에 동의해주십시오.');
		return false;
    }

    return true;
}

function comingSoon() {
    alert('준비중입니다.');
}