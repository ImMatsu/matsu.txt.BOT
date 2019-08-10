console.log("the bot is starting");
var Twit = require("twit");

var config= require("./config");
var T = new Twit(config);

tweetIt();
setInterval(tweetIt,1000*60*60);//tweet vai ocorrer a cada 1 hora 1000*60*60
function tweetIt(){
    var r=Math.floor(Math.random()*86);
    var list=["eu gosto de tapioca","Zelda breath of the wild tem a melhoor ost da saga","eu odeio o prompt do windows","É muito bom ver que o cara conseguiu ir pra frente com o jogo dele, na época adorei o jogo, acho que o único do evento que eu realmente gostei de jogar","Dirigir é bom demais",
"Como num dia faz 30 graus de máxima, e no outro a maxima é 13","A Rem da cocada não é real e não pode te machucar","poxa se meu teclado chegar amanhã, serei a pessoa mais feliz do mundo","#PrayForKyoaniが世界に拡散","a forma com a qual a trilha sonora é construida em breth of the wild me impressiona cada vez mais",
"ATH M50X é um sonho de consumo","A trilha sonora de celeste é muito gostosa de ouvir","É parceiro eu fiz SENAI","Mario Kart 8...... quem sabe eu compre.","I really love computers","STOP WHAT YOU'RE DOING SAVE YOUR WORK RIGHT NOW!!!","the witcher 3 no switch",
"Nioh 2","keanu reeves no cyberpunk 2077, esse jogo e insta buy","Mario Odyssey é o melhor jogo do  mario já feito.","Jojofag tem que acabar","Elon Musk já se encontrou com Tony Stark","Faz voce então a porra do Mario","Mariejois é uma baita critica social","O jogo","IH o maluko é programador fi, chama","Só a programação ne velho, dog",
"Marion Sergion Cortelan mais visionário que Olavo de Caralho","Finalmente meu horário de sono foi corrigido.","╭( ･ㅂ･)و ̑̑ ˂sim, eu fiz SENAI!ᵎ⁾✩","Por isso eu curto o neto ele é Imparcial","assassin's creed unity é uma merda, não vale apena ser jogado mesmo estando de graça.","Troquei meu nick na psn, e por enquanto ta tudo certo, espero que continue assim.",
"I love 2b","Meu professor de phyton deve ser usuário de droga","esse novo pokemon esta uma bela merda.","Shinji from Evangelion hates Maduro",
"A SAMSUNG LITERALMENTE ACABOU DE COMER O CU DA APPLE","queria poder apagar minha memoria pra jogar/ assistir danganronpa novamente.","Mano tem como desativar o chat do lol, agora o jogo presta","Paulo Guedes quer privatizar o Serviço de Entregas da Kiki","Minha lista de desejos está toda em promoção na steam, mas não tenho nenhum centavo.",
"Migrar para o PC escolha mais sensata que eu já fiz","Rei leão é ruim","Xadrez é  o melhor jogo","HILDA da netflix é tao bem escrito  que machuca","Só queria registrar aqui que eu acabei com a tinta de uma caneta BIC.","A lei de pouillet é ridícula",
"Final Fantasy XIV","RIP Windows 7","Ryzen 7 3700x","Shigatsu wa kimi no uso melhor shoujo","sangatsu no lion te traz paz interior","ANCAP tem que acabar","Visual Studio atualizou","JAVA é lento","Saiu mais 2 frameworks de js enquanto voce lia isso","Vontade de voltar a estudar pro ITA","Persona 5 melhor exclusivo","Enem pra quem?","Onde está o entreterimento?",
"Faca guinso 2000","Telecurso 2000","Lombada sem sinalização","RISC Reduced Instruction Set Computer ","Frango morto na paulada","Não toque legião Urbana na sala","Sakurasou no Pet da Maromba OP HD","burbank - sorry i like you","Um dos prazeres meu é andar de Metro fora do horario de pico","acertei no milhar, ganhei 500 conto não vou mais trabalhar","volta rinha de galo","Vontade de fazer um Curso no Senai",
"Po o Leo é gente boa demais","Keanu reeves no smash ia ser foda","SANS undertale","Zelda best waifu","vou voltar a estudar matemática, física e química, me sinto muito mais confortável em estudar essas coisas agora, por não ter a pressão de vestibular e etc","Sequel to The legend of Zelda: Breath of the wild is now in development","Terra Planista tem que acabar","Veja bem Japão","Terra Planista tem que acabar",
"O pirata ALMA NEGRA","Nintendo Switch melhor console","Lofi hip hop","23 se ta sem bandoleira amigo",]
    var tweet={
        status: list[r]
    }
    T.post('statuses/update', tweet, tweeted);
        
    function  tweeted(err, data, response){
        if(err){
            console.log("Deu ruim")
        }else{
            console.log("funfo")
        }
    }
}