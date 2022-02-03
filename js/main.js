//************************************************************************/
//FUNCTIONS USED TO SCROLL HORIZONTALLY CAROUSELS WHEN USING ARROW CONTROLS
//************************************************************************/

function scrollToEnd(pos) {
  switch (pos) {
    case 1:
      $('#product-carousel-list').animate({
        scrollLeft: 900
      }, 2000, function(){

      });
      $("#move-forward").fadeOut("slow");
      setTimeout(() => {
        $("#move-backward").fadeIn("slow");
      }, 500);
      break;
    case 2:
      document
        .getElementById("featured-product-carousel-list")
        .scrollTo({ left: 900, behavior: "smooth" });
      $("#move-forward2").css("visibility", "hidden");
      $("#move-backward2").css("visibility", "visible");
      break;
    case 3:
      document
        .getElementById("top-selling-product-carousel-list")
        .scrollTo({ left: 900, behavior: "smooth" });
      $("#move-forward3").css("visibility", "hidden");
      $("#move-backward3").css("visibility", "visible");
      break;
    default:
      break;
  }
}
function scrollToStart(pos) {
  switch (pos) {
    case 1:
      $('#product-carousel-list').animate({
        scrollLeft: 0
      }, 1000, function(){

      });
      $("#move-backward").fadeOut("slow");
      setTimeout(() => {
        $("#move-forward").fadeIn("slow");
      }, 500);
      break;
    case 2:
      document
        .getElementById("featured-product-carousel-list")
        .scrollTo({ left: 0, behavior: "smooth" });
      $("#move-forward2").css("visibility", "visible");
      $("#move-backward2").css("visibility", "hidden");
      break;
    case 3:
      document
        .getElementById("top-selling-product-carousel-list")
        .scrollTo({ left: 0, behavior: "smooth" });
      $("#move-forward3").css("visibility", "visible");
      $("#move-backward3").css("visibility", "hidden");
      break;

    default:
      break;
  }
}
//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON CATEGORY MENU
//************************************************************************/
function selectCategory(index) {
  switch (index) {
    case 0:
      if ($(window).width() <= 600){
        $('.category-carousel').css('margin-left','-7.3rem');
        $('.product-page').find('.category-carousel').css('margin-left','-118px');        
      }else if($(window).width() <= 1199){
        $('.product-page').find('.category-carousel').css('margin-left','-365px');
        $('.pages').find('.category-carousel').css('margin-left','-365px');
      }

      console.log($(window).width());
      
      $(".category-selector").css('display','block');
      $(".category-selector")
        .find("img")
        .first()
        .animate(
          {
            left: "13.65rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".category-selector")
        .find("img")
        .last()
        .animate(
          {
            left: "7rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".menu-item").removeClass("selected");
      $(".menu-item").first().addClass("selected");
      $('#product-carousel-list').find('li').fadeOut("slow");
      setTimeout(() => {
        $('#product-carousel-list').find('li').fadeIn("slow");
        $('#product-carousel-list').find('li').first().find('img').attr('src','https://imprimu.com/wp-content/uploads/2021/09/ss.png');
        $('#product-carousel-list').find('li').first().find('a').attr('href','product-business-card.html');
      }, 500);
      break;
    case 1:
      if ($(window).width() <= 600){
        $('.category-carousel').css('margin-left','-7.3rem');
        $('.product-page').find('.category-carousel').css('margin-left','-118px'); 
      }else if($(window).width() <= 1199){
        $('.product-page').find('.category-carousel').css('margin-left','-365px');
      }
      
      $(".category-selector").css('display','block');
      $(".category-selector")
        .find("img")
        .first()
        .animate(
          {
            left: "19.6rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".category-selector")
        .find("img")
        .last()
        .animate(
          {
            left: "12.85rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".menu-item").removeClass("selected");
      $(".menu-item").eq(1).addClass("selected");
      $('#product-carousel-list').find('li').fadeOut("slow");
      setTimeout(() => {
        $('#product-carousel-list').find('li').fadeIn("slow");
        $('#product-carousel-list').find('li').first().find('img').attr('src','https://imprimu.com/wp-content/uploads/2021/09/ss.png');
        $('#product-carousel-list').find('li').first().find('a').attr('href','product-business-card.html');
      }, 500);
      break;
    case 2:
      if ($(window).width() <= 600){
        $('.category-carousel').css('margin-left','-7.3rem');
        $('.product-page').find('.category-carousel').css('margin-left','-118px'); 
      }else if($(window).width() <= 1199){
        $('.product-page').find('.category-carousel').css('margin-left','-365px');
      }
      
      $(".category-selector").css('display','block');
      $(".category-selector")
        .find("img")
        .first()
        .animate(
          {
            left: "25.6rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".category-selector")
        .find("img")
        .last()
        .animate(
          {
            left: "18.7rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".menu-item").removeClass("selected");
      $(".menu-item").eq(2).addClass("selected");
      $('#product-carousel-list').find('li').css('display','block');
      $('#product-carousel-list').find('li').first().find('img').attr('src','https://imprimu.com/wp-content/uploads/2021/09/ss.png');
      break;
    case 3:
      if ($(window).width() <= 600){
        $('.category-carousel').css('margin-left','-7.3rem');
        $('.product-page').find('.category-carousel').css('margin-left','-118px'); 
      }else if($(window).width() <= 1199){
        $('.product-page').find('.category-carousel').css('margin-left','-365px');
      }
      
      $(".category-selector").css('display','block');
      $(".category-selector")
        .find("img")
        .first()
        .animate(
          {
            left: "31.6rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".category-selector")
        .find("img")
        .last()
        .animate(
          {
            left: "24.63rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".menu-item").removeClass("selected");
      $(".menu-item").eq(3).addClass("selected");
      $('#product-carousel-list').find('li').css('display','block');
      $('#product-carousel-list').find('li').first().find('img').attr('src','https://imprimu.com/wp-content/uploads/2021/09/ss.png');
      break;
    case 4:
      if ($(window).width() <= 600){
        $('.category-carousel').css('margin-left','-7.3rem');
        $('.product-page').find('.category-carousel').css('margin-left','-118px'); 
      }else if($(window).width() <= 1199){
        $('.product-page').find('.category-carousel').css('margin-left','-365px');
      }
      
      $(".category-selector").css('display','block');
      $(".category-selector")
        .find("img")
        .first()
        .animate(
          {
            left: "37.6rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".category-selector")
        .find("img")
        .last()
        .animate(
          {
            left: "30.55rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".menu-item").removeClass("selected");
      $(".menu-item").eq(4).addClass("selected");
      $('#product-carousel-list').find('li').fadeOut("slow");
      setTimeout(() => {
        $('#product-carousel-list').find('li').first().find('img').attr('src','img/tshirts.png');
        $('#product-carousel-list').find('li').first().find('h4').text('Suéter personalizado');
        $('#product-carousel-list').find('li').first().find('a').attr('href','product-tshirt.html');
        $('#product-carousel-list').find('li').first().fadeIn("slow");
      }, 500);
      
      break;
    case 5:
      if ($(window).width() <= 600){
        $('.category-carousel').css('margin-left','-7.3rem');
        $('.product-page').find('.category-carousel').css('margin-left','-118px'); 
      }else if($(window).width() <= 1199){
        $('.product-page').find('.category-carousel').css('margin-left','-365px');
      }
      
      $(".category-selector").css('display','block');
      $(".category-selector")
        .find("img")
        .first()
        .animate(
          {
            left: "43.6rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".category-selector")
        .find("img")
        .last()
        .animate(
          {
            left: "36.4rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".menu-item").removeClass("selected");
      $(".menu-item").eq(5).addClass("selected");
      $('#product-carousel-list').find('li').css('display','block');
      $('#product-carousel-list').find('li').first().find('img').attr('src','https://imprimu.com/wp-content/uploads/2021/09/ss.png');
      break;
    default:
      $(".category-selector")
        .find("img")
        .animate(
          {
            left: "43.95rem",
          },
          300,
          function () {
            // Animation complete.
          }
        );
      $(".menu-item").removeClass("selected");
      $(".menu-item").eq(5).addClass("selected");
      $('#product-carousel-list').find('li').css('display','block');
      $('#product-carousel-list').find('li').first().find('img').attr('src','https://imprimu.com/wp-content/uploads/2021/09/ss.png');
      break;
  }
}
//*********************************************************************************/
//FUNCTION USED TO TRANSFORM VALUE PROPS SECTION INTO A CAROUSEL FOR MOBILE DEVICES
//*********************************************************************************/

function valuePropsNav(i) {
  let pos = document.getElementById("value-props-mobile-carousel");
  switch (i) {
    case 0:
      if (pos.scrollLeft < 601) {
        pos.scrollTo({ left: 0, behavior: "smooth" });
      } else if (pos.scrollLeft < 900) {
        pos.scrollTo({ left: 325, behavior: "smooth" });
      } else {
        pos.scrollTo({ left: 650, behavior: "smooth" });
      }
      break;

    case 1:
      if (pos.scrollLeft < 250) {
        pos.scrollTo({ left: 325, behavior: "smooth" });
      } else if (pos.scrollLeft < 601) {
        pos.scrollTo({ left: 650, behavior: "smooth" });
      } else {
        pos.scrollTo({ left: 975, behavior: "smooth" });
      }
      break;
    default:
      break;
  }
}
$("#value-props-mobile-carousel").on("scroll", function () {
  pos = document.getElementById("value-props-mobile-carousel");
  if (pos.scrollLeft < 250) {
    $(".value-props-nav")
      .find("img")
      .first()
      .attr("src", "img/round-dot-selected.svg");
    $(".value-props-nav").find("img").eq(1).attr("src", "img/round-dot.svg");
    $(".value-props-nav").find("img").eq(2).attr("src", "img/round-dot.svg");
    $(".value-props-nav").find("img").eq(3).attr("src", "img/round-dot.svg");
  } else if (pos.scrollLeft < 601) {
    $(".value-props-nav").find("img").first().attr("src", "img/round-dot.svg");
    $(".value-props-nav")
      .find("img")
      .eq(1)
      .attr("src", "img/round-dot-selected.svg");
    $(".value-props-nav").find("img").eq(2).attr("src", "img/round-dot.svg");
    $(".value-props-nav").find("img").eq(3).attr("src", "img/round-dot.svg");
  } else if (pos.scrollLeft < 901) {
    $(".value-props-nav").find("img").first().attr("src", "img/round-dot.svg");
    $(".value-props-nav").find("img").eq(1).attr("src", "img/round-dot.svg");
    $(".value-props-nav")
      .find("img")
      .eq(2)
      .attr("src", "img/round-dot-selected.svg");
    $(".value-props-nav").find("img").eq(3).attr("src", "img/round-dot.svg");
  } else {
    $(".value-props-nav").find("img").first().attr("src", "img/round-dot.svg");
    $(".value-props-nav").find("img").eq(1).attr("src", "img/round-dot.svg");
    $(".value-props-nav").find("img").eq(2).attr("src", "img/round-dot.svg");
    $(".value-props-nav")
      .find("img")
      .eq(3)
      .attr("src", "img/round-dot-selected.svg");
  }
});

//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON BUSINESS CARDS (FIRST VERSION)
//************************************************************************/

function optionSelected(j) {
  switch (j) {
    case 0:
      if ($("#sides")[0].selectedIndex > 0) {
        $("#sides").addClass("option-selected");
      } else {
        $("#sides").removeClass("option-selected");
      }
      break;
    case 1:
      if ($("#corners")[0].selectedIndex > 0) {
        $("#corners").addClass("option-selected");
      } else {
        $("#corners").removeClass("option-selected");
      }
      break;
    case 2:
      if ($("#paper")[0].selectedIndex > 0) {
        $("#paper").addClass("option-selected");
      } else {
        $("#paper").removeClass("option-selected");
      }
      break;
    case 3:
      if ($("#quantity")[0].selectedIndex > 0) {
        $("#quantity").addClass("option-selected");
      } else {
        $("#quantity").removeClass("option-selected");
      }
      break;
    default:
      break;
  }
}

//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON PRODUCT DESCRIPTION TABS
//************************************************************************/

function tabsSelection(k) {
  let tabOptions = $(".description-tabs").find("li");
  tabOptions.removeClass("tab-selected");
  $(".description-tabs").find("li").eq(k).addClass("tab-selected");
  switch (k) {
    case 0:
      $('.description').css('display','block');
      $('.aditional-info').css('display','none');
      break;
    case 1:
      $('.description').css('display','none');
      $('.aditional-info').css('display','block');
      break;

    default:
      break;
  }
}

//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON DESIGN OPTIONS
//************************************************************************/

function designOption(l){
  switch (l) {
    case 0:
      $('.how-to-design-indicator').css('visibility','visible');
      $('.how-to-design-indicator-tablet').css('visibility','visible');
      $('.how-to-design-indicator-mobile').css('visibility','visible');
      $('.how-to-design-option').first().addClass('chosen');
      $('.how-to-design-option').eq(1).removeClass('chosen');
      $('.how-to-design-option').last().removeClass('chosen');
      $('.how-to-design-indicator').animate(
        {
          left: "-2px",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      $('.how-to-design-indicator-tablet').animate(
        {
          left: "-17px",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      $('.how-to-design-indicator-mobile').animate(
        {
          top: "6.2rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;
    case 1:
      $('.how-to-design-indicator').css('visibility','visible');
      $('.how-to-design-indicator-tablet').css('visibility','visible');
      $('.how-to-design-indicator-mobile').css('visibility','visible');
      $('.how-to-design-option').first().removeClass('chosen');
      $('.how-to-design-option').eq(1).addClass('chosen');
      $('.how-to-design-option').last().removeClass('chosen');
      $('.how-to-design-indicator').animate(
        {
          left: "9.82rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      $('.how-to-design-indicator-tablet').animate(
        {
          left: "8.85rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      $('.how-to-design-indicator-mobile').animate(
        {
          top: "13.2rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;
    case 2:
      $('.how-to-design-indicator').css('visibility','visible');
      $('.how-to-design-indicator-tablet').css('visibility','visible');
      $('.how-to-design-indicator-mobile').css('visibility','visible');
      $('.how-to-design-option').first().removeClass('chosen');
      $('.how-to-design-option').eq(1).removeClass('chosen');
      $('.how-to-design-option').last().addClass('chosen');
      $('.how-to-design-indicator').animate(
        {
          left: "19.68rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      $('.how-to-design-indicator-tablet').animate(
        {
          left: "18.75rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      $('.how-to-design-indicator-mobile').animate(
        {
          top: "20.2rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;
    default:
      break;
  }

}
//************************************************************************/
//FUNCTION USED TO SHOW USER'S LIKE ON PRODUCT
//************************************************************************/

function favourite(){
  if( $('.like').find('img').attr('src') == 'img/heart-selected.svg'){
    $('.like').find('img').attr('src','img/heart.svg');
  }else{
    $('.like').find('img').attr('src','img/heart-selected.svg');
  }
  
}

//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON PRODUCT OPTIONS TAB
//************************************************************************/

function productSelectorTab(m){
  switch (m) {
    case 0:
      $('.quantity-indicator').css('visibility','visible');
      $('.quantity-indicator').animate(
        {
          top: "3.2rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;

    case 1:
      $('.quantity-indicator').css('visibility','visible');
      $('.quantity-indicator').animate(
        {
          top: "5.85rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;
    case 2:
      $('.quantity-indicator').css('visibility','visible');
      $('.quantity-indicator').animate(
        {
          top: "8.5rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;
    case 3:
      $('.quantity-indicator').css('visibility','visible');
      $('.quantity-indicator').animate(
        {
          top: "11.2rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;
    case 4:
      $('.quantity-indicator').css('visibility','visible');
      $('.quantity-indicator').animate(
        {
          top: "13.8rem",
        },
        300,
        function () {
          // Animation complete.
        }
      );
      break;
    case 5:
      $('.quantity-indicator').css('visibility','visible');
    $('.quantity-indicator').animate(
      {
        top: "16.4rem",
      },
      300,
      function () {
        // Animation complete.
      }
    );
    break;
    case 6:
      $('.quantity-indicator').css('visibility','visible');
    $('.quantity-indicator').animate(
      {
        top: "19.1rem",
      },
      300,
      function () {
        // Animation complete.
      }
    );
    break;

    default:
      break;
  }
}

//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON BUSINESS CARD SIDES
//************************************************************************/

function sidesSelector(n){
  $('.sides').find('div').removeClass('chosen');
  $('.sides').find('div').eq(n).addClass('chosen');
}

//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON BUSINESS CARD FINISHING
//************************************************************************/

function finishingSelector(n){
  $('.finishing').find('div').removeClass('chosen');
  $('.finishing').find('div').eq(n).addClass('chosen');
}

//************************************************************************/
//FUNCTION USED TO SHOW USER SELECTION ON BUSINESS CARD PAPER
//************************************************************************/

function paperSelector(n){
  $('.paper').find('div').removeClass('chosen');
  $('.paper').find('div').eq(n).addClass('chosen');
}

//************************************************************************/
//FUNCTION USED TO TOOGLE CATEGORY MENU ON PRODUCT PAGE
//************************************************************************/

function toggleCategoryMenu(){
  $('.product-page').find('.category-carousel').css('display','flex');
  $('.product-page').find('.description-tabs').css('margin-top','36px');
  $('.products-menu').css('display','block');
  $('.dropdown-btn').css('display','none');
  $('.product-page').find('.main-menu').animate(
    {
      height: "220px",
    },
    500,
    function () {
      // Animation complete.
    }
  );
  $('.products-menu').animate(
    {
      height: "203px",
    },
    500,
    function () {
      // Animation complete.
    }
  );
  $('.breadcrumbs').animate(
    {
      top: "0px",
    },
    500,
    function () {
      // Animation complete.
    }
  );
  $('.product-info').animate(
    {
      top: "0px",
    },
    500,
    function () {
      // Animation complete.
    }
  );
  $('.request-designer').animate(
    {
      top: "-262px",
    },
    500,
    function () {
      // Animation complete.
    }
  );
  $('.breadcrumbs').find('span').css('margin-top','19px');
  $('.pages .square-dots').css('margin-top','50rem');

}

//************************************************************************/
//FUNCTION USED TO TOOGLE PRODUCT OPTIONS
//************************************************************************/

function toggleProductOptions(o){
  let selectedProductOption = $('.product-options').find('img').eq(o).attr('src');
  $('.product-info').find('img').first().attr('src',selectedProductOption);
}

//*************************************************************************************/
//FUNCTION USED TO TRANSFORM PRODUCT IMAGES SECTION INTO A CAROUSEL FOR MOBILE DEVICES
//*************************************************************************************/

$('#thumnails-carousel').on("scroll", function () {
  let productImgUl = document.getElementById('thumnails-carousel');
  if (productImgUl.scrollLeft < 250) {
    $(".slider-selector").find("img").attr("src", "img/round-dot-white.svg");
    $(".slider-selector")
      .find("img")
      .first()
      .attr("src", "img/round-dot-selected.svg");
  } else if (productImgUl.scrollLeft < 601) {
    $(".slider-selector").find("img").attr("src", "img/round-dot-white.svg");
    $(".slider-selector")
      .find("img")
      .eq(1)
      .attr("src", "img/round-dot-selected.svg");
  } else{
    $(".slider-selector").find("img").attr("src", "img/round-dot-white.svg");
    $(".slider-selector")
      .find("img")
      .eq(2)
      .attr("src", "img/round-dot-selected.svg");
  }
});

//*************************************************************************************/
//FUNCTION USED TO SHOW SELECTOR ON CONTACT FORMS
//*************************************************************************************/

function contactSelect(p){
  switch (p) {
    case 0:      
      $('.contact-form-indicator').animate(
        {
          top: "9.3rem",
        },
        300,
        function () {          
        }
      );
      $('.contact-form-indicator-tablet').animate(
        {
          top: "12.4rem",
        },
        300,
        function () {          
        }
      );
      $('.contact-form-indicator-mobile').animate(
        {
          top: "12.4rem",
        },
        300,
        function () {          
        }
      );
      $('.contact-form-indicator').css('visibility','visible');
      $('.contact-form-indicator-tablet').css('visibility','visible');
      $('.contact-form-indicator-mobile').css('visibility','visible');
      break;
    case 1:      
      $('.contact-form-indicator').animate(
        {
          top: "18.5rem",
        },
        300,
        function () {          
        }
      );
      $('.contact-form-indicator-tablet').animate(
        {
          top: "24.9rem",
        },
        300,
        function () {          
        }
      );
      $('.contact-form-indicator-mobile').animate(
        {
          top: "24.8rem",
        },
        300,
        function () {          
        }
      );
      $('.contact-form-indicator').css('visibility','visible');
      $('.contact-form-indicator-tablet').css('visibility','visible');
      $('.contact-form-indicator-mobile').css('visibility','visible');
      break;
  
    default:
      break;
  }
}