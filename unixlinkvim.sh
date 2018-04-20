SCRIPTPATH=$(cd $(dirname $0); pwd)
ln -s $SCRIPTPATH/__vimrc ~/.vimrc
ln -s $SCRIPTPATH/.vimrc.bundles ~/.vimrc.bundles
ln -s $SCRIPTPATH/plug.vim ~/.vim/autoload/plug.vim
