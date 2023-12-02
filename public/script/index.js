window.dataObject = {};

window.onload = function () {
    window.rootStyle = getComputedStyle(document.body);
    prepareData();
    let currentTime = document.timeline.currentTime;
    window.requestAnimationFrame(function () {
        window.dataObject.welcomeText1.startTime = currentTime;
        animateDivs(window.dataObject.welcomeText1);
    });

    window.setTimeout(function () {
        window.dataObject.welcomeText2.startTime = currentTime + 200;
        animateDivs(window.dataObject.welcomeText2);
    }, 200);

    window.setTimeout(function () {
        window.dataObject.welcomeText3.startTime = currentTime + 400;
        animateDivs(window.dataObject.welcomeText3);
    }, 400);
};

function prepareData() {
    prepareWelcomeText1();
    prepareWelcomeText2();
    prepareWelcomeText3();
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
        affectedComponents: ["right", "opacity"],
        styleValues: ["|||%", "|||%"],
    };
    calculateIncrements(data);
    window.dataObject.welcomeText3 = data;
}