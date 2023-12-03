window.dataObject = {};

window.onload = function () {
    window.rootStyle = getComputedStyle(document.body);
    prepareData();
    let currentTime = document.timeline.currentTime;
    window.requestAnimationFrame(function () {
        let data = window.dataObject.welcomeText1;
        data.startTime = currentTime;
        animateDivs(data);
    });

    window.requestAnimationFrame(function(){
        let data = window.dataObject.welcomeBackground;
        data.startTime = currentTime;
        animateDivs(data);
    });

    window.setTimeout(function () {
        let data = window.dataObject.welcomeText2;
        data.startTime = currentTime + 200;
        animateDivs(data);
    }, 200);

    window.setTimeout(function () {
        let data = window.dataObject.welcomeText3;
        data.startTime = currentTime + 400;
        animateDivs(data);
    }, 400);

    window.setTimeout(function () {
        let data = window.dataObject.welcomeText4;
        data.startTime = currentTime + 800;
        animateDivs(data);
    }, 800);

    window.setTimeout(function () {
        let data = window.dataObject.welcomeText5;
        data.startTime = currentTime + 900;
        animateDivs(data);
    }, 900);

    window.setTimeout(function () {
        let data = window.dataObject.welcomeText6;
        data.startTime = currentTime + 1000;
        animateDivs(data);
    }, 1000);

    window.setTimeout(function () {
        let data = window.dataObject.welcomeText7;
        data.startTime = currentTime + 1100;
        animateDivs(data);
    }, 1100);

    window.setTimeout(function () {
        let data = window.dataObject.welcomeText8;
        data.startTime = currentTime + 1300;
        animateDivs(data);
    }, 1300);
};

function prepareData() {
    prepareWelcomeText1();
    prepareWelcomeText2();
    prepareWelcomeText3();
    prepareWelcomeText4();
    prepareWelcomeText5();
    prepareWelcomeText6();
    prepareWelcomeText7();
    prepareWelcomeText8();
    prepareWelcomeText9();
};

function animateDivs(data) {
    let currentTime = document.timeline.currentTime;
    let elapsed = currentTime - data.startTime;
    if (elapsed >= data.animationTime) {
        for (let i = 0; i < data.affectedComponents.length; i++) {
            let finalStyle = data.styleValues[i].replace("|||", data.finalValues[i]);
            data.div.style[data.affectedComponents[i]] = finalStyle;
        }
        requestAnimationFrame(function () {
            animateDivs(data);
        });
        return;
    }
    for (let i = 0; i < data.affectedComponents.length; i++) {
        let increment = data.initialValues[i] + (data.increments[i] * elapsed);
        let newStyle = data.styleValues[i].replace("|||", increment);
        data.div.style[data.affectedComponents[i]] = newStyle;
    }
    requestAnimationFrame(function () {
        animateDivs(data);
    });
};

function calculateIncrements(data) {
    data.increments = [];
    for (let i = 0; i < data.finalValues.length; i++) {
        let finalValue = (data.finalValues[i] - data.initialValues[i]) / data.animationTime;
        data.increments.push(finalValue);
    }
};

function prepareWelcomeText1() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeText1InitialLeft"));
    let data = {
        div: document.getElementById("divWelcomeText1"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeText1AnimationTime"),
        initialValues: [initValue, 0],
        finalValues: [-50, 100],
        affectedComponents: ["transform", "opacity"],
        styleValues: ["translate(|||%, 0%)", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText1 = data;
}

function prepareWelcomeText2() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeText2InitialLeft"));
    let data = {
        div: document.getElementById("divWelcomeText2"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeText2AnimationTime"),
        initialValues: [initValue, 0],
        finalValues: [-50, 100],
        affectedComponents: ["transform", "opacity"],
        styleValues: ["translate(|||%, -50%)", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText2 = data;
}

function prepareWelcomeText3() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeText3InitialRight"));
    let data = {
        div: document.getElementById("divWelcomeText3"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeText3AnimationTime"),
        initialValues: [initValue, 0],
        finalValues: [0, 100],
        affectedComponents: ["transform", "opacity"],
        styleValues: ["translate(|||%, 0%)", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText3 = data;
}

function prepareWelcomeText4() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeTextRightSideInitialBottom"));
    let data = {
        div: document.getElementById("divWelcomeText4"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeTextRightSideAnimationTime"),
        initialValues: [initValue, 0],
        finalValues: [0, 100],
        affectedComponents: ["bottom", "opacity"],
        styleValues: ["|||%", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText4 = data;
}

function prepareWelcomeText5() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeTextRightSideInitialBottom"));
    let data = {
        div: document.getElementById("divWelcomeText5"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeTextRightSideAnimationTime"),
        initialValues: [initValue, 0],
        finalValues: [0, 100],
        affectedComponents: ["bottom", "opacity"],
        styleValues: ["|||%", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText5 = data;
}

function prepareWelcomeText6() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeTextRightSideInitialBottom"));
    let data = {
        div: document.getElementById("divWelcomeText6"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeTextRightSideAnimationTime"),
        initialValues: [initValue, 0],
        finalValues: [0, 100],
        affectedComponents: ["bottom", "opacity"],
        styleValues: ["|||%", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText6 = data;
}

function prepareWelcomeText7() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeTextRightSideInitialBottom"));
    let data = {
        div: document.getElementById("divWelcomeText7"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeTextRightSideAnimationTime"),
        initialValues: [initValue, 0],
        finalValues: [0, 100],
        affectedComponents: ["bottom", "opacity"],
        styleValues: ["|||%", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText7 = data;
}

function prepareWelcomeText8() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeTextScrollInitialTop"));
    let data = {
        div: document.getElementById("divScrollInner"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeTextScrollAnimationTime"),
        initialValues: [initValue],
        finalValues: [0],
        affectedComponents: ["top"],
        styleValues: ["|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText8 = data;
}

function prepareWelcomeText9() {
    let initValue = parseInt(window.rootStyle.getPropertyValue("--welcomeBackgroundInitialSize"));
    let data = {
        div: document.getElementById("divWelcomeBackground"),
        animationTime: window.rootStyle.getPropertyValue("--welcomeBackgroundAnimationTime"),
        initialValues: [initValue],
        finalValues: [parseInt(window.rootStyle.getPropertyValue("--welcomeBackgroundFinalSize"))],
        affectedComponents: ["background-size"],
        styleValues: ["auto |||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeBackground = data;
}