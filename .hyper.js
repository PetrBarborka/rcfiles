// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 10,

    // font family with optional fallbacks
//    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    fontFamily: '"Meslo LG S DZ for Powerline", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,1)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#fffFFF',

    // terminal background color
    //backgroundColor: 'rgba(0,0,0,1)',
    backgroundColor: '#000000',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: true,

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object

    colors: {
       black: '#000000',
       red: '#ff0000',
       green: '#33ff00',
       yellow: '#ffff00',
       blue: '#0066ff',
       magenta: '#cc00ff',
       cyan: '#00ffff',
       white: '#d0d0d0',
       lightBlack: '#808080',
       lightRed: '#ff0000',
       lightGreen: '#33ff00',
       lightYellow: '#ffff00',
       lightBlue: '#0066ff',
       lightMagenta: '#cc00ff',
       lightCyan: '#00ffff',
       lightWhite: '#ffffff'
     },
    //colors: {
       //black: '#000000',
       //red: '#ffffff',
       //green: '#ffffff',
       //yellow: '#ffffff',
       //blue: '#ffffff',
       //magenta: '#ffffff',
       //cyan: '#ffffff',
       //white: '#ffffff',
       //lightBlack: '#ffffff',
       //lightRed: '#ffffff',
       //lightGreen: '#ffffff',
       //lightYellow: '#ffffff',
       //lightBlue: '#ffffff',
       //lightMagenta: '#ffffff',
       //lightCyan: '#ffffff',
       //lightWhite: '#ffffff'
     //},

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: '/usr/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    // bell: 'SOUND',
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
    hyperBorder: {
      borderColors: ["#00ffff", "#ff00ff"],
      blurredColors: ["#ffff00", "#ff00ff"],
      borderWidth: '1px',
      borderRadiusOuter: '0px',
      borderRadiusInner: '0px',
      animate: true
    },

    materialBox: {
      user: {
        colors: {
        black: '#2f002f',
        red: '#FF4FEE',
        green: '#FF4FEE',
        yellow: '#FF6A00',
        blue: '#00EFFF',
        magenta: '#FF4FEE',
        cyan: '#00EFFF',
        white: '#FFFFFF',
        lightBlack: '#1F001F',
        lightRed: '#FF4FEE',
        lightGreen: '#ffffff',
        lightYellow: '#FF6A00',
        lightBlue: '#66EFFF',
        lightMagenta: '#ffffff',
        lightCyan: '#ffffff',
        lightWhite: '#FFFFFF',
        },

        activeTabStyle : 'underline',
        highlightActiveTab : 'true',
        //accentColor: '#FF4FEE',
        //lightEffect: 'true',

        // Default 
        backgroundColor: '#2F002F',
        foregroundColor: '#FFFFFF',
        cursorColor: '#FF6A00',
        borderColor: 'transparent',

        backgroundOpacity: 1.0, // not on OSX, can't test


        // Other (optional, it will be override by
        //foregroundColor)
        inactiveTabTitleColor: 'rgba(255, 255, 255, 0.8)',
        //activeTabTitleColor: '#EEFFFF',

        //// css (optional) 
       //css: '',
        //termCSS: '',
      },
    },
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [ 'hypercwd',
             // --- themes:
             'an-old-hype',
             //'hyper-chesterish',
             //'hyper-firewatch',
             //'hyper-frontend-delight',
             //'hyper-material-box',
             'hyper-statusline',
             'hyper-pane',
             //'hyperborder',
             //'hyperpower',
  ],


  // // Customize the theme
   themeSettings: {
  //     // Do not make background transparent (default is 0.9)
       opacity: 1,
  //     // Switch from luke's orange uniform to master yoda (check the available styles above)
       style: 'luke',
  //     // Change the character that mars a tab active
       tabActiveMarker: '💁'
   },

  //im development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    "window:close": "ctrl+shift+w",
    "pane:close": "ctrl+w",
  }
};
