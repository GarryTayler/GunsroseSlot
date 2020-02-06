var paytable_content_style = {
    position: [-400, -475],
    scale: [1, 1],
    styles: {
        fontFamily: 'FuturaCom-ExtraBoldCond',
        align: 'left',
        fill: 0xfdcb34,
        fontSize: '45px'
    }
};

var paytable_symbol_A_style = {
    position1: [-30, 150],
    position2: [-30, 190],
    position3: [-30, 230],
    styles: {
        fontFamily: 'PFDinDisplayPro-Reg',
        fill: 0xfdcb34,
        fontSize: '30px',
        fontWeight: 600
    },
};

var paytable_symbol_AChild_style = {
    position: [40, 0],
    styles: {
        fontFamily: 'PFDinDisplayPro-Reg',
        fill: 0xffffff,
        fontSize: '30px',
        fontWeight: 600
    }
};

App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [
        {
            name: 'unnessary container',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'legend text0',
                    type: 'text',
                    text: 'LEGEND SPINS: ACTIVATED',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'legend text1',
                    type: 'text',
                    text: '2 LEGEND SPINS',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'legend text2',
                    type: 'text',
                    text: '1 LEGEND SPIN',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'scatterWin1',
                    type: 'text',
                    text: '4000',
                    styles: {
                        fontFamily: 'FuturaCom-Medium',
                        fill: 0x000000,
                        fontSize: '100px',
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0xffffff,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'scatterWin2',
                    type: 'text',
                    text: '5000',
                    styles: {
                        fontFamily: 'FuturaCom-Medium',
                        fill: 0x000000,
                        fontSize: '100px',
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0xffffff,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'scatterWin3',
                    type: 'text',
                    text: '6000',
                    styles: {
                        fontFamily: 'FuturaCom-Medium',
                        fill: 0x000000,
                        fontSize: '100px',
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0xffffff,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'scatterWin4',
                    type: 'text',
                    text: '2000',
                    styles: {
                        fontFamily: 'FuturaCom-Medium',
                        fill: 0x000000,
                        fontSize: '100px',
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0xffffff,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text9',
                    type: 'text',
                    text: '9 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text8',
                    type: 'text',
                    text: '8 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text7',
                    type: 'text',
                    text: '7 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text6',
                    type: 'text',
                    text: '6 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text5',
                    type: 'text',
                    text: '5 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text4',
                    type: 'text',
                    text: '4 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text3',
                    type: 'text',
                    text: '3 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text2',
                    type: 'text',
                    text: '2 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text1',
                    type: 'text',
                    text: '1 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'freespin spine text0',
                    type: 'text',
                    text: '0 FREE SPINS',
                    scale: 0.1,
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'soloend text4',
                    type: 'text',
                    text: 'WIN x4',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'soloend text5',
                    type: 'text',
                    text: 'WIN x5',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'soloend text6',
                    type: 'text',
                    text: 'WIN x6',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'soloend text7',
                    type: 'text',
                    text: 'WIN x7',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'soloend text8',
                    type: 'text',
                    text: 'WIN x8',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'soloend text9',
                    type: 'text',
                    text: 'WIN x9',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
                {
                    name: 'soloend text10',
                    type: 'text',
                    text: 'WIN x10',
                    styles: {
                        fontFamily: 'BodoniPosterCompressed',
                        fill: 0xffffff,
                        fontSize: '150px',
                        fontWeight: 700,
                        dropShadow: true,
                        dropShadowAngle: 0.5,
                        dropShadowColor: 0x000000,
                        dropShadowDistance: 2,
                    }
                },
            ]
        },
        {
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'background container wrapper',
                    scale: [1920 / 1280, 1080 / 720],
                    childs: [
                        {
                            name: 'background_image',
                            type: 'sprite',
                            image: 'background.png',
                        },
                    ]
                },
                /*{
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
                },*/
                {
                    name: 'tickerTapeCover',
                    position: [0, -518],
                    scale: [1920 / 1280, 1080 / 720],
                    childs: [
                        {
                            name: 'ticker text',
                            type: 'text',
                            text: 'Win x4 - x10 on a winning symbol with the Solo Multiplier!',
                            position: [-750, 0],
                            styles: {
                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                fill: 0xffffff,
                                fontSize: '20px',
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0x000000,
                                dropShadowDistance: 2,
                            }
                        },
                        {
                            name: 'ticker back',
                            type: 'sprite',
                            image: 'tickerTapeCover.png',
                            alpha: 1
                        },
                    ]
                },
/*                {
                    name: 'light spine',
                    type: 'spine',
                    spineData: 'lightAnim',
                    spineAtlas: 'lightAnim_atlas',
                    spineTexture: 'lightAnim_image',
                    position: [840, -500],
                    alpha: 0.5,
                    scale: [-0.7, 0.7]
                },
                {
                    name: 'light spine1',
                    type: 'spine',
                    spineData: 'lightAnim',
                    spineAtlas: 'lightAnim_atlas',
                    spineTexture: 'lightAnim_image',
                    alpha: 0.5,
                    position: [-840, -500],
                    scale: 0.7
                },*/
                {
                    name: 'bgParticle',
                    type: 'spine',
                    spineData: 'bg_particle',
                    spineAtlas: 'bg_particle_atlas',
                    spineTexture: 'bg_particle_image',
                    position: [-1000, -540],
                    visible: false
                },
                {
                    name: 'appetite overlay',
                    type: 'graphics',
                    alpha: 0.5,
                    visible: false,
                    draw: [
                        ['beginFill', [0x000000]],
                        ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]
                    ]
                }
            ]
        },
        {
            name: 'MainContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'main container wrapper',
                    position: [0, 0],
                    scale: [1, 1],
                    childs: [
                        {
                            name: 'linebet container',
                            position: [0, -55],
                            childs: []
                        },
                        {
                            name: 'game board container',
                            scale: 1,
                            visible: true,
                            position: [0, -85],
                            childs: [
                                {
                                    name: 'game board background',
                                    type: 'sprite',
                                    image: 'reel_bg.png',
                                    position: [-2, 0],
                                    scale: [1920 / 1280, 1080 / 720],
                                },
                                {
                                    name: 'game board symbols container',
                                    childs: []
                                },
                                {
                                    name: 'game board expandReel container',
                                    childs: []
                                },
                                {
                                    name: 'appetite container',
                                    mask: 'game board mask',
                                    childs: [
                                        {
                                            name: 'appetiteIntro spine',
                                            position: [-682, -415],
                                            scale: 0.75,
                                            // position: [-682, -415],
                                            // position: [-682, -685],
                                            type: 'spine',
                                            spineData: 'crosscake_intro',
                                            spineAtlas: 'crosscake_intro_atlas',
                                            spineTexture: 'crosscake_intro_image',
                                        },
                                        {
                                            name: 'appetiteIdle spine',
                                            position: [-410, -135],
                                            scale: 0.75,
                                            // position: [-410, -408],
                                            // position: [-410, -681],
                                            type: 'spine',
                                            spineData: 'crosscake_idle',
                                            spineAtlas: 'crosscake_idle_atlas',
                                            spineTexture: 'crosscake_idle_image',
                                        },
                                    ]
                                },
                                {
                                    name: 'game board symbols wildcard container',
                                    childs: []
                                },
                                {
                                    name: 'game board symbols highlighted container',
                                    childs: []
                                },
                                {
                                    name: 'game board reel 1 trail spine',
                                    type: 'spine',
                                    position: [-410, -409],
                                    spineData: 'trail',
                                    spineAtlas: 'trail_atlas',
                                    spineTexture: 'trail_image',
                                    scale: 0.75,
                                    visible: false,
                                },
                                {
                                    name: 'game board reel 2 trail spine',
                                    type: 'spine',
                                    position: [-140, -409],
                                    spineData: 'trail',
                                    spineAtlas: 'trail_atlas',
                                    spineTexture: 'trail_image',
                                    scale: 0.75,
                                    visible: false,
                                },
                                {
                                    name: 'game board reel 3 trail spine',
                                    type: 'spine',
                                    position: [135, -409],
                                    spineData: 'trail',
                                    spineAtlas: 'trail_atlas',
                                    spineTexture: 'trail_image',
                                    scale: 0.75,
                                    visible: false,
                                },
                                {
                                    name: 'game board reel 4 trail spine',
                                    type: 'spine',
                                    position: [409, -409],
                                    spineData: 'trail',
                                    spineAtlas: 'trail_atlas',
                                    spineTexture: 'trail_image',
                                    scale: 0.75,
                                    visible: false,
                                },
                                {
                                    name: 'solo_multi spine',
                                    type: 'spine',
                                    spineData: 'solomulti',
                                    spineAtlas: 'solomulti_atlas',
                                    spineTexture: 'solomulti_image',
                                    scale: 0.75,
                                    position: [135, -135],
                                    visible: false
                                },
                                {
                                    name: 'game board mask',
                                    type: 'graphics',
                                    position: [-2, 0],
                                    draw: [
                                        ['beginFill', [0x000000]],
                                        ['drawRect', [-1364 / 2, -820 / 2, 1364, 820]]
                                    ],
                                }
                            ]
                        },
                        {
                            name: 'line container',
                            position: [0, -75],
                            childs: []
                        },
                        {
                            name: 'win bar',
                            type: 'sprite',
                            image: 'winBanner.png',
                            scale: 1.5,
                            visible: false,
                            position: [0, 250],
                            childs: [
                                {
                                    name: 'win bar label',
                                    type: 'text',
                                    text: 'WIN:',
                                    position: [-50, 0],
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        fill: 0xffffff,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'win bar text',
                                    type: 'text',
                                    text: '50',
                                    position: [50, 0],
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        fill: 0xfdcb34,
                                        fontSize: '40px',
                                        fontWeight: 600
                                    }
                                },
                                {
                                    name: 'solo badge',
                                    type: 'sprite',
                                    position: [200, 0],
                                    image: 'solomulti-assets_outroBanner.png',
                                    childs: [
                                        {
                                            name: 'solo badge child',
                                            type: 'sprite',
                                            image: `solomulti-assets_x3.png`,
                                            position: [0, -17]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'legendText spine',
                            type: 'spine',
                            spineData: 'win_presentation',
                            spineAtlas: 'win_presentation_atlas',
                            spineTexture: 'win_presentation_image',
                            position: [-1300, -350],
                            scale: [1, 0.5]
                        },
                        {
                            name: 'freeCount spine',
                            type: 'spine',
                            spineData: 'win_presentation',
                            spineAtlas: 'win_presentation_atlas',
                            spineTexture: 'win_presentation_image',
                            position: [-1300, -350],
                            scale: [1, 0.5]
                        },
                        {
                            name: 'soloend spine',
                            type: 'spine',
                            spineData: 'win_presentation',
                            spineAtlas: 'win_presentation_atlas',
                            spineTexture: 'win_presentation_image',
                            position: [-1300, -550],
                        },
                        {
                            name: 'bigwin container',
                            scale: 1.5,
                            visible: false,
                            position: [-2, -85],
                            childs: [
                                {
                                    name: 'BW_start',
                                    type: 'video',
                                    video: 'BW_start',
                                },
                                {
                                    name: 'BW_loop',
                                    type: 'video',
                                    video: 'BW_loop',
                                    loop: true,
                                    visible: false,
                                },
                                {
                                    name: 'BW_end',
                                    type: 'video',
                                    video: 'BW_end',
                                    visible: false,
                                },
                                {
                                    name: 'BW_label',
                                    type: 'text',
                                    text: 'BIG WIN!',
                                    position: [0, -150],
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        align: 'center',
                                        fill: 0xfdcb34,
                                        fontSize: '110px',
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 2,
                                    }
                                },
                                {
                                    name: 'BW_text',
                                    type: 'text',
                                    text: '2533',
                                    position: [0, 150],
                                    drawed: 0,
                                    styles: {
                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                        align: 'center',
                                        fill: 0xfdcb34,
                                        fontSize: '140px',
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 2,
                                    }
                                }
                            ]
                        },
                        /*{
                            name: 'close button',
                            type: 'graphics',
                            button: 'button',
                            position: [870, -480],
                            draw: [['beginFill', 0x5555dd], ['drawRoundedRect', [-90 / 2, -35 / 2, 90, 35, 15]]],
                            childs: [
                                {
                                    name: 'close button glow',
                                    type: 'graphics'
                                },
                                {
                                    name: 'close button border',
                                    type: 'graphics',
                                    position: [0, 0],
                                    draw: [['lineStyle', 2, 0x000000, 0.5], ['beginFill', 0x1e50be], ['drawRoundedRect', [-85 / 2, -30 / 2, 85, 30, 15]]]
                                },
                                {
                                    name: 'close button text',
                                    type: 'text',
                                    text: 'More games',
                                    position: [0, 0],
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontSize: '12px',
                                        fill: 0xffffff
                                    }
                                }
                            ]
                        },*/
                    ]
                },

            ]
        },
        {
            name: 'ControlPanelContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'control panel container wrapper',
                    scale: [1, 1],
                    position: [0, 404],
                    childs: [
                        {
                            name: 'control panel bg',
                            type: 'sprite',
                            position: [0, 0],
                            childs: [
                                {
                                    name: 'control main background',
                                    position: [0, -40],
                                    scale: [1920 / 1280, 1080 / 720],
                                    childs: [
                                        {
                                            name: 'button bars',
                                            childs: [
                                                {
                                                    name: 'start button bar',
                                                    position: [0, 30],
                                                    childs: [
                                                        {
                                                            name: 'start button animation',
                                                            type: 'spine',
                                                            position: [-140, -115],
                                                            scale: 0.5,
                                                            visible: false,
                                                            spineData: 'spinButton',
                                                            spineAtlas: 'spinButton_atlas',
                                                            spineTexture: 'spinButton_image'
                                                        },
                                                        {
                                                            name: 'start button',
                                                            type: 'sprite',
                                                            image: 'spinButtonIdle.png',
                                                            button: 'button',
                                                            position: [0, 0],
                                                        },
                                                        {
                                                            name: 'start button glow',
                                                            type: 'sprite',
                                                            image: 'spinButtonOver.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                        {
                                                            name: 'start button disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'spinButtonDisabled.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'maxbet button bar',
                                                    position: [125, 35],
                                                    childs: [
                                                        {
                                                            name: 'maxbet button',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'maxBetButtonUp.png',
                                                            position: [0, 0]
                                                        },
                                                        {
                                                            name: 'maxbet button glow',
                                                            type: 'sprite',
                                                            image: 'maxBetButtonOver.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                        {
                                                            name: 'maxbet button text',
                                                            position: [0, 0],
                                                            type: 'text',
                                                            text: 'MAX BET',
                                                            styles: {
                                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                                fill: 0xffffff,
                                                                fontSize: '18px',
                                                                fontWeight: '400',
                                                            }
                                                        },
                                                        {
                                                            name: 'maxbet button disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'maxBetButtonDisabled.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'auto start button bar',
                                                    position: [-125, 35],
                                                    childs: [
                                                        {
                                                            name: 'auto start button',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'autoPlayButtonUp.png',
                                                            position: [0, 0]
                                                        },
                                                        {
                                                            name: 'auto start button glow',
                                                            type: 'sprite',
                                                            image: 'autoPlayButtonOver.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                        {
                                                            name: 'auto start button text',
                                                            position: [0, 0],
                                                            type: 'text',
                                                            text: 'AUTOPLAY',
                                                            styles: {
                                                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                                                fill: 0xffffff,
                                                                fontSize: '18px',
                                                                fontWeight: '400',
                                                            }
                                                        },
                                                        {
                                                            name: 'auto start button disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'autoPlayButtonDisabled.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'button bars text',
                                            visible: false,
                                            childs: [
                                                {
                                                    name: 'freespin win text',
                                                    type: 'text',
                                                    text: 'TOTAL WIN: 0',
                                                    position: [0, 15],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '25px',
                                                        align: 'center'
                                                    }
                                                },
                                                {
                                                    name: 'freespin count text',
                                                    type: 'text',
                                                    text: 'FREE SPINS LEFT: 0',
                                                    position: [0, 55],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '25px',
                                                        align: 'center'
                                                    }
                                                },
                                            ]
                                        },
                                        {
                                            name: 'button paytable',
                                            position: [-430, 35],
                                            type: 'sprite',
                                            image: 'paytableButtonUp.png',
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'button paytable glow',
                                                    type: 'sprite',
                                                    image: 'paytableButtonOver.png',
                                                    alpha: 0
                                                },
                                                {
                                                    name: 'button paytable text',
                                                    type: 'text',
                                                    text: 'i',
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '25px',
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'coin bar',
                                            position: [260, 35],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'coin bar background',
                                                    type: 'sprite',
                                                    image: 'betFieldBackground.png',
                                                    position: [0, 0],
                                                    scale: [1.2, 1]
                                                },
                                                {
                                                    name: 'coin bar text',
                                                    type: 'text',
                                                    text: '1',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '23px',
                                                    }
                                                },
                                                {
                                                    name: 'coin bar label',
                                                    type: 'text',
                                                    text: 'COIN VALUE',
                                                    position: [0, -35],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '18px',
                                                    }
                                                },
                                                {
                                                    name: 'coin bar up container',
                                                    position: [50, 0],
                                                    childs: [
                                                        {
                                                            name: 'coin bar up',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'coin bar up glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                        {
                                                            name: 'coin bar up disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'coin bar down container',
                                                    position: [-50, 0],
                                                    childs: [
                                                        {
                                                            name: 'coin bar down',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorMinusUp.png',
                                                        },
                                                        {
                                                            name: 'coin bar down glow',
                                                            type: 'sprite',
                                                            image: 'selectorMinusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'coin bar down disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorMinusDisabled.png',
                                                            alpha: 1,
                                                            visible: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'coin bar progress',
                                                    position: [30, 60],
                                                    childs: [
                                                        {
                                                            name: 'coin progress background',
                                                            type: 'sprite',
                                                            image: 'selectorBarBackground.png',
                                                            position: [-30, -31],
                                                            scale: [1.1, 1],

                                                        },
                                                        {
                                                            name: 'coin progress back',
                                                            type: 'sprite',
                                                            mask: 'coin progress mask',
                                                            position: [-136, -31],
                                                            scale: [1.1, 1],
                                                            image: 'selectorBarFill.png',
                                                        },
                                                        {
                                                            name: 'coin progress mask',
                                                            type: 'graphics',
                                                            position: [-30, -37],
                                                            alpha: 0.5,
                                                            draw: [
                                                                ['beginFill', [0x000000]],
                                                                ['drawRect', [-135 / 2, 6 / 2, 135, 6]]
                                                            ],
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: 'level bar',
                                            position: [-260, 35],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'level bar background',
                                                    type: 'sprite',
                                                    image: 'betFieldBackground.png',
                                                    position: [0, 0],
                                                    scale: [1.2, 1]
                                                },
                                                {
                                                    name: 'level bar text',
                                                    type: 'text',
                                                    text: '35',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '18px',
                                                    }
                                                },
                                                {
                                                    name: 'level bar label',
                                                    type: 'text',
                                                    text: 'LEVEL',
                                                    position: [0, -35],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '18px',
                                                    }
                                                },
                                                {
                                                    name: 'level bar up container',
                                                    position: [50, 0],
                                                    childs: [
                                                        {
                                                            name: 'level bar up',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'level bar up glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'level bar up disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0,
                                                            visible: false
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'level bar down container',
                                                    position: [-50, 0],
                                                    childs: [
                                                        {
                                                            name: 'level bar down',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorMinusUp.png',
                                                        },
                                                        {
                                                            name: 'level bar down glow',
                                                            type: 'sprite',
                                                            image: 'selectorMinusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'level bar down disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            image: 'selectorMinusDisabled.png',
                                                            alpha: 1,
                                                            visible: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'level bar progress',
                                                    position: [30, 60],
                                                    childs: [
                                                        {
                                                            name: 'level progress background',
                                                            type: 'sprite',
                                                            image: 'selectorBarBackground.png',
                                                            position: [-30, -31],
                                                            scale: [1.1, 1],

                                                        },
                                                        {
                                                            name: 'level progress back',
                                                            type: 'sprite',
                                                            mask: 'progress mask',
                                                            position: [-136, -31],
                                                            scale: [1.1, 1],
                                                            image: 'selectorBarFill.png',
                                                        },
                                                        {
                                                            name: 'progress mask',
                                                            type: 'graphics',
                                                            position: [-30, -37],
                                                            alpha: 0.5,
                                                            draw: [
                                                                ['beginFill', [0x000000]],
                                                                ['drawRect', [-135 / 2, 6 / 2, 135, 6]]
                                                            ],
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: 'betamount',
                                            position: [-365, 35],
                                            type: 'sprite',
                                            image: 'keypadBetBalanceBackground.png',
                                            childs: [
                                                {
                                                    name: 'betamount back',
                                                    type: 'sprite',
                                                    image: 'betFieldBackground.png'
                                                },
                                                {
                                                    name: 'betamount text',
                                                    type: 'text',
                                                    text: '125',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '18px',
                                                    }
                                                },
                                                {
                                                    name: 'betamount label',
                                                    type: 'text',
                                                    text: 'BET',
                                                    position: [0, -35],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '20px',
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'total_bet bar',
                                            position: [400, 35],
                                            type: 'sprite',
                                            image: 'keypadBetBalanceBackground.png',
                                            childs: [
                                                {
                                                    name: 'total_bet back',
                                                    type: 'sprite',
                                                    image: 'betFieldBackground.png',
                                                    scale: [2, 1]
                                                },
                                                {
                                                    name: 'total_bet bar text',
                                                    type: 'text',
                                                    text: '0.1',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '18px',
                                                    }
                                                },
                                                {
                                                    name: 'total_bet label',
                                                    type: 'text',
                                                    text: 'COINS',
                                                    position: [0, -35],
                                                    styles: {
                                                        fontFamily: 'FuturaCom-ExtraBoldCond',
                                                        fill: 0xffffff,
                                                        fontSize: '20px',
                                                    }
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'setList container',
                                    scale: [1920 / 1280, 1080 / 720],
                                    position: [-785, 270],
                                    rotation: 2 * Math.PI / 180,
                                    childs: [
                                        {
                                            name: 'setlist overlay',
                                            type: 'graphics',
                                            position: [500, 103 - 404],
                                            event: 'setlist_overlay',
                                            rotation: -2 * Math.PI / 180,
                                            status: 'closeds',
                                            alpha: 0,
                                            draw: [
                                                ['beginFill', [0xffffff]],
                                                ['drawRect', [-1300 / 2, -1080 / 2, 1300, 1080]]
                                            ]
                                        },
                                        {
                                            name: 'setlist background',
                                            type: 'sprite',
                                            event: 'setlist background',
                                            image: 'setList_background.png',
                                            childs: [
                                                {
                                                    name: 'setlist header',
                                                    type: 'graphics',
                                                    event: 'setlist_header',
                                                    loading: false,
                                                    alpha: 0,
                                                    position: [-10, -130],
                                                    draw: [
                                                        ['beginFill', [0xffffff]],
                                                        ['drawRect', [-250 / 2, -50 / 2, 250, 50]]
                                                    ]
                                                },
                                                {
                                                    name: 'setlist loading',
                                                    type: 'sprite',
                                                    image: 'setList_loader.png',
                                                    position: [-85, -130]
                                                },
                                                {
                                                    name: 'setlistitem1',
                                                    position: [0, -80],
                                                    childs: [
                                                        {
                                                            name: 'setlistitem1_active',
                                                            type: 'sprite',
                                                            image: 'setList_track_0_active.png'
                                                        },
                                                        {
                                                            name: 'setlistitem1_inactive',
                                                            type: 'sprite',
                                                            event: 'setlistitem',
                                                            index: 1,
                                                            image: 'setList_track_0_inactive.png'
                                                        },
                                                        {
                                                            name: 'setlistitem1_disable',
                                                            type: 'sprite',
                                                            alpha: 0.5,
                                                            event: 'disabled button',
                                                            image: 'setList_track_0_inactive.png'
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'setlistitem2',
                                                    position: [0, -40],
                                                    childs: [
                                                        {
                                                            name: 'setlistitem2_active',
                                                            type: 'sprite',
                                                            image: 'setList_track_1_active.png',
                                                            visible: false
                                                        },
                                                        {
                                                            name: 'setlistitem2_inactive',
                                                            type: 'sprite',
                                                            event: 'setlistitem',
                                                            index: 2,
                                                            image: 'setList_track_1_inactive.png'
                                                        },
                                                        {
                                                            name: 'setlistitem2_disable',
                                                            type: 'sprite',
                                                            alpha: 0.5,
                                                            event: 'disabled button',
                                                            image: 'setList_track_1_inactive.png'
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'setlistitem3',
                                                    position: [0, 0],
                                                    childs: [
                                                        {
                                                            name: 'setlistitem3_active',
                                                            type: 'sprite',
                                                            image: 'setList_track_2_active.png',
                                                            visible: false
                                                        },
                                                        {
                                                            name: 'setlistitem3_inactive',
                                                            type: 'sprite',
                                                            event: 'setlistitem',
                                                            index: 3,
                                                            image: 'setList_track_2_inactive.png'
                                                        },
                                                        {
                                                            name: 'setlistitem3_disable',
                                                            type: 'sprite',
                                                            alpha: 0.5,
                                                            event: 'disabled button',
                                                            image: 'setList_track_2_inactive.png'
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'setlistitem4',
                                                    position: [0, 40],
                                                    childs: [
                                                        {
                                                            name: 'setlistitem4_active',
                                                            type: 'sprite',
                                                            image: 'setList_track_3_active.png',
                                                            visible: false
                                                        },
                                                        {
                                                            name: 'setlistitem4_inactive',
                                                            type: 'sprite',
                                                            event: 'setlistitem',
                                                            index: 4,
                                                            image: 'setList_track_3_inactive.png'
                                                        },
                                                        {
                                                            name: 'setlistitem4_disable',
                                                            type: 'sprite',
                                                            alpha: 0.5,
                                                            event: 'disabled button',
                                                            image: 'setList_track_3_inactive.png'
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'setlistitem5',
                                                    position: [0, 80],
                                                    childs: [
                                                        {
                                                            name: 'setlistitem5_active',
                                                            type: 'sprite',
                                                            image: 'setList_track_4_active.png',
                                                            visible: false
                                                        },
                                                        {
                                                            name: 'setlistitem5_inactive',
                                                            type: 'sprite',
                                                            event: 'setlistitem',
                                                            index: 5,
                                                            image: 'setList_track_4_inactive.png'
                                                        },
                                                        {
                                                            name: 'setlistitem5_disable',
                                                            type: 'sprite',
                                                            alpha: 0.5,
                                                            event: 'disabled button',
                                                            image: 'setList_track_4_inactive.png'
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'setlist_sound',
                                                    position: [20, 112],
                                                    event: 'setlist_sound',
                                                    status: 'on',
                                                    rotation: -2 * Math.PI / 180,
                                                    childs: [
                                                        {
                                                            name: 'setlist_sound_active',
                                                            type: 'sprite',
                                                            image: 'setList_music_on.png'
                                                        },
                                                        {
                                                            name: 'setlist_sound_inactive',
                                                            type: 'sprite',
                                                            image: 'setList_music_off.png',
                                                            visible: false
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'setlist_loop_all',
                                                    event: 'setlist_loop',
                                                    status: 'loop',
                                                    rotation: -2 * Math.PI / 180,
                                                    position: [75, 110],
                                                    childs: [
                                                        {
                                                            name: 'setlist_loop_all_active',
                                                            type: 'sprite',
                                                            image: 'setList_loop_all.png'
                                                        },
                                                        {
                                                            name: 'setlist_loop_all_inactive',
                                                            type: 'sprite',
                                                            image: 'setList_loop_one_track.png',
                                                            visible: false
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    // width 1650
                                    name: 'control bottom background',
                                    type: 'graphics',
                                    position: [0, 120],
                                    scale: [1, 0.8],
                                    draw: [['beginFill', 0x131313], ['drawRect', [-1920 / 2, -44 / 2, 1920, 44]]],
                                    childs: [
                                        {
                                            name: 'bottom background top',
                                            type: 'graphics',
                                            position: [0, -21],
                                            draw: [['beginFill', 0x322c33], ['drawRect', [-1920 / 2, -2 / 2, 1920, 2]]],
                                        },
                                        {
                                            name: 'btn_setting',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20, 0],
                                            image: 'btn_setting'
                                        },
                                        {
                                            name: 'btn_speaker',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50, 0],
                                            image: 'btn_speaker'
                                        },
                                        {
                                            name: 'audio_set button',
                                            type: 'sprite',
                                            image: 'btn_speaker_on',
                                            button: 'button',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50, 0],
                                            childs: [
                                                {
                                                    name: 'audio_set button glow',
                                                    type: 'graphics'
                                                },
                                            ]
                                        },
                                        {
                                            name: 'btn_auto',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50 + 70, 0],
                                            image: 'btn_auto',
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'btn_auto glow',
                                                    type: 'sprite',
                                                    image: 'btn_autoGlow.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {
                                            name: 'autoamount text',
                                            type: 'text',
                                            text: '100',
                                            visible: false,
                                            position: [-1650 / 2 + 20 + 50 + 70 + 60, 0],
                                            styles: {
                                                fill: 0xffffff,
                                                fontFamily: 'Arial',
                                                fontSize: '20px'
                                            }
                                        },
                                        {
                                            name: 'btn_question',
                                            type: 'sprite',
                                            scale: [1.5, 1.6],
                                            position: [-1650 / 2 + 20 + 50 + 70 + 100, 0],
                                            image: 'btn_question'
                                        },
                                        {
                                            name: 'timer',
                                            position: [1650 / 2 - 50 - 100, 0],
                                            childs: [
                                                {
                                                    name: 'timer hour',
                                                    position: [-20, 0],
                                                    type: 'text',
                                                    text: '05',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'timer symbol',
                                                    position: [0, -2],
                                                    type: 'text',
                                                    text: ':',
                                                    visible: true,
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'timer minute',
                                                    position: [20, 0],
                                                    type: 'text',
                                                    text: '05',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                            ]
                                        },
                                        /*{
                                            name: 'logo',
                                            type: 'text',
                                            text: 'NET|ENT',
                                            position: [1650 / 2 - 50, 0],
                                            styles: {
                                                fontFamily: 'AGLettericaDemiCondensedC',
                                                fontSize: '22px',
                                                fill: 0x5b5b5b,
                                            }
                                        },*/
                                        {
                                            name: 'credits bar',
                                            type: 'text',
                                            position: [-200, 0],
                                            childs: [
                                                {
                                                    name: 'credits bar label',
                                                    type: 'text',
                                                    text: 'Cash: ',
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'credits bar text',
                                                    type: 'text',
                                                    text: '50000$',
                                                    position: [75, 0],
                                                    styles: {
                                                        align: 'right',
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            name: 'bet bar',
                                            position: [0, 0],
                                            childs: [
                                                {
                                                    name: 'bet bar label',
                                                    type: 'text',
                                                    text: 'Bet: ',
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                },
                                                {
                                                    name: 'bet bar text',
                                                    type: 'text',
                                                    text: '0.10',
                                                    position: [50, 0],
                                                    styles: {
                                                        align: 'left',
                                                        fontFamily: 'Arial',
                                                        fontSize: '22px',
                                                        fill: 0xffffff,
                                                    },
                                                }
                                            ]
                                        },

                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name: 'AutoMenuContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'automenu overlay',
                    childs: [
                        {
                            name: 'automenu overlay rect',
                            event: 'automenu overlay',
                            type: 'graphics',
                            preventDefault: false,
                            draw: [['beginFill', 0xffffffff], ['drawRect', [-1920, -1920, 3840, 3840]]],
                            alpha: 0,
                        },
                        {
                            name: 'automenu items container',
                            type: 'graphics',
                            position: [0, 0],
                            // position: [670 + 45, 661 - (1080 / 2) - 45],
                            draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                            alpha: 0.9,
                            childs: [
                                {
                                    name: 'automenu items container border',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                                },
                                {
                                    name: 'automenu title',
                                    type: 'text',
                                    text: 'Number of Auto Spins',
                                    position: [0, -120],
                                    styles: {
                                        fontFamily: 'AGLettericaDemiCondensedC',
                                        fontSize: '33px',
                                        padding: 20,
                                        fill: 0x000000
                                    }
                                },
                                {
                                    name: 'button automenu_50',
                                    type: 'graphics',
                                    pressed: true,
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 50,
                                    position: [160 * 2 + 20 * 2, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_50 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_50 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_50 text',
                                            type: 'text',
                                            text: '50',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_40',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    step: 40,
                                    position: [160 + 20, -50],
                                    button: 'button',
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_40 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_40 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_40 text',
                                            type: 'text',
                                            text: '40',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_30',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 30,
                                    position: [0, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_30 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_30 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_30 text',
                                            type: 'text',
                                            text: '30',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_20',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    step: 20,
                                    button: 'button',
                                    position: [-160 - 20, -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_20 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_20 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_20 text',
                                            type: 'text',
                                            text: '20',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'button automenu_10',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                    button: 'button',
                                    step: 10,
                                    position: [-(160 * 2 + 20 * 2), -50],
                                    scale: [1, 1],
                                    childs: [
                                        {
                                            name: 'button automenu_10 glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_10 selected',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            alpha: 0,
                                            childs: [
                                                {
                                                    name: "button border",
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_10 text',
                                            type: 'text',
                                            text: '10',
                                            scale: [1, 1],
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontWeight: 'Bold',
                                                fontSize: '25px',
                                                fill: 0x000000
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'center_line',
                                    type: 'graphics',
                                    position: [0, 0],
                                    scale: [1, 1],
                                    draw: [['beginFill', 0xeeeeee], ['drawRect', [-870 / 2, -2 / 2, 870, 2]]]
                                },
                                {
                                    name: 'autospin comment',
                                    type: 'text',
                                    position: [0, 50],
                                    scale: [870 / 1020, 1],
                                    text: '\"Auto Spin stops automatically if cash amount is smaller than bet amount\"',
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontSize: '25px',
                                        stroke: 'black',
                                        fill: 0x000000
                                    }
                                },
                                {
                                    name: 'autospin_dialog close button',
                                    type: "graphics",
                                    button: 'button',
                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                    position: [-100, 115],
                                    childs: [
                                        {
                                            name: 'autospin_dialog close button glow',
                                            type: "graphics",
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'close button text',
                                            type: 'text',
                                            text: 'Close',
                                            scale: [0.8, 1],
                                            position: [0, 0],
                                            styles: {
                                                fontFamily: 'Arial',
                                                fontSize: '28px',
                                                fill: 0xffffff
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'refresh start button bar',
                                    position: [100, 115],
                                    childs: [
                                        {
                                            name: 'refresh start button',
                                            type: "graphics",
                                            button: 'button',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                        },
                                        {
                                            name: 'refresh start button glow',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                            position: [0, 0]
                                        },
                                        {
                                            name: 'refresh start button disabled',
                                            type: 'graphics',
                                            button: 'disabled button',
                                            draw: [['beginFill', 0x919191], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                        },
                                        {
                                            name: 'refresh button text',
                                            type: 'text',
                                            text: 'Start',
                                            scale: [0.8, 1],
                                            position: [0, 0],
                                            styles: {
                                                fontFamily: 'Arial',
                                                fontSize: '28px',
                                                fill: 0xffffff
                                            }
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'InfoContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'infocontainer overlay rect',
                    event: 'infocontainer overlay',
                    type: 'graphics',
                    preventDefault: false,
                    draw: [['beginFill', 0x000000], ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]],
                    alpha: 0.5,
                },
                {
                    name: 'info background',
                    type: 'sprite',
                    image: 'paytableBackground.png',
                    event: 'infobackground',
                    position: [0, -110],
                    scale: [1920 / 1280, 1100 / 720],
                },
                {
                    name: 'info container wrapper',
                    childs: [
                        {
                            name: 'info container 1',
                            visible: true,
                            childs: [
                                {
                                    name: 'container1 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container1 randomimage',
                                            type: 'sprite',
                                            image: 'lowWinSymbolPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'symbolA',
                                            type: 'text',
                                            position: [-260, -375],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '125',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '40',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '2',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbolK',
                                            type: 'text',
                                            position: [100, -375],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '100',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '30',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '10',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbolQ',
                                            type: 'text',
                                            position: [440, -375],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '75',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '25',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '5',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbolJ',
                                            type: 'text',
                                            position: [-90, -175],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '60',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '25',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '5',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbol10',
                                            type: 'text',
                                            position: [250, -175],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '50',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '20',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '5',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 11',
                                    type: 'text',
                                    position: paytable_content_style.position,
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                    text: 'SYMBOL PAYOUT VALUES',
                                }
                            ]
                        },
                        {
                            name: 'info container 2',
                            visible: false,
                            childs: [
                                {
                                    name: 'container2 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container2',
                                            type: 'sprite',
                                            image: 'midSymbolPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'symbol1',
                                            type: 'text',
                                            position: [-200, -360],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '750',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '150',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '30',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbol2',
                                            type: 'text',
                                            position: [123, -360],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '500',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '125',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '25',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbol3',
                                            type: 'text',
                                            position: [440, -360],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '300',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '100',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '20',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbol4',
                                            type: 'text',
                                            position: [-50, -160],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '200',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '75',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '15',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'symbol5',
                                            type: 'text',
                                            position: [255, -160],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: paytable_symbol_A_style.position1,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '150',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: paytable_symbol_A_style.position2,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '50',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: paytable_symbol_A_style.position3,
                                                    styles: paytable_symbol_A_style.styles,
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '15',
                                                            position: paytable_symbol_AChild_style.position,
                                                            styles: paytable_symbol_AChild_style.styles
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 21',
                                    type: 'text',
                                    text: 'SYMBOL PAYOUT VALUES',
                                    position: paytable_content_style.position,
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info container 3',
                            visible: false,
                            childs: [
                                {
                                    name: 'container3 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container3',
                                            type: 'sprite',
                                            image: 'wildSymsPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'info content 32',
                                            type: 'text',
                                            position: [-200, -180],
                                            scale: [1, 1.1],
                                            text: 'Wild symbols can appear randomly anywhere on the reels, apart \nfrom on reel 3 in the Appetite for Destruction Wild, and substitute \nfor all symbols except for Bonus symbols. Wild symbols and\nExpanding Wild symbols substitute for the highest possible winning \ncombination on a bet line. Expanding Wild symbols substitute for\nall symbols except for the Appetite for Destruction Wild, the \noverlay Wild in Legend Spins and the overlay Stacked Wild in \nEncore Free Spins.',
                                            styles: {
                                                fontFamily: 'FuturaCom-Medium',
                                                align: 'left',
                                                fill: 0xffffff,
                                                fontSize: '17px',
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 31',
                                    type: 'text',
                                    text: 'WILD SYMBOL',
                                    position: [-530, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info container 4',
                            visible: false,
                            childs: [
                                {
                                    name: 'container4 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container4',
                                            type: 'sprite',
                                            image: 'bonusWheelPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'info content 42',
                                            type: 'text',
                                            position: [-200, -180],
                                            scale: [1, 1.1],
                                            text: '3 Bonus symbols appearing anywhere on reels 1,3 and 5 in the\nmain game, randomly award one of 3 features. The 3 Bonus\nfeatures are: Encore Free Spins, the Crowd-Pleaser Bonus Game and\ncoin wins. The coin win amounts are displayed on the Bonus Wheel.\n\nBONUS WHEEL Click the stop button to stop the wheel spinning and\nsee which Bonus feature is activated.',
                                            styles: {
                                                fontFamily: 'FuturaCom-Medium',
                                                align: 'left',
                                                fill: 0xffffff,
                                                fontSize: '17px',
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 41',
                                    type: 'text',
                                    text: 'BONUS WHEEL',
                                    position: [-530, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info container 5',
                            visible: false,
                            childs: [
                                {
                                    name: 'container5 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container5',
                                            type: 'sprite',
                                            image: 'bonusGamePaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'info content 52',
                                            type: 'text',
                                            position: [-150, -150],
                                            scale: [1, 1.1],
                                            text: 'The Crowd-Pleaser Bonus Game is a Pick & Click game with 3 levels. Players have a\nnumber of picks, which award coin wins. On all levels in the Crowd-Pleaser Bonus\nGame, in addition to the coin win, Free Spin symbols and a +1 pick symbol can also\nbe awarded. Up to 3 Free Spin symbols can be awarded from all 3 levels combined.\n3 Free Spin symbols activate 10 Free Spins. On Level 1, 3 clicks are awarded and 60\n coins is the minimum coin win awarded. Level 2 is activated when 60 coins are won\nand the number of picks remaining is 0. Level 3 is activated when a minimum of\n300 coins from levels 1 and 2 is reached, and either there are no picks left or all\nthe instruments have been selected. On Level 3 it is possible to double the total win\nfor the feature: if a total of 800 coins is awarded, the total Crowd-Pleaser Bonus\nGame win will be multiplied by 2.',
                                            styles: {
                                                fontFamily: 'FuturaCom-Medium',
                                                align: 'left',
                                                fill: 0xffffff,
                                                fontSize: '17px',
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 51',
                                    type: 'text',
                                    text: 'THE CROWD-PLEASER BONUS GAME',
                                    position: [-340, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info container 6',
                            visible: false,
                            childs: [
                                {
                                    name: 'container6 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container6',
                                            type: 'sprite',
                                            image: 'encoreFreeSpinsPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'info content 62',
                                            type: 'text',
                                            position: [-200, -180],
                                            scale: [1, 1.1],
                                            text: 'Encore Free Spins activated 10 Free Spins. During Encore Free\nSpins, a band member symbol will appear as an overlay Stacked\n Wild symbol on reel 2,3 or 4 in each spin. The corresponding band \nmember symbol will act as a Wild on all toher reels for the spin.\nAdditional Free Spins cannot be won during Free Spins. Free Spins\nare played at the same bet level and coin value as the round that\nactivated Free Spins.',
                                            styles: {
                                                fontFamily: 'FuturaCom-Medium',
                                                align: 'left',
                                                fill: 0xffffff,
                                                fontSize: '17px',
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 61',
                                    type: 'text',
                                    text: 'ENCORE FREE SPINS',
                                    position: [-480, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },

                        {
                            name: 'info container 7',
                            visible: false,
                            childs: [
                                {
                                    name: 'container7 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container7',
                                            type: 'sprite',
                                            image: 'crossCakePaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'info content 72',
                                            type: 'text',
                                            position: [-240, -180],
                                            scale: [1, 1.1],
                                            text: 'The Appetite for Destruction Wild is an overlay Wild in the\nshape of a cross that can land radomly on one of 3 \npossible reel positions. The Appetite for Destruction Wild\nsymbol substitutes for all symbols except for Bonus\nsymbols. Appetite for Destruction Wild symbol substitution\npays the highest possible winning combination on a bet\nline. When the Appetite for Destruction Wild is activated,\nno other feature can be activated.',
                                            styles: {
                                                fontFamily: 'FuturaCom-Medium',
                                                align: 'left',
                                                fill: 0xffffff,
                                                fontSize: '17px',
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 71',
                                    type: 'text',
                                    text: 'APPETITE FOR DESTRUCTION WILD',
                                    position: [-340, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info container 8',
                            visible: false,
                            childs: [
                                {
                                    name: 'container8 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container8',
                                            type: 'sprite',
                                            image: 'legendSpinsPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'info content 82',
                                            type: 'text',
                                            position: [-220, -200],
                                            scale: [1, 1.1],
                                            text: 'The Legend Spins feature is randomly activated and\nawards 1 Stacked Wild for the first spin. The Legend Spins \nfeature then has 2 re-spins with 2Stacked Wild reels. On\nthe 1st spin, reel 3 is a Stacked Wild reel, on the 2nd spin\nreels 1 and 5 are Stacked Wild reels, on spin 3, reels 2\nand 4 are Stacked Wild reels.',
                                            styles: {
                                                fontFamily: 'FuturaCom-Medium',
                                                align: 'left',
                                                fill: 0xffffff,
                                                fontSize: '17px',
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 81',
                                    type: 'text',
                                    text: 'LEGEND SPINS',
                                    position: [-500, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info container 9',
                            visible: false,
                            childs: [
                                {
                                    name: 'container9 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container9',
                                            type: 'sprite',
                                            image: 'soloMultiplierPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                        {
                                            name: 'info content 92',
                                            type: 'text',
                                            position: [-220, -180],
                                            scale: [1, 1.1],
                                            text: 'The solo multiplier feature is a random multiplier that awards a\nwin multiplier of x4 - x10 to a winning bet line, when all the bet\nline wins consist of matching symbols, or matching symbols\nincluding Wild subsititutions. The Solo multiplier is activated if\nthere are at least 3 matching symbols in a bet line win. The Solo\nmultiplier is activated for 1 winning symbol per spin(excluding\nWild symbols). All bet line wins are multiplied by the Solo\nmultiplier for the entire win in the current spin.',
                                            styles: {
                                                fontFamily: 'FuturaCom-Medium',
                                                align: 'left',
                                                fill: 0xffffff,
                                                fontSize: '17px',
                                            }
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 91',
                                    type: 'text',
                                    text: 'SOLO MULTIPLIER',
                                    position: [-500, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info container 10',
                            visible: false,
                            childs: [
                                {
                                    name: 'container10 background',
                                    position: [0, 0],
                                    scale: [1.5, 1.5],
                                    childs: [
                                        {
                                            name: 'info container10',
                                            type: 'sprite',
                                            image: 'betlinesPaytableBackground.png',
                                            position: [0, -70],
                                        },
                                    ]
                                },
                                {
                                    name: 'info content 101',
                                    type: 'text',
                                    text: 'WINNING BET LINES',
                                    position: [-460, -475],
                                    scale: paytable_content_style.scale,
                                    styles: paytable_content_style.styles,
                                },
                            ]
                        },
                        {
                            name: 'info control container',
                            childs: [
                                {
                                    name: 'info close button',
                                    type: 'sprite',
                                    image: 'paytable_close',
                                    position: [900, -500],
                                    scale: [1.4, 1.4],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info close button glow',
                                            type: 'sprite',
                                            image: 'paytable_close',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info prev button',
                                    type: 'sprite',
                                    image: 'paytable_previous',
                                    position: [-880, -100],
                                    scale: [1.5, 1.5],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info prev button glow',
                                            type: 'sprite',
                                            image: 'paytable_previous',
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'info next button',
                                    type: 'sprite',
                                    image: 'paytable_next',
                                    position: [880, -100],
                                    scale: 1.5,
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'info next button glow',
                                            type: 'sprite',
                                            image: 'paytable_next',
                                            alpha: 0
                                        },
                                    ]
                                },
                                {
                                    name: 'info indicator container',
                                    scale: [1.5, 1.5],
                                    position: [0, 280],
                                    childs: []
                                },
                                {
                                    name: 'info content 2',
                                    type: 'text',
                                    text: 'Malfunction voids all pays and plays. For more information, see the Game Rules, The coin payout values are based on bet level 1.',
                                    position: [0, 240],
                                    styles: {
                                        fontFamily: 'FuturaCom-Medium',
                                        align: 'center',
                                        fill: 0xffffff,
                                        fontSize: '25px',
                                        fontWeight: '700'
                                    }
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name: 'ScatterContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            visible: false,
            childs: [
                {
                    name: 'scatter overlay',
                    type: 'graphics',
                    event: 'disabled button',
                    alpha: 0.7,
                    draw: [
                        ['beginFill', [0x000000]],
                        ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]
                    ],
                },
                {
                    name: 'scatter_win',
                    type: 'spine',
                    // position: [-1000, -520],
                    position: [-630, -500],
                    spineData: 'scatter_win',
                    spineAtlas: 'scatter_win_data',
                    spineAtlasFolder: 'Scatter_Win-assets/',
                    scale: 0.5,
                },
                {
                    name: 'scatterstop button bar',
                    position: [0, 415],
                    scale: 1.5,
                    childs: [
                        {
                            name: 'scatterstop button',
                            type: 'sprite',
                            image: 'freeSpinButtonIdle.png',
                            button: 'button',
                            position: [0, 0],
                        },
                        {
                            name: 'scatterstop button glow',
                            type: 'sprite',
                            image: 'freeSpinButtonOver.png',
                            alpha: 0,
                            visible: false,
                        },
                        {
                            name: 'scatterstop button disabled',
                            type: 'sprite',
                            button: 'disabled button',
                            image: 'freeSpinButtonDisabled.png',
                            alpha: 0,
                            visible: false,
                        },
                    ]
                },
            ]
        },
        {
            name: 'EncoreBackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            visible: false,
            childs: [
                {
                    name: 'encore background container wrapper',
                    scale: [1920 / 1280, 1080 / 720],
                    childs: [
                        {
                            type: 'sprite',
                            image: 'freespinIntroBackground.png',
                            event: 'disabled button'
                        },
                        {
                            name: 'continue button bar',
                            position: [0, 200],
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
                            name: 'congrat label',
                            type: 'text',
                            text: 'CONGRATULATIONS!',
                            scale: [0.7, 1],
                            position: [0, -200],
                            styles: {
                                fontFamily: 'BodoniPosterCompressed',
                                fill: 0xffffff,
                                fontSize: '90px',
                                fontWeight: 900
                            }
                        },
                        {
                            name: 'congrat label1',
                            type: 'text',
                            text: 'YOU WON 10\nENCORE FREE SPINS',
                            scale: [0.7, 1],
                            position: [0, -70],
                            styles: {
                                fontFamily: 'BodoniPosterCompressed',
                                fill: 0xffffff,
                                fontSize: '70px',
                                align: 'center'
                            }
                        },
                        {
                            name: 'congrat label2',
                            type: 'text',
                            text: 'A STACKED WILD ON EVERY SPIN',
                            position: [0, 270],
                            styles: {
                                fontFamily: 'FuturaCom-MediumCondensed',
                                fill: 0xffffff,
                                fontSize: '30px',
                                align: 'center'
                            }
                        },
                        {
                            name: 'freespinIntro video',
                            type: 'video',
                            video: 'freeSpinIntro',
                            visible: false
                        },
                        {
                            name: 'freespin SkipIntro',
                            type: 'text',
                            text: 'SkipIntro',
                            event: 'skipintro',
                            position: [0, 250],
                            visible: false,
                            styles: {
                                fontFamily: 'FuturaCom-ExtraBoldCond',
                                align: 'left',
                                fill: 0xffffff,
                                fontSize: '30px'
                            }
                        }
                    ]
                },
            ]
        },
        {
            name: 'CrowdBackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            visible: false,
            childs: [
                {
                    name: 'crowd background container wrapper',
                    scale: [1920 / 1280, 1080 / 720],
                    childs: [
                        {
                            type: 'sprite',
                            image: 'bonusgameIntroBackground.png',
                            event: 'disabled button'
                        },
                        {
                            name: 'crowd_continue button bar',
                            position: [0, 200],
                            scale: 1,
                            childs: [
                                {
                                    name: 'crowd_continue button',
                                    type: 'sprite',
                                    button: 'button',
                                    image: 'continueButtonUp.png',
                                    position: [0, 0]
                                },
                                {
                                    name: 'crowd_continue button glow',
                                    type: 'sprite',
                                    image: 'continueButtonOver.png',
                                    alpha: 0,
                                    visible: false,
                                },
                                {
                                    name: 'crowd_continue button text',
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
                                    name: 'crowd_continue button disabled',
                                    type: 'sprite',
                                    button: 'disabled button',
                                    image: 'continueButtonDisabled.png',
                                    alpha: 0,
                                    visible: false,
                                }
                            ]
                        },
                        {
                            name: 'congrat label',
                            type: 'text',
                            text: 'CONGRATULATIONS!',
                            scale: [0.55, 1],
                            position: [0, -200],
                            styles: {
                                fontFamily: 'BodoniPosterCompressed',
                                fill: 0xffffff,
                                fontSize: '90px',
                                fontWeight: 900,
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0x000000,
                                dropShadowDistance: 2,
                            }
                        },
                        {
                            name: 'congrat label1',
                            type: 'text',
                            text: 'YOU WIN\nTHE CROWD-PLEASER BONUS GAME',
                            scale: [0.55, 1],
                            position: [0, -70],
                            styles: {
                                fontFamily: 'BodoniPosterCompressed',
                                fill: 0xffffff,
                                fontSize: '70px',
                                align: 'center',
                                fontWeight: 700,
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0x000000,
                                dropShadowDistance: 2,
                            }
                        },
                        {
                            name: 'congrat label2',
                            type: 'text',
                            text: 'FILL THE CROWD METER TO DOUBLE YOUR WIN',
                            position: [0, 270],
                            styles: {
                                fontFamily: 'FuturaCom-MediumCondensed',
                                fill: 0xffffff,
                                fontSize: '30px',
                                align: 'center'
                            }
                        },
                    ]
                },
            ]
        },
        {
            name: 'BonusWinContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bonus_win wrapper',
                    childs: [
                        {
                            name: 'bonus_win background',
                            type: 'sprite',
                            image: 'genericOutroScreen.png',
                            scale: 1.5,
                        },
                        {
                            name: 'bonus_win items container',
                            scale: 1.5,
                            childs: [
                                {
                                    name: 'bonus_win header',
                                    type: 'text',
                                    text: 'CONGRATULATIONS',
                                    position: [0, -200],
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
                                    name: 'bonus_win header1',
                                    type: 'text',
                                    text: 'Coins won:',
                                    position: [0, -50],
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
                                    name: 'bonus_win score',
                                    type: 'text',
                                    text: '150',
                                    scale: [1, 1.2],
                                    position: [0, 120],
                                    styles: {
                                        fontFamily: 'BodoniPosterCompressed',
                                        fontSize: '150px',
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
                        }
                    ]
                }
            ]
        },
        {
            name: 'BonusContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bigwin overlay',
                    type: 'graphics',
                    position: [0, -1080],
                    alpha: 0.9,
                    draw: [
                        ['beginFill', 0x000000],
                        ['drawRect', [-1920 / 2, 1080 / 2, 1920, 1080]]
                    ],
                },
                {
                    name: 'bigwin spine',
                    type: 'spine',
                    spineData: 'bigwin',
                    spineAtlas: 'bigwin_data',
                    spineAtlasFolder: '',
                    scale: 0.75,
                    position: [0, 0],
                    childs: [
                        {
                            name: 'bigwin title',
                            type: 'text',
                            text: 'BONUS',
                            position: [0, -310],
                            styles: {
                                fill: 0xfee6a9,
                                fontSize: '100px',
                                fontWeight: 700,
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0xa31f4e,
                                dropShadowDistance: 2,
                                dropShadowBlur: 25,
                                lineJoin: "bevel",
                                stroke: "#a31f4e",
                                strokeThickness: 7,
                                padding: 20
                            }
                        },
                        {
                            name: 'bigwin content',
                            type: 'text',
                            text: '353',
                            position: [0, 0],
                            styles: {
                                fill: 0xfee6a9,
                                fontSize: '300px',
                                fontWeight: 800,
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0xa31f4e,
                                dropShadowDistance: 2,
                                dropShadowBlur: 25,
                                lineJoin: "bevel",
                                stroke: "#a31f4e",
                                strokeThickness: 7,
                                padding: 20
                            }
                        }
                    ]
                },
                /*{
                    name: 'bonus container', visible: false, childs: [
                        {name: 'bonus rect', type: 'sprite', image: 'bonuspane.png'},
                        {name: 'bonus line', type: 'graphics'},
                        // {name: 'bonus close button', type: 'graphics', position: [565/2, -445/2], button: 'bonus close', hit: ['rect', -60, -20, 80, 40], childs:[
                        // 	{name: 'bonus close button text', type:'text', text: "CLOSE",position:[-30,0], styles: {fontFamily: 'Vinque', fontSize: '25px', padding: 20, fill: 0xcccccc}}
                        // ]},
                        {
                            name: 'bonus text 2',
                            type: 'text',
                            text: 'Something went wrong.',
                            position: [0, -90],
                            styles: {
                                align: 'center',
                                fontFamily: 'Vinque, serif',
                                fontwegiht: 600,
                                stroke: 'white',
                                'strokeThickness': 5,
                                fontSize: '60px',
                                padding: 15,
                                fill: [0xff0b00, 0xffa61f]
                            }
                        }
                    ]
                }*/
            ]
        },
        {
            name: 'OrientSwitchContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1080, 1920],
            scaleStrategyLandscape: [0, 0],
            visibleLandscape: false,
            visiblePortrait: true,
            childs: [
                {
                    name: 'orient switch background',
                    type: 'graphics',
                    scale: [1, 1],
                    draw: [['beginFill', 0x212121], ['drawRect', [-1920, -1920, 3840, 3840]]],
                    childs: [
                        {
                            name: 'orient switch icon',
                            type: 'sprite',
                            image: 'orient_switch',
                        },
                        {
                            name: 'orient switch text',
                            type: 'text',
                            position: [0, -300],
                            text: 'PLEASE TURN YOUR DEVICE',
                            alpha: 1,
                            styles: {
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '60px',
                                fontWeight: 'Bold',
                                fill: 0xffffff
                            }
                        }
                    ]
                }
            ]
        }
    ],

    Events: {

        'Gameplay before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Gameplay menu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.menu_mode = false;
            this['MenuContainer'].visible = this.menu_mode;
        },

        'Gameplay automenu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.automenu_mode = false;
            this['AutoMenuContainer'].visible = this.automenu_mode;
        },

        'Gameplay infocontainer overlay up': function (container, e) {
            this['InfoContainer'].visible = false;
            this['setList container'].visible = true;
            this['MainContainer'].visible = true;
        },

        'Gameplay infobackground up': function (container, e) {

        },

        'overlay down': function () {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay build': function () {

            this.is_local_mode = true;
            //getting init data from server
            if (!this.is_local_mode) {
                var reg1 = new RegExp("(^|&)" + "game_id" + "=([^&]*)(&|$)", "i");
                var reg2 = new RegExp("(^|&)" + "key" + "=([^&]*)(&|$)", "i");
                var r1 = window.location.search.substr(1).match(reg1);
                var r2 = window.location.search.substr(1).match(reg2);
                if (r2 !== null) {
                    // Global.session_id = r1[2];
                    localStorage.api_key = r2[2];
                    // console.log(r2[2])
                }
                if (r1 !== null) {
                    this.session_id = r1[2];
                    // console.log(this.session_id)
                } else {
                    console.log("no");
                    this.userBlockLayer.active = true;
                    return;
                }
            }
            // server end

            this.is_bonus = false;

            this.const = {
                RESULT_TYPE: {
                    BIGWIN: 0x000000,
                    MEGAWIN: 0x000001,
                    SUPERMEGAWIN: 0x000002
                },
                STATUS_TYPE: {
                    NORMAL: 0,
                    DISABLED: 1,
                    INVISIBLE: 2,
                    VISIBLE: 3,
                    INACTIVE: 4,
                    ACTIVE: 5
                }
            };
            this.win_anim_mode = 0x0;

            this.menu_mode = false;
            this.automenu_mode = false;

            this.current_auto_amount = 0;

            //getting init data from server

            if (!this.is_local_mode) {
                var cashinfo = this.getCashInfo();
                this.gamesession_id = cashinfo.response.gamesession_id;
                this.credits = {
                    value: parseFloat(cashinfo.response.balance),
                    drawed: parseFloat(cashinfo.response.balance)
                };
                this.gamespec = cashinfo.response.gamespec;
                this.gamesession_id = cashinfo.response.gamesession_id;
            } else {
                this.credits = {
                    value: 11250,
                    drawed: 11250
                };
            }
            //server end

            if (!this.is_local_mode) {
                var array_server = this.getInitData();
                if (array_server.error === "0") {
                    // this.line_value_list = array_server.response.arrLinesValue;
                    // this.betperline_value_list = array_server.response.arrBetValue;
                    // this.denoms_value_list = array_server.response.arrDenomValue;

                    this.line_value_list = array_server.response.arrLinesValue;
                    this.level_value_list = array_server.response.arrBetValue;
                    this.coin_value_list = array_server.response.arrDenomValue;

                    this.bet = {
                        amount: this.coin_value_list[0] * this.line_value_list[0] * this.level_value_list[0],
                        drawed: this.coin_value_list[0],
                        step: 1
                    };

                    this.lines = {
                        value: this.line_value_list[0],
                        step: 1
                    };

                    this.levels = {
                        value: this.level_value_list[0],
                        step: 1
                    };

                    this.coins = {
                        value: this.coin_value_list[0],
                        step: 1
                    };


                } else {
                    console.warn("Server error(GET SETTING)");
                }
            } else {

                this.line_value_list = [10];
                this.level_value_list = [5, 10, 20, 30, 40];
                this.coin_value_list = [5, 10, 20, 25, 30, 40, 50];

                this.bet = {
                    amount: this.coin_value_list[0] * this.line_value_list[0] * this.level_value_list[0],
                    drawed: this.coin_value_list[0] * this.line_value_list[0] * this.level_value_list[0],
                    step: 1
                };

                this.lines = {
                    value: 1,
                    step: 1
                };

                this.levels = {
                    value: this.level_value_list[0],
                    step: 1
                };

                this.coins = {
                    value: this.coin_value_list[0],
                    step: 1
                };

            }


            this.level_progress_step = this.progressbar_size / this.level_value_list.length;
            this['level progress back'].x = this.progressbar_pos + this.level_progress_step;

            this.coin_progress_step = this.progressbar_size / this.coin_value_list.length;

            this['coin progress back'].x = this.progressbar_pos + this.coin_progress_step;

            this.spinCombinations = [];
            this.helpPageVisabilityFlag = false;

            /*-----------------line indicator build start-----------------*/
            let line_pos_y = [-400, -320, -240, -160, -80, 0, 80, 160, 240, 320];
            let line_pos_array = [4, 2, 6, 8, 1, 10, 9, 7, 3, 5, 12, 18, 20, 16, 11, 19, 14, 15, 17, 13];
            for (let i = 0; i < 20; i++) {
                let template = {
                    name: 'line indicator ' + line_pos_array[i],
                    type: 'sprite',
                    image: 'betlineButtonUp.png',
                    scale: [1.4, 1.4],
                    event: 'betindicator',
                    position: [Math.floor(i / 10) === 1 ? 710 : -710, line_pos_y[i % 10]],
                };

                this.buildChild(this['linebet container'], template);
                this.buildChild(this['line indicator ' + line_pos_array[i]], {
                    name: 'line indicator ' + line_pos_array[i] + ' glow',
                    type: 'sprite',
                    image: 'betlineButtonOver.png',
                    alpha: 0
                });
                this.buildChild(this['line indicator ' + line_pos_array[i] + ' glow'], {
                    name: 'line indicator ' + line_pos_array[i] + ' text',
                    type: 'text',
                    text: line_pos_array[i],
                    styles: {
                        fill: 0xffffff,
                        fontSize: '18px',
                        stroke: 0x2880bb,
                        strokeThickness: 5,
                        fontWeight: 700
                    }
                })
            }
            /*-----------------line indicator build end-----------------*/

            /*-----------------line build start-----------------*/
            let line_color = 0x2880bb;
            let line_width = 4;
            let paylines = App.PayLines;
            for (let k = 0; k < paylines.length; k++) {
                let payline = paylines[k];
                let draw = [];
                let circle_draw = [];
                circle_draw.push(['beginFill', 0x2880bb]);
                draw.push(['lineStyle', [line_width, line_color]]);
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (payline[j][i] === 1) {
                            if (i === 0) {
                                draw.push(['moveTo', [this.drawline_x[i], this.drawline_y[j]]]);
                            } else if (i === 4) {
                                draw.push(['lineTo', [this.drawline_x[i], this.drawline_y[j]]]);
                            } else {
                                draw.push(['lineTo', [this.drawline_x[i], this.drawline_y[j]]]);
                                draw.push(['moveTo', [this.drawline_x[i], this.drawline_y[j]]]);
                                circle_draw.push(['drawCircle', [this.drawline_x[i], this.drawline_y[j], line_width / 2]])
                            }

                        }
                    }
                }
                draw.push(['beginFill', line_color]);
                this.buildChild(this['line container'], {
                    name: 'line ' + (k + 1),
                    type: 'graphics',
                    position: [0, 0],
                    visible: false,
                    draw: circle_draw.concat(draw)
                })
            }
            /*-----------------line build end-----------------*/

            /*-----------------help indicator build start-----------------*/
            let help_indicator_pos_x = [-90, -70, -50, -30, -10, 10, 30, 50, 70, 90];
            for (let i = 0; i < 10; i++) {
                let template = {
                    name: 'info indicator ' + (i + 1) + ' bar',
                    position: [help_indicator_pos_x[i], 0],
                };

                this.buildChild(this['info indicator container'], template);
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1),
                    type: 'sprite',
                    image: 'help_indicator_active',
                    step: i,
                });
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1) + ' disabled',
                    event: 'infoindicator',
                    type: 'sprite',
                    image: 'help_indicator_inactive',
                    step: i,
                    alpha: 0
                });
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1) + ' disabled glow',
                    type: 'sprite',
                    image: 'help_indicator_active',
                    alpha: 0
                });
            }
            /*-----------------help indicator build end-----------------*/

            this.helpPageIndex = 0;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);

            this.staticTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                            if (container.children.length > 2) {
                                if (container.children[1].type === "spine") {
                                    container.children[1].visible = true;
                                    container.children[1].state.setAnimation(0, 'start', false);
                                }
                                if (container.children[2].type === "spine") {
                                    container.children[2].visible = true;
                                    container.children[2].state.setAnimation(0, 'animation', false);
                                    /*var self = container.children[2];
                                    container.children[2].state.addListener({
                                        complete: function(track) {

                                            if(track === 0) {
                                                console.log(self.visible);
                                                self.visible = false;
                                            }
                                        }
                                    });*/

                                    /*setTimeout(() => {
                                        container.children[2].visible = false;
                                    }, 500);*/
                                }
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {

                            if (container.children.length > 2)
                                if (container.children[2].type === 'spine')
                                    container.children[2].visible = true;
                        });
                        tween.stop();
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.hideTweens = [];
                    this.staticTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideQuickTweens = [];
                }
            };

            this.legendTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.legendTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if (container.type === 'spine') {
                                container.state.setAnimation(0, 'animation', false);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.legendTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if (container.type === 'spine')
                                container.children[2].visible = true;
                        });
                        tween.stop();
                    });
                    this.legendTweens.showTweens = [];
                    this.legendTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.legendTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.legendTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.legendTweens.showTweens = [];
                    this.legendTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.legendTweens.hideTweens = [];
                    this.legendTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.legendTweens.hideQuickTweens = [];
                }
            };

            this.bonusTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.bonusTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "spine") {
                                container.children[0].visible = true;
                                container.children[0].state.timeScale = 1;
                                container.children[0].state.setAnimation(0, 'idle2', true);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.bonusTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "spine") {
                                container.children[0].visible = false;
                                container.children[0].state.clearTrack(0);
                                container.children[0].skeleton.setToSetupPose();
                            }
                        });
                        tween.stop();
                    });
                    this.bonusTweens.showTweens = [];
                    this.bonusTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.bonusTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.bonusTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "spine") {
                                container.children[0].visible = false;
                                container.children[0].state.clearTrack(0);
                                container.children[0].skeleton.setToSetupPose();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.bonusTweens.showTweens = [];
                    this.bonusTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.bonusTweens.hideTweens = [];
                    this.bonusTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.bonusTweens.hideQuickTweens = [];
                }
            };

            this.passiveTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.hideTweens = [];
                    this.passiveTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideQuickTweens = [];
                }
            };

            this.flashTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.flashTweens.showTweens.forEach((tween, index) => {
                        tween.play();
                        /*var self = this;
                        var loop = setInterval(function() {
                            if(index < self.flashTweens.showTweens.length - 1) {
                                tween.play();
                            } else {
                                clearInterval(loop);
                            }
                        }, 0);*/
                        /* setTimeout(function run() {
                             if(index === self.flashTweens.showTweens.length - 1)
                                 return;
                             setTimeout(run, 100);
                         }, 100);*/
                    });
                },
                hide: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.hideTweens = [];
                    this.flashTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideQuickTweens = [];
                }
            };

            this.currentTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                                if (container.children.length > 1) {
                                    for (var i = 1; i < container.children.length; i++)
                                        container.children[i].gotoAndPlay(0);
                                }
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.hideTweens = [];
                    this.currentTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideQuickTweens = [];
                }
            };

            this.auto_mode = false;
            this.sound_mode = true;
            this.creditsNotInc = true;

            this.BOARD_SIZE = [1225, 820];

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 3;

            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;

            this.COLUMNS_OFFSET = 273;
            this.ROWS_OFFSET = 273; // symbols offset in the reel

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 300;

            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 0;

            this.SYMBOLS_SCALE = [1.5, 1.5];

            this.reels = [];
            let init_card = [
                [9, 11, 0],
                [3, 10, 11],
                [8, 6, 3],
                [10, 3, 8],
                [3, 6, 10]
            ];

            for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                let mostLeft = -1 * (this.COLUMNS_COUNT - 1) / 2 * this.COLUMNS_OFFSET - 2; // the most left element on game board

                this.buildChild(this['game board symbols container'], {
                    name: 'reel mask ' + i,
                    type: 'graphics',
                    draw: [['beginFill', [0x000000]], ['drawRect', [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 2, this.BOARD_SIZE[0], this.BOARD_SIZE[1]]]],
                    position: [mostLeft + this.COLUMNS_OFFSET * i, 0],
                    alpha: 0.5
                });

                let reelSprite = this.buildChild(this['game board symbols container'],
                    {
                        name: 'reel ' + i,
                        mask: 'reel mask ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'],
                    {
                        name: 'reel highlighted ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                let reelExpand = this.buildChild(this['game board expandReel container'], {
                    name: 'reel expand_reel ' + i,
                    position: [mostLeft + this.COLUMNS_OFFSET * i, 0]
                });

                this.buildChild(this['game board expandReel container'], {
                    name: 'reel expand wildtext ' + i,
                    type: 'spine',
                    spineData: 'wild_text_vertical',
                    spineAtlas: 'wild_text_vertical_atlas',
                    spineTexture: 'wild_text_vertical_image',
                    position: [mostLeft + this.COLUMNS_OFFSET * i, -410],
                    scale: 0.75
                });
                let reelWildHighlight = this.buildChild(this['game board symbols wildcard container'], {
                    name: 'reel wildhighlight ' + i,
                    // position: [mostLeft + this.COLUMNS_OFFSET * i - 135, -135], // Bottom
                    // position: [mostLeft + this.COLUMNS_OFFSET * i - 135, -681], // Top
                    position: [mostLeft + this.COLUMNS_OFFSET * i - 135, -408], // Center
                    type: 'spine',
                    spineData: 'sym1',
                    spineAtlas: 'sym1_atlas',
                    spineTexture: 'sym1_image',
                    scale: 0.75,
                    visible: false
                });

                this.reels.push({
                    sprite: reelSprite,
                    spriteHighlight: reelSpriteHighlight,
                    wildHighlight: reelWildHighlight,
                    reel_expand: reelExpand,
                    speed: null,
                    completeSymbol: null,
                    completed: null,
                    animationState: null
                });

                let reel_expand = ['SYM3', 'SYM4', 'SYM5'];

                for (let k = 0; k < reel_expand.length; k++) {

                    this.buildChild(this['reel expand_reel ' + i], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} container`,
                        scale: [1.5, 1.5],
                        position: [0, -131],
                        visible: false,
                    });

                    this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} sprite`,
                        type: 'sprite',
                        position: [0, -95],
                        // visible: false,
                        image: reel_expand[k] + '_EXPANDED_1.png'
                    });
                    this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} sprite`,
                        type: 'sprite',
                        position: [0, -4],
                        // visible: false,
                        image: reel_expand[k] + '_EXPANDED_2.png'
                    });
                    this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} sprite`,
                        type: 'sprite',
                        position: [0, 87],
                        // visible: false,
                        image: reel_expand[k] + '_EXPANDED_3.png'
                    });
                    this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} sprite`,
                        type: 'sprite',
                        position: [0, 178],
                        // visible: false,
                        image: reel_expand[k] + '_EXPANDED_4.png'
                    });
                    this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} sprite`,
                        type: 'sprite',
                        position: [0, 269],
                        // visible: false,
                        image: reel_expand[k] + '_EXPANDED_5.png'
                    });

                    this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} animation container`,

                    });

                    /*this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} animation container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} animation`,
                        type: 'movie-clip',
                        frames: expand_frames,
                        loop: false,
                        visible: false,
                        speed: 0.2
                    });

                    this.buildChild(this[`reel expand_reel ${i} ${reel_expand[k]} animation container`], {
                        name: `reel expand_reel ${i} ${reel_expand[k]} border animation`,
                        type: 'movie-clip',
                        frames: expanded_sym,
                        loop: true,
                        visible: false,
                        scale: [1, 1.3],
                        speed: 0.5
                    });*/
                }

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {

                    this.buildChild(this['reel ' + i], {
                        name: 'reel ' + i + ' symbol container ' + j,
                        scale: this.SYMBOLS_SCALE,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,
                        scale: this.SYMBOLS_SCALE,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlight',
                        position: [0, 0],
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' crisp',
                        type: 'sprite'
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' blur',
                        type: 'sprite',
                        visible: false
                    });

                    /*this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlighttext',
                        type: 'sprite',
                        visible: false
                    });*/

                    var card_index = 0;
                    if (j >= (this.ROWS_COUNT + 1)) {
                        card_index = init_card[i][j - (this.ROWS_COUNT + 1)];
                    } else {
                        card_index = _.random(0, App.Symbols.length - 1);
                    }
                    this.setSymbolTexture('reel ' + i + ' symbol container ' + j, App.Symbols[card_index].Image);
                }
            }
            this.setStatusControlBar('refresh start button', this.const.STATUS_TYPE.DISABLED);
            // this.startMultiSpineAnimation(['light spine', 'light spine1'], 'idle_MainGame', true);
            // this['crowd spine'].stateData.setMix('winLoop', 'idle', 1);
            // this['crowd spine1'].stateData.setMix('winLoop', 'idle', 1);
            // this['crowd spine2'].stateData.setMix('winLoop', 'idle', 1);
            // this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);

            this['scatterWin1'].updateTexture();
            this['scatterWin2'].updateTexture();
            this['scatterWin3'].updateTexture();
            this['scatterWin4'].updateTexture();
            this['scatter_win'].hackTextureBySlotName('bonusWheel_GRP_text_placeholder_L11', this['scatterWin1'].texture);
            this['scatter_win'].hackTextureBySlotName('bonusWheel_GRP_text_placeholder_L14', this['scatterWin2'].texture);
            this['scatter_win'].hackTextureBySlotName('bonusWheel_GRP_text_placeholder_L17', this['scatterWin1'].texture);
            this['scatter_win'].hackTextureBySlotName('bonusWheel_GRP_text_placeholder_L2', this['scatterWin3'].texture);
            this['scatter_win'].hackTextureBySlotName('bonusWheel_GRP_text_placeholder_L5', this['scatterWin4'].texture);
            this['scatter_win'].hackTextureBySlotName('bonusWheel_GRP_text_placeholder_L8', this['scatterWin4'].texture);

            this.setStatusControlBar(['scatterstop button'], this.const.STATUS_TYPE.DISABLED);

            var self = this;
            this['scatter_win'].state.addListener({
                event: function (entry, event) {
                    let event_data = event.data.name;
                    if (event_data === 'color' || event_data === 'peg') {
                        self.playSound('scatterWheelpegPassed' + (event_data === "color" ? '0' : '1'), {}, {
                            volume: self.sound_mode ? 0.5 : 0,
                            loop: false
                        });
                    }
                    if (event.data.name === 'win') {
                        // self.bonusMoveAnimation(self.selected_bonus);
                    }
                },
                complete: function (entry) {
                    if (entry.animation.name === 'anim_start') {
                        self['scatter_win'].state.setAnimation(0, 'spin_loop', true);
                        self.setStatusControlBar(['scatterstop button'], self.const.STATUS_TYPE.NORMAL);
                    } else if (entry.animation.name === 'spin_end') {
                        self['scatter_win'].state.clearTrack(0);
                        self['scatter_win'].skeleton.setToSetupPose();
                    }
                },
            });
            this['appetiteIdle spine'].state.addListener({
                complete: function (entry) {
                    if (entry.animation.name === 'animation') {
                        setTimeout(() => {
                            self.endAppetiteAnimation();
                        }, 1800);
                    }
                }
            });

            this['bgParticle'].stateData.setMix('start', 'loop', 0.1);
            this['bgParticle'].stateData.setMix('loop', 'end', 0.1);
            this['bgParticle'].state.addListener({
                complete: function (entry) {
                    if (entry.animation.name === 'start') {
                        self['bgParticle'].state.setAnimation(0, 'loop', true);
                    } else if (entry.animation.name === 'end') {
                        self['bgParticle'].visible = false;
                        self['bgParticle'].state.clearTrack(0);
                        self['bgParticle'].skeleton.setToSetupPose();
                    }
                }
            });
            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                let expwild_logo = this[`reel wildhighlight ${i}`].skeleton.findBone("expwild_logo");
                expwild_logo.x = 260;
                expwild_logo.y = -944;
            }
            this['solo_multi spine'].state.addListener({
                complete: entry => {
                    if (entry.animation.name === "all_animations") {
                    } else if (entry.animation.name === 'start') {
                        this['solo_multi spine'].state.setAnimation(0, 'banner_in', false);
                    } else if (entry.animation.name === 'banner_in') {
                        this.playSound('solomultiplierStart', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.reels[3].speed = 2;
                        for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                            // this.setSymbolTextureForSolo(this.reels[3].sprite.children[j].name, `SYM${this.getRandom(3,12)}.png`, true);
                            this.setSymbolsBlur(this.reels[3].sprite.children[j].name, false);
                        }
                        this.setSymbolTexture(this.reels[3].sprite.children[5].name, 'SYM8.png');
                        setTimeout(() => {
                            this['solo_multi spine'].state.setAnimation(0, 'banner_out', false);
                        }, 2500);
                    } else if (entry.animation.name === 'banner_out') {
                        this.current_solo++;
                        if (this.current_solo > this.solo_value) {
                            this.endSoloAnimation();
                        } else {
                            this.reels[3].speed = 80;
                            for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                                this.setSymbolTexture(this.reels[3].sprite.children[j].name, `SYM${this.getRandom(3, 12)}.png`);
                                this.setSymbolsBlur(this.reels[3].sprite.children[j].name, true);
                            }
                            this['solo_multi spine'].hackTextureBySlotName('x2', this.getTexture(`solomulti-assets_x${this.current_solo}.png`));
                            this['solo_multi spine'].state.setAnimation(0, 'banner_in', false);
                        }
                    }
                }
            });


            // PIXI.sound.play('welcome');
            // this['reel 0 symbol 0 highlight animation'].children[0].state.setAnimation(0, 'idle2', true);
            // this['reel wildhighlight 1'].state.setAnimation(0, 'animation', false);
            /*this['legend text'].updateTexture();
            this['win_presentation'].hackTextureBySlotName('placeholder',this['legend text'].texture)
            this['win_presentation'].state.setAnimation(0, 'animation', true);*/
            // this['reel expand wildtext 0'].state.setAnimation(0, 'animation', true);


            /*this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, sound => {
                this.backSound = sound;
            });*/
        },

        'Gameplay resize': function () {

            this.refreshPanelValues();

            if (App.IsLandscape) {
                if (this.helpPageVisabilityFlag) {
                    this['info container ' + this.helpPageIndex].visible = 1;
                    this['info container controlls'].visible = 1;

                    this['MainContainer'].visible = 0;
                    this['ControlPanelContainer'].visible = 0;
                }
            } else {

            }

            if (this.menu_mode === true)
                this['MenuContainer'].visible = true;
            if (this.automenu_mode === true)
                this['AutoMenuContainer'].visible = true;
        },

        'Gameplay showed': function () {
            /*--------------------------This is only for two sounds files(start)----------------------------------------*/
            /*this.setlistitemDown([2,3,4,5], this.const.STATUS_TYPE.DISABLED);
            this.sound_loading_interval = setInterval(() => {
                this['setlist loading'].rotation += 1;
            }, 100);

            this.setlistitemDown([1], this.const.STATUS_TYPE.NORMAL);
            this.setlistitemDown([2,3,4, 5], this.const.STATUS_TYPE.DISABLED);
            PIXI.sound.add('sweet', {
                url: 'assets/sounds/setlist/sweetChildOfMine.mp3',
                preload: true,
                loaded: (err, sound) => {
                    App.Assets['sweet'] = {
                        "type": "sound",
                        "url": "assets/sounds/setlist/sweetChildOfMine.mp3"
                    };
                    App.Assets['paradise'] = {
                        "type": "sound",
                        "url": "assets/sounds/setlist/paradiseCity.mp3"
                    };
                    App.Assets['november'] = {
                        "type": "sound",
                        "url": "assets/sounds/setlist/novemberRain.mp3"
                    };
                    App.Assets['chinese'] = {
                        "type": "sound",
                        "url": "assets/sounds/setlist/chineseDemocracy.mp3"
                    };
                    clearInterval(this.sound_loading_interval);
                    this['setlist loading'].visible = false;
                    this['setlist header'].loading = 1;
                    this.setlistitemDown([2, 3, 4, 5], this.const.STATUS_TYPE.INACTIVE);
                    this.setlistitemDown([this.active_music_index]);
                }
            });*/
            /*--------------------------This is only for two sounds files(end)----------------------------------------*/
            this.setlistitemDown([1], this.const.STATUS_TYPE.NORMAL);
            this.setlistitemDown([2,3,4,5], this.const.STATUS_TYPE.DISABLED);
            this.sound_loading_interval = setInterval(() => {
                this['setlist loading'].rotation += 1;
            }, 100);
            PIXI.sound.add('sweet',{
                url: 'assets/sounds/setlist/sweetChildOfMine.mp3',
                preload: true,
                loaded: (err, sound) => {
                    App.Assets['sweet'] = {"type": "sound", "url": "assets/sounds/setlist/sweetChildOfMine.mp3"};
                    this.setlistitemDown([2], this.const.STATUS_TYPE.INACTIVE);
                    PIXI.sound.add('paradise', {
                        url: 'assets/sounds/setlist/paradiseCity.mp3',
                        preload: true,
                        loaded: (err, sound) => {
                            App.Assets['paradise'] = {"type": "sound", "url": "assets/sounds/setlist/paradiseCity.mp3"};
                            this.setlistitemDown([3], this.const.STATUS_TYPE.INACTIVE);
                            PIXI.sound.add('november', {
                                url: 'assets/sounds/setlist/novemberRain.mp3',
                                preload: true,
                                loaded: (err, sound) => {
                                    App.Assets['november'] = {"type": "sound", "url": "assets/sounds/setlist/novemberRain.mp3"};
                                    this.setlistitemDown([4], this.const.STATUS_TYPE.INACTIVE);
                                    PIXI.sound.add('chinese', {
                                        url: 'assets/sounds/setlist/chineseDemocracy.mp3',
                                        preload: true,
                                        loaded: (err, sound) => {
                                            App.Assets['chinese'] = {"type": "sound", "url": "assets/sounds/setlist/chineseDemocracy.mp3"};
                                            clearInterval(this.sound_loading_interval);
                                            this.setlistitemDown([5], this.const.STATUS_TYPE.INACTIVE);
                                            this.setlistitemDown([this.active_music_index]);
                                            this['setlist loading'].visible = false;
                                            this['setlist header'].loading = 1;
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
            this.startGame();
        },

        'Gameplay update': function () {

            let time = this.updateTimeOffset / (1000 / 60);

            if (time > 2) time = 2;

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol) {

                        if (this.reels[i].animation.state === 0) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + this.ROWS_OFFSET / 3 - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.5;

                            if (this.reels[i].speed <= 1) {

                                this.reels[i].animation.state = 1;

                            }

                        } else if (this.reels[i].animation.state === 1) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.3 - 1;

                        }

                    }

                    this.reels[i].sprite.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol && this.reels[i].animation.state === 1) {

                        if (this[this.reels[i].completeSymbol].position.y <= (this.ROWS_COUNT + 1) * this.ROWS_OFFSET) {

                            for (let j = 0; j < this.reels[i].sprite.children.length; j++) {

                                let symbol = this.reels[i].sprite.children[j];

                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                                    symbol.parent.addChildAt(symbol, 0);

                                }

                            }

                            for (let j = 0; j < this.reels[i].spriteHighlight.children.length; j++) {
                                let symbol = this.reels[i].spriteHighlight.children[j];
                                symbol.position.set(null, j * this.ROWS_OFFSET);
                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {
                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;
                                    symbol.parent.addChildAt(symbol, 0);
                                }
                            }
                            this.reels[i].completed = true;

                            if (this.reels.every(item => item.completed)) {
                                this.completeSpin();
                            }
                        }
                    }
                }
            }
        },

        'Gameplay update tick 720': function () {
            this.tween({
                set: ['x', 750],
                to: ['x', -750, 12000]
            }, 'ticker text');
            this.ticker_id++;
            this['ticker text'].text = this.ticker_text_ary[this.ticker_id % this.ticker_text_ary.length];
        },

        'Gameplay update tick 5': function () {

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    this.reels[i].sprite.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                }

            }

        },

        'Gameplay update tick 30': function () {
            this['timer symbol'].visible = this['timer symbol'].visible !== true;
            this.updateTimerpanel();
        },

        'Gameplay disabled button down': function (container, e) {

        },

        'Gameplay setlist_overlay down': function (container, e) {
            this.setListConatinerVisible(false, 'setlist header');
        },

        'Gameplay setlist_header down': function (container, e) {
            if (this[container.name].status === 'opened') {
                this.setListConatinerVisible(false, 'setlist header');
            } else {
                this.setListConatinerVisible(true, 'setlist header');
            }
        },

        'Gameplay setlistitem down': function (container, e) {
            let selected_index = this[container.name].index;
            if (this.active_music_index === selected_index)
                return;
            this.active_music_index = selected_index;
            this.setlistitemDown([selected_index], this.const.STATUS_TYPE.NORMAL);

        },

        'Gameplay setlist_sound down': function (container, e) {
            if (this[container.name].status === 'on') {
                this[container.name].status = 'off';
                this.sound_mode = false;
                if (this.now_playing_back !== null) {
                    this.now_playing_back.stop();
                }
                this['setlist_sound_inactive'].visible = true;
                this['setlist_sound_active'].visible = false;
            } else {
                this[container.name].status = 'on';
                this.sound_mode = true;
                this.setlistitemDown([this.active_music_index], this.const.STATUS_TYPE.NORMAL);
                this['setlist_sound_inactive'].visible = false;
                this['setlist_sound_active'].visible = true;
            }
        },

        'Gameplay setlist_loop down': function (container, e) {
            if (this[container.name].status === 'loop') {
                this[container.name].status = 'one';
                this.music_loop = false;
                this['setlist_loop_all_inactive'].visible = true;
                this['setlist_loop_all_active'].visible = false;
            } else {
                this[container.name].status = 'loop';
                this.music_loop = true;
                this['setlist_loop_all_inactive'].visible = false;
                this['setlist_loop_all_active'].visible = true;
            }
        },

        'Gameplay skipintro down': function () {
            clearTimeout(this.freespinIntro_timeout);
            this.moveFreespinAnimation();
        },

        'Gameplay button over': function (container, e) {
            this.handleButtonOver(container, e);
        },

        'Gameplay button out': function (container, e) {
            this.handleButtonOut(container, e);
        },

        'Gameplay button up': function (container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay button down': function (container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay infoindicator over': function (container, e) {
            var name = container.name;

            let nameGlow = container.name + ' glow';

            if (this[nameGlow].tween) this[nameGlow].tween.stop();

            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 1, 150, 0, Power1.easeOut],
                    ['visible', true, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);

        },

        'Gameplay infoindicator out': function (container, e) {
            let nameGlow = container.name + ' glow';
            if (this[nameGlow].tween) this[nameGlow].tween.stop();
            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 0, 150, 0, Power1.easeOut],
                    ['visible', false, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);
        },

        'Gameplay infoindicator down': function (container, e) {
            this.refreshHelpPage(container.step);
            this.refreshHelpIndicator(container.step);
        },

        'Gameplay betindicator over': function (container, e) {
            var name = container.name;
            let nameGlow = container.name + ' glow';
            if (this[nameGlow].tween) this[nameGlow].tween.stop();
            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 1, 150, 0, Power1.easeOut],
                    ['visible', true, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);
            var temp_name = name.split(" ");
            var line_name = temp_name[0] + " " + temp_name[2];
            this[line_name].visible = true;
        },
        'Gameplay betindicator out': function (container, e) {
            var name = container.name;
            let nameGlow = container.name + ' glow';
            if (this[nameGlow].tween) this[nameGlow].tween.stop();
            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 0, 150, 0, Power1.easeOut],
                    ['visible', false, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);
            var temp_name = name.split(" ");
            var line_name = temp_name[0] + " " + temp_name[2];
            this[line_name].visible = false;
        },

        'Gameplay bonus close down': function () {
            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'overlay', () => {
                this['overlay'].visible = false;
            });

            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'bonus container', () => {
                this['bonus container'].visible = false;
            });

        },

        'Gameplay new jackpot': function (data) {

            App.escalibur.Jackpot.value = parseFloat(data.amount);

            this.drawJackpot();

        },
    },

    transferToCTA: function () {

        this.tween(['alpha', 0, 500], ['BackgroundContainer', 'MainContainer']);
        //
        // if (!app.CallToAction.showed) app.CallToAction.show();

    },

    startGame: function () {
        MRAID.track('Game Starts');
        this.state = 'ready';
    },

    spin: function () {
        this.winAnimationMode = false;
        this['win bar'].visible = false;
        // this.hideLinecontainer();
        /*if (this.winSound !== null) {
            this.playSound('reelSpin', {}, {
                volume: this.sound_mode ? 0.5 : 0,
                loop: true
            }, sound => {
                this.winSound = sound;
            });
        }*/

        if (this.credits.value - this.bet.amount >= 0) {
            if (this.isfreespin === false) {
                this.credits.value -= this.bet.amount;
                this.credits.drawed = this.credits.value;
                this.server_win_amount.value = 0;
                this.server_win_amount.drawed = 0;
                // this['win bar'].drawed = 0;

                this.refreshPanelValues();

                this.creditsNotInc = true;
            }
        } else {
            this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }

        this.first_reel = false;
        this.second_reel = false;
        this.third_reel = false;

        this.legend_reels = [];
        this.legend_symbol = "";
        this.legend_timeout = 0;

        this.encore_timeout = 0;
        this.encore_reel = -1;

        this.is_solo = false;
        this.solo_value = 0;
        this.current_solo = 2;

        this.isAppetite = false;
        this.appetite_alignType = 0;
        this['appetiteIdle spine'].visible = false;
        this['appetiteIntro spine'].y = -415;
        this['appetiteIdle spine'].state.clearTrack(0);
        this['appetiteIdle spine'].skeleton.setToSetupPose();
        this['appetiteIntro spine'].state.clearTrack(0);
        this['appetiteIntro spine'].skeleton.setToSetupPose();

        this['reel wildhighlight 0'].visible = false;
        this['reel wildhighlight 1'].visible = false;
        this['reel wildhighlight 2'].visible = false;
        this['reel wildhighlight 3'].visible = false;
        this['reel wildhighlight 4'].visible = false;
        this.setEmptyAnimation(['reel wildhighlight 0', 'reel wildhighlight 1', 'reel wildhighlight 2', 'reel wildhighlight 3', 'reel wildhighlight 4'])

        this.bonusSprites = [];
        this.legendTweens.hide();
        this.legendTweens.hideQuick();
        this.selected_bonus = '';
        this.is_bonus = false;
        this.selected_bonus_amount = 0;
        // this['character spine'].state.setAnimation(0, 'walk_loop', true);

        this.setStatusControlBar(['start button', 'maxbet button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up'], this.const.STATUS_TYPE.DISABLED);
        this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);

        if (this.winSound) {

            this.winSound.stop();
            this.winSound = false;

            // if (this.mainSound) this.mainSound.volume = this.sound_mode ? 1 : 0;

        }

        if (this.state !== 'ready') return;

        this.state = 'spin';

        this.hideWinanimation();

        var self = this;

        this.spinCombination = null;
        this.wild_column_idx = [];

        if (this.auto_mode === true && this.isfreespin !== true) {
            if (this.current_auto_amount === 0) {
                this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
                return;
            }

            this.current_auto_amount--;
            if (this.current_auto_amount === 0) {
                this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
            }

            this.refreshPanelValues();
        }

        $.when((this.is_local_mode ? this.getServerData() : this.getServerCardsInfo(this.bet.step))).done(function (response) {
            var serverData = response;
            console.log(response);
            if (serverData.error === "0") {

                self.credits.value = serverData.response.balance;
                self.server_credits = serverData.response.balance;
                self.server_initMatrix = serverData.response.initCards;

                self.wild_column_idx = serverData.response.wildRow;

                self.spinCombination = null;

                self.spinCombination = App.escalibur.mathFromServer(self.bet.amount, self.server_initMatrix);

                self.win_type = serverData.response.winType;
                var arrRetval = serverData.response.arrRetVal;
                var newArrRetval = [];
                self.win_anim_mode = 0;
                self.server_win_amount.value = serverData.response.winAmount;

                for (let i = 0; i < arrRetval.length; i++) {
                    if (arrRetval[i].retType === 0) {
                        newArrRetval.push(arrRetval[i]);
                    }

                    if (arrRetval[i].retType === 7) {
                        self.wildReelArray = arrRetval[i].wildReelAry;
                        self.freespin_count = 1;
                    }

                    //In bonus case
                    if (arrRetval[i].retType === 2) {
                        self.isfreespin = true;
                        self.freespin_animation = true;
                        self.freespin_count = arrRetval[i].count;
                        self.freespin_first_animation = true;
                    }

                    //For appetite wild
                    if (arrRetval[i].retType === 5) {
                        self.isAppetite = true;
                        self.appetite_alignType = arrRetval[i].alignType;
                        self.startAppetiteAnimation();
                    }
                    //For appetite wild

                    //bonus game- crowd pleaser spin
                    if (arrRetval[i].retType === 10) {
                        self.is_bonus = true;
                        self.selected_bonus = "peg";
                        self.server_win_amount.value = arrRetval[i].win;
                        App.share_level_data = arrRetval[i].level_values;
                        App.share_level_limit = arrRetval[i].level_limit_values;
                    }
                    //bonus game- crowd pleaser spin

                    //bonus game- encore free spin
                    if (arrRetval[i].retType === 9) {
                        self.is_bonus = true;
                        self.selected_bonus = "color";
                        self.encore_reel = arrRetval[i].encoreReel;
                        if (self.encore_reel !== undefined) {
                            self.encore_timeout = 3000;
                            self.selected_bonus = "";
                            self.is_bonus = false;
                        }
                    }
                    //bonus game- encore free spin

                    //bonus game - coin win
                    if (arrRetval[i].retType === 8) {
                        self.is_bonus = true;
                        self.selected_bonus = "coin_win";
                        self.selected_bonus_amount = arrRetval[i].win;
                    }
                    //bonus game - coin win

                    //For legend
                    if (arrRetval[i].retType === 6) {
                        self.is_legend = true;
                        self.legend_timeout = 3000;
                        self.legend_index = arrRetval[i].order;
                        if (self.legend_index === 1) {
                            self.legend_reels = [2];
                            self.legend_symbol = "redMan";
                        } else if (self.legend_index === 2) {
                            self.legend_reels = [0, 4];
                            self.legend_symbol = "blueMan";
                        } else if (self.legend_index === 3) {
                            self.is_legend = false;
                            self.legend_reels = [1, 3];
                            self.legend_symbol = "blackMan";
                        }
                        setTimeout(() => {
                            self.startLegendText(self.legend_index);
                            self.startLegendAnimation(self.legend_index);
                        }, 2000);
                    }
                    //For legend
                }

                if (self.isfreespin) {
                    if ((self.freespin_count) !== self.freespin_index) {

                        if ((self.freespin_count - 1) === self.freespin_index) {
                            self.freespin_end = true;
                            self.auto_mode = false;
                        }
                        self.total_freespin_amount += serverData.response.winAmount;
                        // self.animFieldPoints('bonus_win bar', self.total_freespin_amount);
                        self.freespin_index++;
                        self['freespin count text'].text = `FREE SPINS LEFT: ${self.freespin_count - self.freespin_index}`;
                        self.encore_timeout = 3000;
                        setTimeout(() => {
                            self.startFreeCountText(self.freespin_count - self.freespin_index);
                            self.startReelExpandAnimation();
                        }, 2000);
                    } else {
                    }
                }

                if (self.freespin_first_animation === true)
                    self.freespin_first_animation = false;
                self.server_arrRetVal = newArrRetval;

                if (arrRetval.length !== 0) {
                    /*if (arrRetval[0].retType === 3) {
                        // In Case Jackpot

                        self.is_bonus = true;
                        self.bonus_amount = parseInt(arrRetval[0].win);
                        App.share_level_data = [
                            [300, 200, 200, 300, 300, 400, 400, 300],
                            [800, 900, 600, 800, 700, 500, 1000, 600],
                            [200, 300, 200, 200, 300, 400, 400, 300]
                        ];
                        self.server_win_amount.value = parseInt(arrRetval[0].win);
                    } else*/
                    if (arrRetval[0].retType === 0) {
                        // In Case NORMAL
                        self.spinCombination.winData.winLines = self.generateWinData();
                    } else if (arrRetval.length > 1) {
                        self.spinCombination.winData.winLines = self.generateWinData();
                    }

                    if (arrRetval[0].retType === 7) {
                        self.is_solo = true;
                        self.solo_value = arrRetval[0].soloMultiplier;
                    }
                }
            } else {

            }
        });

        if (this.timeouts && this.timeouts.length > 0) {

            this.timeouts.forEach((timeout) => {

                clearTimeout(timeout);

            });

        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            this.timeout(() => {

                let random_start_index = _.random(0, App.escalibur.ReelSymbolsRand[i].length);
                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    var card_index = _.random(0, App.Symbols.length - 1);

                    let reelsymbolRand = App.escalibur.ReelSymbolsRand[i];
                    let imageName = App.SymbolsNames[reelsymbolRand[(random_start_index + j) % reelsymbolRand.length]];
                    this.setSymbolTexture(this.reels[i].sprite.children[j].name, imageName);
                    // this.setSymbolTexture(this.reels[i].sprite.children[j].name, App.Symbols[card_index].Image)

                    this.setSymbolsBlur(this.reels[i].sprite.children[j].name, true);

                }

                this.reels[i].completed = false;
                this.reels[i].completeSymbol = null;
                this.reels[i].speed = 80;

                let stopReelInterval = setInterval(() => {

                    if (this.spinCombination) {

                        if (stopReelInterval) clearInterval(stopReelInterval);

                        this.timeout(() => {

                            if (i === 4 && this.first_reel === true && this.second_reel === true) {
                                setTimeout(() => {
                                    this.tween({
                                        name: 'bonus-animation',
                                        to: [
                                            ['visible', false, 200]
                                        ]
                                    }, this.bonusSprites);
                                    this.bonusSprites.forEach(item => {
                                        if (this[item.name].children[0].type === 'spine') {
                                            this[item.name].children[0].state.clearTrack(0);
                                            this[item.name].children[0].skeleton.setToSetupPose();
                                        }
                                    });
                                    this['game board reel 4 trail spine'].visible = false;
                                    this['game board reel 4 trail spine'].state.clearTrack(0);
                                    this['game board reel 4 trail spine'].skeleton.setToSetupPose();
                                    this.stopReel(i);
                                }, 3000)
                            } else if (i === 4 && this.first_reel === true) {
                                this.tween({
                                    name: 'bonus-animation',
                                    to: [
                                        ['visible', false, 200]
                                    ]
                                }, this.bonusSprites);
                                this.bonusSprites.forEach(item => {
                                    if (this[item.name].children[0].type === 'spine') {
                                        this[item.name].children[0].state.clearTrack(0);
                                        this[item.name].children[0].skeleton.setToSetupPose();
                                    }
                                });
                                if (!this.is_solo)
                                    this.stopReel(i);
                            } else {
                                if ((i === 3 || i === 4) && this.is_solo === true) {
                                    this.startSoloAnimation();
                                } else
                                    this.stopReel(i);
                            }

                        }, this.REELS_STOP_TIMEOUT + i * this.REELS_STOP_DELAY + this.legend_timeout + this.encore_timeout);

                    }

                }, 80);

            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);

        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    stopReel: function (reel, errorStop) {

        if (this.winSound) {
            this.winSound.stop();
            this.winSound = false;
        }
        this.reels[reel].completeSymbol = this.reels[reel].sprite.children[0].name;

        this.reels[reel].animation = {
            state: 0
        };

        for (let i = 0; i < this.ROWS_COUNT; i++) {

            let imageName;

            if (errorStop) {
                imageName = App.Symbols[_.random(0, App.Symbols.length - 1)].Image;

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, imageName);
            } else {
                imageName = this.spinCombination.symbols[i][reel];

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, App.SymbolsNames[imageName]);

                if (imageName === "wild") {
                    this.startWildColumnAnimation(reel, i);
                }

                if (imageName === "bonus" && reel !== 4) {
                    if (reel === 0) {
                        // this.playSound('bonus_one', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.first_reel = true;
                    } else if (reel === 2 && this.first_reel) {
                        // this.playSound('bonus_two', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.second_reel = true;
                        this['game board reel 4 trail spine'].visible = true;
                        this['game board reel 4 trail spine'].state.setAnimation(0, 'animation', true);
                        this.playSound('nearWinFlames', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                    } /*else if (reel === 4 && this.first_reel && this.second_reel) {
                        this.third_reel = true;
                        this.isfreespin = true;
                        this.freespin_count = 10;
                        // this.playSound('bonus_three', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        // this.isfreespin = true;
                        // this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                        // this.bonus_active.push(this.reels[reel].sprite.children[i]);

                    } */ else {
                        continue;
                    }

                    let bonus_sprite = this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight');
                    this.bonusSprites.push(bonus_sprite);
                    if (this[bonus_sprite].children[0].type === 'spine') {
                        this[bonus_sprite].children[0].state.setAnimation(0, 'idle2', true);
                    }
                    this.tween({
                        name: 'bonus-animation',
                        to: [
                            ['visible', true, 300]
                        ]
                    }, bonus_sprite);

                }
            }
        }

        for (let i = 0; i < this.reels[reel].sprite.children.length; i++) {

            let symbol = this.reels[reel].sprite.children[i];

            this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        for (let i = 0; i < this.reels[reel].spriteHighlight.children.length; i++) {

            let symbol = this.reels[reel].spriteHighlight.children[i];

            // this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }
        }
        this.playSound('reelStop' + reel, {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.state = 'spinStop';
    },

    completeSpin: function () {

        this.setStatusControlBar(['start button', 'maxbet button', 'auto start button'], this.const.STATUS_TYPE.NORMAL);

        if (this.wildReelArray && this.isfreespin === false) {
            this.wildAnimation(this.wildReelArray);
        }

        if (this.freespin_end && this.isfreespin) {
            this.endFreespinWildanimation();
        }
        if (this.current_auto_amount === 0 || this.state === 'ready') {
            this.refreshLevelBar(this.levels.step);
            this.refreshCoinBar(this.coins.step);
        }

        if (this.spinCombination) {

            if (!this.is_bonus) {
                if (this.spinCombination.winData.winLines.length > 0) {

                    this.spinCombinations.push(this.spinCombination);

                    this.winSpinCombination = this.spinCombination;

                    this.state = 'ready';

                    this.win_sound_play = true;

                    this.winAnimationMode = true;

                    if (this.win_anim_mode && this.const.RESULT_TYPE.BIGWIN) {
                        // this.startBigMoneyAnimation();
                    }
                    if (this.win_anim_mode && this.const.RESULT_TYPE.MEGAWIN) {
                        // this.startJackpotAnimation();
                    }
                    if (this.win_type >= 3) {
                        this.startBigMoneyAnimation(this.server_win_amount.value);
                    } else {
                        this.winBackAnimation();
                        this.winAnimation();
                    }
                    this['win bar'].visible = true;
                    this['win bar text'].text = this.server_win_amount.value;
                    if (this.is_solo) {
                        this['solo badge child'].texture = this.getTexture(`solomulti-assets_x${this.solo_value}.png`);
                        this['solo badge'].visible = true;
                    } else {
                        this['solo badge'].visible = false;
                    }
                    // this.animatePassiveLines(this.spinCombination.winData);

                    // this.credits.value += this.server_win_amount.value;
                    this.credits.drawed = this.credits.value;

                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();
                    if (this.isfreespin === true && this.freespin_count !== 0)
                        this['freespin win text'].text = `TOTAL WIN: ${this.total_freespin_amount}`;

                } else {

                    this.spinCombinations.push(0);


                    // this.animFieldPoints('win', 0);

                    this.winAnimationMode = false;

                    this.state = 'ready';
                    this.credits.drawed = this.credits.value;
                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                    this.animFieldPoints('credits bar', this.server_credits.toString());
                    setTimeout(() => {
                        if (this.state === 'ready' && this.auto_mode || (this.isfreespin === true && this.freespin_count !== 0) || this.is_legend) {
                            this.spin();
                        }
                    }, 500);
                }
            } else {

                // if(this.isfreespin === true && this.freespin_count !== 0) {
                if (this.selected_bonus !== "")
                    this.startScatterAnimation();
                // }
                // this.showBonusContainer(this.bonus_amount);
                // this.playSound('bigWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            }
        } else {
            this.state = 'ready';
        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    drawJackpot: function () {

    },

    updateTimerpanel: function () {
        var date = new Date;
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10 ? "0" : "") + h;
        m = (m < 10 ? "0" : "") + m;

        this['timer hour'].text = h;
        this['timer minute'].text = m;
    },

    setSymbolTextureForSolo: function (container, image, status) {
        let name = container.replace('container ', '');
        if (status === true)
            this[name + ' blur'].texture = this.getTexture(image);
        else
            this[name + ' blur'].texture = this.getTexture(image.replace(".png", "-BLURRED.png"));
    },

    setSymbolTexture: function (container, image) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].texture = this.getTexture(image);
        this[name + ' blur'].texture = this.getTexture(image.replace(".png", "-BLURRED.png"));

        this[name + ' highlight'].removeChildren();

        if (image === "SYM0.png") {
            this.buildChild(this[name + ' highlight'], {
                name: name + ' highlight animation',
                type: 'spine',
                spineData: 'sym0',
                spineAtlas: 'sym0_atlas',
                spineTexture: 'sym0_image',
                scale: 0.51,
                position: [-90, -90]
            })
        }/* else if (image === "SYM3.png") {
            this.buildChild(this[name + ' highlight'], {
                name: name + ' highlight animation',
                type: 'spine',
                spineData: 'sym3',
                spineAtlas: 'sym3_data',
                spineAtlasFolder: '',
                scale: 0.51,
                position: [-90, -90]
            })
        } else if (image === "SYM4.png") {
            this.buildChild(this[name + ' highlight'], {
                name: name + ' highlight animation',
                type: 'spine',
                spineData: 'sym4',
                spineAtlas: 'sym4_data',
                spineAtlasFolder: '',
                scale: 0.51,
                position: [-90, -90]
            })
        } else if (image === "SYM5.png") {
            this.buildChild(this[name + ' highlight'], {
                name: name + ' highlight animation',
                type: 'spine',
                spineData: 'sym5',
                spineAtlas: 'sym5_data',
                spineAtlasFolder: '',
                scale: 0.51,
                position: [-90, -90]
            })
        }*/ else {
            this.buildChild(this[name + ' highlight'], {
                name: name + ' highlight animation',
                type: 'sprite',
                visible: true,
                alpha: 1,
                image: image.replace(".png", "_WIN.png"),
            });
        }

        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight border',
            type: 'spine',
            spineData: 'betlineframe',
            spineAtlas: 'betlineframe_atlas',
            spineTexture: 'betlineframe_image',
            scale: 0.49,
            position: [-88, -88],
            visible: false,
        });

        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight generic',
            type: 'spine',
            spineData: 'generic_win',
            spineAtlas: 'generic_win_atlas',
            spineTexture: 'generic_win_image',
            scale: 0.5,
            position: [-88, -88],
            visible: false,
        });

        /*this[name + ' highlighttext'].removeChildren();
        this.buildChild(this[name + ' highlighttext'], {
            name: name + ' highlight animation1',
            type: 'text',
            text: '35',
            styles: {
                fill: 0xffe6aa,
                fontSize: '80px',
                fontWeight: 700,
                dropShadow: true,
                dropShadowAngle: 0.5,
                dropShadowColor: 0xf6a3aa,
                dropShadowDistance: 2,
                dropShadowBlur: 25,
                lineJoin: "bevel",
                stroke: "#da7b77",
                strokeThickness: 7,
                padding: 20
            }
        });*/
    },

    setSymbolsBlur: function (container, state) {
        let name = container.replace('container ', '');

        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;
    },

    tweensBySprites: function (activeSprites, passiveSprites, highlightSprites, textSprites, lineSprites, indicatorSprites, textValue, lineNum, callback) {

        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];

        this.staticTweens.showTweens = [];
        this.staticTweens.hideTweens = [];
        this.staticTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        if (this.state === 'ready') {

            //highlight animation
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 1, 300],
                    ['visible', true]
                ],
                next: {
                    // to: [
                    //     ['alpha', 0, 700],
                    //     ['visible', false, 700]
                    // ],
                }
            }, highlightSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 10],
                ]
            }, highlightSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 10, 0]
                ]
            }, highlightSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();

            //Passivesprite animation
            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 0.5, 300],
            }, passiveSprites));

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();

            this.currentTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 300, 500]
            }, passiveSprites));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 50, 0]
            }, passiveSprites));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();

            //Center text Animation
        }

        //line animation
        {
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 1, 50],
                    ['visible', true, 50]
                ]
            }, lineSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                    ['visible', false, 50]
                ]
            }, lineSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 1, 0],
                    ['visible', false, 1]
                ]
            }, lineSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();

            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 1, 50],
                ]
            }, indicatorSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 50],
                ]
            }, indicatorSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 1, 0],
                ]
            }, indicatorSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();
        }

        if (this.state === 'ready') {
            if (this.currentTweens.showTweens.length > 0)
                this.currentTweens.show();
            if (this.staticTweens.showTweens.length > 0)
                this.staticTweens.show();
        }

        let tempTimeout = null;
        if (this.state === 'ready') tempTimeout = setTimeout(() => {

            if (this.state !== 'ready') {
                if (tempTimeout) clearTimeout(tempTimeout);
                return;
            }

            if (this.state === 'ready') {
                this.currentTweens.hide();
                this.staticTweens.hide();
            }

            if (callback && (this.state === 'ready')) {

                let tempTimeout2 = null;
                let tempTimeout3 = null;

                if (this.state === 'ready') tempTimeout2 = setTimeout(() => {

                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }

                    if (this.state === 'ready') {
                        this.currentTweens.hide();
                        this.staticTweens.hide();
                        // caapllback.call(this);
                    }
                }, 1000);
                if (this.state === 'ready') tempTimeout3 = setTimeout(() => {
                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }
                    callback.call(this);
                }, 200);

            }

        }, 1000);

    },


    allanimatepassive: function (activeSprites, passiveSprites) {

        this.passiveTweens.showTweens = [];
        this.passiveTweens.hideTweens = [];
        this.passiveTweens.hideQuickTweens = [];
        this.flashTweens.showTweens = [];
        this.flashTweens.hideTweens = [];
        this.flashTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        //Passivesprite animation
        if (this.state === 'ready') {

            this.passiveTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 0.35, 300]
            }, passiveSprites));

            this.passiveTweens.showTweens[this.passiveTweens.showTweens.length - 1].stop();

            this.passiveTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 300]
            }, passiveSprites));

            this.passiveTweens.hideTweens[this.passiveTweens.hideTweens.length - 1].stop();

            this.passiveTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 50]
            }, passiveSprites));

            this.passiveTweens.hideQuickTweens[this.passiveTweens.hideQuickTweens.length - 1].stop();

        }

        if (this.state === 'ready') {
            if (this.passiveTweens.showTweens.length > 0)
                this.passiveTweens.show();
            /*if (this.flashTweens.showTweens.length > 0)
                this.flashTweens.show();*/
        }

        setTimeout(() => {
            this.passiveTweens.hide();
            // this['win bar'].visible = false;
        }, 1500);

    },


    animateLine: function (line, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        let highlightSprites = [];
        let activeSprites = [];
        let passiveSprites = [];
        let textSprites = [];
        let linesNum = line[4];

        let spritesModel = [];

        let matched_symbol_cnt = line[3] === 1 ? 3 : line[3];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            if (this.state !== 'ready' || this.winAnimationMode === false)
                break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {

                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;

                spritesModel[i][j] = '';

                if (line[0][j][i] !== 0) {
                    if (activeSprites.length < matched_symbol_cnt) {
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                        spritesModel[i][j] = 'active';
                    } else
                        passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);

                    if (highlightSprites.length < matched_symbol_cnt) {
                        spritesModel[i][j] = 'highlight';
                        highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                    }

                    // if (i === 2) {
                    //     let sprite_name = this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[1].params.name.replace('crisp', 'highlighttext');
                    //     this[sprite_name].text = line[5];
                    //     textSprites.push(sprite_name);
                    // }
                }
            }
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }
        let lineSprites = [];
        lineSprites.push("line " + linesNum);

        let indicatorSprites = [];
        indicatorSprites.push('line indicator ' + linesNum + ' glow');

        if (this.state !== 'ready' || this.winAnimationMode === false)
            return;

        this.tweensBySprites(activeSprites, passiveSprites, highlightSprites, textSprites, lineSprites, indicatorSprites, line[5], linesNum, callback);
    },

    animatePassiveLines: function (winData) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            return;
        }
        this['win bar'].visible = true;
        this['win bar text'].text = this.server_win_amount.value;
        if (this.is_solo) {
            this['solo badge child'].texture = this.getTexture(`solomulti-assets_x${this.solo_value}.png`);
            this['solo badge'].visible = true;
        } else {
            this['solo badge'].visible = false;
        }

        let activeSprites = [];
        let passiveSprites = [];
        let highlightSprites = [];

        let spritesModel = [];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;

                spritesModel[i][j] = '';

                for (let k = 0; k < winData.winLines.length; k++) {
                    let lineData = winData.winLines[k];

                    if ((lineData[0][j][i] !== 0) && (spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                        spritesModel[i][j] = 'active';
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        if ((spritesModel[i][j] !== 'highlight')) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        }
                    }
                }
            }
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }

        if (this.state === 'ready') this.allanimatepassive(activeSprites, passiveSprites);
    },

    animateEachLine: function (winLines, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        this.timeouts = [];

        for (let i = 0; i < winLines.length; i++) {

            let lineData = winLines[i];

            let lineNum = i;

            if (this.state !== 'ready' || this.winAnimationMode === false) {
                callback = null;
                return;
            }

            let tempTimeout = null;
            if (this.state === 'ready') tempTimeout = setTimeout(() => {

                if (this.state !== 'ready' || this.winAnimationMode === false) {
                    if (tempTimeout) clearTimeout(tempTimeout);
                    callback = null;
                    return;
                }

                if (this.state === 'ready' && this.spinCombination) {
                    this.staticTweens.hide();
                    this.currentTweens.hide();
                }
                this.animateLine(lineData, () => {
                    if (this.spinCombination) {
                        if (this.spinCombination.winData.winLines.length - 1 === lineNum) {
                            if (this.state !== 'ready' || this.winAnimationMode === false) {
                                callback = null;
                                return;
                            }
                            if ((callback) && (this.state === 'ready')) callback.call(this);
                        }
                    }
                });

                //if (this.state === 'ready') //this.playSound('symb'+lineData[4]+'.mp3', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

            }, lineNum * 1200);

            this.timeouts.push(tempTimeout);

        }

    },

    winAnimation: function () {
        if (this.spinCombination.winData.winLines.length > 0) {
            if (this.state !== 'ready' || this.winAnimationMode === false) {
                this.refreshPanelValues();
                return;
            }

            this.animateEachLine(this.spinCombination.winData.winLines, () => {
                if (this.state !== 'ready') return;
                let tempTimeout = null;
                if (this.state === 'ready') tempTimeout = setTimeout(() => {

                    if (this.state !== 'ready' || this.winAnimationMode === false) {
                        if (tempTimeout) clearTimeout(tempTimeout);
                        return;
                    }

                    this.state = 'ready';
                    // this.winAnimationMode = false;
                    if (this.auto_mode || (this.isfreespin === true && this.freespin_count !== 0) || this.is_legend) {
                        this.spin();
                    } else {
                        if (this.state === 'ready') this.winAnimation();
                    }

                }, 0);
            });
        } else {

            if (this.creditsNotInc) {
                this.credits.value += this.server_win_amount;
                this.credits.drawed = this.credits.value;
            }

            this.refreshPanelValues();
        }

    },

    animFieldPoints: function (fieldName, points, bAnim = false, speed = 0) {
        if (bAnim === false) {
            if (this[fieldName + ' text'].text === points.toString()) return;
            this[fieldName + ' text'].text = points.toString();
        } else if (this[fieldName].text !== points.toString()) {
            let duration = 1000;
            if (points > 10000)
                duration = 9000;
            else if (points > 5000)
                duration = 6000;
            else if (points > 1000)
                duration = 4000;
            else if (points > 500)
                duration = 2000;

            this.tween({
                set: ['drawed', this[fieldName].drawed],
                to: ['drawed', points, duration, 100, Expo.easeOut],
                update: () => {
                    this[fieldName + ' text'].text = Math.trunc(this[fieldName].drawed).toString();
                    this.roll_sound_play = false;
                }
            }, fieldName);
        }
    },

    hideTutorial: function () {

        clearTimeout(this.TutorialTimeout);

        if (App.Tutorial.showed) App.Tutorial.hide();

    },

    setlistitemDown: function (selected_indexs, status) {
        for (let i = 1; i <= 5; i++) {
            if (selected_indexs.includes(i)) {
                if (status === this.const.STATUS_TYPE.DISABLED) {
                    this[`setlistitem${i}_disable`].visible = true;
                    this[`setlistitem${i}_active`].visible = false;
                    this[`setlistitem${i}_inactive`].visible = false;
                } else if (status === this.const.STATUS_TYPE.NORMAL) {
                    this[`setlistitem${i}_disable`].visible = false;
                    this[`setlistitem${i}_active`].visible = true;
                    this[`setlistitem${i}_inactive`].visible = false;
                    this.back_musicPlay(selected_indexs[0]);
                } else if (status === this.const.STATUS_TYPE.INACTIVE) {
                    this[`setlistitem${i}_disable`].visible = false;
                    this[`setlistitem${i}_active`].visible = false;
                    this[`setlistitem${i}_inactive`].visible = true;
                } else if (status === this.const.STATUS_TYPE.ACTIVE) {
                    this[`setlistitem${i}_disable`].visible = false;
                    this[`setlistitem${i}_active`].visible = true;
                    this[`setlistitem${i}_inactive`].visible = false;
                }
            } else {
                if (status === this.const.STATUS_TYPE.NORMAL) {
                    if(this[`setlistitem${i}_disable`].visible === true)
                        return;
                    this[`setlistitem${i}_disable`].visible = false;
                    this[`setlistitem${i}_active`].visible = false;
                    this[`setlistitem${i}_inactive`].visible = true;
                }
            }
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
        if (this.state !== 'ready')
            return;
        this.playSound('buttonHover', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
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
        this.playSound('buttonUp', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);

        let name = container.name;

        switch (name) {
            case 'auto start button':
                this.buttonHandlerAuto(container, name);
                break;
            case 'btn_auto':
                this.buttonHandlerAuto(container, name);
                break;
            case 'coin bar down':
                this.buttonHandleCoinUpDown(false, container, name);
                break;
            case 'coin bar up':
                this.buttonHandleCoinUpDown(true, container, name);
                break;
            case 'continue button':
                this.buttonHandleContinue();
                break;
            case 'crowd_continue button':
                this.buttonHandleCrowdContinue();
                break;
            case 'level bar down':
                this.buttonHandleLevelBarUpDown(false, container);
                break;
            case 'level bar up':
                this.buttonHandleLevelBarUpDown(true, container);
                break;
            case 'refresh start button':
                this.buttonHandleStartButton(container, true);
                this.automenu_mode = false;
                this['AutoMenuContainer'].visible = this.automenu_mode;
                break;
            case 'button paytable':
                this.buttonHandlePaytable(container);
                break;
            case 'start button':
                if (this.auto_mode) {
                    return;
                } else {
                    if (!this.isfreespin)
                        this.buttonHandleStartButton(container, false);
                    else
                        this.buttonHandleFreeStartButton(container);
                }
                break;
            case 'maxbet button':
                if (this.auto_mode) {
                    return;
                } else {
                    this.buttonHandleMaxbetButton(container);
                }
                break;
            case 'autospin_dialog close button':
                this.buttonHandlerCloseDialog(container);
                break;
            case 'info prev button':
                this.buttonHandlerPrev(container);
                break;
            case 'info next button':
                this.buttonHandlerNext(container);
                break;
            case 'info close button':
                this.returnToOrginalFromHelp();
                break;
            case 'audio_set button':
                this.buttonHandlerAudioSet(container);
                break;
            case 'close button':
                this.buttonHandlerClose(container);
                break;

            case 'scatterstop button':
                this.buttonHandlerScatterStop(container);
                break;

            default:
                if (name.indexOf('button automenu') === 0) {
                    this.buttonHandleAutoItem(container, name);
                }
                break;
        }
    },

    handleButtonDown: function (container, e) {
        if (this.state !== 'ready')
            return;
        if (container.name === "level bar up" && this.levelup_state === true)
            return;
        if (container.name === "level bar down" && this.leveldown_state === true)
            return;
        if (container.name === "coin bar up" && this.coinup_state === true)
            return;
        if (container.name === "coin bar down" && this.coindown_state === true)
            return;
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);

        this.cur_mouse_capture_container_name = container.name;
    },

    buttonHandlerAuto: function (container, name) {
        if (this.auto_mode === true) {
            this['auto start button text'].text = "AUTOPLAY";
            this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
            this['autoamount text'].visible = false;
            this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }
        if (this.state !== 'ready') return;
        if (this.auto_mode === false) {
            this.winAnimationMode = false;
            if (this.automenu_mode !== true) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                this.automenu_mode = true;
            } else {
                this.automenu_mode = false;
            }
            this['AutoMenuContainer'].visible = this.automenu_mode;
        }
    },

    buttonHandleAutoItem: function (container, name) {
        if (this.state !== 'ready') return;

        this.winAnimationMode = false;
        this.current_auto_amount = container.step;
        let number = name.slice(-2);
        this.refreshPanelValues();

        let nameGlow1 = container.name + ' selected';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
        this.refreshAutoItemBack(number);
    },

    refreshAutoItemBack: function (number) {
        let items = ["10", "20", "30", "40", "50"];
        for (let i = 0; i < items.length; i++) {
            if (number !== items[i]) {
                let tweenname = "button automenu_" + items[i] + " selected";
                this.tween({
                    to: ['alpha', 0, 150, 0, Power1.easeOut]
                }, tweenname);
            } else {
                this.setStatusControlBar(['refresh start button'], this.const.STATUS_TYPE.NORMAL);
            }
        }
    },

    buttonHandleCoinUpDown: function (bUp, container, name) {
        if (this.state !== 'ready' || this.auto_mode === true) return;
        this.winAnimationMode = false;

        var cur_step = this.coins.step;
        if (bUp === true) {
            if (cur_step < this.coin_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.coin_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                cur_step++;
            }
            this.refreshCoinBar(cur_step);
        } else {
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.coin_progress_step * (cur_step - 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                cur_step--;
            }
            this.refreshCoinBar(cur_step);
        }

        if (this.setBetAmountValues(this.lines.step, this.levels.step, cur_step) === false)
            cur_step = this.coins.step;
    },

    buttonHandleContinue: function () {
        this['freespinIntro video'].visible = true;
        this['freespin SkipIntro'].visible = true;
        this['freespinIntro video'].play();
        this.freespinIntro_timeout = setTimeout(() => {
            this.moveFreespinAnimation();
        }, 6000);
    },

    buttonHandleCrowdContinue: function () {
        if (this.now_playing_back !== null) {
            this.now_playing_back.stop();
        }
        App.share_sound_mode = this.sound_mode;
        App.Gameplay.hide();
        App.Bonusplay.show();
        this.credits.value += parseInt(this.server_win_amount.value);
        this.credits.drawed += parseInt(this.server_win_amount.value);
        this.refreshPanelValues();
    },

    buttonHandleLevelBarUpDown: function (bUp, container) {
        if (this.state !== 'ready' || this.auto_mode) return;
        this.winAnimationMode = false;

        var cur_step = this.levels.step;
        if (bUp === true) {
            if (cur_step < this.level_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.level_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                cur_step++;
            }
            this.refreshLevelBar(cur_step);
        } else {
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step - 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                cur_step--;
            }
            this.refreshLevelBar(cur_step);
        }

        if (this.setBetAmountValues(this.lines.step, cur_step, this.coins.step) === false)
            cur_step = this.levels.step;
    },

    buttonHandleMaxbetButton: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        if (this.levels.step !== this.level_value_list.length || this.coins.step !== this.coin_value_list.length) {
            this.showalllines();
            setTimeout(() => {
                this.hidealllines();
            }, 1000);
            this.levels.step = this.level_value_list.length;
            this.coins.step = this.coin_value_list.length;
            this.setBetAmountValues(1, this.levels.step, this.coins.step);
            this.tween({
                to: ['x', this.progressbar_pos + this.coin_progress_step * (this.coins.step), 250, 100, Power1.easeOut]
            }, 'coin progress back');
            this.tween({
                to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step), 250, 100, Power1.easeOut]
            }, 'level progress back');
            this.refreshLevelBar(this.levels.step);
            this.refreshCoinBar(this.coins.step);
            this.coindown_state = false;
            this.leveldown_state = false;
        } else {
            this.spin();
        }
    },

    setMinbet: function () {
        this.levels.step = 1;
        this.coins.step = 1;
        let line_step = 1;
        let level_step = 1;
        let coin_step = 1;
        let line_value = this.line_value_list[line_step - 1];
        let level_value = this.level_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];
        let betAmount = line_value * level_value * coin_value;
        this.lines.value = line_value;
        this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
        this.tween({
            to: ['x', this.progressbar_pos + this.coin_progress_step * (this.coins.step), 250, 100, Power1.easeOut]
        }, 'coin progress back');
        this.tween({
            to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step), 250, 100, Power1.easeOut]
        }, 'level progress back');
        this.setStatusControlBar(['level bar down', 'coin bar down'], this.const.STATUS_TYPE.DISABLED);
        this.setStatusControlBar(['level bar up', 'coin bar up'], this.const.STATUS_TYPE.NORMAL);
        this.coinup_state = false;
        this.levelup_state = false;
    },

    buttonHandleStartButton: function (container, isAuto = false) {
        if (isAuto === false) {
            if (this.credits.value < this.bet.amount)
                return;

            MRAID.markMeaningfulInteraction();

            if (this.state !== 'ready') return;

            let rand_sound_idx = _.random(1, 16);
            this.playSound("spinButtonClick", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            // this['start button animation'].visible = true;
            // this['start button animation'].state.setAnimation(0, 'animation', false);
            this.spin();

        } else {
            if (this.state === 'ready') {
                if (this.auto_mode === false) {
                    this.auto_mode = true;
                    this.refreshAutoItemBack();
                    this.setStatusControlBar(['refresh start button'], this.const.STATUS_TYPE.DISABLED);
                    this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.DISABLED);
                    this['autoamount text'].visible = true;
                    this['auto start button text'].text = 'STOP';
                    this.spin();
                }
            }
        }
        this.refreshPanelValues();
    },

    buttonHandleFreeStartButton: function (container) {
        this.state = 'ready';
        this['ControlPanelContainer'].visible = false;
        this['back_fire'].visible = false;
        this['background container wrapper'].visible = false;
        this['free_background container wrapper'].visible = true;

        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.staticTweens.hide();
        this.staticTweens.hideQuick();

        this.back_interval = setInterval(() => {
            this['free_background'].play();
        }, 280);

        setTimeout(() => {
            this.auto_mode = true;
            this.current_auto_amount = this.freespin_count;
            this.spin();
        }, 500);
    },

    buttonHandlerCloseDialog: function (container) {
        MRAID.markMeaningfulInteraction();
        this.playSound('btn_auto_close', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        this.automenu_mode = false;
        this['AutoMenuContainer'].visible = this.automenu_mode;
    },

    buttonHandlerNext: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 9) {
            this.helpPageIndex = 0;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        } else {
            this.helpPageIndex++;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        }
    },

    buttonHandlerPrev: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 0) {
            this.helpPageIndex = 9;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        } else {
            this.helpPageIndex--;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        }
    },

    buttonHandlerAudioSet: function (container) {
        this.sound_mode = !(this.sound_mode);
        if (this.sound_mode) {
            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true});
            this['audio_set button'].texture = this.getTexture("btn_speaker_on");
        } else {
            this.backSound.stop();
            this['audio_set button'].texture = this.getTexture("btn_speaker_off");
        }
    },

    buttonHandlerClose: function (container) {
        this.closeGame();
    },

    buttonHandlerScatterStop: function (container) {
        this.setStatusControlBar(['scatterstop button'], this.const.STATUS_TYPE.DISABLED);
        this['scatter_win'].state.setAnimation(0, 'spin_end', false);

        let time_out = 0;
        if (this.selected_bonus === 'color') {
            time_out = 4100;
        } else if (this.selected_bonus === 'peg') {
            time_out = 5233;
        } else if (this.selected_bonus === 'coin_win') {
            time_out = 4733;
        }
        setTimeout(() => {
            this.playSound('scatterWheelWon', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        }, time_out - 1000);
        setTimeout(() => {
            this['scatter_win'].autoUpdate = false;
            setTimeout(() => {
                this.bonusMoveAnimation(this.selected_bonus);
            }, 1000);
        }, time_out);
    },

    buttonHandlePaytable: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.refreshHelpPage(this.helpPageIndex);
        this.refreshHelpIndicator(this.helpPageIndex);
        this['InfoContainer'].visible = true;
        this['setList container'].visible = false;
    },

    returnToOrginalFromHelp: function () {
        this['MainContainer'].visible = true;
        this['ControlPanelContainer'].visible = true;
        this['LogoContainer'].visible = true;
        this['InfoContainer'].visible = false;
        this['setList container'].visible = true;
    },

    setBetAmountValues: function (line_step, level_step, coin_step) {

        let line_value = this.line_value_list[line_step - 1];
        let level_value = this.level_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];

        let betAmount = line_value * level_value * coin_value;

        if (this.credits.value < betAmount) {
            console.warn("BetAmount is lower than Credit Value");
            this.setMinbet();
            return false;
        }

        this.lines.value = line_value;
        this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    refreshPanelValues: function () {
        this.animFieldPoints('credits bar', this.credits.drawed.toString());
        this.animFieldPoints('level bar', this.levels.value);
        this.animFieldPoints('coin bar', this.coins.value);
        this.animFieldPoints('win bar', this.server_win_amount.drawed);
        this.animFieldPoints('betamount', this.levels.value * this.line_value_list[0]);
        this.animFieldPoints('bet bar', this.bet.amount.toString());
        this.animFieldPoints('total_bet bar', this.bet.amount.toString());

        if (this.auto_mode) {
            this.animFieldPoints('autoamount', this.current_auto_amount);
        }

        if (this.auto_mode === false) {
            this['start button'].visible = true;
        } else {
            this['start button'].visible = true;
        }
    },

    removeCellMatrix: function (matrix, card_count) {
        for (var i = 0; i < 3; i++) {
            for (var j = card_count; j < 5; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    },

    exchangeMatrix: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                return_matrix[j][i] = matrix[i][j];
            }
        }
        return return_matrix;
    },

    exchangeagain: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 5; i++)
            for (var j = 0; j < 3; j++) {
                return_matrix[4 - i][j] = matrix[i][j];
            }
        return return_matrix;
    },

    generateWinData: function () {
        var serverData = this.server_arrRetVal;
        var changed_matrix = this.exchangeMatrix(this.server_initMatrix);
        changed_matrix = this.exchangeagain(changed_matrix);
        var return_var = [[]];
        for (var k = 0; k < serverData.length; k++) {
            var windata = [];
            var pay_line;
            var symbol_name;
            var card_count;
            var symbols = this.spinCombination.symbols;
            var pos_array = [];
            var linePosIdx = serverData[k].linePosIdx + 1;
            card_count = serverData[k].cardCount === 3 ? 1 : serverData[k].cardCount;
            pay_line = this.spinCombination.paylines[serverData[k].linePosIdx];
            pay_line = this.removeCellMatrix(pay_line, serverData[k].cardCount);
            symbol_name = this.spinCombination.uniquesymbols[serverData[k].audioIndex];
            for (var i = 0; i < this.COLUMNS_COUNT; i++) {
                for (var j = 0; j < this.ROWS_COUNT; j++) {
                    if (pay_line[j][i] === 1) {
                        pos_array.push({name: symbols[j][i], position: [j, i]});
                    }
                }
            }
            windata.push(pay_line);
            windata.push(pos_array);
            windata.push("symbol_name");
            windata.push(card_count);
            windata.push(linePosIdx);
            windata.push(serverData[k].win);
            windata.push(serverData[k].direction);
            return_var[k] = windata;
        }
        return return_var;
    },

    bonusclose: function () {
        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'overlay', () => {
            this['overlay'].visible = false;
        });

        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'bonus container', () => {
            this['bonus container'].visible = false;
        });
    },

    apiRequest: function (options) {
        var params = '';
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.com/api/" + options.endpoint,
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });

        return xhr;
    },

    getCashInfo: function () {
        var options = {
            endpoint: 'zt_get_player_balance',
            params: [
                {
                    key: 'session_id',
                    value: this.session_id
                }
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.com/api/" + options.endpoint,
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            async: false,
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerData: function () {

        var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[2,0,2],[2,2,5],[3,2,2],[4,2,0],[1,1,2]],\"arrRetVal\":[{\"retType\":7,\"wildReelAry\":[4,6]},{\"retType\":0,\"win\":3000,\"linePosIdx\":4,\"cardCount\":4,\"direction\":1},{\"retType\":0,\"win\":1400,\"linePosIdx\":6,\"cardCount\":3,\"direction\":1}],\"betAmount\":200,\"winAmount\":4400,\"balance\":6058206.7}}";
        // var response = '{"error":"0","response":{"initCards":[[3,7,4],[6,5,3],[10,5,4],[6,2,3],[4,7,7]],"arrRetVal":[{"retType":3,"win":15,"linePosIdx":10,"cardCount":4}],"betAmount":20,"winAmount":15,"balance":10015}}';
        response = `{"error":"0","response":{"initCards":[[5,8,3],[0,9,2],[9,5,0],[2,8,7],[9,5,0]],"arrRetVal":[{"retType":11,"order":1}],"betAmount":20,"winAmount":260,"winType":4,"balance":56126}}`;
        // response = `{"error":"0","response":{"initCards":[[1,11,7],[8,4,3],[11,3,11],[6,8,4],[4,11,11]],"arrRetVal":[{"retType":9,"count":10}],"betAmount":20,"winAmount":0,"balance":94693}}`;
        // response = `{"error":"0","response":{"initCards":[[11,11,9],[6,8,2],[9,5,11],[0,7,5],[5,11,3]],"arrRetVal":[{"retType":10,"level":1,"level_values":[[12,26,19,37,25,24,26,28]],"win":57,"level_limit_values":[60,300,800]}],"betAmount":20,"winAmount":57,"balance":94750}}`;
        var serverData = JSON.parse(response);
        return serverData;

        /*var options = {
            endpoint: 'zt_play_game',
            params: [
                {
                    key: 'isfreespin',
                    value: this.isfreespin
                },
            ]
        };

        return this.apiRequest(options);*/
    },

    getInitData: function () {
        var options = {
            endpoint: 'zt_get_setting',
            params: [
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            async: false,
            type: 'post',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerCardsInfo: function (bet) {
        var options = {
            endpoint: 'zt_play_game',
            params: [
                {
                    key: 'lines',
                    value: 0
                },
                {
                    key: 'bet',
                    value: this.levels.step - 1
                },
                {
                    key: 'denom',
                    value: this.coins.step - 1
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'initbalance',
                    value: this.credits.value
                },
                {
                    key: 'play_for_fun',
                    value: 0
                }
            ]
        };

        if (this.is_legend === true && this.legend_index !== 3) {
            options.params.push({
                key: 'isfreespin',
                value: this.legend_index
            });
        } else if (this.isfreespin === true) {
            options.params.push({
                key: 'isfreespin',
                value: 3
            });
        } else {
            options.params.push({
                key: 'isfreespin',
                value: this.isfreespin
            });
        }

        return this.apiRequest(options);
    },

    closeGame: function () {
        var options = {
            endpoint: 'zt_exit_game',
            params: []
        };
        return this.apiRequest(options);
    },

    /*-------------------New generated methods by Jenson only for GunsRose-------------------*/

    setStatusControlBar: function (names, status) {
        let bar_names = ['start button bar', 'maxbet button bar', 'auto start button bar', 'coin bar up container', 'coin bar down container', 'level bar down container', 'level bar up container', 'refresh start button bar', 'scatterstop button bar', 'continue button bar'];
        let button_names = ['start button', 'maxbet button', 'auto start button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up', 'refresh start button', 'scatterstop button', 'continue button'];
        for (let i = 0; i < bar_names.length; i++) {
            if (names.includes(button_names[i])) {
                this[bar_names[i]].visible = true;
                if (status === this.const.STATUS_TYPE.DISABLED) {
                    this[button_names[i]].visible = false;
                    this[button_names[i] + ' disabled'].alpha = 0.5;
                    this[button_names[i] + ' disabled'].visible = true;
                } else if (status === this.const.STATUS_TYPE.INVISIBLE) {
                    this[bar_names[i]].visible = false;
                } else if (status === this.const.STATUS_TYPE.NORMAL) {
                    this[button_names[i]].visible = true;
                    this[button_names[i] + ' disabled'].alpha = 0;
                    this[button_names[i] + ' disabled'].visible = false;
                } else if (status === this.const.STATUS_TYPE.VISIBLE) {
                    this[bar_names[i]].visible = true;
                }
            }
        }
    },

    refreshCoinBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.coin_value_list.length:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    refreshLevelBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.level_value_list.length:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    showalllines: function () {
        for (let i = 0; i < 20; i++) {
            this['line ' + (i + 1)].alpha = 1;
        }
    },

    hidealllines: function () {
        for (let i = 0; i < 20; i++) {
            this['line ' + (i + 1)].alpha = 0;
        }
    },

    wildAnimation: function (wildReelAry) {
        this.isfreespin = true;
        this.wildhighlightSprites = [];
        for (let i = 0; i < wildReelAry.length; i++) {
            let x_pos = Math.floor(wildReelAry[i] / 3);
            let y_pos = (2 - wildReelAry[i] % 3);
            this.wildhighlightSprites.push(this.reels[x_pos].wildHighlight.children[this.ROWS_COUNT + 1 + y_pos].children[0].params.name.replace('crisp', 'highlight'));
        }
        this.tween({
            name: 'win-animation',
            to: [
                ['alpha', 1, 300],
                ['visible', true]
            ]
        }, this.wildhighlightSprites)
    },

    endFreespinWildanimation: function () {
        this.isfreespin = false;
        this.freespin_end = false;
        this.freespin_count = 0;
        this.freespin_index = 0;
        setTimeout(() => {
            this['tickerTapeCover'].visible = true;
            this['light spine'].state.setAnimation(0, 'idle_MainGame', true);
            this['light spine1'].state.setAnimation(0, 'idle_MainGame', true);
            this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);
            this['button bars'].visible = true;
            this['button bars text'].visible = false;
            this['bonus_win score'].text = this.total_freespin_amount;
            this['BonusWinContainer'].visible = true;
            this.total_freespin_amount = 0;
            this.tween({
                name: 'bonus_container-animation',
                to: [
                    ['scale', 1.6, 6000]
                ]
            }, 'bonus_win items container');
            this['background_image'].texture = this.getTexture("background.png");
            setTimeout(() => {
                this['BonusWinContainer'].visible = false;
            }, 6000);
        }, 3000);
    },

    hideWinanimation: function () {
        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.staticTweens.hide();
        this.staticTweens.hideQuick();
        this.passiveTweens.hide();
        this.passiveTweens.hideQuick();
        this.flashTweens.hide();
        this.flashTweens.hideQuick();
    },

    refreshHelpPage: function (number) {
        for (let i = 0; i < 10; i++) {
            if (number !== i) {
                let tweenname = "info container " + (i + 1);
                this[tweenname].visible = false;
            } else {
                let tweenname = "info container " + (i + 1);
                this[tweenname].visible = true;
            }
        }
    },

    refreshHelpIndicator: function (number) {
        for (let i = 0; i < 10; i++) {
            if (number !== i) {
                let tweenname = "info indicator " + (i + 1) + " disabled";
                this[tweenname].alpha = 1;
            } else {
                let tweenname = "info indicator " + (i + 1) + " disabled";
                this[tweenname].alpha = 0;
            }
        }
    },

    showBonusContainer: function (score) {
        this['bigwin content'].text = score;
        this['bigwin spine'].stateData.setMix('idle', 'finish', 0.2);
        this['bigwin spine'].stateData.setMix('finish', 'idle', 0.2);
        this['bigwin spine'].state.setAnimation(0, 'idle', true);
        this.tween({
            to: [
                ['alpha', 1, 500, 0, Power1.easeOut],
                ['visible', true, 500, 0, Power1.easeOut],
            ]
        }, 'BonusContainer');
        setTimeout(() => {
            this.state = 'ready';
            this.hideBonusContainer();
        }, 8000);
    },

    hideBonusContainer: function () {
        this['bigwin spine'].state.setAnimation(0, 'finish', false);
        this.tween({
            to: [
                ['alpha', 0, 500, 0, Power1.easeOut],
                ['visible', false, 500, 0, Power1.easeOut],
            ]
        }, 'BonusContainer');
    },

    setListConatinerVisible: function (visible, container) {
        if (visible === true) {
            this[container].status = 'opened';
            this['setlist overlay'].visible = true;
            this.tween({
                to: ['y', -103, 200, 0, Power1.easeOut],
            }, 'setList container')
        } else {
            this['setlist overlay'].visible = false;
            this[container].status = 'closed';
            this.tween({
                to: ['y', 270, 200, 0, Power1.easeOut],
            }, 'setList container')
        }
    },

    startWildColumnAnimation: function (reel_index, row_index) {
        if (row_index === 0) {
            this.tween({
                name: 'columnWild-animation',
                set: [
                    ['y', -681],
                    ['visible', true]
                ],
                to: ['y', -408, 200]
            }, `reel wildhighlight ${reel_index}`);
        } else if (row_index === 1) {
            this.tween({
                name: 'columnWild-animation',
                set: [
                    ['y', -408],
                    ['visible', true]
                ],
                to: ['y', -408, 200]
            }, `reel wildhighlight ${reel_index}`);
        } else if (row_index === 2) {
            this.tween({
                name: 'columnWild-animation',
                set: [
                    ['y', -135],
                    ['visible', true]
                ],
                to: ['y', -408, 200]
            }, `reel wildhighlight ${reel_index}`);
        }
        this.playSound('expandingWild', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        setTimeout(() => {
            this[`reel wildhighlight ${reel_index}`].state.setAnimation(0, 'animation', false);
        }, 200);
    },

    startLegendAnimation: function (legend_index) {
        let legend_reel_name = [];
        for (let i = 0; i < this.legend_reels.length; i++) {
            let sym_name = App.SymbolsNames[this.legend_symbol].substring(0, 4);
            legend_reel_name.push(`reel expand_reel ${this.legend_reels[i]} ${sym_name} container`);
            legend_reel_name.push('reel expand wildtext ' + this.legend_reels[i]);
        }
        this.legendTweens.showTweens = [];
        this.legendTweens.hideTweens = [];
        this.legendTweens.hideQuickTweens = [];
        this.playSound('3spinsAxl', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.legendTweens.showTweens.push(this.tween({
            name: 'win-animation',
            to: [
                ['visible', true, 500]
            ]
        }, legend_reel_name));

        this.legendTweens.showTweens[this.legendTweens.showTweens.length - 1].stop();
        this.legendTweens.hideTweens.push(this.tween({
            name: 'win-animation',
            to: [
                ['visible', false, 10],
            ]
        }, legend_reel_name));

        this.legendTweens.hideTweens[this.legendTweens.hideTweens.length - 1].stop();

        this.legendTweens.hideQuickTweens.push(this.tween({
            name: 'win-animation',
            to: [
                ['visible', false, 10],
            ]
        }, legend_reel_name));

        this.legendTweens.hideQuickTweens[this.legendTweens.hideQuickTweens.length - 1].stop();
        this.legendTweens.show();
    },

    startLegendText: function (legend_index) {
        let legend_name = 'legend text' + (legend_index - 1);
        if (legend_index === 2) {

        }
        this[legend_name].updateTexture();
        this['legendText spine'].hackTextureBySlotName('placeholder', this[legend_name].texture);
        this['legendText spine'].state.setAnimation(0, 'animation', false);
    },

    startFreeCountText: function (spin_count) {
        let spinetextname = 'freespin spine text' + spin_count;
        this[spinetextname].updateTexture();
        this['freeCount spine'].hackTextureBySlotName('placeholder', this[spinetextname].texture);
        this['freeCount spine'].state.setAnimation(0, 'animation', false);
    },

    startEndSoloText: function (count) {
        let spinetextname = 'soloend text' + count;
        this[spinetextname].updateTexture();
        this['soloend spine'].hackTextureBySlotName('placeholder', this[spinetextname].texture);
        this['soloend spine'].state.setAnimation(0, 'animation', false);
    },

    startReelExpandAnimation: function () {
        let legend_reel_name = [];
        let encore_symbol = "";
        if (this.encore_reel === 1) {
            encore_symbol = "blackMan";
        } else if (this.encore_reel === 2) {
            encore_symbol = "redMan";
        } else if (this.encore_reel === 3) {
            encore_symbol = "blueMan";
        }
        let sym_name = App.SymbolsNames[encore_symbol].substring(0, 4);
        legend_reel_name.push(`reel expand_reel ${this.encore_reel} ${sym_name} container`);
        legend_reel_name.push('reel expand wildtext ' + this.encore_reel);
        this.playSound('3spinsAxl', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.legendTweens.showTweens = [];
        this.legendTweens.hideTweens = [];
        this.legendTweens.hideQuickTweens = [];
        this.legendTweens.showTweens.push(this.tween({
            name: 'win-animation',
            to: [
                ['visible', true, 500]
            ]
        }, legend_reel_name));

        this.legendTweens.showTweens[this.legendTweens.showTweens.length - 1].stop();
        this.legendTweens.hideTweens.push(this.tween({
            name: 'win-animation',
            to: [
                ['visible', false, 10],
            ]
        }, legend_reel_name));

        this.legendTweens.hideTweens[this.legendTweens.hideTweens.length - 1].stop();

        this.legendTweens.hideQuickTweens.push(this.tween({
            name: 'win-animation',
            to: [
                ['visible', false, 10],
            ]
        }, legend_reel_name));

        this.legendTweens.hideQuickTweens[this.legendTweens.hideQuickTweens.length - 1].stop();
        this.legendTweens.show();
    },

    bonusMoveAnimation: function (bonus_type) {
        this['ScatterContainer'].visible = false;
        if (bonus_type === 'peg') {
            this.crowdMoveAnimation();
        } else if (bonus_type === 'color') {
            this.freeSpinAnimation();
        } else if (bonus_type === 'coin_win') {
            this.coinWinAnimation();
        }
        this['scatter_win'].scale.x = 0.5;
        this['scatter_win'].scale.y = 0.5;
        this['scatter_win'].x = -630;
        this['scatter_win'].y = -500;
        this['scatter_win'].autoUpdate = true;
    },

    crowdMoveAnimation: function () {
        this['CrowdBackgroundContainer'].visible = true;
    },

    freeSpinAnimation: function () {
        this['EncoreBackgroundContainer'].visible = true;
    },

    coinWinAnimation: function () {
        this['bonus_win score'].text = this.selected_bonus_amount;
        this['BonusWinContainer'].visible = true;
        this.tween({
            name: 'bonus_container-animation',
            to: [
                ['scale', 1.6, 6000]
            ]
        }, 'bonus_win items container');
        setTimeout(() => {
            this['BonusWinContainer'].visible = false;
            this.state = 'ready';
            this.animFieldPoints('credits bar', this.server_credits.toString());
        }, 6000);
    },

    moveFreespinAnimation: function () {
        this['tickerTapeCover'].visible = false;
        this['light spine'].state.setAnimation(0, 'idle_Freespins', true);
        this['light spine1'].state.setAnimation(0, 'idle_Freespins', true);
        this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'beat', true);
        this['freespinIntro video'].visible = false;
        this['freespin SkipIntro'].visible = false;
        this['freespinIntro video'].pause();
        this['freespinIntro video'].video.currentTime = 0;
        this['EncoreBackgroundContainer'].visible = false;
        this.isfreespin = true;
        this.freespin_count = 10;
        this['button bars'].visible = false;
        this['button bars text'].visible = true;
        this['background_image'].texture = this.getTexture("freespinBackground.png");
        this.state = 'ready';
        this.spin();
    },

    startBigMoneyAnimation: function (points) {
        this.setStatusControlBar(['start button', 'maxbet button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up'], this.const.STATUS_TYPE.DISABLED);
        this.tween({
            name: 'bigwin-animation',
            set: [
                ['visible', true],
                ['alpha', 0],
            ],
            to: ['alpha', 1, 500]
        }, 'bigwin container');
        this['bgParticle'].visible = true;
        this['bgParticle'].state.setAnimation(0, 'loop', true);

        this['light spine'].state.setAnimation(0, 'bigWin', true);
        this['light spine1'].state.setAnimation(0, 'bigWin', true);

        this['BW_start'].visible = true;
        this['BW_loop'].visible = false;
        this['BW_end'].visible = false;

        let bw_start_timeout = 9500;
        let bw_loop_timeout = 4000;
        if (this.win_type === 5) {
            bw_loop_timeout = 12000;
            this['BW_label'].text = 'SUPERMEGA WIN!';
        } else if (this.win_type === 4) {
            bw_loop_timeout = 7000;
            this['BW_label'].text = 'MEGA WIN!';
        } else if (this.win_type === 3) {
            bw_loop_timeout = 4000;
            this['BW_label'].text = 'BIG WIN!';
        }

        let bw_end_timeout = 4000;

        let duration = bw_start_timeout + bw_loop_timeout + bw_end_timeout - 4000;

        this.tween({
            set: ['drawed', this['BW_text'].drawed],
            to: ['drawed', points, duration, 100],
            update: () => {
                this['BW_text'].text = Math.trunc(this['BW_text'].drawed).toString();
            }
        }, 'BW_text');

        this['BW_start'].play();
        this['BW_start'].video.loop = true;
        this.playSound('bigWinStart', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        setTimeout(() => {
            this['BW_start'].pause();
            this['BW_start'].visible = false;
            this['BW_start'].video.currentTime = 0;
            this['BW_loop'].visible = true;
            this['BW_end'].visible = false;
            this['BW_loop'].video.loop = true;
            this['BW_loop'].play();
            setTimeout(() => {
                this['BW_loop'].pause();
                this['BW_loop'].video.currentTime = 0;
                this['BW_start'].visible = false;
                this['BW_loop'].visible = false;
                this['BW_end'].visible = true;
                this['BW_end'].play();
                setTimeout(() => {
                    this['BW_end'].pause();
                    this['BW_end'].video.currentTime = 0;
                    this['bgParticle'].state.clearTrack(0);
                    this['bgParticle'].skeleton.setToSetupPose();
                    if (this.isfreespin === true) {
                        this['light spine'].state.setAnimation(0, 'idle_Freespins', true);
                        this['light spine1'].state.setAnimation(0, 'idle_Freespins', true);
                    } else {
                        this['light spine'].state.setAnimation(0, 'idle_MainGame', true);
                        this['light spine1'].state.setAnimation(0, 'idle_MainGame', true);
                    }
                    this['BW_text'].drawed = 0;
                    this.tween({
                        name: 'bigwin-animation',
                        set: [
                            ['visible', true],
                            ['alpha', 1],
                        ],
                        to: [
                            ['alpha', 0, 500]
                        ],
                        next: {
                            set: ['visible', false]
                        }
                    }, 'bigwin container');
                    this.setStatusControlBar(['start button', 'maxbet button', 'auto start button'], this.const.STATUS_TYPE.NORMAL);
                    this.refreshLevelBar(this.levels.step);
                    this.refreshCoinBar(this.coins.step);
                    this.winAnimation();
                }, bw_end_timeout - 1500);
            }, bw_loop_timeout);
        }, bw_start_timeout);

    },

    startScatterAnimation: function () {
        this['ScatterContainer'].visible = true;
        this.playSound('scatterWheelAppears', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this['scatter_win'].stateData.setMix('spin_loop', 'spin_end', 0);
        this['scatter_win'].state.setAnimation(0, 'anim_start', false);
        setTimeout(() => {
            this.playSound('scatterWheelZoom', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        }, 500);
        setTimeout(() => {
            this.playSound('scatterWheelmoveToLeftStart', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            this.tween({
                name: 'win-animation',
                to: [
                    ['x', -1000, 100],
                    ['y', -520, 100],
                    ['scale', 0.75, 100]
                ]
            }, 'scatter_win');
        }, 3500);
        // this.credits.value += parseInt(this.bonus_amount);
        // this.credits.drawed += parseInt(this.bonus_amount);
        // this.refreshPanelValues();
    },

    startAppetiteAnimation: function () {
        this.REELS_STOP_TIMEOUT += 14000;
        this['appetiteIntro spine'].visible = true;
        setTimeout(() => {
            this['appetite overlay'].visible = true;
            this.startMultiSpineAnimation(['light spine', 'light spine1'], 'Crosscake', true);
            this['appetiteIntro spine'].state.setAnimation(0, 'animation', false);
            this.playSound('crosscakeEnter', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            setTimeout(() => {
                this.tween({
                    name: 'appetiteIntro-animation',
                    set: ['y', -415],
                    to: ['y', 380, 300]
                }, 'appetiteIntro spine');
                this.AppetiteLoopAnimation();
            }, 1500);
        }, 2000);
    },

    AppetiteLoopAnimation: function () {
        this.startMultiSpineAnimation(['game board reel 1 trail spine', 'game board reel 2 trail spine', 'game board reel 3 trail spine'], 'animation', false);
        this.tween({
            name: 'appetiteIntro-animation',
            set: ['y', -1230],
            to: ['y', 380, 500]
        }, 'appetiteIntro spine');
        this.playSound('nearWinFlames', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        setTimeout(() => {
            this.startMultiSpineAnimation(['game board reel 1 trail spine', 'game board reel 2 trail spine', 'game board reel 3 trail spine'], 'animation', false);
            this.tween({
                name: 'appetiteIntro-animation',
                set: ['y', -1230],
                to: ['y', 380, 500]
            }, 'appetiteIntro spine');
            this.playSound('nearWinFlames', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            setTimeout(() => {
                this.startMultiSpineAnimation(['game board reel 1 trail spine', 'game board reel 2 trail spine', 'game board reel 3 trail spine'], 'animation', false);
                this.tween({
                    name: 'appetiteIntro-animation',
                    set: ['y', -1230],
                    to: ['y', 380, 500]
                }, 'appetiteIntro spine');
                this.playSound('nearWinFlames', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                this['appetiteIdle spine'].visible = true;
                setTimeout(() => {
                    this.startMultiSpineAnimation(['game board reel 1 trail spine', 'game board reel 2 trail spine', 'game board reel 3 trail spine'], 'animation', false);
                    this.tween({
                        name: 'appetiteIntro-animation',
                        set: ['y', -1230],
                        to: ['y', 380, 500]
                    }, 'appetiteIntro spine');
                    if (this.appetite_alignType === 1) {
                        this['appetiteIdle spine'].y = -135;
                    } else if (this.appetite_alignType === 2) {
                        this['appetiteIdle spine'].y = -408;
                    } else if (this.appetite_alignType === 3) {
                        this['appetiteIdle spine'].y = -681;
                    }
                    this['appetiteIdle spine'].state.setAnimation(0, 'animation', false);
                    this.playSound('crosscakeLanding', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                }, 2000);
            }, 2000);
        }, 2000);
    },

    endAppetiteAnimation: function () {
        this['bgParticle'].visible = true;
        this['bgParticle'].state.setAnimation(0, 'start', false);
        this.playSound('largeWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'winLoop', true);
        setTimeout(() => {
            this['bgParticle'].state.setAnimation(0, 'end', false);
            this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);
            this['appetite overlay'].visible = false;
            this['appetiteIntro spine'].visible = false;
            this.REELS_STOP_TIMEOUT = 1000;
            this.startMultiSpineAnimation(['light spine', 'light spine1'], 'idle_MainGame', true);
            this.hideContainers(['game board reel 1 trail spine', 'game board reel 2 trail spine', 'game board reel 3 trail spine']);
            this.setEmptyAnimation(['game board reel 1 trail spine', 'game board reel 2 trail spine', 'game board reel 3 trail spine']);
        }, 3000);
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

    hideContainers: function (spines) {
        if (Array.isArray(spines)) {
            spines.forEach(item => {
                this[item].visible = false;
            })
        } else {
            this[spines].visible = false;
        }
    },

    setEmptyAnimation: function (spines) {
        if (Array.isArray(spines)) {
            spines.forEach(item => {
                this[item].state.clearTrack(0);
                this[item].skeleton.setToSetupPose();
            })
        } else {
            this[spines].state.clearTrack(0);
            this[spines].skeleton.setToSetupPose();
        }
    },

    back_musicPlay: function (selected_index) {
        if (this.now_playing_back !== null) {
            this.now_playing_back.stop();
        }
        this.playSound(this.back_musics[selected_index - 1], {}, {
            volume: this.sound_mode ? 1 : 0,
            loop: false
        }, (sound) => {
            this.now_playing_back = sound;
            this.now_playing_back.on('end', () => {
                if (this.music_loop === true)
                    this.active_music_index = this.active_music_index % 5 + 1;
                this.setlistitemDown([this.active_music_index], this.const.STATUS_TYPE.NORMAL)
            });
        });
    },

    startSoloAnimation: function () {
        this['solo_multi spine'].visible = true;
        this['tickerTapeCover'].visible = false;
        this['appetite overlay'].visible = true;
        this.startMultiSpineAnimation(['light spine', 'light spine1'], 'SoloMulti', true);
        this['solo_multi spine'].state.setAnimation(0, 'start', false);
    },

    endSoloAnimation: function () {
        this['solo_multi spine'].visible = false;
        this['solo_multi spine'].hackTextureBySlotName('x2', this.getTexture(`solomulti-assets_x2.png`));
        this.startMultiSpineAnimation(['light spine', 'light spine1'], 'idle_MainGame', true);
        this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);
        this.reels[3].speed = 80;
        this.stopReel(3);
        setTimeout(() => {
            this.stopReel(4);
            if (this.server_win_amount.value > 0) {
                this.startEndSoloText(this.solo_value);
                this['bgParticle'].visible = true;
                this.playSound('mediumWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this['bgParticle'].state.setAnimation(0, 'start', false);
                this.startMultiSpineAnimation(['light spine', 'light spine1'], 'Crosscake', true);
                this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'winLoop', true);
                setTimeout(() => {
                    this['tickerTapeCover'].visible = true;
                    this['bgParticle'].state.setAnimation(0, 'end', false);
                    this['appetite overlay'].visible = false;
                    this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);
                    this.startMultiSpineAnimation(['light spine', 'light spine1'], 'idle_MainGame', true);
                }, 3000);
            } else {
                this['tickerTapeCover'].visible = true;
                this['appetite overlay'].visible = false;
            }
        }, 500);
    },

    winBackAnimation: function () {
        if (this.win_type === 1) {
            this.playSound('smallWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'winLoop', true);
            this.startMultiSpineAnimation(['light spine', 'light spine1'], 'smallwin', true);
            setTimeout(() => {
                this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);
                this.startMultiSpineAnimation(['light spine', 'light spine1'], 'idle_MainGame', true);
            }, 3000);
        } else if (this.win_type === 2) {
            this.playSound('mediumWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'winLoop', true);
            this.startMultiSpineAnimation(['light spine', 'light spine1'], 'mediumWin', true);
            setTimeout(() => {
                this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);
                this.startMultiSpineAnimation(['light spine', 'light spine1'], 'idle_MainGame', true);
            }, 3000);
        } else if( this.win_type === 0) {
            this.playSound('smallWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'winLoop', true);
            this.startMultiSpineAnimation(['light spine', 'light spine1'], 'smallwin', true);
            setTimeout(() => {
                this.startMultiSpineAnimation(['crowd spine', 'crowd spine1', 'crowd spine2'], 'idle', true);
                this.startMultiSpineAnimation(['light spine', 'light spine1'], 'idle_MainGame', true);
            }, 3000);
        }
    },

    getRandom: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /*-------------------New generated methods by Jenson only for GunsRose-------------------*/

    back_musics: ['welcome', 'sweet', 'paradise', 'november', 'chinese'],
    // back_musics: ['welcome', 'sweet', 'welcome', 'sweet', 'welcome'],
    now_playing_back: null,
    active_music_index: 1,
    music_loop: true,

    interval: 0,
    server_initMatrix: [],
    server_arrRetVal: [],
    server_scatters: [],
    server_win_amount: {
        value: 0,
        drawed: 0
    },
    gamesession_id: "",
    session_id: 0,

    hill_interval: null,
    rabbit_interval: null,

    // api_url: "https://bo.369.games/api/",
    api_url: "http://localhost:8000/api/",

    first_reel: false,
    second_reel: false,
    third_reel: false,

    freespin_animation: false,
    freespin_count: 0,
    isfreespin: false,
    freespin_index: 0,
    freespin_first_animation: false,
    encore_reel: -1,
    total_freespin_amount: 0,
    freespin_end: false,
    base_sound: null,
    roll_sound: null,
    roll_sound_play: false,

    progressbar_size: 133,
    progressbar_pos: -163,

    bonus_highlights: [],
    bonus_active: [],

    wildhighlightSprites: [],

    tutorial_mode: true,

    spark_pos_array: [
        [[-520, -265], [-260, -265], [0, -265], [260, -265], [520, -265]],
        [[-520, 0], [-260, 0], [0, 0], [260, 0], [520, 0]],
        [[-520, 265], [-260, 265], [0, 265], [260, 265], [520, 265]],
    ],

    drawline_x: [-1040 / 2, -1040 / 4, 0, 1040 / 4, 1040 / 2],
    drawline_y: [-265, 0, 265],

    ticker_id: 0,
    ticker_text_ary: [
        'Win x4 - x10 on a winning symbol with the Solo Multiplier!',
        'Smash the slot with the Appetite for Destruction Wild!',
        'Slash loves the Solo Multiplier!',
        'Rock the slot with 10 Encore Free Spins!',
        'Pill up wins with the Stacked Wilds in Legend Spins!',
        'Raise the roof with the Crowd-Pleaser Bonus Game!',
        'Win up to 225000 coins',
        'More than 7 Platinum Albums and 100 million sales worldwild!',
        'Hit 3 Bonus symbols and win Bonus features!'
    ],

    wild_column_idx: [],
    is_legend: false,
    legend_reels: [],
    legend_symbol: "",
    legend_index: -1,
    legend_timeout: 0,

    encore_timeout: 0,
    selected_bonus: '',
    selected_bonus_amount: 0,
    bonusSprites: [],
    freespinIntro_timeout: null,

    // For Appetite
    isAppetite: false,
    appetite_alignType: 0,

    is_solo: false,
    solo_value: 0,
    current_solo: 2,

    server_credits: 0,

    win_type: false,
    is_megawin: false,
    is_supermegawin: false
});
