var App = new Game({

    ClearBeforeRender: true,
    Antialias: false,
    RoundPixels: false,
    MoveWhenInside: false,
    PrecisionFragment: "mediump",
    Symbols: [
        {
            Image: 'SYM0.png'
        },
        {
            Image: 'SYM1.png'
        },
        {
            Image: 'SYM3.png'
        },
        {
            Image: 'SYM4.png'
        },
        {
            Image: 'SYM5.png'
        },
        {
            Image: 'SYM6.png'
        },
        {
            Image: 'SYM7.png'
        },
        {
            Image: 'SYM8.png'
        },
        {
            Image: 'SYM9.png'
        },
        {
            Image: 'SYM10.png'
        },
        {
            Image: 'SYM11.png'
        },
        {
            Image: 'SYM12.png'
        }
    ],

    SymbolsHighlight: {
        'S01_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S02_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S03_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S04_Static.png': {
            frameStart: 1,
            frameEnd: 50
        },
        'S05_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S06_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S07_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S08_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'S09_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'W01_Static.png': {
            frameStart: 1,
            frameEnd: 25
        },
        'B01_Static.png': {
            frameStart: 1,
            frameEnd: 60
        },
        'winBoxAnim.png': {
            frameStart: 1,
            frameEnd: 26
        }
    },

    SymbolsNames: {
        'bonus': 'SYM0.png',
        'wild': 'SYM1.png',
        'redMan': 'SYM3.png',
        'blackMan': 'SYM4.png',
        'blueMan': 'SYM5.png',
        'news': 'SYM6.png',
        'writing': 'SYM7.png',
        'cardA': 'SYM8.png',
        'cardK': 'SYM9.png',
        'cardQ': 'SYM10.png',
        'cardJ': 'SYM11.png',
        'card10': 'SYM12.png',
    },

    ScatterNames: [''],

    PayLines: [
        [//1
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]
        ],
        [//2
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        [//3
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1]
        ],
        [//4
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0]
        ],
        [//5
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1]
        ],
        [//6
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0],
        ],
        [//7
            [0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
        ],
        [//8
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
        ],
        [//9
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
        ],
        [//10
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0],
        ],
        [//11
            [0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
        ],
        [//12
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        [//13
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
        ],
        [//14
            [1, 1, 0, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ],
        [//15
            [0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1],
            [0, 0, 1, 0, 0],
        ],
        [//16
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        [//17
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
        ],
        [//18
            [1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
        ],
        [//19
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1],
        ],
        [//20
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
        ]
    ],

    share_level_data: [],
    share_level_limit: [],
    share_sound_mode: true,
    bonus_win_amount: 0,

    prepare: function () {

        this.PrecisionFragment = Settings["precision-fragment"];

    },

    ready: function () {

        MRAID.track('Assets Loaded');

        this.cacheScreenTextures();

        if (Settings["publisher"] === "playable-kit") {

            PlayableKit.onStart(function (options) {

                App.startGame();

            });

            PlayableKit.start();

        } else if (Settings["publisher"] === "facebook-instant-games") {

            if (window.FBInstant) {

                FBInstant.startGameAsync().then(function () {

                    App.startGame();

                });

            } else {

                App.startGame();

            }

        } else {

            if (Settings['start-on'] === 'ready') {

                MRAID.onReady(function () {

                    App.startGame();

                });

            } else if (Settings['start-on'] === 'viewable') {

                MRAID.onViewable(function () {

                    App.startGame();

                });

            } else if (Settings['start-on'] === 'load') {

                App.startGame();

            }

        }

    },

    startGame: function () {

        this.escalibur = new Escalibur();

        if (!App.Loader || !App.Loader.loadCompleted) {

            if (Settings['start-on'] === "none") Settings['start-on'] = 'load';

            return;

        }

        var parent_div = document.createElement("div");
        parent_div.classList.add("container");
        parent_div.appendChild(this.Renderer.view);

        /*var clock_div = document.createElement("div");
        clock_div.classList.add("systemclock");
        clock_div.setAttribute("id", "systemClock");
        parent_div.appendChild(clock_div);*/

        document.body.appendChild(parent_div);
        // document.body.appendChild(this.Renderer.view);

        MRAID.showApp();

        App.scale = [1.5, 1];
        App.resize();

        if (Settings['cta-only']) App.CallToAction.show();

        else {
            App.Tutorial.show();
            // App.NETENT_Animation.show();

            // setTimeout(() => {
            //     app.NETENT_Animation.hide();
            //     app.Gameplay.show();
            // }, 1500);
        }

        Loader.hideLoadProgress();

        App.startTicker();
        // startTime();

    }

});
