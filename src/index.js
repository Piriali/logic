// Load Css
import "../global.css";


// Load styles
import "../sass/index.scss";


document.addEventListener("DOMContentLoaded", function() {

    // Building Color change - SECTION 1
    (function() {


        // Floor variables
        const floor_1 = document.getElementById("#building floor_1");
        const floor_2 = document.getElementById("#building floor_2");
        const floor_3 = document.getElementById("#building floor_3");


        // floor_2.style.display = "none";


        // Navigation Variables
        const floor_1_nav = document.querySelector("#main-nav .floor-1");
        const floor_2_nav = document.querySelector("#main-nav .floor-2");
        const floor_3_nav = document.querySelector("#main-nav .floor-3");
        const floor_2_right_window = document.querySelector("#main-nav .floor_2_right_window");

        // Navs
        const navs = document.querySelectorAll(".nav-item");

        console.log(navs);

        // Floors
        const floors = document.querySelectorAll("#building .floor");

        // Rest navigation
        function resetFloors (floors) {
            floors.forEach(floor => {
                floor.style.cssText = `
                
                    fill : white;
                    fill-opacity : 0
                
                `;
            })
        }

        navs.forEach(nav => nav.addEventListener("mouseover", handleMouseOverOnNav));

        function handleMouseOverOnNav(e) {
            
            // Reset Floors
            resetFloors(floors);

            // Get data attribute
            const dataNav = parseInt(e.target.dataset.floor);
            

            // Iterate over floors
            floors.forEach(floor => {
                
                // Get data attribute
                const dataFloor = parseInt(floor.dataset.floor);
                

                // sadadas

                if(dataFloor === dataNav) {
                    floor.style.cssText = `
                    fill : rgb(69, 178, 250);
                    fill-opacity : 0.3;
                    `;
                }
            })
            
        }



    })();  // END OF SECTION 1



    // Building slider 
    (function() {

        // Get Buttons and Slides
        const buttons = document.querySelectorAll("#building-slider button");
        const slides = document.querySelectorAll("#building-slider  .floor");


        // Function resets slides
        function resetSlides(slides){
            slides.forEach(slide => {
                slide.style.display="none";
            });
        }

    
        // Function resets first slide
        (function(){

            // Reset all slides
            resetSlides(slides);

            // Show first one
            slides[0].style.display = "block";

        })();


        buttons.forEach(button => button.addEventListener("click", handleSliderButtonClick));

        // Function handles button click on slider
        function handleSliderButtonClick(event) {
            
            // Get dataset attrubute
            const dataButton = parseInt(this.dataset.btn);

            
            // Iterate over slides
            slides.forEach(slide => {

                // Grab dataset attribute
                const dataSlide = parseInt(slide.dataset.slide);

                // Find Match
                if(dataButton === dataSlide){

                    // Reset slides
                    resetSlides(slides);
                
                    // Show current slide
                    slide.style.display = "block";
                }

            })
        }



    })(); // END OF SECTION 3



});


// Popup script
    // HTML VARS
    const popupWrapper = document.querySelector("section#registration-popup");
    const toggler = document.querySelector("#toggler");
    const regButton = document.querySelector("#send-email");

    toggler.addEventListener("click", function() {
        popupWrapper.style.display = "none";
    });

    regButton.addEventListener("click", function() {
        popupWrapper.style.display = "block";
    });



