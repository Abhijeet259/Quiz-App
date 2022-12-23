
const quizDB = {
    one: [
        {
            question: " What is the full form of HTML?",
            a: "Hello To My Land",
            b: "Hey Text Markup Language",
            c: "HyperText Markup Language",
            d: "Hypertext Markup Language",
            ans: "ans4"
        },
        {
            question: " What is the full form of CSS?",
            a: "Cascading Style Sheets",
            b: "Cascading Style Sheep",
            c: "Cartoon Style Sheets",
            d: "Cascading Super Sheets",
            ans: "ans1"
        },
        {
            question: " What is the full form of HTTP?",
            a: "Hypertext Transfer Product",
            b: "Hypertext Test Protocol",
            c: "Hey Transfer Protocol",
            d: "Hypertext Transfer Protocol",
            ans: "ans4"
        },
        {
            question: " What is the full form of JS?",
            a: "JavaScript",
            b: "JavaSuper",
            c: "JustScript",
            d: "JorderShoes",
            ans: "ans1"
        }
    ],

    two: [
        {
            fillquestion: " What is the full form of Js?",
            ans: "JAVASCRIPT"
        },
        {
            fillquestion: " What is the full form of HTML?",
            ans: "HYPER TEXT MARKUP"
        },
        {
            fillquestion: " What is the full form of Css?",
            ans: "CASCADING STYLE SHEET"
        },
        {
            fillquestion: " What is the full form of Css2?",
            ans: "CASCADING STYLE SHEET"
        }
    ],
    three: [
        {
            increquestion: " HYPER ____ MARKUP LANGUAGE",
            ans: "TEXT"
        },
        {
            increquestion: " JAVA______",
            ans: "SCRIPT"
        },
        {
            increquestion: " CASCADING ______ SHEET",
            ans: "STYLE"
        },
        {
            increquestion: " CASCADING STYLE _______",
            ans: "SHEET"
        }
    ],
    four: [
        {
            que: " Assending Order",
            dadquestion: [4, 1, 2, 3],
            ans: ["second", "third", "fourth", "first"],
        },
        {
            que: " Assending Order",
            dadquestion: ["D", "A", "B", "C"],
            ans: ["second", "third", "fourth", "first"],
        },
        {
            que: " Assending Order",
            dadquestion: ["iv", "i", "ii", "iii"],
            ans: ["second", "third", "fourth", "first"],
        },
        {
            que: " Desending Order",
            dadquestion: [6, 98, 87, 66],
            ans: ["second", "third", "fourth", "first"],
        }
    ],

    five: [
        {
            mulquestion: " What is the full form of CT?",
            a: "Current Transformer",
            b: "Hey Text Markup Language",
            c: "HyperText Markup Language",
            d: "Hypertext Markup Language",
            ans: "ans1,ans2"

        },
        {
            mulquestion: " What is the full form of PT?",
            a: "Potential Transformer",
            b: "Hey Text Markup Language",
            c: "HyperText Markup Language",
            d: "Hypertext Markup Language",
            ans: "ans1,ans3"

        },
        {
            mulquestion: " What is the full form of PT2?",
            a: "Potential Transformer",
            b: "Hey Text Markup Language",
            c: "HyperText Markup Language",
            d: "Hypertext Markup Language",
            ans: "ans1,ans4"

        },
        {
            mulquestion: " What is the full form of PT3?",
            a: "Potential Transformer",
            b: "Hey Text Markup Language",
            c: "HyperText Markup Language",
            d: "Hypertext Markup Language",
            ans: "ans1,ans4"

        }
    ]

};








let type1 = document.querySelector(".type1");
let one = document.querySelector("#one");


let question = document.querySelector('.question');

let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');

let answers = document.querySelectorAll('.answer');


let submit1 = document.querySelector('#submit1');





let type2 = document.querySelector(".type2");
let two = document.querySelector("#two");


let fillquestion = document.querySelector(".fillquestion");
let fillblankanswer = document.querySelector("#fillblankanswer");


