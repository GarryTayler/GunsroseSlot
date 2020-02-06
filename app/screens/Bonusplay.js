App.Bonusplay = new Screen({

    Name: "Bonusplay",

    Containers: [
        {
            name: 'unnessary_bonus container',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: []
        },
        {
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'Bonusplay background',
                    type: 'sprite',
                    image: 'bonusBackground.png',
                    scale: [1920 / 1280, 1080 / 720],
                },
                {
                    name: 'crowd spine',
                    type: 'spine',
                    spineData: 'crowdAnim',
                    spineAtlas: 'crowdAnim_atlas',
                    spineTexture: 'crowdAnim_image',
                    position: [-900, -820],
                    scale: 1
                },
                {
                    name: 'crowd spine1',
                    type: 'spine',
                    spineData: 'crowdAnim',
                    spineAtlas: 'crowdAnim_atlas',
                    spineTexture: 'crowdAnim_image',
                    position: [-300, -820],
                    scale: 1
                },
                {
                    name: 'crowd spine2',
                    type: 'spine',
                    spineData: 'crowdAnim',
                    spineAtlas: 'crowdAnim_atlas',
                    spineTexture: 'crowdAnim_image',
                    position: [300, -820],
                    scale: 1
                },
                {
                    name: 'bonus_bgParticle',
                    type: 'spine',
                    spineData: 'bg_particle',
                    spineAtlas: 'bg_particle_atlas',
                    spineTexture: 'bg_particle_image',
                    position: [-1000, -540],
                },
            ]
        },
        {
            name: 'MainContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bonus board background',
                    type: 'sprite',
                    scale: 1.5,
                    position: [0, -60],
                    childs: [
                        {
                            name: 'sidelight spine',
                            type: 'spine',
                            spineData: 'sideLights_Anims',
                            spineAtlas: 'sideLights_Anims_atlas',
                            spineTexture: 'sideLights_Anims_image',
                            position: [-640, -325],
                            scale: 0.5
                        },
                        {
                            name: 'board_background1',
                            type: 'sprite',
                            image: 'bonusGameJumbotronBackground.png',
                            position: [0, 45]
                        },
                        {
                            name: 'top label container',
                            position: [0, -150],
                            childs: [
                                {
                                    name: 'picks_left label',
                                    type: 'text',
                                    text: 'PICKS LEFT: 3',
                                    position: [-200, 0],
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        fill: 0xb55663,
                                        fontSize: '20px',
                                        fontWeight: 600
                                    },
                                },
                                {
                                    name: 'total_win label',
                                    type: 'text',
                                    text: 'TOTAL WIN: 0',
                                    position: [0, 0],
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        fill: 0xfdcb34,
                                        fontSize: '20px',
                                        fontWeight: 600
                                    },
                                },
                                {
                                    name: 'current_level label',
                                    type: 'text',
                                    text: 'CURRENT LEVEL: 1',
                                    position: [200, 0],
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        fill: 0xffffff,
                                        fontSize: '20px',
                                        fontWeight: 600
                                    },
                                },
                            ]
                        },
                        {
                            name: 'button container',
                            mask: 'yellow mask',
                            childs: [
                                {
                                    name: 'guitar button container',
                                    position: [-200, -50],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'guitar button text1',
                                            type: 'text',
                                            text: '200',
                                            visible: false,
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'guitar button text2',
                                            type: 'text',
                                            text: '200',
                                            visible: false,
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'guitar button text3',
                                            type: 'text',
                                            text: '200',
                                            visible: false,
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'guitar button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'guitar button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button',
                                        },
                                    ]
                                },
                                {
                                    name: 'basedrum button container',
                                    position: [0, -50],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'basedrum button text1',
                                            type: 'text',
                                            text: '300',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'basedrum button text2',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'basedrum button text3',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'basedrum button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'basedrum button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button'
                                        },
                                    ]
                                },
                                {
                                    name: 'cymbal button container',
                                    position: [200, -50],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'cymbal button text1',
                                            type: 'text',
                                            text: '400',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'cymbal button text2',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'cymbal button text3',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'cymbal button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'cymbal button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button'
                                        },
                                    ]
                                },
                                {
                                    name: 'twoheadguitar button container',
                                    position: [-100, 80],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'twoheadguitar button text1',
                                            type: 'text',
                                            text: '400',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'twoheadguitar button text2',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'twoheadguitar button text3',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'twoheadguitar button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'twoheadguitar button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button'
                                        },
                                    ]
                                },
                                {
                                    name: 'whistle button container',
                                    position: [100, 80],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'whistle button text1',
                                            type: 'text',
                                            text: '400',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'whistle button text2',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'whistle button text3',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'whistle button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'whistle button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button'
                                        },
                                    ]
                                },
                                {
                                    name: 'snare button container',
                                    position: [-200, 200],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'snare button text1',
                                            type: 'text',
                                            text: '400',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'snare button text2',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'snare button text3',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'snare button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'snare button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button'
                                        },
                                    ]
                                },
                                {
                                    name: 'base button container',
                                    position: [0, 200],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'base button text1',
                                            type: 'text',
                                            text: '300',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'base button text2',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'base button text3',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'base button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'base button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button'
                                        },
                                    ]
                                },
                                {
                                    name: 'mic button container',
                                    position: [200, 200],
                                    scale: 0.5,
                                    childs: [
                                        {
                                            name: 'mic button text1',
                                            type: 'text',
                                            text: '300',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'mic button text2',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'mic button text3',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                fontFamily: 'FuturaCom-MediumCondensed',
                                                fill: 0xffffff,
                                                fontSize: '170px',
                                                fontWeight: 600,
                                                stroke: "#000000",
                                                strokeThickness: 7,
                                            }
                                        },
                                        {
                                            name: 'mic button effect',
                                            type: 'spine',
                                            spineData: 'wineffect',
                                            spineAtlas: 'wineffect_atlas',
                                            spineTexture: 'wineffect_image',
                                            visible: false,
                                        },
                                        {
                                            name: 'mic button',
                                            type: 'spine',
                                            spineData: 'button_anims',
                                            spineAtlas: 'button_anims_atlas',
                                            spineTexture: 'button_anims_image',
                                            status: 'open',
                                            event: 'bonus_button'
                                        },
                                    ]
                                },
                                {
                                    name: 'yellow board',
                                    type: 'graphics',
                                    position: [0, -417],
                                    draw: [
                                        ['beginFill', 0xfdcb34],
                                        ['drawRect', [-620 / 2, -460 / 2, 620, 460]]
                                    ],
                                }
                            ]
                        },
                        {
                            name: 'level reach board',
                            visible: false,
                            childs: [
                                {
                                    name: 'level reach label1',
                                    type: 'text',
                                    scale: [0.5, 1],
                                    text: 'YOU REACHED\nLEVEL 2',
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fill: 0xfdcb34,
                                        fontSize: '120px',
                                        fontWeight: 600,
                                        align: 'center',
                                        stroke: "#000000",
                                        strokeThickness: 7,
                                    },
                                },
                                {
                                    name: 'level reach label2',
                                    type: 'text',
                                    position: [0, 190],
                                    scale: [0.5, 1],
                                    text: '3 NEW PICKS',
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fill: 0xffffff,
                                        fontSize: '120px',
                                        fontWeight: 600,
                                        align: 'center',
                                        stroke: "#000000",
                                        strokeThickness: 7,
                                    },
                                }
                            ]
                        },
                        {
                            name: 'bonusIntro video',
                            type: 'video',
                            video: 'bonusGameIntro',
                            scale: 0.975,
                            position: [0, 42],
                        },
                        {
                            name: 'bonusIntro skip',
                            type: 'text',
                            text: 'Skip intro',
                            event: 'skipintro',
                            position: [0, 220],
                            styles: {
                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                align: 'left',
                                fill: 0xffffff,
                                fontSize: '27px'
                            }
                        },
                        {
                            name: 'board_background2',
                            type: 'sprite',
                            image: 'bonusGameJumbotron.png',
                        },
                        {
                            name: 'crowd_meter label bar',
                            visible: false,
                            position: [-398, 0],
                            childs: [
                                {
                                    name: 'fillbar mask',
                                    type: 'graphics',
                                    position: [0, 94],
                                    draw: [
                                        ['beginFill', 0xfdcb34],
                                        ['drawRect', [-65 / 2, -330 / 2, 65, 330]]
                                    ],
                                },
                                {
                                    name: 'crowd_meter fillbar',
                                    mask: 'fillbar mask',
                                    childs: [
                                        {
                                            name: 'fillbar level1',
                                            type: 'graphics',
                                            position: [0, 294],
                                            draw: [
                                                ['beginFill', 0xfdcb34],
                                                ['drawRect', [-65 / 2, -60 / 2, 65, 60]]
                                            ],
                                        },
                                        {
                                            name: 'fillbar level2',
                                            type: 'graphics',
                                            // position: [0, 170],
                                            position: [0, 349],
                                            draw: [
                                                ['beginFill', 0xfdcb34],
                                                ['drawRect', [-65 / 2, -180 / 2, 65, 180]]
                                            ],
                                        },
                                        {
                                            name: 'fillbar level3',
                                            type: 'graphics',
                                            // position: [0, 95],
                                            position: [0, 424],
                                            draw: [
                                                ['beginFill', 0xfdcb34],
                                                ['drawRect', [-65 / 2, -330 / 2, 65, 330]]
                                            ],
                                        },
                                    ]
                                },
                                {
                                    name: 'level1 label',
                                    position: [0, 180],
                                    childs: [
                                        {
                                            name: 'level1 back',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0xfdcb34],
                                                ['drawRect', [-65 / 2, -6 / 2, 65, 6]]
                                            ],
                                        },
                                        {
                                            name: 'level2 front',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0x2f4047],
                                                ['drawRect', [-65 / 2, -20 / 2, 65, 20]]
                                            ],
                                        },
                                        {
                                            name: 'level1 text',
                                            type: 'text',
                                            text: '600',
                                            styles: {
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                fill: 0xfdcb34,
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                padding: 20
                                            },
                                        }
                                    ]
                                },
                                {
                                    name: 'level2 label',
                                    position: [0, 70],
                                    childs: [
                                        {
                                            name: 'level2 back',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0xfdcb34],
                                                ['drawRect', [-65 / 2, -6 / 2, 65, 6]]
                                            ],
                                        },
                                        {
                                            name: 'level2 front',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0x2f4047],
                                                ['drawRect', [-65 / 2, -20 / 2, 65, 20]]
                                            ],
                                        },
                                        {
                                            name: 'level2 text',
                                            type: 'text',
                                            text: '3000',
                                            styles: {
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                fill: 0xfdcb34,
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                padding: 20
                                            },
                                        }
                                    ]
                                },
                                {
                                    name: 'level3 label',
                                    position: [0, -78],
                                    childs: [
                                        {
                                            name: 'level3 front',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0x2f4047],
                                                ['drawRect', [-55 / 2, -8 / 2, 55, 8]]
                                            ],
                                        },
                                        {
                                            name: 'level3 text',
                                            type: 'text',
                                            text: '8000',
                                            styles: {
                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                fill: 0xfdcb34,
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                padding: 20
                                            },
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'fslight spine',
                            type: 'spine',
                            spineData: 'fslights_Anims',
                            spineAtlas: 'fslights_Anims_atlas',
                            spineTexture: 'fslights_Anims_image',
                            scale: 0.5,
                            position: [-641, -330]
                        },
                    ],
                },
                {
                    name: 'yellow mask',
                    type: 'graphics',
                    scale: 1.5,
                    draw: [
                        ['beginFill', 0xfdcb34],
                        ['drawRect', [-620 / 2, -460 / 2, 620, 460]]
                    ],
                },
                /*{
                    name: '100 text',
                    type: 'text',
                    text: '100',
                    scale: 1.7,
                    styles: {
                        fontFamily: 'FuturaCom-MediumCondensed',
                        fill: 0xffffff,
                        fontSize: '120px',
                        fontWeight: 600,
                        stroke: "#000000",
                        strokeThickness: 7,
                    }
                },*/
            ]
        },
        {
            name: 'CrowdWinContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'crowd_win wrapper',
                    childs: [
                        {
                            name: 'crowd_win background',
                            type: 'sprite',
                            image: 'genericOutroScreen.png',
                            scale: 1.5,
                        },
                        {
                            name: 'crowd_win items container',
                            scale: 1.4,
                            childs: [
                                {
                                    name: 'crowd_win header',
                                    type: 'text',
                                    text: 'CONGRATULATIONS',
                                    position: [0, -250],
                                    scale: [0.7, 1],
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fontSize: '100px',
                                        fill: 0xfdcb34,
                                        align: 'center',
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 2,
                                        fontWeight: 700
                                    }
                                },
                                {
                                    name: 'crowd_win header1',
                                    type: 'text',
                                    text: 'Coins won:',
                                    position: [0, -130],
                                    scale: [0.7, 1],
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fontSize: '80px',
                                        fill: 0xfdcb34,
                                        align: 'center',
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 2,
                                        fontWeight: 700
                                    }
                                },
                                {
                                    name: 'crowd_win score',
                                    type: 'text',
                                    text: '150',
                                    scale: [1, 1.2],
                                    position: [0, 0],
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fontSize: '120px',
                                        padding: 20,
                                        fill: 0xfdcb34,
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 2,
                                        fontWeight: 900
                                    }
                                },
                                {
                                    name: 'crowd_total header2',
                                    type: 'text',
                                    text: 'TOTAL WIN:',
                                    position: [0, 120],
                                    scale: [0.7, 1],
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fontSize: '80px',
                                        fill: 0xfdcb34,
                                        align: 'center',
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 2,
                                        fontWeight: 700
                                    }
                                },
                                {
                                    name: 'crowd_total score',
                                    type: 'text',
                                    text: '150',
                                    scale: [1, 1.2],
                                    position: [0, 250],
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fontSize: '120px',
                                        padding: 20,
                                        fill: 0xfdcb34,
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 2,
                                        fontWeight: 900
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'LogoContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'logo back',
                    scale: [1920 / 1280, 1080 / 720],
                    childs: [
                        {
                            name: 'logo',
                            type: 'sprite',
                            image: 'logo.png',
                            position: [-550, -240],
                        },
                        /*{
                            name: 'test spine1',
                            type: 'spine',
                            spineData: 'lights_anims',
                            spineAtlas: 'lights_anims_data',
                            spineAtlasFolder: 'bonusGame-assets/',
                        }*/
                    ]
                }
            ]
        },
    ],

    Events: {

        'Bonusplay before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Bonusplay build': function () {
            this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'bonusGame', true);
            this['sidelight spine'].state.setAnimation(0, 'idle', true);
            var self = this;
            this['sidelight spine'].state.addListener({
                complete: function (entry) {
                    if (entry.animation.name === 'win') {
                        self['sidelight spine'].state.setAnimation(0, 'idle', true);
                    }
                }
            });
            this['bonus_bgParticle'].visible = true;
            this['bonus_bgParticle'].stateData.setMix('start', 'loop', 0.1);
            this['bonus_bgParticle'].stateData.setMix('loop', 'end', 0.1);
            this['bonus_bgParticle'].state.setAnimation(0, 'start', false);
            this['bonus_bgParticle'].state.addListener({
                complete: function (entry, event) {
                    if (entry.animation.name === 'start') {
                        self['bonus_bgParticle'].state.setAnimation(0, 'loop', true);
                    } else if (entry.animation.name === 'end') {
                        self['bonus_bgParticle'].visible = false;
                        self['bonus_bgParticle'].state.clearTrack(0);
                        self['bonus_bgParticle'].skeleton.setToSetupPose();
                    }
                }
            });
            this['fslight spine'].state.setAnimation(0, 'blinking', true);
            // this['test spine1'].state.setAnimation(0, 'blinking', false);
            this.bonus_buttons.forEach(item => {
                this[item + ' button text1'].visible = false;
                this[item + ' button text2'].visible = false;
                this[item + ' button text3'].visible = false;
            });
            this.state = 'ready';
        },

        'Bonusplay showed': function () {
            this.sound_mode = App.share_sound_mode;
            this.level_values = App.share_level_data;
            this.level_limit_values = App.share_level_limit;
            this['level1 text'].text = this.level_limit_values[0];
            this['level2 text'].text = this.level_limit_values[1];
            this['level3 text'].text = this.level_limit_values[2];
            this['bonusIntro video'].play();
            if(this.intro_music !== null) {
                this.intro_music.stop();
            }
            this.playSound('bonusgameAmbience', {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, (sound) => {
                this.bonus_back_sound = sound;
            });
            this.playSound('bonusgameIntro', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false}, (sound) => {
                this.intro_music = sound;
            });
            this.state = 'ready';
            this.bonusIntro_timeout = setTimeout(() => {
                this['bonusIntro video'].visible = false;
                this['bonusIntro skip'].visible = false;
                this['bonusIntro video'].video.currentTime = 0;
                if(this.intro_music !== null) {
                    this.intro_music.stop();
                }
                this['bonus_bgParticle'].state.setAnimation(0, 'end', false);
                this.startShowingComponent();
            }, 10000);
        },

        'Bonusplay resize': function () {

        },

        'Bonusplay skipintro down': function () {
            clearTimeout(this.bonusIntro_timeout);
            if(this.intro_music !== null) {
                this.intro_music.stop();
            }
            this['bonusIntro video'].visible = false;
            this['bonusIntro skip'].visible = false;
            this['bonusIntro video'].video.currentTime = 0;
            this['bonus_bgParticle'].state.setAnimation(0, 'end', false);
            this.startShowingComponent();
        },

        'Bonusplay bonus_button up': function (container, e) {

        },

        'Bonusplay bonus_button down': function (container, e) {
            if (this.state !== 'ready')
                return;
            this.handleBonusButtonDown(container, e);
        },

        'Bonusplay bonus_button over': function (container, e) {
            if (this.state !== 'ready')
                return;
            this.handleBonusButtonOver(container, e);
        },

        'Bonusplay bonus_button out': function (container, e) {
            if (this.state !== 'ready')
                return;
            this.handleBonusButtonOut(container, e);
        }
    },

    handleBonusButtonOver(container, e) {
        if (this[container.name].type === 'spine') {
            if (this[container.name].status === 'open')
                this[container.name].state.setAnimation(0, 'mouseOverIdle', false);
        }
    },

    handleBonusButtonOut(container, e) {
        if (this[container.name].type === 'spine') {
            if (this[container.name].status === 'open')
                this[container.name].state.setAnimation(0, 'idle', false);
        }
    },

    handleBonusButtonDown(container, e) {
        let bonus_button_name = container.name.split(" ")[0];
        if (this[container.name].status === 'open') {
            this[container.name].status = 'close';
            this.playSound('bonusgame' + bonus_button_name, {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            this.active_bonusbuttons.push(bonus_button_name);
            let level_win_value = this.level_values[this.current_level - 1][3 - this.picks_left_cnt];
            this.total_win += level_win_value;
            this.refreshTopLabelBar();
            this.refreshFillbar();
            this['sidelight spine'].state.setAnimation(0, 'win', true);
            this[container.name + ' text' + this.current_level].text = level_win_value;
            this[container.name + ' text' + this.current_level].visible = true;
            this[container.name + ' text' + this.current_level].updateTexture();
            this[container.name].hackTextureBySlotName('circle_GRP_Holder', this[container.name + ' text' + this.current_level].texture);
            this[container.name].state.setAnimation(0, 'turn', false);

            let parent_container_name = container.name + ' container';
            let cur_x = this[parent_container_name].x;
            let cur_y = this[parent_container_name].y;
            this.startButtonsEffectAnimation([bonus_button_name]);
            this.startButtonContainerVisible([bonus_button_name]);
            this['top label container'].visible = false;
            this.tween({
                name: 'button down animation',
                to: [
                    ['x', 0, 500],
                    ['y', 60, 500],
                ],
            }, parent_container_name);
            setTimeout(() => {
                this.picks_left_cnt--;
                this.refreshTopLabelBar();
                this[parent_container_name].x = cur_x;
                this[parent_container_name].y = cur_y;
                this.startButtonContainerVisible(this.bonus_buttons);
                this.startYellowBoardAnimation();
                this[container.name].visible = false;
                this[container.name + ' text' + this.current_level].visible = true;
                this['top label container'].visible = true;
                if (this.picks_left_cnt === 0) {
                    if (this.total_win < this.level_limit_values[this.current_level - 1] || this.current_level === 3) {
                        this.state = 'bonus_end';
                        this.endBonusGame();
                    } else {
                        this.state = 'level_end';
                        this.picks_left_cnt = 3;
                        this.current_level++;
                        this.refreshTopLabelBar();
                        this.startReachBoardAnimation(this.current_level);
                    }
                }
            }, 2000);
        }
    },

    startShowingComponent: function () {
        this['basedrum button'].hackTextureBySlotName('guitar', this.getTexture("bonusGameButtonBaseDrum.png"));
        this['cymbal button'].hackTextureBySlotName('guitar', this.getTexture("bonusGameButtonCymbal.png"));
        this['twoheadguitar button'].hackTextureBySlotName('guitar', this.getTexture("bonusGameButtonTwoHeadedGuitar.png"));
        this['whistle button'].hackTextureBySlotName('guitar', this.getTexture("bonusGameButtonWhistle.png"));
        this['snare button'].hackTextureBySlotName('guitar', this.getTexture("bonusGameButtonSnare.png"));
        this['base button'].hackTextureBySlotName('guitar', this.getTexture("bonusGameButtonBase.png"));
        this['mic button'].hackTextureBySlotName('guitar', this.getTexture("bonusGameButtonMic.png"));
        this.startBonusButtonAnimation(this.bonus_buttons, 'appear', false);
        this.startButtonsEffectAnimation([]);
        this['crowd_meter label bar'].visible = true;
    },

    startBonusButtonAnimation: function (items, animation_name, loop) {
        this.bonus_buttons.forEach(item => {
            if (items.includes(item)) {
                this[item + ' button'].visible = true;
                this[item + ' button'].status = 'open';
                setTimeout(() => {
                    this[item + ' button'].state.setAnimation(0, animation_name, loop);
                }, 50);
            }
        })
    },

    startButtonsEffectAnimation: function (items) {
        this.bonus_buttons.forEach(item => {
            var self = this;
            if (items.includes(item)) {
                this[item + ' button effect'].visible = true;
                this[item + ' button effect'].state.setAnimation(0, 'WinEffect', false);
                this[item + ' button effect'].state.addListener({
                    complete: function (entry) {
                        if (entry.animation.name === "WinEffect") {
                            self[item + ' button effect'].visible = false;
                        }
                    }
                })
            }
        })
    },

    startButtonContainerVisible: function (button) {
        this.bonus_buttons.forEach(item => {
            this[item + ' button container'].visible = !!button.includes(item);
        });
    },

    startYellowBoardAnimation: function () {
        this.tween({
            name: 'yello_board-animation',
            to: ['y', 500, 400],
            next: {
                set: ['y', -417]
            }
        }, 'yellow board');
    },

    startReachBoardAnimation: function (level) {
        let reach_animation_time = 2000;
        this.playSound('bonusgameLevelUp', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this['button container'].visible = false;
        this['level reach label1'].text = 'YOU REACHED\nLEVEL ' + level;
        this.tween({
            name: 'reach-board-animatin',
            set: ['visible', true],
            to: [
                ['scale', 1.05, reach_animation_time]
            ],
            next: {
                set: [
                    ['visible', false],
                    ['scale', 1]
                ]
            }
        }, 'level reach board');
        setTimeout(() => {
            this['button container'].visible = true;
            this.startYellowBoardAnimation();
            setTimeout(() => {
                this.showOriginBonusbuttons();
            }, 1000);
        }, reach_animation_time);
    },

    showOriginBonusbuttons: function () {
        let buttons_names = [];
        let button_text_names = [];
        let non_index = 3;
        this.bonus_buttons.forEach(item => {
            if (!this.active_bonusbuttons.includes(item)) {
                buttons_names.push(item + ' button');
                this[item + ' button text' + (this.current_level - 1)].text = this.level_values[this.current_level - 2][non_index];
                non_index++;
                button_text_names.push(item + ' button text' + (this.current_level - 1));
            }
        });
        this.active_bonusbuttons.forEach(item => {
            this[item + ' button'].state.setAnimation(0, 'idle', false);
        });
        this.tween({
            name: 'bonusbutton-animation',
            to: [
                ['scale', 0, 500],
                ['visible', false, 500]
            ],
            next: {
                set: ['scale', 1]
            }
        }, buttons_names);
        this.tween({
            name: 'bonustext-animation',
            set: [
                ['scale', 0],
                ['visible', true],
                ['alpha', 0.5]
            ],
            to: [
                ['scale', 1, 500],
            ]
        }, button_text_names);
        setTimeout(() => {
            this.allButtonTextHideAnimation();
        }, 2000);
    },

    allButtonTextHideAnimation: function () {
        let button_text_names = [];
        this.bonus_buttons.forEach(item => {
            button_text_names.push(item + ' button text' + (this.current_level - 1));
        });
        this.tween({
            name: 'buttonText-hideanimation',
            to: [
                ['scale', 0, 500],
                ['visible', false, 500]
            ],
            next: {
                set: [
                    ['scale', 1],
                    ['alpha', 1]
                ],
            }
        }, button_text_names);
        this.active_bonusbuttons = [];
        this.startBonusButtonAnimation(this.bonus_buttons, 'appear', false);
        this.state = 'ready';
    },

    refreshTopLabelBar: function () {
        this['picks_left label'].text = "PICKS LEFT: " + this.picks_left_cnt;
        this['total_win label'].text = "TOTAL WIN: " + this.total_win;
        this['current_level label'].text = "CURRENT LEVEL: " + this.current_level;
    },

    refreshFillbar: function () {
        switch (this.current_level) {
            case 1:
                this.tween({
                    name: 'fillbar1-animation',
                    to: [
                        'y', 424 - 70 * (this.total_win / this.level_limit_values[0]), 400
                    ]
                }, 'fillbar level3');
                break;
            case 2:
                this.tween({
                    name: 'fillbar2-animation',
                    to: [
                        'y', 346 - 114 * (this.total_win / this.level_limit_values[1]), 400
                    ]
                }, 'fillbar level3');
                break;
            case 3:
                if (this.total_win / this.level_limit_values[2] >= 1) {
                    this.tween({
                        name: 'fillbar3-animation',
                        to: [
                            'y', 95, 400
                        ]
                    }, 'fillbar level3');
                } else {
                    this.tween({
                        name: 'fillbar3-animation',
                        to: [
                            'y', 232 - 137 * (this.total_win / this.level_limit_values[2]), 400
                        ]
                    }, 'fillbar level3');
                }
                break;
        }
    },

    endBonusGame: function () {
        this.current_level = 1;
        this.picks_left_cnt = 3;
        this['crowd_win score'].text = this.total_win;
        this['crowd_total score'].text = this.total_win;
        this.total_win = 0;
        this.refreshTopLabelBar();
        this.active_bonusbuttons = [];
        this.tween({
            name: 'bonusend-animation',
            set: [
                ['visible', true],
                ['alpha', 0]
            ],
            to: [
                ['alpha', 1, 500]
            ]
        }, 'CrowdWinContainer');
        this.tween({
            name: 'bonus_container-animation',
            to: [
                ['scale', 1.5, 6000]
            ]
        }, 'crowd_win items container');
        setTimeout(() => {
            App.Bonusplay.hide();
            this.tween({
                name: 'bonusend-animation',
                set: [
                    ['visible', true],
                    ['alpha', 1]
                ],
                to: [
                    ['alpha', 0, 500],
                    ['visible', false]
                ]
            }, 'CrowdWinContainer');
            App.bonus_win_amount = this.total_win;
            App.Gameplay.show();
            if(this.bonus_back_sound !== null)
                this.bonus_back_sound.stop();
            this['bonusIntro video'].visible = true;
            this['bonusIntro skip'].visible = true;
            this.refreshFillbar();
        }, 6000);
    },

    startMultiSpineAnimation: function (spines, animation_name, loop) {
        if (Array.isArray(spines)) {
            spines.forEach(item => {
                this[item].visible = true;
                this[item].state.setAnimation(0, animation_name, loop);
            })
        } else {
            this[spines].state.setAnimation(0, animation_name, loop);
        }
    },

    bonus_back_sound: null,
    intro_music: null,
    picks_left_cnt: 3,
    total_win: 0,
    current_level: 1,
    bonusIntro_timeout: null,
    bonus_buttons: ['guitar', 'basedrum', 'cymbal', 'twoheadguitar', 'whistle', 'snare', 'base', 'mic'],
    level_values: [
        [300, 200, 200, 300, 300, 400, 400, 300],
        [800, 900, 600, 800, 700, 500, 1000, 600],
        [200, 300, 200, 200, 300, 400, 400, 300]
    ],
    level_limit_values: [600, 3000, 8000],
    state: 'ready',
    active_bonusbuttons: []
});
