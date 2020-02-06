App.NETENT_Animation = new Screen({

    Name: "NETENT_Animation",

    Containers: [
        {
            name: 'AnimationContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 920],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 920],
            childs: [
                {
                    name: 'netent logo spine',
                    // type: 'spine',
					// scale: [0.5, 0.5],
					// spineData: "Netent_Logo",
					// spineAtlas: "Netent_Logo_data",
					// spineAtlasFolder: "",
					// rotation: -Math.PI,
                    // position: [0, 0],
                },
                {
                    name: 'test image',
                    type: 'sprite',
                    visible: false,
                    image: 'footage/cape_back',
                    position: [0, 300]
                }
            ]
        },
    ],

    Events: {

        'NETENT_Animation before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'NETENT_Animation build': function () {
			// this['netent logo spine'].state.setAnimation(0, 'Logo', false);
			// App.Tutorial.show();
            // this.buildAnimatedSprite();
            // this["AnimationContainer wrapper animation"].gotoAndPlay(0);
        },

        'NETENT_Animation showed': function () {
        },

        'NETENT_Animation resize': function () {
        }
    }
});
