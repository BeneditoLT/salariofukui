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
    salBru = salBru.toLocaleString('ja-JP',{style: 'currency', currency: 'JPY'});
    dtr.innerHTML =`Dias traballhados:..${diastr}`
    sh.innerHTML  =`Hirukin:...................${sahirkin}`
    sy.innerHTML  =`Yakin:.....................${sayakin}`
    shd.innerHTML =`Hirukin Domingo:...${sahirkindo}`
    syd.innerHTML =`Yakin Domingo......${sayakindo}`
    sbr.innerHTML =`Salario Bruto:.....${salBru}`


}