 const change = document.querySelector('#insert')

 window.addEventListener('keyup', function(e){
    change.innerHTML=`<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key==' ' ? 'Spcae' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
 })