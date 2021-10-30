

function changemode(element) {
    console.log(element.className);

    if (element.className === "light-mode") {
        element.className = "light-mode active";
        document.querySelector('.dark-mode').className = "dark-mode";
        document.head.removeChild(document.head.querySelector('style'));
        document.querySelector('.step1 .top img').src = "../Assets/Remix Logo Light Mode.svg";
        document.querySelector('.step2 .top img').src = "../Assets/Remix Logo Light Mode.svg";
        document.querySelector('.step3 .top img').src = "../Assets/Remix Logo Light Mode.svg";

    }
    
    else if (element.className === "dark-mode") {
        element.className = "dark-mode active";
        document.querySelector('.light-mode').className = "light-mode";
        document.querySelector('.step1 .top img').src = "../Assets/Remix-logo.svg";
        document.querySelector('.step2 .top img').src = "../Assets/Remix-logo.svg";
        document.querySelector('.step3 .top img').src = "../Assets/Remix-logo.svg";
        const style = document.createElement('style');
        style.innerHTML = `

        body { 
            animation-name: one;
        }
        
        @keyframes one {
            0%{background: white;}
            100%{background: #1E2025;}
        }
        
        nav .mode  {
            animation-name: two;
        }

        @keyframes two {
            0%{}
            100%{background: black;color: #A3A3A3;}
        }
        
        .step span , p{
            animation-name: n3;
        }

        @keyframes n3 {
            0%{color: var(--p-color);}
            100%{color: #C6C8CD;}
        }
        
        nav .mode .active{
            animation-name: n4;
        }

        @keyframes n4 {
            0%{background: #494A51;color: white;}
            100%{background: #494A51;color: white;}
        }
        
        h2 , nav .back{
            animation-name: n5;
        }

        @keyframes n5 {
            0%{color: white;}
            100%{color: white;}
        }
        
        .step {
            animation-name: n6;
        }

        @keyframes n6 {
            100%{background : #41424E;}
        }
        
        .previous {
            animation-name: n7;
        }

        @keyframes n7 {
            100%{color: var(--btn-color);}
        }
        `;
        document.head.appendChild(style);
        
    }
}


function choosing(element) {

    let selected;

    if (element.parentNode.parentNode.className == "choice personal") {
        document.querySelector('.personal').style.border = '2px solid var(--border-color)';
        document.querySelector('.personal img').style.display = 'block';
        element.style.display = 'none';
        console.log(element);
        selected = 'personal';

        document.querySelector('.corporate').style.border = 'none';
        document.querySelector('.corporate img').style.display = 'none';
        document.querySelector('.corporate input').style.display = 'block';
    }

    else {
        document.querySelector('.corporate').style.border = '2px solid var(--border-color)';
        document.querySelector('.corporate img').style.display = 'block';
        element.style.display = 'none';
        selected = 'corporate';

        document.querySelector('.personal').style.border = 'none';
        document.querySelector('.personal img').style.display = 'none';
        document.querySelector('.personal input').style.display = 'block';
    }
}

    // Steping

    let step_number = 1;
    const step1 = document.querySelector('.step1');
    const step2 = document.querySelector('.step2');
    const step3 = document.querySelector('.step3');
    
    document.querySelector('.step1 .next').onclick = function () {
        step1.style.display = 'none';
        step2.style.display = 'flex';
        step_number++;
        console.log(step_number);
    }
    
    document.querySelector('.step2 .next').onclick = function () {
        step2.style.display = 'none';
        step3.style.display = 'flex';
        step_number++;
        console.log(step_number);
    }
    
    document.querySelector('.step2 .previous').onclick = function () {
        step2.style.display = 'none';
        step1.style.display = 'flex';
        step_number--;
        console.log(step_number);
    }
    
    document.querySelector('.step3 .previous').onclick = function () {
        step2.style.display = 'flex';
        step3.style.display = 'none';
        step_number--;
        console.log(step_number);
    }

