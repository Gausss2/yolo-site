function ToggleMenu()
{
    for (let x of document.getElementsByTagName('li'))
    {
        if (!x.style.display || x.style.display == 'none')
            {        
                x.style.display = 'block'
            }
        else
        x.style.display = 'none'
        
        ;
    }
}