let submit2 = document.querySelector('#submit2');





let type3 = document.querySelector(".type3");
let three = document.querySelector("#three");


let increquestion = document.querySelector(".increquestion");
let increblankanswer = document.querySelector("#increblankanswer")


let submit3 = document.querySelector('#submit3');





let type4 = document.querySelector(".type4");
let four = document.querySelector("#four");


let dadquestion = document.querySelector(".dadquestion");
let first = document.querySelector("#first");
let second = document.querySelector("#second"); let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");

let submit4 = document.querySelector('#submit4');





let type5 = document.querySelector(".type5");
let five = document.querySelector("#five");


let mulquestion = document.querySelector(".mulquestion");

let muloption1 = document.querySelector("#muloption1");
let muloption2 = document.querySelector("#muloption2");
let muloption3 = document.querySelector("#muloption3");
let muloption4 = document.querySelector("#muloption4");


let submit5 = document.querySelector('#submit5');


let showScore = document.querySelector('#showScore');









let score = 0;
let z = 0;
questions1 = 10;

const redirect = () => {
    let get = document.getElementById("next4");

    if(score<=6){
        location.reload();
    }
    else{
        // window.location.href = "../index2.html";
        // lvl2.href.innerHTML = "../level2/level2.html";

        get.action = "../index2.html";
        localStorage.setItem("gamelevel5",'../level5/level5.html');
        // lvl2.href = "../level2/level.html"
    }
}


