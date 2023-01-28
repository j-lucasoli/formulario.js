console.log("ola mundo")
 //passo 1 capturar o botao 
 //passo 2 escutar o clique no botao
 //passo 3 capturar as informaçoes 
 //passo 4 inserir na tebela

 let btn = document.querySelector("#btn")
 btn.addEventListener("click",(event)=>{
    event.preventDefault(); 
   let nome = document.querySelector("#nome").value
   let endereço = document.querySelector("#endereço").value
   let mail = document.querySelector("#mail").value
   insereNaTabela(nome,endereço,mail)
   
 }) 
 function insereNaTabela(nome,endereco,mail)
 {
let tabela = document.querySelector("#corpo-tabela")
let dados = ` 
<tr>
    <td>${nome}</td>
    <td>${endereco}</td>
    <td> ${mail}</td> 
</tr>`


tabela.innerHTML += dados
 }

/* <tr>
        <td>joao lucas</td>
        <td>rua santos neves</td>
        <td> joaolucasoliveira7@gmail.com</td>
        </tr>
*/ 
