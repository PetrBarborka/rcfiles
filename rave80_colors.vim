"set background=dark

hi clear
if exists("syntax on")
  syntax reset
endif

let g:colors_name = 'rave80_colors'

hi Folded ctermbg=Black cterm=italic
hi LineNr ctermfg=yellow 
hi Visual ctermbg=yellow ctermfg=blue
hi Statement ctermfg=yellow
