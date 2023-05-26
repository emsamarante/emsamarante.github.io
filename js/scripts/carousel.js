if(window.screen.width <= 768){
var quantidadeProjetosPorPageCarrossel = 1
}
else{
var quantidadeProjetosPorPageCarrossel = 3
console.log(window.screen)

}





/*verify resize
addEventListener("resize", (event) => {});
onresize = (event) => {
  window.location.reload()

}
*/
// -----------------------------


var CarrosselSkills = new Splide( '#slider1',{
    type    : 'loop',
    autoplay: 'play',
    perPage : 3,
    width: '95%'
  }).mount();



  var CarrosselProjetos = new Splide( '#slider2',{
    type    : 'loop',
    autoplay: 'play',
    perPage : quantidadeProjetosPorPageCarrossel,
    width: '90%'
  }).mount();




