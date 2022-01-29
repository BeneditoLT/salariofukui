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
   
   
    var texto = ['Hirukin:', 'Hirukin Domingo:','Yakin:', 'Yakin Domingo:', 'Yukiu:', 'Folga forçada:','Salario Bruto:']
    var salario =[sahirkin,sahirkindo,sayakin,sayakindo,sayukil,safolfor,salBru]
    var campo = [sh,sy,shd,syd,syyk,sffor,sbr]
    var campov = [shv,syv,shdv,sydv,syykv,sfforv,sbrv]
  
       
      
   if(diastr > 0){
    dtr.innerHTML =`Dias traballhados:`
    dtrv.innerHTML=`${diastr}`
    
   }

   
   let Saltex = ""
   for( let i =0; i < salario.length; i++){
   Saltex = salario[i].toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
   if(salario[i] < 1){
       texto[i] = ''
       Saltex = ''
   }
   campo[i].innerHTML  = texto[i]
   campov[i].innerHTML  = Saltex

   }

  

}