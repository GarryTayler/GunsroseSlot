App.Tutorial = new Screen({

    Name: "Tutorial",

    Containers: [
        {
            name: 'TutorialContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'tutorial background',
                    position: [0, 0],
                    type: 'sprite',
                    image: 'featureSplashBackground.png',
                    scale: [1920 / 1280, 1080 / 720],
                    childs: [
                        {
                            name: 'continue button bar',
                            position: [0, 300],
                            scale: 1,
                            childs: [
                                {
                                    name: 'continue button',
                                    type: 'sprite',
                                    button: 'button',
                                    image: 'continueButtonUp.png',
                                    position: [0, 0]
                                },
                                {
                                    name: 'continue button glow',
                                    type: 'sprite',
                                    image: 'continueButtonOver.png',
                                    alpha: 0,
                                    visible: false,
                                },
                                {
                                    name: 'continue button text',
                                    position: [0, 0],
                                    scale: [1, 1],
                                    type: 'text',
                                    text: 'CONTINUE',
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        fill: 0xffffff,
                                        fontSize: '20px',
                                        fontWeight: '400',
                                    }
                                },
                                {
                                    name: 'continue button disabled',
                                    type: 'sprite',
                                    button: 'disabled button',
                                    image: 'continueButtonDisabled.png',
                                    alpha: 0,
                                    visible: false,
                                }
                            ]
                        },
                        {
                            name: 'logo',
                            position: [-550, -240],
                            type: 'sprite',
                            image: 'logo.png',
                        },
                        {
                            name: 'feature_slide',
                            position: [0, -120],
                            childs: [
                                {
                                    name: 'feature_1',
                                    type: 'sprite',
                                    image: 'featureImage1.png'
                                },
                                {
                                    name: 'feature_2',
                                    type: 'sprite',
                                    image: 'featureImage2.png',
                                    visible: false
                                },
                                {
                                    name: 'feature_3',
                                    type: 'sprite',
                                    image: 'featureImage3.png',
                                    visible: false
                                },
                                {
                                    name: 'feature_4',
                                    type: 'sprite',
                                    image: 'featureImage4.png',
                                    visible: false
                                },
                                {
                                    name: 'feature_5',
                                    type: 'sprite',
                                    image: 'featureImage5.png',
                                    visible: false
                                },
                                {
                                    name: 'feature_next',
                                    type: 'sprite',
                                    image: 'featureSplashArrowUp.png',
                                    event: 'featureButton',
                                    next: true,
                                    position: [250, 0]
                                },
                                {
                                    name: 'feature_previous',
                                    type: 'sprite',
                                    image: 'featureSplashArrowUp.png',
                                    position: [-250, 0],
                                    event: 'featureButton',
                                    next: false,
                                    scale: [-1, 1]
                                }
                            ]
                        },
                        {
                            name: 'featur_indicator',
                            position: [0, 200],
                            childs: [
                                {
                                    name: 'indicator_1',
                                    position: [-480, 0],
                                    event: 'indicator',
                                    index: 1,
                                    childs: [
                                        {
                                            name: 'indicator_1_active',
                                            type: 'text',
                                            text: 'APPETITE FOR \n DESTRUCTION WILD',
                                            styles: {
                                                fill: 0xf7bf33,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                dropShadow: true,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 2,
                                                lineJoin: "bevel",
                                                align: 'center'
                                            },
                                        },
                                        {
                                            name: 'indicator_1_disabled',
                                            type: 'text',
                                            text: 'APPETITE FOR \n DESTRUCTION WILD',
                                            styles: {
                                                fill: 0xffffff,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                align: 'center'
                                            },
                                            visible: false,
                                        },
                                    ]
                                },
                                {
                                    name: 'indicator_2',
                                    position: [-240, 0],
                                    event: 'indicator',
                                    index: 2,
                                    childs: [
                                        {
                                            name: 'indicator_2_active',
                                            type: 'text',
                                            text: 'LEGEND SPINS',
                                            styles: {
                                                fill: 0xf7bf33,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                dropShadow: true,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 2,
                                                lineJoin: "bevel",
                                                align: 'center'
                                            },
                                            visible: false
                                        },
                                        {
                                            name: 'indicator_2_disabled',
                                            type: 'text',
                                            text: 'LEGEND SPINS',
                                            styles: {
                                                fill: 0xffffff,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                align: 'center'
                                            },
                                        },
                                    ]
                                },
                                {
                                    name: 'indicator_3',
                                    position: [0, 0],
                                    event: 'indicator',
                                    index: 3,
                                    childs: [
                                        {
                                            name: 'indicator_3_active',
                                            type: 'text',
                                            text: 'SOLO MULTIPLIER',
                                            styles: {
                                                fill: 0xf7bf33,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                dropShadow: true,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 2,
                                                lineJoin: "bevel",
                                                align: 'center'
                                            },
                                            visible: false
                                        },
                                        {
                                            name: 'indicator_3_disabled',
                                            type: 'text',
                                            text: 'SOLO MULTIPLIER',
                                            styles: {
                                                fill: 0xffffff,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                align: 'center'
                                            },
                                        },
                                    ]
                                },
                                {
                                    name: 'indicator_4',
                                    position: [240, 0],
                                    event: 'indicator',
                                    index: 4,
                                    childs: [
                                        {
                                            name: 'indicator_4_active',
                                            type: 'text',
                                            text: 'ENCORE \n FREESPINS',
                                            styles: {
                                                fill: 0xf7bf33,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                dropShadow: true,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 2,
                                                lineJoin: "bevel",
                                                align: 'center'
                                            },
                                            visible: false
                                        },
                                        {
                                            name: 'indicator_4_disabled',
                                            type: 'text',
                                            text: 'ENCORE \n FREESPINS',
                                            styles: {
                                                fill: 0xffffff,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                align: 'center'
                                            },
                                        },
                                    ]
                                },
                                {
                                    name: 'indicator_5',
                                    position: [480, 0],
                                    event: 'indicator',
                                    index: 5,
                                    childs: [
                                        {
                                            name: 'indicator_5_active',
                                            type: 'text',
                                            text: 'CROWD PLEASER \n BONUS',
                                            styles: {
                                                fill: 0xf7bf33,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                dropShadow: true,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 2,
                                                lineJoin: "bevel",
                                                align: 'center'
                                            },
                                            visible: false
                                        },
                                        {
                                            name: 'indicator_5_disabled',
                                            type: 'text',
                                            text: 'CROWD PLEASER \n BONUS',
                                            styles: {
                                                fill: 0xffffff,
                                                fontSize: '25px',
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                align: 'center'
                                            },
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'feature_BulletLogo',
                            type: 'sprite',
                            image: 'featureSplashBulletLogo.png',
                            position: [0, 120]
                        },
                    ]
                },

            ]
        },
    ],

    Events: {

        'Tutorial before build': function () {

            this.updateChildParamsByName(Settings[this.Name]);

        },

        'Tutorial build': function () {
            // this.timeout = setTimeout(() => {
            //     App.Tutorial.hide();
            //     App.Gameplay.show();
            // }, 15000);
        },

        'Tutorial showed': function () {

        },

        'Tutorial resize': function () {

        },

        'Tutorial featureButton down': function (container, e) {
            if (this[container.name].next) {
                if (this.featureIndicatorIdx === 5)
                    this.featureIndicatorIdx = 1;
                else
                    this.featureIndicatorIdx++;
            } else {
                if (this.featureIndicatorIdx === 1)
                    this.featureIndicatorIdx = 5;
                else
                    this.featureIndicatorIdx--;
            }
            this.refreshIndicator();
            this.refreshFeatureImage();
        },

        'Tutorial indicator down': function (container, e) {
            this.featureIndicatorIdx = this[container.name].index;
            this.refreshIndicator();
            this.refreshFeatureImage();
        },

        'Tutorial button over': function (container, e) {
            this.handleButtonOver(container, e);
        },

        'Tutorial button out': function (container, e) {
            this.handleButtonOut(container, e);
        },

        'Tutorial button up': function (container, e) {
            this.handleButtonUp(container, e);
        },

        'Tutorial button down': function (container, e) {
            this.handleButtonDown(container, e);
        },


    },

    refreshIndicator: function () {
        for (let i = 1; i <= 5; i++) {
            if (i === this.featureIndicatorIdx) {
                this[`indicator_${i}_active`].visible = true;
                this[`indicator_${i}_disabled`].visible = false;
            } else {
                this[`indicator_${i}_active`].visible = false;
                this[`indicator_${i}_disabled`].visible = true;
            }
        }
    },

    refreshFeatureImage: function () {
        for (let i = 1; i <= 5; i++) {
            this[`feature_${i}`].visible = i === this.featureIndicatorIdx;
        }
    },

    handleButtonOut: function (container, e) {
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: [
                ['alpha', 0, 150, 0, Power1.easeOut],
                ['visible', false, 150, 0, Power1.easeOut],
            ]
        }, nameGlow);
    },

    handleButtonOver: function (container, e) {
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: [
                ['alpha', 1, 150, 0, Power1.easeOut],
                ['visible', true, 150, 0, Power1.easeOut],
            ]
        }, nameGlow1);
    },

    handleButtonUp: function (container, e) {
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);

        let name = container.name;

        if (name === 'continue button') {
            this.buttonHandleContinue(container, name);
        }
    },

    handleButtonDown: function (container, e) {
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
    },

    buttonHandleContinue: function (container, e) {
        /*App.Tutorial.hide();
        App.Bonusplay.show();
        clearTimeout(this.timeout);*/
        App.Tutorial.hide();
        App.Gameplay.show();
    },

    featureIndicatorIdx: 1
});
