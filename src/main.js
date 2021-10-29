
        let isOpen = false;
        function menu(element) {
            const sidebar = document.querySelector('nav .sidebar');
            const body = document.querySelector('body');
            console.log(body);
            if (isOpen === false) {
                sidebar.style.display = 'flex';
                isOpen = true;
                element.style.position = 'relative';
                element.style.left = 'calc(10vw - 40px)';
                element.className = "fas fa-times";
                body.style.overflow = 'hidden';
            }
            else {
                sidebar.style.display = 'none';
                isOpen = false;
                element.className = "far fa-bars";
                element.style.position = 'static';
                body.style.overflow = 'visible';
            }
        }

        function changemode(element) {
            console.log(element.className);

            if (element.className === "light-mode") {
                console.log("changetolight");
                element.className = "light-mode active";
                document.querySelector('.dark-mode').className = "dark-mode";

                document.head.removeChild(document.head.querySelector('style'));
                document.querySelector('nav .mobile img').src = "Assets/Remix Logo Light Mode.svg";
                document.querySelector('header .hero img').src = "Assets/Hero Image (Light Mode).svg";

            }
            
            else if (element.className === "dark-mode") {
                console.log("changetodark");
                element.className = "dark-mode active";
                document.querySelector('.light-mode').className = "light-mode";
                
                document.querySelector('nav .mobile img').src = "Assets/Remix-logo.svg";
                document.querySelector('header .hero img').src = "Assets/Hero Image.svg";
                const style = document.createElement('style');
                style.innerHTML = `

                * {
                    animation-duration: 5s;
                    animation-fill-mode: forwards;
                }

                body ,nav .sidebar , .sidebar .nav-link { 
                    animation-name: one;
                }
                
                @keyframes one {
                    0%{background: #1E2025;color: #A3A3A3;border : none;}
                    100%{background: #1E2025;color: #A3A3A3;border : none;}
                }
                
                nav .sidebar .modes  {
                    animation-name: two;
                }

                @keyframes two {
                    0%{background: black;color: #A3A3A3;}
                    100%{background: black;color: #A3A3A3;}
                }
                
                nav .light-mode , p{
                    animation-name: n3;
                }

                @keyframes n3 {
                    0%{color: #A3A3A3;}
                    100%{color: #A3A3A3;}
                }
                
                nav .right-side .modes .active{
                    animation-name: n4;
                }

                @keyframes n4 {
                    0%{background: #494A51;color: white;}
                    100%{background: #494A51;color: white;}
                }
                
                h1 , h2 , b{
                    animation-name: n5;
                }

                @keyframes n5 {
                    0%{color: white;}
                    100%{color: white;}
                }
                
                .collaboration .col a {
                    animation-name: n6;
                }

                @keyframes n6 {
                    100%{color: var(--btn-color);}
                }
                
                .testimonial .testimonials .card {
                    animation-name: n7;
                }

                @keyframes n7 {
                    100%{background: #434450;}
                }
                
                .testimonial .testimonials .card p {
                    animation-name: n8;
                }

                @keyframes n8 {
                    100%{color: #DFE0E2;}
                }
                
                .pricing p ,.pricing .price h2 {
                    animation-name: n9;
                }

                @keyframes n9 {
                    100%{color: #C6C8CD;}
                }
                
                footer ul h3{
                    animation-name: n10;
                }

                @keyframes n10 {
                    100%{color: black;}
                }

                @media (min-width:1200px) {
    
                    .active {
                        position: relative;
                    }
                
                    nav {
                        flex-direction: row;
                        min-width: 100%;
                        gap: 32px;
                    }
                    
                    nav .mobile label{
                        display: none;
                    }
                
                    nav .sidebar {
                        display: flex;
                        position: static;
                        height: min-content;
                        border: none;
                        padding: 0;
                        width: 100%;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                
                    nav .sidebar div {
                        width: 100%;
                        flex-direction: row;
                    }
                
                    nav .sidebar div >  {
                        width: 100%;
                    }
                    
                    nav .mobile {
                        min-width: min-content;
                    }
                
                    nav .right-side {
                        margin: 0;
                        width: 100%;
                        justify-content: space-between;
                    }
                
                }
                `;
                document.head.appendChild(style);
                
            }
        }

    