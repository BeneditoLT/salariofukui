function  calcular(){
    var salHor = document.getElementById('valhora')
    
    var hirkin = document.getElementById('dhk')
    var yakin  = document.getElementById('dyk')
    
    var hirkindo = document.getElementById('dhkdo')
    var yakindo  = document.getElementById('dykdo')

    var sahirkin = ((Number(salHor.value)*9 + ((Number(salHor.value)*1.25)*2)) * Number(hirkin.value))
    var sayakin = ((Number(salHor.value)*1.5 + ((Number(salHor.value)*1.25)*9.5)) * Number(yakin.value))
    var sahirkindo = ((((Number(salHor.value)*1.35)*9 )+ ((Number(salHor.value)*1.6)*2)) * Number(hirkindo.value)) 
    var sayakindo = ((((Number(salHor.value)*1.35)*1.5) + ((Number(salHor.value)*1.6)*9.5)) * Number(yakindo.value))
    var salBru = sahirkin + sayakin + sahirkindo + sayakindo
    var diastr = Number(hirkin.value) + Number(yakin.value) + Number(hirkindo.value) + Number(yakindo.value)
   
    sahirkin = sahirkin.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    sayakin= sayakin.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    sahirkindo = sahirkindo.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    sayakindo = sayakindo.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    salBru = salBru.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
   
    dtr.innerHTML =`Dias traballhados:`
    dtrv.innerHTML=`${diastr}`
    
    sh.innerHTML  =`Hirukin:`
    shv.innerHTML = `${sahirkin}`
    
    sy.innerHTML  =`Yakin:`
    syv.innerHTML = `${sayakin}`
    
    shd.innerHTML =`Hirukin Domingo:`
    shdv.innerHTML =`${sahirkindo}`
    
    syd.innerHTML =`Yakin Domingo:`
    sydv.innerHTML = `${sayakindo}`
    
    sbr.innerHTML =`Salario Bruto:`
    sbrv.innerHTML =`${salBru}`


}