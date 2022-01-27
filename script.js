function  calcular(){



    var salHor = document.getElementById('valhora')
    
    var hirkin = document.getElementById('dhk')
    var yakin  = document.getElementById('dyk')
    var yukyu = document.getElementById('dyku')
    var folgfor = document.getElementById('dfor')
    var hirkindo = document.getElementById('dhkdo')
    var yakindo  = document.getElementById('dykdo')
    var percen = document.getElementsByName('radfor')
    var porcent = 0 
    if(percen[0].checked){
        porcent = 0.80}
        else{
            porcent = 0.60
        }



    var sahirkin = ((Number(salHor.value)*9)+ ((Number(salHor.value)*1.25)*2)) * Number(hirkin.value)
    var sayakin = ((Number(salHor.value)*9) + ((Number(salHor.value)*0.25)*5.833333334) + (Number(salHor.value)* 1.25 * 2)) * Number(yakin.value)
    var sahirkindo = (((Number(salHor.value)*1.35)*11) * Number(hirkindo.value)) 
    var sayakindo = ((((Number(salHor.value)*1.35)*11) + ((Number(salHor.value)*0.25)*5.833333334)) * Number(yakindo.value))
    var sayukil = ((Number(salHor.value)*9) * Number(yukyu.value))
    var safolfor = (((Number(salHor.value)*9)*porcent) * Number(folgfor.value))
    var salBru = sahirkin + sayakin + sahirkindo + sayakindo + sayukil + safolfor
    var diastr = Number(hirkin.value) + Number(yakin.value) + Number(hirkindo.value) + Number(yakindo.value)
    
      
   if(diastr > 0){
    dtr.innerHTML =`Dias traballhados:`
    dtrv.innerHTML=`${diastr}`
    
   }
   
   if(sahirkin > 1 ){
    sahirkin = sahirkin.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    sh.innerHTML  =`Hirukin:`
    shv.innerHTML = `${sahirkin}`
   }

   if(sayakin > 0){
    sayakin= sayakin.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    sy.innerHTML  =`Yakin:`
    syv.innerHTML = `${sayakin}`
   }
   if(sayakindo > 0){
    sahirkindo = sahirkindo.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    shd.innerHTML =`Hirukin Domingo:`
    shdv.innerHTML =`${sahirkindo}`
   }
   if(sayakindo > 0){
    sayakindo = sayakindo.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    syd.innerHTML =`Yakin Domingo:`
    sydv.innerHTML = `${sayakindo}`
   }
   if(sayukil > 0){
    sayukil = sayukil.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    syyk.innerHTML =`Salario Yukyu:`
    syykv.innerHTML = `${sayukil}`
   }
   if(safolfor > 0){
    safolfor = safolfor.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    sffor.innerHTML =`Folga Forçada:`
    sfforv.innerHTML = `${safolfor}`
   }
   if(salBru > 0){
    salBru = salBru.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    sbr.innerHTML =`Salario Bruto:`
    sbrv.innerHTML =`${salBru}`
   }

}