let loadQuestion = () => {
    z++;
    if (z < 11) {
        // let type = Math.floor((Math.random() * 5) + 1);

        let questionCount = Math.floor((Math.random() * 3) + 1);

        // console.log("type:" + type)

        console.log("Questioncount:" + questionCount)

        if (z == 4) {
            one.style.display = "grid";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";


            let quizeType = quizDB.one;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            question.innerHTML = questionList.question;

            option1.innerHTML = questionList.a;
            option2.innerHTML = questionList.b;
            option3.innerHTML = questionList.c;
            option4.innerHTML = questionList.d;


            let getCheckAnswer = () => {
                let answer;

                answers.forEach((curAnsElem) => {
                    if (curAnsElem.checked) {
                        answer = curAnsElem.id;
                    }
                });

                return answer;
            }


            let deselectAll = () => {
                answers.forEach((curAnsElem) => curAnsElem.checked = false);
            }


            submit1.addEventListener('click', () => {

                let checkedAnswer = getCheckAnswer();

                // console.log(checkedAnswer);

                // console.log(quizeType);

                if (checkedAnswer === quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })

        }
        else if (z == 6) {
            one.style.display = "none";
            two.style.display = "grid";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";


            let quizeType = quizDB.two;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            fillquestion.innerHTML = questionList.fillquestion;

            // console.log("questions: " + questionList.fillquestion);

            let deselectAll = () => {
                document.getElementById("fillblankanswer").value = "";
            }

            submit2.addEventListener('click', () => {

                // console.log(document.getElementById("fillblankanswer").value.toUpperCase());

                if (document.getElementById("fillblankanswer").value.toUpperCase() == quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <=10) {
                    loadQuestion();
                }
            })

        }
        else if (z == 5) {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "grid";
            four.style.display = "none";
            five.style.display = "none";


            let quizeType = quizDB.three;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            increquestion.innerHTML = questionList.increquestion;

            // console.log("questions: " + questionList.increquestion);


            let deselectAll = () => {
                document.getElementById("increblankanswer").value = "";
            }


            submit3.addEventListener('click', () => {

                // console.log(document.getElementById("increblankanswer").value.toUpperCase());

                if (document.getElementById("increblankanswer").value.toUpperCase() == quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })

        }
        else if (z == 1) {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "grid";
            five.style.display = "none";



            let quizeType = quizDB.four;

            let questionList = quizeType[questionCount];

            dadquestion.innerHTML = questionList.que;

            first.innerHTML = questionList.dadquestion[0];
            second.innerHTML = questionList.dadquestion[1];
            third.innerHTML = questionList.dadquestion[2];
            fourth.innerHTML = questionList.dadquestion[3];


            let dragArea = document.querySelector(".choice");
            new Sortable(dragArea, {
                animation: 350,
            });


            let submit4 = document.getElementById("submit4");

            submit4.addEventListener('click', () => {
                items = $('.choice').find('.element')
                let list1 = items[0].id;
                let list2 = items[1].id;
                let list3 = items[2].id;
                let list4 = items[3].id;

                console.log(list1);
                console.log(items[1].id);
                console.log(items[2].id);
                console.log(items[3].id);
                if (list1 == questionList.ans[0] && list2 == questionList.ans[1] && list3 == questionList.ans[2] && list4 == questionList.ans[3]) {
                    score++;

                }
                console.log("Score " + score);

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })



            // let quizeType = quizDB.four;

            // // console.log("Quizetype" + quizeType);

            // let questionList = quizeType[questionCount];

            // // console.log("Quizetype Question" + questionList);

            // dadquestion.innerHTML = questionList.dadquestion;

            // // console.log("questions: " + questionList.dadquestion);


            // let deselectAll = () => {
            //     document.getElementById("dadblankanswer").value = "";
            // }


            // submit4.addEventListener('click', () => {

            //     // console.log(document.getElementById("dadblankanswer").value.toUpperCase());

            //     if (document.getElementById("dadblankanswer").value.toUpperCase() == quizeType[questionCount].ans) {
            //         score++;
            //     };

            //     console.log("Score " + score);

            //     deselectAll();

            //     // z++;

            //     console.log("the value of z " + z);

            //     if(z<=5){
            //         loadQuestion();
            //     }
            // })
        }
        else if (z == 3) {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "grid";


            let quizeType = quizDB.five;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            mulquestion.innerHTML = questionList.mulquestion;

            // console.log("questions: " + questionList.mulquestion);

            muloption1.innerHTML = questionList.a;
            muloption2.innerHTML = questionList.b;
            muloption3.innerHTML = questionList.c;
            muloption4.innerHTML = questionList.d;


            let getCheckAnswer = () => {
                let answer;
                let arr = [];

                answers.forEach((curAnsElem) => {
                    if (curAnsElem.checked) {
                        answer = curAnsElem.id;
                        arr.push(answer);

                        // console.log("mulanswe= " + answer);

                        // console.log("mulanswearr= " + arr);
                    }
                });

                return arr;
            }


            let deselectAll = () => {
                answers.forEach((curAnsElem) => curAnsElem.checked = false);
            }


            submit5.addEventListener('click', () => {

                let checkedAnswer = getCheckAnswer();

                // console.log("mulchecked= " + checkedAnswer);

                // console.log("mulcheckedans= " + quizeType[questionCount].ans);

                if (checkedAnswer == quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })
        }
        else if (z == 2) {
            one.style.display = "none";
            two.style.display = "grid";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";


            let quizeType = quizDB.two;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            fillquestion.innerHTML = questionList.fillquestion;

            // console.log("questions: " + questionList.fillquestion);

            let deselectAll = () => {
                document.getElementById("fillblankanswer").value = "";
            }

            submit2.addEventListener('click', () => {

                // console.log(document.getElementById("fillblankanswer").value.toUpperCase());

                if (document.getElementById("fillblankanswer").value.toUpperCase() == quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })

        }
        else if (z == 7) {
            one.style.display = "grid";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";


            let quizeType = quizDB.one;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            question.innerHTML = questionList.question;

            option1.innerHTML = questionList.a;
            option2.innerHTML = questionList.b;
            option3.innerHTML = questionList.c;
            option4.innerHTML = questionList.d;


            let getCheckAnswer = () => {
                let answer;

                answers.forEach((curAnsElem) => {
                    if (curAnsElem.checked) {
                        answer = curAnsElem.id;
                    }
                });

                return answer;
            }


            let deselectAll = () => {
                answers.forEach((curAnsElem) => curAnsElem.checked = false);
            }


            submit1.addEventListener('click', () => {

                let checkedAnswer = getCheckAnswer();

                // console.log(checkedAnswer);

                // console.log(quizeType);

                if (checkedAnswer === quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })

        }
        else if (z == 8) {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "none";
            five.style.display = "grid";


            let quizeType = quizDB.five;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            mulquestion.innerHTML = questionList.mulquestion;

            // console.log("questions: " + questionList.mulquestion);

            muloption1.innerHTML = questionList.a;
            muloption2.innerHTML = questionList.b;
            muloption3.innerHTML = questionList.c;
            muloption4.innerHTML = questionList.d;


            let getCheckAnswer = () => {
                let answer;
                let arr = [];

                answers.forEach((curAnsElem) => {
                    if (curAnsElem.checked) {
                        answer = curAnsElem.id;
                        arr.push(answer);

                        // console.log("mulanswe= " + answer);

                        // console.log("mulanswearr= " + arr);
                    }
                });

                return arr;
            }


            let deselectAll = () => {
                answers.forEach((curAnsElem) => curAnsElem.checked = false);
            }


            submit5.addEventListener('click', () => {

                let checkedAnswer = getCheckAnswer();

                // console.log("mulchecked= " + checkedAnswer);

                // console.log("mulcheckedans= " + quizeType[questionCount].ans);

                if (checkedAnswer == quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })
        }
        else if (z == 9) {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "none";
            four.style.display = "grid";
            five.style.display = "none";



            let quizeType = quizDB.four;

            let questionList = quizeType[questionCount];

            dadquestion.innerHTML = questionList.que;

            first.innerHTML = questionList.dadquestion[0];
            second.innerHTML = questionList.dadquestion[1];
            third.innerHTML = questionList.dadquestion[2];
            fourth.innerHTML = questionList.dadquestion[3];


            let dragArea = document.querySelector(".choice");
            new Sortable(dragArea, {
                animation: 350,
            });


            let submit4 = document.getElementById("submit4");

            submit4.addEventListener('click', () => {
                items = $('.choice').find('.element')
                let list1 = items[0].id;
                let list2 = items[1].id;
                let list3 = items[2].id;
                let list4 = items[3].id;

                console.log(list1);
                console.log(items[1].id);
                console.log(items[2].id);
                console.log(items[3].id);
                if (list1 == questionList.ans[0] && list2 == questionList.ans[1] && list3 == questionList.ans[2] && list4 == questionList.ans[3]) {
                    score++;

                }
                console.log("Score " + score);

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })
        }
        else if (z == 10) {
            one.style.display = "none";
            two.style.display = "none";
            three.style.display = "grid";
            four.style.display = "none";
            five.style.display = "none";


            let quizeType = quizDB.three;

            // console.log("Quizetype" + quizeType);

            let questionList = quizeType[questionCount];

            // console.log("Quizetype Question" + questionList);

            increquestion.innerHTML = questionList.increquestion;

            // console.log("questions: " + questionList.increquestion);


            let deselectAll = () => {
                document.getElementById("increblankanswer").value = "";
            }


            submit3.addEventListener('click', () => {

                // console.log(document.getElementById("increblankanswer").value.toUpperCase());

                if (document.getElementById("increblankanswer").value.toUpperCase() == quizeType[questionCount].ans) {
                    score++;
                };

                console.log("Score " + score);

                deselectAll();

                // z++;

                console.log("the value of z " + z);

                if (z <= 10) {
                    loadQuestion();
                }
            })

        }

    }
    else {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";

        showScore.innerHTML = `<h3> You Scored ${score}/${questions1} </h3>
        <form id="next"><button class = 'btn' onclick = "redirect()">${(score <= 6) ? "try again" : "Passed"}</button></form>`;

        showScore.classList.remove('scoreArea');
    }
}

loadQuestion();