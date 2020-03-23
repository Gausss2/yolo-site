function ToggleMenu()
{
    for (let x of document.getElementsByTagName('li'))
    {
        if (!x.style.display || x.style.display == 'none')
            {x.style.display = 'block';
            x.style.transition = '3s';}
        else
        x.style.display = 'none';
        x.style.transition = '3s';
    }
}
