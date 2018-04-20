@set SCRIPTDIR=%~dp0
mklink %UserProfile%\_vimrc %SCRIPTDIR%__vimrc
mklink %UserProfile%\.vimrc.bundles %SCRIPTDIR%.vimrc.bundles
mklink "C:\Program Files (x86)\vim\vimfiles\autoload\plug.vim" %SCRIPTDIR%plug.vim
