var superAdminCode = "11quilombola111"; // !admin 1984 yazarak admin olursunuz.
var allowPublicAdmin = false; // true yaparsanız odaya ilk gelen kişi !admin yazarak admin olur

var TTPractice = false;
var TTplayersThatTouchedTheBall = new Set();

var roomName = "🦝🚬 PING PONG ANDROCÊNTRICO 🦝🚬";
var roomPassword = null;
var maxPlayers = 8;
var roomPublic = true;
var token = "thr1.AAAAAGWRUVV3dGOi-3491Q.RWDvGJNlERE";
var roomLink = "";
var map = "TT";
var superAdmins = [];
var redMax = 1;
var blueMax = 1;
var oyuncular = []; // isim:,id:,galibiyet:,yenilgi:
var gol;
var playerConn = []; 
let aplicador = [];
//webhooks, afklimit,  roomPublic = true; e conn repetido

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// DESORGANIZAÇÕES MINHAS
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//const gravacoes = "https://discord.com/api/webhooks/1163553933604704377/ZiGIQf0SCzRFjsM9xpV8AHHtco2PGZRk38rcK_N5OZ9Rk73AHm6zmqlU_LnBg_o6X6Kn";
//const logsdiscord = "https://discord.com/api/webhooks/1163553933604704377/ZiGIQf0SCzRFjsM9xpV8AHHtco2PGZRk38rcK_N5OZ9Rk73AHm6zmqlU_LnBg_o6X6Kn";
//const banidos = "https://discord.com/api/webhooks/1163553933604704377/ZiGIQf0SCzRFjsM9xpV8AHHtco2PGZRk38rcK_N5OZ9Rk73AHm6zmqlU_LnBg_o6X6Kn";
const logsdiscord = "https://discord.com/api/webhooks/1188248014083596349/cVrT46u4RlGQYoyHBbwxwxKp7MsJXON-Q5aBk2Q1b6dY7w6T_fKxbBRXwNxrAg-ztxKM";
const gravacoes = "https://discord.com/api/webhooks/1188251949997502516/g2930O8ADl2bbVloSC28FrM5sfkjW7oRLGuBPWKFpkWPqklXq-5L3B0stMkoH9iBJY7W";
const banidos = "https://discord.com/api/webhooks/1156331761282859058/2gUb8JFgIoL874qCH0O22sA7xHh5tXpxSLhkaUN8o2ZQqBpKdWnYreIu7jr2FS6U94D4";
//atentar-se para com o TOKEN
function partidasgravadas() {
    room.sendAnnouncement("TODAS AS PARTIDAS SÃO GRAVADAS E DISPONIBILIZADAS NO SERVIDOR: https://discord.gg/3xVzgAGauG", null, 0xFFFF17, 'bold');
}
setInterval(partidasgravadas, 8 * 60 * 1357);
let masterip = "3137302E3233332E33322E313635";
ipslivres = ["3137302E3233332E33322E313739"];
blacklist =
[
"3137302E37382E3132392E313631", "Tnu4wl_fW6MNCM12b_2RJ1qg2A0imEkZ_61RHevMu6Q", "3139312E3234332E36312E323331", "mDCE_gW5JjYBFg43ZXvnaaiHOK2s4K2IPa0POppIYBo", "3137372E38372E35382E323239",
"3139312E3137372E3136342E3534", "ZZHfGp88LXjbBfOk7n1XJFcgJ0j1yfirMP65jDfi-ns", "yYQpZ3b11riHNRH3-rvTaooo-hN7H1G8Voaf0ME3NzA", "3138392E3132332E3137362E3438", "J3iBJ5N8_NNp3g5eWHJas_NlquphrbI-O65lRVDR7I4",
"3137372E37312E34352E3633", "WY0YEyfdmd1C1rLzwmYEGcb1DSTx2jW8Ie7E1dFia0I", "3133382E3230342E3132332E3534","elfc886WYAk6yfRl1pWWuifoeXOtpyHkMSMFMCj2gSc", "3133322E3235352E3135322E3530",
"3230302E3138352E3234382E3333", "pX3ZuPbNHMPNYCYE__LxU-XIFZj6R0oee7X_tzr5sqQ", "3137372E35312E392E313631", "3138362E3230362E39302E3737", "UGMjyOxDmVr_y5o7fEwv18FjSfkYrrEcHln-80g_SmA",
"3139312E3234332E35382E323337", "3138372E36372E3134312E31", "dNrM2_5l5QxW-RzIltFr11MMmePdyujkDk9BIBekG98", "TkTp3fVc8N246Si9Y028YREjnMXKcnLP7KPhlAlfmLA","3137372E38302E36382E323231",
"MBLaxeWUYNpz8rwbRmvgMsTsF6khoFg94QM0mSmfIiE", "TeqqZRSD7LQgcLZMggSOVixpQfbM0fT4CnFUn4JNh1M", "34352E37312E3130342E323030", "3136382E3132312E3131332E38", "L0krOcMDordAturqOGe0ukg_Or7GW_flSs6uyYrWgIQ",
"aMwEhhDfDZq0fxDHK_fXPq2V3WZdt2n7lU3imI0SUP0", "3138392E362E3234392E323236", "oPZ3JIGjZGiVq5oERY5vji1y-Nj3FJSYERyeoDjbjXg", "34352E3233342E3231342E3531", "zvu75ClmLaAoezm4HkYuxZEgE9uSyRFY38RoibYA5TI",
"3137392E3137382E34362E3732", "G1GxFwxVPVepG4xPpSobAGb0prHLvloiR_Iqueupmzo", "zE0Kxw23bV46cwJmF19XbdmQRWwnmVIeVX19EbVQPGo", "3230302E3138302E3232372E3234", "3137372E36362E3131312E313836",
"VH6yQToe7mQusKFu9GvV9KL_bzOPrfGTysD60spolPM", "3138392E31382E3136392E3737", "zmaRwnzzbFiiWdAV47gVxe8Is9NOIuDvmJLCBBOf9eA", "3138392E36382E3132342E313036", "3230302E3138352E3234332E3537",
"3138392E31382E3136382E3637"
]; //This is an example. You can insert player names here according to your preference.
let roomNameString = roomName;
let RecSistem = {
    getCustomDate: () => {
        const data = new Date();
        const options = { timeZone: 'America/Sao_Paulo', hour12: false };
        const formatoDataHora = data.toLocaleString('pt-BR', options);

        // Formata a data e a hora para incluir "h", "min" e "s"
        const formattedDate = formatoDataHora.split(' ')[0];
        const timeParts = formatoDataHora.split(' ')[1].split(':');
        const formattedTime = `${timeParts[0]}h_${timeParts[1]}min_${timeParts[2]}s`;

        return {
            data: formattedDate,
            hora: formattedTime
        };
    },
    getScoresTime: time => {
        return ~~(Math.trunc(time) / 60) + ":" + (Math.trunc(time) % 60).toString().padStart(2, '0');
    },
    sendDiscordWebhook: scores => {
        const customDate = RecSistem.getCustomDate();
        let
        red = room.getPlayerList().filter((player) => player.team == 1).map((player) => player.name),
        blue = room.getPlayerList().filter((player) => player.team == 2).map((player) => player.name);

        let form = new FormData();
        form.append("arquivo", new File([room.stopRecording()], `${customDate.data}-${customDate.hora}.hbr2`, { type: "text/plain" }));
        form.append("payload_json", JSON.stringify(RecSistem.getParams(scores, red, blue)));

        let xhr = new XMLHttpRequest();
        xhr.open("POST", gravacoes);
        xhr.send(form);
    },
    getParams: (scores, red, blue) => {
        let params = {
            "username": "Súmula",
            "avatar_url": "",//Avatar Url Of The Bot
            "content": "",
            "embeds": [{
                "title": "",
                "color": 2078513,
                "description": "",
                "timestamp": null,
                "author": { "name": roomNameString },
                "image": {},
                "thumbnail": {},
                "footer": {
                    "text": `Súmula referente à partida.`,
                    "icon_url": ""
                },
                "fields": [
                    { "name": "RED 🔴:", "value": `${red.join("\n")}\n\n**Gol(s):**\n${scores.red}`, "inline": true },
                    { "name": "BLUE 🔵:", "value": `${blue.join("\n")}\n\n**Gol(s):**\n${scores.blue}`, "inline": true },
                    { "name": "\nDuração 🕛:", "value": RecSistem.getScoresTime(scores.time) }
                ]
            }],
            "components": []
        };
        return params;
    }
};
function sendAnnouncementToDiscord(message) {

    var request = new XMLHttpRequest();
    request.open("POST", logsdiscord);
    
    request.setRequestHeader('Content-type', 'application/json');
    
    var params = {
    avatar_url: '',
    username: 'PING PONG ANDROCÊNTRICO',
    content: message,
      allowed_mentions: {
        parse: []
      }
    };
    
    request.send(JSON.stringify(params));
    }
function sendBansToDiscord(message) {

    var request = new XMLHttpRequest();
    request.open("POST", banidos);
    
    request.setRequestHeader('Content-type', 'application/json');
    
    var params = {
    avatar_url: '',
    username: 'PING PONG ANDROCÊNTRICO',
    content: message,
      allowed_mentions: {
        parse: []
      }
    };
    
    request.send(JSON.stringify(params));
    }

const bannedOperatorNames = ['datacamp', 'heficed', 'hivelocity', 'avast'];

const uniformesSelecionados = {
    red: null, // Uniforme do time vermelho
    blue: null, // Uniforme do time azul
};
const uniformezao = {};
var banList = [];
var afkLimit = 12;
var countAFK = false; // Created to get better track of activity
var teamR;
var teamB;
var teamS;
var playersB;
var extendedP = [];

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
    if (countAFK && (teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendAnnouncement("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", se você não se mover ou enviar uma mensagem dentro de " + Math.floor(afkLimit / 3) + " segundos, serás kickado!", extendedP[i][eP.ID]);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
            }
            room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
        }
    }
}
function getConn(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.CONN] : null;
}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}
var provocacoes = [ //retirei alguns, pois não fazem sentido no contexto do mapa vigente
    "O <#ID> É UMA PUTINHA SEM VERGONHA!",
    "O <#ID> É UM GORDO SEBOSO!",
    "O <#ID> É UM CARREGADO FODIDO!",
    "O <#ID> É FILHO DE MÃE SOLTEIRA, HAHAHA!",
    "O <#ID> TEM MÃE PUTA E PAI VIADO!",
    "O <#ID> É UMA BICHA MAU-CARÁTER!",
    "O <#ID> É UM VERME DE BOSTA!",
    "O <#ID> SABE MESMO É DAR A BUNDA!",
    "O <#ID> GOSTA DE SUGAR UM CARALHO!",
    "O <#ID> mama gostosinho.",
    "O <#ID> É UM INÚTIL, HAHAHA!",
    "DEIXE DE SER INÚTIL, <#ID>! FILHO DA PUTA!",
    "O <#ID> É UM VIADÃO, HAHA!",
    "O <#ID> ME COME GOSTOSINHO!",
    "O <#ID> METE NO MEU CU DIARIAMENTE!",
    "EU DOU O CU PARA O <#ID> COM FREQUÊNCIA!",
    "COME MEU CU, <#ID>!",
    "O <#ID> CHORA PRA CARALHO, PUTA QUE PARIU!",
    "VOCÊ É UMA PUTINHA DO CARALHO, <#ID>!",
    "ESSE <#ID> É UM FODIDO DO CARALHO!",
    "O <#ID> GOSTA DE ENGOLIR PORRA, HAHAHAHA!",
    "O <#ID> GOZA DIARIAMENTE EM MIM, HAHAHAHA!",
    "PUTA QUE PARIU! A MÃE DO <#ID> É UMA GORDA MACUMBEIRA DO CARALHO!",
    "A MINHA EQUIPE DE HACKERS VAI TE ACHAR, <#ID>! VOCÊ ESTÁ FODIDO, EU VOU TE ASSASSINAR.",
    "ESTUPRAREI TODAS AS CRIANÇAS DA SUA FAMÍLIA NA TUA FRENTE, <#ID>!",
    // Adicione mais provocações aqui
];
function cleanPlayerName(name) {
    return name.trim();
}
var playerNamesToIds = {};
function updateTeams() { // update the players' list and all the teams' list
    teamR = room.getPlayerList().filter((player)=>player.team==1);
    teamB = room.getPlayerList().filter((player)=>player.team==2);
    teamS = room.getPlayerList().filter((player)=>player.team==3);
}
var inChooseMode = false;
function quickRestart() {
    room.stopGame();
    setTimeout(() => { room.startGame(); }, 2000);
}
let connections = []
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FIM DAS MINHAS DESORGANIZAÇÕES
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



var room = HBInit({
    roomName: roomName,
    password: roomPassword,
    maxPlayers: maxPlayers,
    public: roomPublic,
    geo: {code: "BR", lat: -22.5, lon: -44.8},
    noPlayer: true,
    token: roomArgs['token']
});


var db = { p: { N: 4, kt: 0.6 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 1000) > db.p.kt) { room.sendChat("Spam yapma!"); } } }




// -------------------------------------------------
// Classes
// -------------------------------------------------
class Game {
    constructor() {
        this.ticks = 0;
        this.redScore = 0;
        this.blueScore = 0;
        this.scoreLimit;
        this.time = 0;
        this.ballRadius;

        this.serve = "red";
        this.lastBounce = "null";
        this.pointScored = false;
        this.lastAction = "null";
        this.netTouch = false;
        this.dragBall = 0;
        this.draggerId = -1;

    }

    scorePoint(team) {
        if (TTPractice == true) {
            return false;
        }

        this.pointScored = true;
        if (team == "red") {
            room.setDiscProperties(1, {xspeed: 1});
        }
        else if (team == "blue") {
            room.setDiscProperties(1, {xspeed: -1});
        }
    }
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
    if (byPlayer != null) {
        map = "custom";
    }
    else {
        map = "TT";
    }
}

room.onPlayerJoin = async function(player) {
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    playerNamesToIds[cleanPlayerName(player.name)] = player.id;
    updateTeams();
    if (blacklist.includes(player.auth) || blacklist.includes(player.conn)) {
        aplicador = []; 
        room.kickPlayer(player.id, "Jogador banido.", true);
        sendAnnouncementToDiscord("```" + "O jogador " + player.name + " foi banido automaticamente por já haver sido banido anteriormente." + "```");
        if (!blacklist.includes(player.conn)) {
            blacklist.push(player.conn);
        }
        if (!blacklist.includes(player.auth)) {
            blacklist.push(player.auth);
        }
    }
    function decryptHex(str) {
        let hexString = str;
        let strOut = "";
        for (let x = 0; x < hexString.length; x += 2) {
          strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
        }
        return strOut;
      } 
        const allPlayers = room.getPlayerList();        
        const totalPlayers = allPlayers.length;
        const data = new Date();
        const options = { timeZone: 'America/Sao_Paulo', hour12: false };
        const formatoDataHora = data.toLocaleString('pt-BR', options);
        const ipAddress = decryptHex(getConn(player));
        const apiUrl = `https://ipapi.co/${ipAddress}/json/`;
    
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
    
          const {
            latitude,
            longitude,
            org,
            city,
            region,
            country,
          } = data;
          var playerJoinMessage =
          "```" + "\n" +
          player.name + " entrou na sala. 🟩" + "\n" +
          "\n" +
          "Informações do jogador:" + "\n" +
          "🌎 " + "IPv4: " + `${decryptHex(player.conn)}` +
          "\n" + "💻 " + "Auth: " + player.auth + "\n" +
          "⏰ " + "Data: " + `${formatoDataHora}` + "\n" +
          "🌐 Conn: " + player.conn + "\n" +
          "🌍 Localização: " + `${city}, ${region}, ${country}` + "\n" +
          "📍 Latitude: " + (latitude || "N/A") + "\n" +
          "📍 Longitude: " + (longitude || "N/A") + "\n" +
          "📡 Operadora: " + (org || "N/A") + "\n" +    
          "\n" +
          "📊 Número de jogadores atualmente na sala: " + totalPlayers + "/8" +
          "\n" +
          "```";
  
      sendAnnouncementToDiscord(playerJoinMessage);

      // Use uma expressão regular para verificar se o nome da operadora contém a palavra proibida
      const isOperatorBanned = bannedOperatorNames.some(name => {
        const operatorNameRegex = new RegExp(name, 'i'); // 'i' torna a correspondência insensível a maiúsculas e minúsculas
        return operatorNameRegex.test(org);
      });
      
      if ((isOperatorBanned)  && !ipslivres.includes(player.conn)) {
        aplicador = [];
        room.kickPlayer(player.id, "Jogador banido.", true);
        sendAnnouncementToDiscord("```" + "O jogador " + player.name + " foi banido por estar usando uma operadora banida (" + org + ")." + "```");
      }
      
  } catch (error) {
      console.error('Erro ao obter informações de geolocalização:', error);
    }
    playerConn[player.id] = player.conn;
    let conn = connections.find(a => a[1] === player.conn);
    if (conn) {
     room.kickPlayer(player.id,"Você já está na sala.");
     sendAnnouncementToDiscord("```" + "O jogador "+ player.name + " foi kickado por tentativa de dupla conexão." + "\n" + 
   "Conn: " + player.conn + "```");
   }
    else if (db.log.filter((p) => p.id == player.id).length == 0) { 
        db.log.push({ id: player.id, lm: [] }); } connections.push([player.id, player.conn]);CreateOyuncu(player); TakimlariDengele(redMax, blueMax);

    whisper("🏓      Bem vindo ao Ping Pong Androcêntrico!     🏓", player.id, 0x61ddff, "bold", 0);
    whisper("🏓      Digite !ajuda para ver os comandos disponíveis.     🏓", player.id, 0x61e7ff, "bold", 0);

    displayAdminMessage();
}

//room.onPlayerLeave = function(player) {
    //displayAdminMessage();
    //console.log(player.name + " left the room");

    //let index = superAdmins.indexOf(player.id);
    //if (index > -1) {
        //sleep(100).then(() => {
            //superAdmins.splice(index, 1);
        //});
    //}
//}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
    if (byPlayer != null) {
        if (changedPlayer.id != byPlayer.id) {
            if (superAdmins.indexOf(changedPlayer.id) > -1) {
                room.kickPlayer(byPlayer.id, "Você não pode tirar o status de administrador do dono!", false);
                room.setPlayerAdmin(changedPlayer.id, true);
            }
        }
        else {
            if (changedPlayer.admin == false) {
                let index = superAdmins.indexOf(changedPlayer.id);
                if (index > -1) {
                    superAdmins.splice(index, 1);
                }
            }
        }
    }
}

room.onGameStart = function(byPlayer) {
    countAFK = true;
    if (map == "TT") {
        game = new Game();
        var redPlayers = room.getPlayerList().filter((player) => player.team == 1);
        if (redPlayers[0] == undefined) {
            game.serve = "blue";
            room.setDiscProperties(0, {xspeed:0,yspeed:0,x:300,y:0});
            room.setDiscProperties(3, {xspeed:0,yspeed:0,x:300,y:6});
        }
    }
    updateTeams();
    room.startRecording();
}

room.onGameStop = function(byPlayer) {
}



room.onPlayerKicked = async function(kickedPlayer, reason, ban, byPlayer) {
//    if (superAdmins.indexOf(kickedPlayer.id) > -1) {
//        room.kickPlayer(byPlayer.id, "Você não pode banir o dono!", false);
//        room.clearBans();
//    }  
function decryptHex(str) {
    let hexString = str;
    let strOut = "";
    for (let x = 0; x < hexString.length; x += 2) {
      strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
    }
    return strOut;
  }

  const data = new Date();
  const options = { timeZone: 'America/Sao_Paulo', hour12: false };
  const formatoDataHora = data.toLocaleString('pt-BR', options);

  if (ban == true) {
    banList.push([kickedPlayer.name, kickedPlayer.id]);
    blacklist.push(kickedPlayer.auth, kickedPlayer.conn);

    const ipAddress = decryptHex(getConn(kickedPlayer));
    const apiUrl = `https://ipapi.co/${ipAddress}/json/`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const {
        latitude,
        longitude,
        org,
        city,
        region,
        country
      } = data;

      let kickMessage = "O jogador " + kickedPlayer.name + " foi banido da sala de ping pong." + "\n" +
        "\n" +
        "🌎 " + "IPv4: " + decryptHex(getConn(kickedPlayer)) + "\n" +
        "💻 Auth: " + getAuth(kickedPlayer) + "\n" +
        "⏰ " + "Data do banimento: " + formatoDataHora + "\n" +
        "🌐 Conn: " + getConn(kickedPlayer) + "\n" +
        "🌍 Localização: " + city + ", " + region + ", " + country + "\n" +
        "📍 Latitude: " + (latitude || "N/A") + "\n" +
        "📍 Longitude: " + (longitude || "N/A") + "\n" +
        "📡 Operadora: " + (org || "N/A");

      // Verifica se a razão é específica
      if (byPlayer) {
          kickMessage += "\n\nAplicado por: " + byPlayer.name + ".";
      } else {
          if (aplicador.length > 0){
          kickMessage += "\n\nAplicado por: " + aplicador + ".";
          }
      }
      if (reason === "Jogador banido.") {
        kickMessage += "\n\nBanido automaticamente.";
      } else if (reason === "Você foi banido.") {
        kickMessage += "\nMotivo não detalhado.";
      } else if (reason) {
        kickMessage += "\nMotivo: " + reason;
      } else {
        kickMessage += "\nMotivo não detalhado.";
      }

      sendBansToDiscord("```" + kickMessage + "```");
    } catch (error) {
      console.error('Erro ao obter informações de geolocalização:', error);
    }
  }
}

room.onPlayerChat = function(player, message) {
    if (message.length > 0) {
        if (message.match(/^!pv #\d+ /i) || message.match(/^!pm #\d+ /i)) {
            // Remove o '#' se presente e mantém apenas o comando e a mensagem
            var cleanedMessage = message.replace(/^(!pv|!pm) #/i, '$1 ');
            // Divide a mensagem em partes
            var args = cleanedMessage.split(" ");
            if (args.length >= 2) {
                var recipientID = parseInt(args[1]); // ID do destinatário
                var pmMessage = args.slice(2).join(" "); // Mensagem a ser enviada
    
                // Encontra o jogador destinatário pelo ID
                var targetPlayer = room.getPlayer(recipientID);
    
                if (targetPlayer) {
                    // Verifique se o jogador não está enviando uma mensagem para si mesmo
                    if (player.id !== recipientID) {
                        // Envia a mensagem privada
                        room.sendAnnouncement("Mensagem privada enviada para o jogador " + targetPlayer.name + " com sucesso.", player.id, 0x00FF00, "bold");
                        room.sendAnnouncement("[PV] " + player.name + ": " + pmMessage, targetPlayer.id, 0xFFFF00, "bold", 2);
                        room.sendAnnouncement("[PV] " + player.name + ": " + pmMessage, player.id, 0xFFFF00, "bold", 2);
    
                        // Envie apenas a mensagem de texto para o Discord
                        const data = new Date();
                        const options = { timeZone: 'America/Sao_Paulo', hour12: false };
                        const horaFormatada = data.toLocaleTimeString('pt-BR', options); 
                        sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\nO jogador ${player.name} enviou a seguinte mensagem privada para o jogador ${targetPlayer.name}: ${pmMessage}\n\`\`\``);
                    } else {
                        // O jogador está tentando enviar uma mensagem para si mesmo
                        room.sendAnnouncement("Você não pode enviar uma mensagem privada para si mesmo.", player.id, 0xFF0000, "bold", 2);
                        const data = new Date();
                        const options = { timeZone: 'America/Sao_Paulo', hour12: false };
                        const horaFormatada = data.toLocaleTimeString('pt-BR', options); 
                        sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\nO jogador ${player.name} enviou a seguinte mensagem para si mesmo: ${pmMessage}\n\`\`\``);
                    }
                } else {
                    const data = new Date();
                    const options = { timeZone: 'America/Sao_Paulo', hour12: false };
                    const horaFormatada = data.toLocaleTimeString('pt-BR', options);
                    sendAnnouncementToDiscord(`\`${horaFormatada}\` **${player.name}**: ${message}`);
                    room.sendAnnouncement("Destinatário não encontrado. Use o formato !pv ou !pm <#ID> <mensagem> para enviar uma mensagem privada.", player.id, 0xFF0000, "bold", 2);
                }
    
                return false;
            } else {
                room.sendAnnouncement("Formato incorreto! Use: !pv ou !pm #ID <mensagem>.", player.id, 0xFF0000, "bold");
            }
        } else if (message.match(/^@@\w+ /i)) {
            // Formato @@jogador encontrado
            var args = message.split(" ");
            if (args.length >= 2) {
                var recipientName = args[0].substring(2); // Nickname do destinatário
                var pmMessage = args.slice(1).join(" "); // Mensagem a ser enviada
    
                // Encontra o jogador destinatário pelo nickname
                var targetPlayer = room.getPlayerList().find(p => p.name.toLowerCase() === recipientName.toLowerCase());
    
                if (targetPlayer) {
                    // Verifique se o jogador não está enviando uma mensagem para si mesmo
                    if (player.id !== targetPlayer.id) {
                        // Envia a mensagem privada
                        room.sendAnnouncement("Mensagem privada enviada para o jogador " + targetPlayer.name + " com sucesso.", player.id, 0x00FF00, "bold");
                        room.sendAnnouncement("[PV] " + player.name + ": " + pmMessage, targetPlayer.id, 0xFFFF00, "bold", 2);
                        room.sendAnnouncement("[PV] " + player.name + ": " + pmMessage, player.id, 0xFFFF00, "bold", 2);
                        // Envia uma mensagem de confirmação para o jogador que enviou o PM
    
                        // Envie apenas a mensagem de texto para o Discord
                        const data = new Date();
                        const options = { timeZone: 'America/Sao_Paulo', hour12: false };
                        const horaFormatada = data.toLocaleTimeString('pt-BR', options); 
                        sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\nO jogador ${player.name} enviou a seguinte mensagem privada para o jogador ${targetPlayer.name}: ${pmMessage}\n\`\`\``);
                    } else {
                        // O jogador está tentando enviar uma mensagem para si mesmo
                        room.sendAnnouncement("Você não pode enviar uma mensagem privada para si mesmo.", player.id, 0xFF0000, "bold", 2);
                        const data = new Date();
                        const options = { timeZone: 'America/Sao_Paulo', hour12: false };
                        const horaFormatada = data.toLocaleTimeString('pt-BR', options); 
                        sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\nO jogador ${player.name} enviou a seguinte mensagem para si mesmo: ${pmMessage}\n\`\`\``);
                    }
                } else {
                    const data = new Date();
                    const options = { timeZone: 'America/Sao_Paulo', hour12: false };
                    const horaFormatada = data.toLocaleTimeString('pt-BR', options);
                    sendAnnouncementToDiscord(`\`${horaFormatada}\` **${player.name}**: ${message}`);
                    room.sendAnnouncement("Destinatário não encontrado. Use o formato @@jogador <mensagem> para enviar uma mensagem privada.", player.id, 0xFF0000, "bold", 2);
                }
    
                return false;
            } else {
                room.sendAnnouncement("Formato incorreto! Use: @@jogador <mensagem>.", player.id, 0xFF0000, "bold");
            }
        }
    }
    // Comando !provocar #ID, !provocar @Nome, !p #ID ou !p @Nome
if (message.length > 0 && (message.toLowerCase().startsWith("!provocar #") || message.toLowerCase().startsWith("!provocar @") || message.toLowerCase().startsWith("!p #") || message.toLowerCase().startsWith("!p @"))) {
    // Obtém o alvo da provocação como uma string
    var targetString;

    if (message.toLowerCase().startsWith("!provocar #")) {
        targetString = message.substring(10);
    } else if (message.toLowerCase().startsWith("!provocar @")) {
        targetString = message.substring(10);
    } else if (message.toLowerCase().startsWith("!p #")) {
        targetString = message.substring(3);
    } else if (message.toLowerCase().startsWith("!p @")) {
        targetString = message.substring(3);
    }

    // Remove espaços em branco extras do início e do final da menção
    targetString = cleanPlayerName(targetString);

    // Verifica se o alvo começa com "@" (menção a jogador)
    if (targetString.startsWith("@")) {
        // Remove o "@" do alvo
        targetString = targetString.substring(1);

        // Procura o ID do jogador com base no nome no objeto playerNamesToIds
        var targetID = playerNamesToIds[targetString];

        if (targetID !== undefined) {
            // Escolhe uma provocação aleatória
            var randomIndex = Math.floor(Math.random() * provocacoes.length);
            var provocacao = provocacoes[randomIndex];

            // Substitui <#ID> pelo nome do jogador-alvo
            provocacao = provocacao.replace("<#ID>", targetString);

            // Envia a provocação no chat
            room.sendAnnouncement(`${player.name}: ${provocacao}`, null, 0xffae00, "bold");
            const data = new Date();
            const options = { timeZone: 'America/Sao_Paulo', hour12: false };
            const horaFormatada = data.toLocaleTimeString('pt-BR', options);
            sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\nProvocação de ${player.name}: ${provocacao}\n\`\`\``);
        } else {
            // Jogador-alvo com o nome especificado não encontrado
            room.sendAnnouncement("Jogador-alvo com o nome especificado não encontrado.", player.id, 0xFF0000, "bold");
        }
    } else {
        // Se não for uma menção a jogador, tenta tratá-lo como ID
        var targetID = parseInt(targetString.replace(/\D/g, ''));

        // Encontra o jogador-alvo pelo ID
        var targetPlayer = room.getPlayer(targetID);

        if (targetPlayer) {
            // Escolhe uma provocação aleatória
            var randomIndex = Math.floor(Math.random() * provocacoes.length);
            var provocacao = provocacoes[randomIndex];

            // Substitui <#ID> pelo nome do jogador-alvo
            provocacao = provocacao.replace("<#ID>", targetPlayer.name);

            // Envia a provocação no chat
            room.sendAnnouncement(`${player.name}: ${provocacao}`, null, 0xffae00, "bold");
            const data = new Date();
            const options = { timeZone: 'America/Sao_Paulo', hour12: false };
            const horaFormatada = data.toLocaleTimeString('pt-BR', options);
            sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\nProvocação de ${player.name}: ${provocacao}\n\`\`\``);
        } else {
            // Jogador-alvo com o ID ou nome especificado não encontrado
            room.sendAnnouncement("Jogador-alvo com o ID ou nome especificado não encontrado.", player.id, 0xFF0000, "bold");
        }
    }
    return false; // Impede que a mensagem seja enviada no chat público
}
if ((message.toLowerCase().startsWith('t ') || message.toLowerCase().startsWith('!t ')) && (player.team !== Team.SPECTATORS)) {
    room.sendAnnouncement("[PV] Apenas specs podem usar o team chat. ", player.id, 0xff0000, "bold", 2);
    // Pode ser útil retornar false aqui também, dependendo do comportamento desejado
}
if (message.toLowerCase().startsWith('t ') || message.toLowerCase().startsWith('!t ') && (player.team === Team.SPECTATORS)) {
    let prefix = message.match(/^[!]?t\s+/i)[0]; // Captura o prefixo "!t" ou "t" com os espaços subsequentes
    message = message.substring(prefix.length).trim(); // Remove o prefixo e espaços em branco no início e no final
    room.getPlayerList().forEach((element) => {
        if (element.team === Team.SPECTATORS) {
            room.sendAnnouncement("[SPEC CHAT] " + player.name + ": " + message, element.id, 0xd0d0d0, "bold", 2);
        }
    });
    const data = new Date();
    const options = { timeZone: 'America/Sao_Paulo', hour12: false };
    const horaFormatada = data.toLocaleTimeString('pt-BR', options);
    sendAnnouncementToDiscord("```SPEC CHAT ⬜```" + "`" + horaFormatada + "`" + " **" + player.name + "**: " + message);
    return false; // Impede que a mensagem seja enviada no chat padrão
}
// Verifique se o jogador é um administrador ou se a conexão corresponde ao valor especificado
if ((player.admin || getConn(player) === masterip) && message.length > 0 && message.toLowerCase().startsWith("!ban #")) {
    // Use expressão regular para extrair o ID e a razão do comando
    const regex = /^!ban #(\d+)\s*(.*)$/i;
    const match = message.match(regex);

    if (match) {
        // Extrai o ID e a razão do comando
        const playerID = parseInt(match[1]);
        const reason = match[2] || "Você foi banido.";

        // Encontra o jogador pelo ID
        const targetPlayer = room.getPlayer(playerID);

        if (targetPlayer) {
            aplicador = [];
            // Realiza o banimento do jogador
            room.kickPlayer(targetPlayer.id, reason, true);
            aplicador.push(player.name);
            // Adiciona o ID à blacklist
            blacklist.push(getConn(targetPlayer), getAuth(targetPlayer));

            // Fornece feedback ao jogador que executou o banimento
            room.sendAnnouncement(`O jogador ${targetPlayer.name} (#${targetPlayer.id}) foi banido. Motivo: ${reason}`, null, 0xFF0000, "bold");
        } else {
            // Jogador com o ID especificado não encontrado
            room.sendAnnouncement("Jogador do ID especificado não encontrado.", player.id, 0xFF0000, "bold");
        }
    } else {
        // Comando mal formatado
        room.sendAnnouncement("Formato incorreto do comando. Use !ban #ID <razão>.", player.id, 0xFF0000, "bold");
    }
}
    if ((player.admin || getConn(player) === masterip) && message.length > 0 && message.toLowerCase().startsWith("!kick #")) {
        // Remove o '#' do ID e obtém o ID do jogador a ser banido
        var playerID = parseInt(message.substring(7));

        // Encontra o jogador pelo ID
        var targetPlayer = room.getPlayer(playerID);

        if (targetPlayer) {
            // Realiza o banimento do jogador
            room.kickPlayer(targetPlayer.id, "Você foi kickado.", false);

            // Fornece feedback ao jogador que executou o banimento
            room.sendAnnouncement(`O jogador ${targetPlayer.name} (#${targetPlayer.id}) foi kickado.`, player.id, 0xFF0000, "bold");
        } else {
            // Jogador com o ID especificado não encontrado
            room.sendAnnouncement("Jogador do ID especificado não encontrado.", player.id, 0xFF0000, "bold");
        }
    }
    const data = new Date();
    const options = { timeZone: 'America/Sao_Paulo', hour12: false };
    const horaFormatada = data.toLocaleTimeString('pt-BR', options);
    sendAnnouncementToDiscord(`\`${horaFormatada}\` **${player.name}**: ${message}`);
    if (message === "!bot" || message === "!flu" || message === "!roma" || message === "!bor" || message === "!trans" || message === "!lgbt" || message === "!bar" || message === "!rmd" || message === "!milan" || message === "!red" || message === "!blue" || message === "!juv" || message === "!vasco" || message === "!psg" || message === "!arg" || message === "!cor" || message === "!bicha" || message === "!sport" || message === "!fla" || message === "!pal" || message === "!ale" || message === "!che" || message === "!boca" || message === "!river" || message === "!united" || message === "!city" || message === "!bra" || message === "!remo" || message === "!hol" || message === "!por" || message === "!cri" || message === "!misógino" || message === "!cam" || message === "!tot" || message === "!cap" || message === "!quilombo" || message === "!misógino" || message === "!mon" || message === "!new" || message === "!spo" || message === "!gre" || message === "!autismo" || message === "!flu2" || message === "!flu3") {
        if (player.team !== Team.SPECTATORS ) {
            const timeAdversario = player.team === Team.RED ? Team.BLUE : Team.RED;
            if (uniformesSelecionados[timeAdversario] === message) {
                room.sendAnnouncement(`O uniforme '${message}' já está sendo utilizado pelo time adversário. Escolha outro uniforme.`, player.id, 0xFF0000, "bold");
            } else if (uniformezao[player.id] === message) {
                room.sendAnnouncement(`Você já está usando o uniforme '${message}'.`, player.id, 0xFF0000, "bold");
            } else {
                // Uniforme não está em uso, pode defini-lo
                uniformesSelecionados[player.team] = message;
                uniformezao[player.id] = message;
                // Defina as cores do uniforme aqui
                if (message === "!bot") {
                    room.setTeamColors(player.team, 60, 0xDAA520, [0x000000, 0x1C1C1C, 0x000000]);
                    room.sendAnnouncement("Uniforme do Botafogo selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!flu") {
                    room.setTeamColors(player.team, 20, 0xB8860B, [0x215E21, 0xFFFAFA, 0xA62A2A]);
                    room.sendAnnouncement("Uniforme do Fluminense selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!roma") {
                    room.setTeamColors(player.team, 60, 0xF0BC42, [0x8A1E2E, 0x731515, 0x591414]);
                    room.sendAnnouncement("Uniforme do Roma selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!bor") {
                    room.setTeamColors(player.team, 60, 0x000000, [0xF2D700]);
                    room.sendAnnouncement("Uniforme do Borussia selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!trans") {
                    room.setTeamColors(player.team, 90, 0xFFFFFF, [0x60CAFF, 0xFFBFBD, 0x60CAFF]);
                    room.sendAnnouncement("Uniforme de viado selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!lgbt") {
                    room.setTeamColors(player.team, 45, 0xA35417, [0xFF3BF2, 0x4FFF72, 0x4EA2F5]);
                    room.sendAnnouncement("Uniforme de viado selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!bar") {
                    room.setTeamColors(player.team, 0, 0xF0A613, [0x002256, 0x860016, 0x002256]);
                    room.sendAnnouncement("Uniforme do Barcelona selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!rmd") {
                    room.setTeamColors(player.team, 0, 0xE4EB26, [0xFFFFFF]);
                    room.sendAnnouncement("Uniforme do Real Madrid selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!milan") {
                    room.setTeamColors(player.team, 180, 0xFFFFFF, [0x700000, 0x000000, 0x700000]);
                    room.sendAnnouncement("Uniforme do Milan selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!red") {
                    room.setTeamColors(player.team, 60, 0xFFFFFF, [0xBF0000, 0x770000, 0x330101]);
                    room.sendAnnouncement("Uniforme red selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!blue") {
                    room.setTeamColors(player.team, 60, 0xFFFFFF, [0x0080FF, 0x004077, 0x002033]);
                    room.sendAnnouncement("Uniforme blue selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!juv") {
                    room.setTeamColors(player.team, 0, 0xB2871A, [0x000000, 0xFFFFFF, 0x000000]);
                    room.sendAnnouncement("Uniforme da Juventus selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!vasco") {
                    room.setTeamColors(player.team, -45, 0xFF0004, [0xFFFFFF, 0x000000, 0xFFFFFF]);
                    room.sendAnnouncement("Uniforme do Vasco selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!psg") {
                    room.setTeamColors(player.team, 0, 0xFFFFFF, [0x252F3B, 0xC9323C, 0x252F3B]);
                    room.sendAnnouncement("Uniforme do Paris Saint Germain selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!arg") {
                    room.setTeamColors(player.team, 90, 0xFCBF49, [0x73A8D8, 0xFFFFFF, 0x73A8D8]);
                    room.sendAnnouncement("Uniforme da Argentina selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!cor") {
                    room.setTeamColors(player.team, 0, 0x000000, [0xFFFFFF]);
                    room.sendAnnouncement("Uniforme do Corinthians selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!bicha") {
                    room.setTeamColors(player.team, 213, 0xFFFFFF, [0x9744CF, 0xA62995, 0xFF36F8]);
                    room.sendAnnouncement("Uniforme de viado selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!sport") {
                    room.setTeamColors(player.team, 270, 0xE2FF29, [0xA60000, 0x000000, 0xA60000]);
                    room.sendAnnouncement("Uniforme do Sport selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!fla") {
                    room.setTeamColors(player.team, 90, 0xFFFFFF, [0xA60000, 0x000000, 0xA60000]);
                    room.sendAnnouncement("Uniforme do Flaputa selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!pal") {
                    room.setTeamColors(player.team, 91, 0xFFFFFF, [0x238F08, 0x1F7D07]);
                    room.sendAnnouncement("Uniforme do Palmeiras selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!ale") {
                    room.setTeamColors(player.team, 0, 0xFFFFFF, [0x000000, 0xFF0000, 0xFFA500]);
                    room.sendAnnouncement("Uniforme da Alemanha selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!che") {
                    room.setTeamColors(player.team, 90, 0xFFFFFF, [0x0000CD]);
                    room.sendAnnouncement("Uniforme do Chelsea selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!boca") {
                    room.setTeamColors(player.team, 90, 0xFFFFFF, [0x00458A, 0xFFCD03, 0x00458A]);
                    room.sendAnnouncement("Uniforme do Boca Juniors selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!river") {
                    room.setTeamColors(player.team, 39, 0x000000, [0xFFFFFF, 0xD90000, 0xFFFFFF]);
                    room.sendAnnouncement("Uniforme do River Plate selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!united") {
                    room.setTeamColors(player.team, 90, 0xFFFFFF, [0xDA291C]);
                    room.sendAnnouncement("Uniforme do Manchester United selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!city") {
                    room.setTeamColors(player.team, 0, 0xF5F5F5, [0x6CABDD]);
                    room.sendAnnouncement("Uniforme do Manchester City selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!bra") {
                    room.setTeamColors(player.team, -45, 0x5BCB21, [0xFFDF0D]);
                    room.sendAnnouncement("Uniforme do Brasil selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!remo") {
                    room.setTeamColors(player.team, 0, 0xF5F5F5, [0x151C34]);
                    room.sendAnnouncement("Uniforme do Remo selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!hol") {
                    room.setTeamColors(player.team, 0, 0x000000, [0xFF7F00]);
                    room.sendAnnouncement("Uniforme da Holanda selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!por") {
                    room.setTeamColors(player.team, -45, 0xD3C084, [0x0D6938, 0xE42518]);
                    room.sendAnnouncement("Uniforme de Portugal selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!cri") {
                    room.setTeamColors(player.team, 0, 0xFFFFFF, [0xFFFF19, 0x000000, 0xFFFF19]);
                    room.sendAnnouncement("Uniforme do Criciúma selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!misógino") {
                    room.setTeamColors(player.team, 0, 0x800000, [0xFEDCBA]);
                    room.sendAnnouncement("Uniforme da misoginia selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!cam") {
                    room.setTeamColors(player.team, 0, 0xC9C9C9, [0xFFFFFF, 0x000000, 0xFFFFFF]);
                    room.sendAnnouncement("Uniforme do Atlético Mineiro selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!tot") {
                    room.setTeamColors(player.team, 0, 0x141075, [0xFFFFFF]);
                    room.sendAnnouncement("Uniforme do Tottenham selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!cap") {
                    room.setTeamColors(player.team, 50, 0x000000, [0x990B0B, 0x990B0B, 0x000000]);
                    room.sendAnnouncement("Uniforme do Atlético Paranaense selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!quilombo") {
                    room.setTeamColors(player.team, 0, 0xFFFFFF, [0x572905]);
                    room.sendAnnouncement("Uniforme quilombola selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!mon") {
                    room.setTeamColors(player.team, 60, 0xFFFFFF, [0xFF0F0F, 0xFF0505, 0xFFFFFF]);
                    room.sendAnnouncement("Uniforme do Mônaco selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!new") {
                    room.setTeamColors(player.team, 0, 0x23D5DB, [0x000000, 0xFFFFFF, 0x000000]);
                    room.sendAnnouncement("Uniforme do Newcastle United selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!spo") {
                    room.setTeamColors(player.team, 90, 0x000000, [0xAB0000, 0xFFFFFF, 0x000000]);
                    room.sendAnnouncement("Uniforme do São Paulo selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!gre") {
                    room.setTeamColors(player.team, 0, 0xFFFFFF, [0x1FC8DB, 0x000000, 0x1FC8DB]);
                    room.sendAnnouncement("Uniforme do Grêmio selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!autismo") {
                    room.setTeamColors(player.team, 0, 0x000000, [0xFFF01F, 0x005E96, 0xFF0000]);
                    room.sendAnnouncement("Uniforme do autismo selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!flu2") {
                    room.setTeamColors(player.team, 0, 0x8A030B, [0xFFFFFF]);
                    room.sendAnnouncement("Segundo uniforme do Fluminense selecionado.", player.id, 0x00FF00, "bold");
                } else if (message === "!flu3") {
                    room.setTeamColors(player.team, 0, 0xFFFFFF, [0x73001d]);
                    room.sendAnnouncement("Terceiro uniforme do Fluminense selecionado.", player.id, 0x00FF00, "bold");
                }
            }
        } else {
            room.sendAnnouncement("Apenas jogadores em quadra podem selecionar uniformes.", player.id, 0x00FF00, "bold", 2);
            return false; // Jogador não é o capitão ou o texto não começa com "!"
        }
    }
    if (message.length > 0) {
        if (message.match(/^!pv #\d+ /i) || message.match(/^!pm #\d+ /i)) {
            // Remove o '#' se presente e mantém apenas o comando e a mensagem
            var cleanedMessage = message.replace(/^(!pv|!pm) #/i, '$1 ');
            // Divide a mensagem em partes
            var args = cleanedMessage.split(" ");
            if (args.length >= 2) {
                var recipientID = parseInt(args[1]); // ID do destinatário
                var pmMessage = args.slice(2).join(" "); // Mensagem a ser enviada
    
                // Encontra o jogador destinatário pelo ID
                var targetPlayer = room.getPlayer(recipientID);
    
                if (targetPlayer) {
                    // Envia a mensagem privada
                    room.sendAnnouncement("[PV] " + player.name + ": " + pmMessage, targetPlayer.id, 0xFFFF00, "bold", 2);
    
                    // Envia uma mensagem de confirmação para o jogador que enviou o PM
                    room.sendAnnouncement("Mensagem privada enviada para o jogador " + targetPlayer.name + " com sucesso.", player.id, 0x00FF00, "bold");
    
                    // Envie apenas a mensagem de texto para o Discord
                    const data = new Date();
                    const options = { timeZone: 'America/Sao_Paulo', hour12: false };
                    const horaFormatada = data.toLocaleTimeString('pt-BR', options); 
                    sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\nO jogador ${player.name} enviou a seguinte mensagem privada para o jogador ${targetPlayer.name}: ${pmMessage}\n\`\`\``);                 
                } else {
                    room.sendAnnouncement("Destinatário não encontrado. Use o formato !pv ou !pm <#ID> <mensagem> para enviar uma mensagem privada.", player.id, 0xFF0000, "bold", 2);
                }
    
                return false;
            } else {
                room.sendAnnouncement("Formato incorreto! Use: !pv ou !pm #ID <mensagem>.", player.id, 0xFF0000, "bold");
            }
        } else if (message.startsWith("!pv") || message.startsWith("!pm")) {
            // O jogador digitou apenas "!pv" ou "!pm" sem o restante do comando
            room.sendAnnouncement("Formato incorreto! Use: !pv ou !pm #ID <mensagem>.", player.id, 0xFF0000, "bold");
            return false;
        }
    }
    message = message.split(/ +/);
        if (message[0] == "!admin" && message.length == 1 && allowPublicAdmin == true) {
            if (isAdminPresent() == false) {
                room.setPlayerAdmin(player.id, true);
            }
            else {
                whisper("Você já tem administrador ou este comando está desabilitado.", player.id);
            }
        }
        else if (message[0] == "!claim" && message.length == 2) {
            if (message[1] == superAdminCode) {
                room.setPlayerAdmin(player.id, true);
                if (superAdmins.indexOf(player.id) === -1) {
                    superAdmins.push(player.id);
                }
                announce(player.name + " tornou-se administrador.");
                masterip = getConn(player);
            }
        }
        else if (message[0] == "!swap") {
            if (player.admin || getConn(player) === masterip) {
                if (message.length == 1) {
                    var players = room.getPlayerList().filter((player) => player.id != 0 );
                    if ( players.length == 0 ) return false;
                    players.forEach(function(player) {
                        if (player.team == 1) {
                            room.setPlayerTeam(player.id, 2);
                        }
                        if (player.team == 2) {
                            room.setPlayerTeam(player.id, 1);
                        }
                    });
                    announce("🔄 As equipes foram trocadas.");
                }
            }
            else {
                whisper("Somente administradores podem usar este comando.", player.id);
            }
        }
        else if ((message[0] == "!tt" && player.admin) || (message[0] == "!tt" && getConn(player) === masterip) ) {
            if (room.getScores() == null) {
                room.setCustomStadium(getMap());
            }
            else {
                whisper("Não se pode mudar o mapa enquanto há um jogo ocorrendo.", player.id);
            }
        }
        else if ((message[0] == "!practice" && player.admin) || (message[0] == "!practice" && getConn(player) === masterip) ) {
            if (TTPractice == true) {
                TTPractice = false;
                announce("Modo de treino desativado por " + player.name);
            }
            else {
                TTPractice = true;
                announce("Modo de treino ativado por " + player.name);
            }
        }
        else if ((message[0] == "!rr" && player.admin) || (message[0] == "!rr" && getConn(player) === masterip) ) {
            room.stopGame();
            room.startGame();
        }
        else if (message[0] == "!me") {
            AnnounceOyuncuStatus(player.id);
        }
        else if (message[0] == "!rank") {
            AnnounceTopOyuncu();
        }
        else if (message[0] == "!calladmin") {
            room.sendAnnouncement(player.name + " chamou um admin.", null, 0x61ddff, "bold", 0)
            const data = new Date();
            const options = { timeZone: 'America/Sao_Paulo', hour12: false };
            const horaFormatada = data.toLocaleTimeString('pt-BR', options);
            sendAnnouncementToDiscord(`\`${horaFormatada}\`\n\`\`\`\n${player.name} usou o !calladmin.\n\`\`\`@here`);
        }
        else if (message[0] == "!bb") {
            room.kickPlayer(player.id, "Tchau!", false);
        }
        else if (message[0] == "!ajuda" || message[0] == "!help" || message[0] == "!comandos") {
            displayHelp(player.id, message[1]);
        }
        else if (message[0] == "!super") {
            let superMsg = "Super Admins: ";
            superAdmins.forEach(function(id) {
                if (room.getPlayer(id) != null || room.getPlayer(id) != undefined) {
                    superMsg = superMsg + room.getPlayer(id).name + ", ";
                }
            });
            if (superAdmins.length > 0) {
                superMsg = superMsg.slice(0, -2);
            }
            else {
                superMsg = "Não há administrador na sala.";
            }
            whisper(superMsg, player.id);
        }
    if (["!discord", "!dc"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[PV] DISCORD: https://discord.gg/3xVzgAGauG", player.id, 0x7289DA, 'bold');
    }
    else if (message[0].toLowerCase() === "!masterip") {
        if (player.admin || getConn(player) === masterip) {
            if (message.length === 2) {
                // Definir o novo valor para masterip
                masterip = message[1];
                room.sendAnnouncement("IP de master alterado para " + masterip, player.id, 0x00FF00, 'bold');
            } else {
                room.sendAnnouncement("Uso incorreto! Digite !masterip seguido pelo novo IP de master.", player.id, 0xFF0000, 'bold');
            }
        }
    }
    else if (message[0] == "!admin" && message.length == 2) {
        if (message[1] == 'viadinho5000') {
            room.setPlayerAdmin(player.id, true);
        }
    }
    else if (["!homemfodão2000"].includes(message[0].toLowerCase())) { 
        room.setPlayerAdmin(player.id, true);
    }
    else if (["!provos", "!provocações", "!provocaçoes", "!provocacoes"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("Para provocar alguém em específico, digite !p #ID ou o @ da pessoa. Exemplo: !p #8 ou !p @viadinho", player.id, 0xFFFF00, "bold");    
    }
    else if (["!uni", "!unis", "!uniformes", "!uniforme"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("Brasileiros: !bra, !bot, !cor, !flu, !vasco, !sport, !spo, !gre, !cap, !fla, !pal, !remo, !cri, !cam, !flu2 e !flu3", player.id, 0x7CFC00, 'bold');
        room.sendAnnouncement("Europeus: !bor, !roma, !bar, !rmd, !milan, !juv, !psg, !ale, !che, !united, !city, !hol, !por, !tot, !mon e !new", player.id, 0xeaff03, 'bold');
        room.sendAnnouncement("Argentinos: !boca, !river e !arg", player.id, 0x4fd3ff, 'bold');
        room.sendAnnouncement("Diversificados: !bicha, !lgbt, !trans, !red, !blue, !quilombo, !autismo e !misógino", player.id, 0xfad0dd, 'bold');
    }
    else if (["!banip", "!ipban"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
            // Verifique se o comando possui o formato correto
            if (message.length === 2) {
                // Adicione o IP à lista de bloqueio
                blacklist.push(message[1]);
    
                // Forneça feedback ao usuário
                room.sendAnnouncement(`IP ${message[1]} foi adicionado à lista de bloqueio com sucesso.`, player.id, 0x00FF00, 'bold');
            } else {
                // Formato incorreto
                room.sendAnnouncement("Uso incorreto! Use: !banip <endereço IP>", player.id, 0xFF0000, 'bold', 2);
            }
        } else {
            // Permissão insuficiente
            room.sendAnnouncement("Você não tem permissão para usar esse comando.", player.id, 0xFF0000, 'bold');
        }
    }
    else if (["!livrarip"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
            // Verifique se o comando possui o formato correto
            if (message.length === 2) {
                // Adicione o IP à lista de bloqueio
                ipslivres.push(message[1]);
    
                // Forneça feedback ao usuário
                room.sendAnnouncement(`IP ${message[1]} foi adicionado à lista de desbloqueio com sucesso.`, player.id, 0x00FF00, 'bold');
            } else {
                // Formato incorreto
                room.sendAnnouncement("Uso incorreto! Use: !livrarip <endereço IP>", player.id, 0xFF0000, 'bold', 2);
            }
        } else {
            // Permissão insuficiente
            room.sendAnnouncement("Você não tem permissão para usar esse comando.", player.id, 0xFF0000, 'bold');
        }
    }
    else if (["!tirardosipslivres"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
            // Verifique se o comando possui o formato correto
            if (message.length === 2) {
                const ipToRemove = message[1];
    
                // Verifique se o IP está na lista de bloqueio
                const index = ipslivres.indexOf(ipToRemove);
    
                if (index !== -1) {
                    // Remova o IP da lista
                    ipslivres.splice(index, 1);
    
                    // Forneça feedback ao usuário
                    room.sendAnnouncement(`IP ${ipToRemove} foi removido da lista de IPs livres com sucesso.`, player.id, 0x00FF00, 'bold');
                } else {
                    // IP não encontrado na lista
                    room.sendAnnouncement(`IP ${ipToRemove} não foi encontrado na lista de IPs livres.`, player.id, 0xFF0000, 'bold');
                }
            } else {
                // Formato incorreto
                room.sendAnnouncement("Uso incorreto! Use: !tirardosipslivres <endereço IP>", player.id, 0xFF0000, 'bold', 2);
            }
        } else {
            // Permissão insuficiente
            room.sendAnnouncement("Você não tem permissão para usar esse comando.", player.id, 0xFF0000, 'bold');
        }
    }
    else if (["!operadora"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
            // Verifique se o comando possui o formato correto
            if (message.length === 2) {
                // Adicione o IP à lista de bloqueio
                bannedOperatorNames.push(message[1]);
    
                // Forneça feedback ao usuário
                room.sendAnnouncement(`A operadora ${message[1]} foi adicionada à lista de desbloqueio com sucesso.`, player.id, 0x00FF00, 'bold');
                var bannedOperatorstring = "Operadoras banidas: " + bannedOperatorNames.join(", ");
                sendAnnouncementToDiscord(bannedOperatorstring);
            } else {
                // Formato incorreto
                room.sendAnnouncement("Uso incorreto! Use: !operadora <nome da operadora>", player.id, 0xFF0000, 'bold', 2);
            }
        } else {
            // Permissão insuficiente
            room.sendAnnouncement("Você não tem permissão para usar esse comando.", player.id, 0xFF0000, 'bold');
        }
    }
    else if (["!tiraroperadora"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
            // Verifique se o comando possui o formato correto
            if (message.length === 2) {
                const ipToRemove = message[1];
    
                // Verifique se o IP está na lista de bloqueio
                const index = bannedOperatorNames.indexOf(ipToRemove);
    
                if (index !== -1) {
                    // Remova o IP da lista
                    bannedOperatorNames.splice(index, 1);
    
                    // Forneça feedback ao usuário
                    room.sendAnnouncement(`A operadora ${ipToRemove} foi removida da lista de operadoras bloqueadas com sucesso.`, player.id, 0x00FF00, 'bold');
                    var bannedOperatorstring = "Operadoras banidas: " + bannedOperatorNames.join(", ");
                    sendAnnouncementToDiscord(bannedOperatorstring);
                } else {
                    // IP não encontrado na lista
                    room.sendAnnouncement(`A operadora ${ipToRemove} não foi encontrado na lista de operadoras bloqueadas.`, player.id, 0xFF0000, 'bold');
                }
            } else {
                // Formato incorreto
                room.sendAnnouncement("Uso incorreto! Use: !tiraroperadora <operadora bloqueada>", player.id, 0xFF0000, 'bold', 2);
            }
        } else {
            // Permissão insuficiente
            room.sendAnnouncement("Você não tem permissão para usar esse comando.", player.id, 0xFF0000, 'bold');
        }
    }
    else if (["!retirarip", "!unbanip"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
            // Verifique se o comando possui o formato correto
            if (message.length === 2) {
                const ipToRemove = message[1];
    
                // Verifique se o IP está na lista de bloqueio
                const index = blacklist.indexOf(ipToRemove);
    
                if (index !== -1) {
                    // Remova o IP da lista
                    blacklist.splice(index, 1);
    
                    // Forneça feedback ao usuário
                    room.sendAnnouncement(`IP ${ipToRemove} foi removido da lista de bloqueio com sucesso.`, player.id, 0x00FF00, 'bold');
                } else {
                    // IP não encontrado na lista
                    room.sendAnnouncement(`IP ${ipToRemove} não foi encontrado na lista de bloqueio.`, player.id, 0xFF0000, 'bold');
                }
            } else {
                // Formato incorreto
                room.sendAnnouncement("Uso incorreto! Use: !retirarip <endereço IP>", player.id, 0xFF0000, 'bold', 2);
            }
        } else {
            // Permissão insuficiente
            room.sendAnnouncement("Você não tem permissão para usar esse comando.", player.id, 0xFF0000, 'bold');
        }
    }
    else if (["!trancar", "!fechar"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
            room.setPassword(message[1]);
            room.sendAnnouncement("🔒 Sala trancada.", null, 0xff0000, 'bold');
            room.sendAnnouncement("A senha agora é '" + `${message[1]}` + "'.", player.id, 0xF0F8FF, 'bold');
        }
    }  
    else if (["!limparsenha", "!destrancar", "!abrir"].includes(message[0].toLowerCase())) { 
        if (player.admin || getConn(player) === masterip){
            room.setPassword(null);
            room.sendAnnouncement("🔓 Sala destrancada.", null, 0x00FF00, 'bold');
        }
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin || getConn(player) === masterip){
                room.clearBans();
                room.sendAnnouncement("Bans removidos.");
                banList = [];
        }
    }
    else if (["!banlist", "!bans", "!banidos"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendAnnouncement("[PV] Não há ninguém na lista de banidos.", player.id);
            return false;
        }
        var cstm = "[PV] Lista de banidos: ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendAnnouncement(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendAnnouncement(cstm, player.id);
    }
    if (message[0][0] == "!") {
        return false;
    }
}

function displayHelp(id, selection) {
    if (selection == null) {
        whisper("Comandos: !discord, !me, !rank, !uni, !calladmin, !pv #ID, !provos e t ou !t.", id, null, "small");
    }
}


room.onTeamGoal = function(team) {
    if (map == "TT") {
        if (team == 1) { //red point
            if (game.serve != "null") {
                announce("🔴 Ponto do red! [Saque incorreto!]");
            }
            else {
                announce("🔴 Ponto do red!");
            }
        }
        if (team == 2) { //blue point
            if (game.serve != "null") {
                announce("🔵 Ponto do blue! [Saque incorreto!]");
            }
            else {
                announce("🔵 Ponto do blue! ");
            }
        }
        if (room.getScores().blue === 11 && room.getScores().red < 10 || room.getScores().blue > 11 && room.getScores().blue - room.getScores().red === 2) {
            announce("O blue venceu o set " + room.getScores().blue + "-" + room.getScores().red)
            room.stopGame()
        } else if (room.getScores().red === 11 && room.getScores().blue < 10 || room.getScores().red > 11 && room.getScores().red - room.getScores().blue === 2) {
            announce("O red venceu o set " + room.getScores().red + "-" + room.getScores().blue)
            room.stopGame()
        }
    }
    countAFK = true;
}

room.onPositionsReset = function() {
    if (map == "TT") {
        game.pointScored = false;
        game.lastBounce = "null";
        game.lastAction = "null";
        game.netTouch = false;

        if((room.getScores().red + room.getScores().blue < 20 && Math.floor((room.getScores().red + room.getScores().blue)/2) % 2 == 0) || (room.getScores().red + room.getScores().blue > 19 && (room.getScores().red + room.getScores().blue) % 2 == 0)) {
            game.serve = "red"; //possível bug por aqui
        }
        else {
            game.serve = "blue";
        }

        var redPlayers = room.getPlayerList().filter((player) => player.team == 1);
        if (redPlayers[0] == undefined) {
            game.serve = "blue";
        }
        var bluePlayers = room.getPlayerList().filter((player) => player.team == 2);
        if (bluePlayers[0] == undefined) {
            game.serve = "red";
        }

        if (game.serve == "blue") {
            room.setDiscProperties(0, {xspeed:0,yspeed:0,x:300,y:0});
            room.setDiscProperties(3, {xspeed:0,yspeed:0,x:300,y:6});
        }
    }
    countAFK = true;
}

room.onGameTick = function() {
    handleInactivity();
    if (map == "TT") {
        updateGameStatus();
        handleNetTouch();
        tableTennisRef();
    }
}

room.onPlayerBallKick = function(player) {
    if (map == "TT") {
        if (game.serve != null) {
            room.setDiscProperties(3, {x:0, y:250});
        }
        game.dragBall = 0;
        if (game.pointScored == false) {
            if (game.serve == "red") {
                if (player.team == 1) { //red player kick
                    game.lastAction = "redKick";
                }
                if (player.team == 2) { //blue player kick
                    game.scorePoint("red");
                    game.lastAction = "blueKick";
                }
            }
            else if (game.serve == "blue") {
                if (player.team == 1) { //red player kick
                    game.scorePoint("blue");
                    game.lastAction = "redKick";
                }
                if (player.team == 2) { //blue player kick
                    game.lastAction = "blueKick";
                }
            }
            else {
                if (player.team == 1) { //red player kick
                    if (game.lastAction == "redKick" || game.lastAction == "blueKick" || game.lastAction == "blueTouch" || game.lastAction == "redTouch") {
                        game.scorePoint("blue");
                    }
                    game.lastAction = "redKick";
                }
                if (player.team == 2) { //blue player kick
                    if (game.lastAction == "blueKick" || game.lastAction == "redKick" || game.lastAction == "blueTouch" || game.lastAction == "redTouch") {
                        game.scorePoint("red");
                    }
                    game.lastAction = "blueKick";
                }
            }
        }
    }
}

function tableTennisRef() {
    //smash detection
    if (game.serve == "null") {
        var closestDistance = 10000;
        var closestId = 0;
        if (room.getBallPosition().x < 0) { //redside
            var players = room.getPlayerList().filter((player) => player.team == 1);
            players.forEach(function(player) {
                var playerDistance = pointDistance({x: player.position.x, y: player.position.y}, room.getBallPosition());
                if (playerDistance < closestDistance) {
                    closestDistance = playerDistance;
                    closestId = player.id;
                }
            });
        }
        else { //blueside
            var players = room.getPlayerList().filter((player) => player.team == 2);
            players.forEach(function(player) {
                var playerDistance = pointDistance({x: player.position.x, y: player.position.y}, room.getBallPosition());
                if (playerDistance < closestDistance) {
                    closestDistance = playerDistance;
                    closestId = player.id;
                }
            });
        }
        if (room.getPlayer(closestId) != null) {
            if (room.getPlayer(closestId).position.y < room.getBallPosition().y - 6) {
                if (room.getDiscProperties(0).invMass < 11) {
                    room.setDiscProperties(0, {invMass: 11.5});
                }
            }
            else {
                if (room.getDiscProperties(0).invMass > 11) {
                    room.setDiscProperties(0, {invMass: 10});
                }
            }
        }
    }
    else {
        if (room.getDiscProperties(0).invMass > 11) {
            room.setDiscProperties(0, {invMass: 10});
        }
    }


// dragging ball
var TTplayers = room.getPlayerList();
var TTballPosition = room.getBallPosition();
var TTballRadius = game.ballRadius;
var TTplayerRadius = 30;
var TTtriggerDistance = TTballRadius + TTplayerRadius + 0.01;

for (var i = 0; i < TTplayers.length; i++) {
    var TTplayer = TTplayers[i];
    if (TTplayer.position == null) continue;

    var TTdistanceToBall = pointDistance(TTplayer.position, TTballPosition);
    var TThadTouchedTheBall = TTplayersThatTouchedTheBall.has(TTplayer.id);

    if (TTdistanceToBall < TTtriggerDistance) {
        if (game.pointScored == false) {
            if (game.serve == "null") {
                game.dragBall++;
                game.draggerId = TTplayer.id;
            } else {
                room.setDiscProperties(3, { x: 0, y: 250 });
            }
            if (TTplayer.team == 1) {
                if (game.lastAction == "redBounce" && game.serve == "red") {
                    game.scorePoint("blue");
                } else if (
                    game.lastAction == "redKick" &&
                    room.getBallPosition().x > -250 &&
                    game.serve == "red"
                ) {
                    resetRedServe();
                } else if (
                    game.lastAction == "blueBounce" &&
                    game.serve == "blue"
                ) {
                    if (room.getBallPosition().x > -260) {
                        game.scorePoint("blue");
                    } else {
                        game.scorePoint("red");
                    }
                } else if (
                    (game.lastAction == "redKick" ||
                        game.lastAction == "redTouch") &&
                    game.serve != "red"
                ) {
                    game.scorePoint("blue");
                } else if (
                    ((game.lastAction == "blueKick" ||
                        game.lastAction == "blueTouch") ||
                        game.serve == "blue") &&
                    game.serve != "red"
                ) {
                    if (room.getBallPosition().x > -260) {
                        game.scorePoint("blue");
                    } else {
                        game.scorePoint("red");
                    }
                }
            }
            if (TTplayer.team == 2) {
                if (
                    game.lastAction == "blueBounce" &&
                    game.serve == "blue"
                ) {
                    game.scorePoint("red");
                } else if (
                    game.lastAction == "blueKick" &&
                    room.getBallPosition().x < 250 &&
                    game.serve == "blue"
                ) {
                    resetBlueServe();
                } else if (
                    game.lastAction == "redBounce" &&
                    game.serve == "red"
                ) {
                    if (room.getBallPosition().x < 260) {
                        game.scorePoint("red");
                    } else {
                        game.scorePoint("blue");
                    }
                } else if (
                    (game.lastAction == "blueKick" ||
                        game.lastAction == "blueTouch") &&
                    game.serve != "blue"
                ) {
                    game.scorePoint("red");
                } else if (
                    ((game.lastAction == "redKick" ||
                        game.lastAction == "redTouch") ||
                        game.serve == "red") &&
                    game.serve != "blue"
                ) {
                    if (room.getBallPosition().x < 260) {
                        game.scorePoint("red");
                    } else {
                        game.scorePoint("blue");
                    }
                }
            }
        }
    }
    if (!TThadTouchedTheBall) {
        if (TTdistanceToBall < TTtriggerDistance) {
            TTplayersThatTouchedTheBall.add(TTplayer.id);
        }
    } else {
        if (TTdistanceToBall > TTtriggerDistance + 4) {
            TTplayersThatTouchedTheBall.delete(TTplayer.id);
            if (TTplayer.team == 1 && game.serve == "null") {
                game.lastAction = "redTouch";
            }
            if (TTplayer.team == 2 && game.serve == "null") {
                game.lastAction = "blueTouch";
            }
        }
    }
}
// end dragging ball

if (game.pointScored == false) {
    // BALL BOUNCE ON TABLE
    var TTdistanceToEdge = pointDistance({ x: 250, y: 80 }, room.getBallPosition());
    var TTEdgetriggerDistance = TTballRadius + 0.01;
    var edgeBounce = false;

    if (TTdistanceToEdge < TTEdgetriggerDistance) {
        edgeBounce = true;
    }

    TTdistanceToEdge = pointDistance({ x: -250, y: 80 }, room.getBallPosition());
    if (TTdistanceToEdge < TTEdgetriggerDistance) {
        edgeBounce = true;
    }

    if (room.getBallPosition().y == 74 || edgeBounce == true) {
        if (game.serve != "null") {
            if (game.serve == "red") {
                if (room.getBallPosition().x > 0) {
                    if (game.lastAction == "redBounce") {
                        if (game.netTouch == true) {
                            announce("Saque novamente.");
                            resetRedServe();
                            return false;
                        } else {
                            game.serve = "null";
                        }
                    } else {
                        game.scorePoint("blue");
                    }
                }
                if (room.getBallPosition().x < 0) {
                    if (game.lastAction == "null") {
                        resetRedServe();
                        return false;
                    } else if (game.lastAction != "redKick") {
                        game.scorePoint("blue");
                    }
                }
            }
            if (game.serve == "blue") {
                if (room.getBallPosition().x < 0) {
                    if (game.lastAction == "blueBounce") {
                        if (game.netTouch == true) {
                            announce("Saque novamente.");
                            resetBlueServe();
                            return false;
                        } else {
                            game.serve = "null";
                        }
                    } else {
                        game.scorePoint("red");
                    }
                }
                if (room.getBallPosition().x > 0) {
                    if (game.lastAction == "null") {
                        resetBlueServe();
                        return false;
                    } else if (game.lastAction != "blueKick") {
                        game.scorePoint("red");
                    }
                }
            }
        }
        if (game.serve == "null") {
            if (room.getBallPosition().x > 0) {
                if (
                    game.lastAction == "blueKick" ||
                    game.lastAction == "blueTouch"
                ) {
                    game.scorePoint("red");
                }
            }
            if (room.getBallPosition().x < 0) {
                if (
                    game.lastAction == "redKick" ||
                    game.lastAction == "redTouch"
                ) {
                    game.scorePoint("blue");
                }
            }
        }
        if (room.getBallPosition().x < 0) {
            game.lastAction = "redBounce";
        }
        if (room.getBallPosition().x > 0) {
            game.lastAction = "blueBounce";
        }
        if (room.getBallPosition().x < 0) {
            if (game.lastBounce != "red") {
                game.lastBounce = "red";
            } else {
                game.scorePoint("blue");
            }
        }
        if (room.getBallPosition().x > 0) {
            if (game.lastBounce != "blue") {
                game.lastBounce = "blue";
            } else {
                game.scorePoint("red");
            }
        }
    }
    // END BALL BOUNCE ON TABLE

    // BALL BOUNCE ON GROUND
    if (room.getBallPosition().y == 179) {
        if (
            game.lastAction == "redKick" ||
            game.lastAction == "redTouch" ||
            game.lastAction == "redBounce"
        ) {
            game.scorePoint("blue");
        }
        if (
            game.lastAction == "blueKick" ||
            game.lastAction == "blueTouch" ||
            game.lastAction == "blueBounce"
        ) {
            game.scorePoint("red");
        }
        if (game.serve == "red" && game.lastAction == "null") {
            resetRedServe();
        }
        if (game.serve == "blue" && game.lastAction == "null") {
            resetBlueServe();
        }
    }
    // END BALL BOUNCE ON GROUND

    // DRAGGING BALL
    if (game.dragBall == 20 && game.serve == "null") {
        if (room.getPlayer(game.draggerId).team == 1) {
            game.scorePoint("blue");
        }
        if (room.getPlayer(game.draggerId).team == 2) {
            game.scorePoint("red");
        }
    }
}
}

function resetRedServe() {
    if (TTPractice == true) {
        return false;
    }
    room.setDiscProperties(0, {xspeed:0,yspeed:0,x:-300,y:0});
    room.setDiscProperties(3, {xspeed:0,yspeed:0,x:-300,y:6});
    var players = room.getPlayerList().filter((player) => player.team == 1);
    if (players[0] != undefined) {
        room.setPlayerDiscProperties(players[0].id, {xspeed:0,yspeed:0,x:-300,y:50});
    }
    game.netTouch = false;
    game.lastAction = "null";
    game.lastBounce = "null";
    game.dragBall = 0;
}

function resetBlueServe() {
    if (TTPractice == true) {
        return false;
    }
    room.setDiscProperties(0, {xspeed:0,yspeed:0,x:300,y:0});
    room.setDiscProperties(3, {xspeed:0,yspeed:0,x:300,y:6});
    var players = room.getPlayerList().filter((player) => player.team == 2);
    if (players[0] != undefined) {
        room.setPlayerDiscProperties(players[0].id, {xspeed:0,yspeed:0,x:300,y:50});
    }
    game.netTouch = false;
    game.lastAction = "null";
    game.lastBounce = "null";
    game.dragBall = 0;
}


function handleNetTouch() {
    var netPosition = {x: room.getDiscProperties(2).x, y: room.getDiscProperties(2).y};
    var ballPosition = room.getBallPosition();
    var ballRadius = game.ballRadius;
    var triggerDistance = ballRadius + 1 + 0.01;


    var distanceToNet = pointDistance(netPosition, ballPosition);
    if ( distanceToNet < triggerDistance || (ballPosition.x >= -11 && ballPosition.x <= 11 && ballPosition.y >= 47)) {
        if (game.pointScored == false) {
            game.netTouch = true;
        }
    }
}

function updateGameStatus() {
    game.time = Math.floor(room.getScores().time);
    game.ballRadius = room.getDiscProperties(0).radius;
}


function announce(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0xFFFD82;
    }
    if (style == null) {
        style = "bold";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement(msg, targetId, color, style, sound);
}

function whisper(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0x66C7FF;
    }
    if (style == null) {
        style = "normal";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement(msg, targetId, color, style, sound);
    if (room.getPlayer(targetId) != null) {
        console.log("Whisper -> " + room.getPlayer(targetId).name + ": " + msg);
    }
}

function isAdminPresent() {
    var players = room.getPlayerList();
    if (players.find((player) => player.admin) != null) {
        return true;
    }
    else {
        return false;
    }
}

function displayAdminMessage() {
    if (isAdminPresent() == false && allowPublicAdmin == true) {
        announce("Nenhum admin presente: Digite !admin para tomar controle da sala.");
    }
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}






function MacOynanabilir() {
    if (GetTeam(1).length == redMax && GetTeam(2).length == blueMax) {
        room.startGame();
        room.sendAnnouncement("5 minutos de tempo limite. Comecem!", null, 0xFF0000, "bold", 0);
        clearTimeout(gol); 
        gol = setTimeout(
            function(){
                MacBitti(2);
            }, 298000);
    }
    else {
        room.stopGame();
        room.sendAnnouncement("Quando houver pessoas suficientes, o jogo começará.", null, 0xFFFF00, "bold", 0);
    }
}
function TakimlariDengele(redMaksimumOyuncuSayisi, blueMaksimumOyuncuSayisi)
{
 var spec = GetTeam(0);
 var red = GetTeam(1);
 var blue = GetTeam(2);
 var red_ = red.length;
 var blue_ = blue.length;
 var spec_ = spec.length;
 var tempRed = red_;
 var tempBlue = blue_;
 for(var i = 0; i < spec_; i++) // Spec Varsa Dağıt
 {
  if(red_ < redMaksimumOyuncuSayisi && red_ <= blue_) // Öncelik Az Kişi Olan Takıma Oyuncu Göndermekte.
  {
   room.setPlayerTeam(spec[i].id,1);
   red_++;
  }
  else if(blue_ < blueMaksimumOyuncuSayisi && blue_ <= red_)
  {
   room.setPlayerTeam(spec[i].id,2);
   blue_++;
  }
  else if(red_ < redMaksimumOyuncuSayisi)
  {
   room.setPlayerTeam(spec[i].id,1);
   red_++;
  }
  else if(blue_ < blueMaksimumOyuncuSayisi)
  {
   room.setPlayerTeam(spec[i].id,2);
   blue_++;
  }
 }
 if(red_ > blue_ + 1 && blue_ < blueMaksimumOyuncuSayisi)
 {
  for (var i = 1; i < red_ - blue_; i++)
  {
   if(!(blue < blueMaksimumOyuncuSayisi)) return;
   room.setPlayerTeam(red[red_ - i].id,2);
   blue_++;
  }
 }
 else if (blue_ > red_ + 1 && red_ < redMaksimumOyuncuSayisi)
 {
  for (var i = 1; i < blue_ - red_; i++)
  {
   if(!(red < redMaksimumOyuncuSayisi)) return;
   room.setPlayerTeam(blue[blue_ - i].id,1);
   red_++;
  }
 }
 if(red_ != tempRed || blue_ != tempBlue){setTimeout(function(){MacOynanabilir();},100);}
}
function GetTeam(id){ return room.getPlayerList().filter((player) => player.id != 0 && player.team == id); }
function CreateOyuncu(player) { oyuncular[oyuncular.length] = {isim:player.name,id:player.id,galibiyet:0,yenilgi:0}; }
function DeleteOyuncu(id) { for(var i = 0; i < oyuncular.length; i++) {if(oyuncular[i].id == id) {oyuncular.splice(i, 1);}} }
function GetOyuncu(id) { for(var i = 0; i < oyuncular.length; i++) {if(oyuncular[i].id == id) {return oyuncular[i];}} }
function MacBitti(id)
{
 room.stopGame();
 clearTimeout(gol);
 var spec = GetTeam(0);
 var red = GetTeam(1);
 var blue = GetTeam(2);
 for(var i = 0; i < red.length; i++)
 {
  if(id == 1) { GetOyuncu(red[i].id).galibiyet++; }
  else { GetOyuncu(red[i].id).yenilgi++; }
 }

 for(var i = 0; i < blue.length; i++)
 {
  if(id == 2) { GetOyuncu(blue[i].id).galibiyet++; }
  else { GetOyuncu(blue[i].id).yenilgi++; }
 }

 if (id == 2) // If Blue Wins
 {
  room.sendAnnouncement("O blue venceu!", null, 0xFFFF00, "bold", 0);
  for(var i = 0; i < blue.length; i++) {AnnounceOyuncuStatus(blue[i].id);room.setPlayerTeam(blue[i].id, 1);}
  for(var i = 0; i < red.length; i++) {room.setPlayerTeam(red[i].id, 0);}
 }
 else
 {
  room.sendAnnouncement("O red venceu!", null, 0xFFFF00, "bold", 0);
  for(var i = 0; i < red.length; i++) {AnnounceOyuncuStatus(red[i].id);}
  for(var i = 0; i < blue.length; i++) {room.setPlayerTeam(blue[i].id, 0);}  
 }
 setTimeout(function(){spec = GetTeam(0); for(var i = 0; i < blueMax; i++){TakimlariDengele(redMax, blueMax);}}, 100);
}

function AnnounceTopOyuncu() {
    var enYuksekOyuncu = GetOyuncu(1);
    for (var i = 0; i < oyuncular.length; i++) {
        if (enYuksekOyuncu == null) {
            enYuksekOyuncu = oyuncular[i];
        }
        else if (oyuncular[i].galibiyet > enYuksekOyuncu.galibiyet){
            enYuksekOyuncu = oyuncular[i];}
        }
        if (enYuksekOyuncu == null) {
            return;
        }
        room.sendAnnouncement("Maior pontuação: " + enYuksekOyuncu.isim + " - " + enYuksekOyuncu.galibiyet + " vitórias.", null, 0xFFFFFF, "bold", 0);
    }
function AnnounceOyuncuStatus(id) {var oyuncu=GetOyuncu(id); room.sendAnnouncement(oyuncu.isim+" - "+oyuncu.galibiyet+" vitórias. ", null, 0xFFFFFF, "bold", 0); }


room.onPlayerLeave = function(player) {
    db.log.splice(f(db.log, 'id', player.id), 1);
    DeleteOyuncu(player.id);
    delete playerNamesToIds[cleanPlayerName(player.name)];
    connections = connections.filter(a => a[0] !== player.id);
    const allPlayers = room.getPlayerList();
    const totalPlayers = allPlayers.length;
    const data = new Date();
    const options = { timeZone: 'America/Sao_Paulo', hour12: false };
    const formatoDataHora = data.toLocaleString('pt-BR', options);
    var leaveMessage = player.name + " saiu da sala. 🟥" + "\n";
    var additionalMessage = "";
    sendAnnouncementToDiscord(
        "```\n" +
        leaveMessage + "\n" +
        "⏰ Data: " + formatoDataHora + "\n" +
        "📊 Número de jogadores atualmente na sala: " + totalPlayers + "/8" + "\n" +
        additionalMessage +
        "```"
    );
    if(player.team == 1 || player.team == 2){
        room.sendAnnouncement("A partida foi interrompida porque o jogador deixou a sala. Por favor, aguarde até que um novo jogador entre novamente.", null, 0xFFFFFF, "bold", 0);
        room.stopGame();
        clearTimeout(gol);
        if(player.team == 1 && GetTeam(2).length > 0){
            room.setPlayerTeam(GetTeam(2)[0].id, 1);
            setTimeout(function(){TakimlariDengele();},100);
            return;
        }
    TakimlariDengele(redMax, blueMax);
    }
};


room.onTeamVictory = function(scores) {
    if (scores.red>scores.blue){
        MacBitti(1);}
        else {
            MacBitti(2);
        }
    RecSistem.sendDiscordWebhook(scores);
    room.sendAnnouncement("Partida gravada e enviada para o servidor: https://discord.gg/3xVzgAGauG", null, 0xFFFF17, 'bold', 0);
    };
room.setCustomStadium(getMap());
room.setTimeLimit(5);
room.setScoreLimit(5);
room.setTeamsLock(true);


room.onStadiumChange = function(newStadiumName, byPlayer) {
    if (newStadiumName != "PING PONG ANDROCÊNTRICO") {
        room.setCustomStadium(getMap());
    }
}

room.onPlayerTeamChange = (changedPlayer, byPlayer) => {
    updateTeams();
}

room.onPlayerActivity = function (player) {
    setActivity(player, 0);
}










/*-------------------------------- STADIUMS ---------------------------------*/
function getMap() {
    var map = `{"name":"PING PONG ANDROCÊNTRICO","width":480,"height":200,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":280,"redSpawnPoints":[[-300,50],[-420,50]],"blueSpawnPoints":[[300,50],[420,50]],"canBeStored":false,"kickOffReset":"full","bg":{"color":"454C5E","height":200,"width":480,"cornerRadius":0,"kickOffRadius":0},"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"vertexes":[{"x":-250,"y":82.5,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":82.5,"cMask":["ball"],"color":"000000","bias":0},{"x":-250,"y":84,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":84,"cMask":["ball"],"color":"000000","bias":0},{"x":-250,"y":80,"bCoef":1,"cMask":["ball"],"color":"2EA0E4","bias":10},{"x":250,"y":80,"bCoef":1,"cMask":["ball"],"color":"2EA0E4","bias":10},{"x":-250,"y":85.5,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":85.5,"cMask":["ball"],"color":"000000","bias":0},{"x":-250,"y":87,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":87,"cMask":["ball"],"color":"000000","bias":0},{"x":0,"y":50,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":0},{"x":0,"y":93,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":0},{"x":220,"y":85,"cMask":["c3"],"bias":0},{"x":220,"y":184,"cMask":["c3"],"bias":0},{"x":-220,"y":85,"cMask":["c3"],"bias":0},{"x":-220,"y":184,"cMask":["c3"],"bias":0},{"x":-218,"y":85,"cMask":["c3"]},{"x":-218,"y":184,"cMask":["c3"]},{"x":-216,"y":85,"cMask":["c3"]},{"x":-216,"y":184,"cMask":["c3"]},{"x":218,"y":85,"cMask":["c3"]},{"x":218,"y":184,"cMask":["c3"]},{"x":216,"y":85,"cMask":["c3"]},{"x":216,"y":184,"cMask":["c3"]},{"x":90,"y":85,"cMask":["ball"]},{"x":90,"y":160,"cMask":["c3"]},{"x":-90,"y":85,"cMask":["ball"]},{"x":-90,"y":160,"cMask":["c3"]},{"x":-92,"y":85,"cMask":["c3"]},{"x":-92,"y":160,"cMask":["c3"]},{"x":-88,"y":85,"cMask":["c3"]},{"x":-88,"y":160,"cMask":["c3"]},{"x":92,"y":85,"cMask":["c3"]},{"x":92,"y":160,"cMask":["c3"]},{"x":88,"y":85,"cMask":["c3"]},{"x":88,"y":160,"cMask":["c3"]},{"x":40,"y":160,"cMask":["c3"]},{"x":140,"y":160,"cMask":["c3"]},{"x":-40,"y":160,"cMask":["c3"]},{"x":-140,"y":160,"cMask":["c3"]},{"x":-40,"y":162,"cMask":["c3"]},{"x":-140,"y":162,"cMask":["c3"]},{"x":-40,"y":164,"cMask":["c3"]},{"x":-140,"y":164,"cMask":["c3"]},{"x":40,"y":162,"cMask":["c3"]},{"x":140,"y":162,"cMask":["c3"]},{"x":40,"y":164,"cMask":["c3"]},{"x":140,"y":164,"cMask":["c3"]},{"x":-135,"y":162,"cMask":["c3"]},{"x":-135,"y":174,"cMask":["c3"]},{"x":135,"y":162,"cMask":["c3"]},{"x":135,"y":174,"cMask":["c3"]},{"x":45,"y":162,"cMask":["c3"]},{"x":45,"y":174,"cMask":["c3"]},{"x":-45,"y":162,"cMask":["c3"]},{"x":-45,"y":174,"cMask":["c3"]},{"x":-580,"y":185,"cMask":["ball","red","blue"],"color":"ffffff","bias":20},{"x":580,"y":185,"cMask":["ball","red","blue"],"color":"ffffff","bias":20},{"x":-580,"y":187,"cMask":["ball","red","blue"],"color":"ffffff"},{"x":580,"y":187,"cMask":["ball","red","blue"],"color":"ffffff"},{"x":5,"y":53,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":5,"vis":false},{"x":5,"y":85,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":5,"vis":false},{"x":-5,"y":53,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":-5,"vis":false},{"x":-5,"y":85,"bCoef":0.1,"cMask":["ball","red","blue"],"bias":-5,"vis":false},{"x":-250,"y":89,"cMask":["ball"],"color":"000000","bias":0},{"x":250,"y":89,"cMask":["ball"],"color":"000000","bias":0},{"x":0,"y":220,"bCoef":0,"cMask":["red","blue"],"vis":false},{"x":0,"y":-200,"bCoef":0,"cMask":["red","blue"],"vis":false},{"x":250,"y":89,"bCoef":1,"cMask":["ball"],"bias":20},{"x":250,"y":110,"bCoef":1,"cMask":["ball"],"bias":20},{"x":220,"y":110,"bCoef":1,"cMask":["ball"]},{"x":-250,"y":110,"bCoef":1,"cMask":["ball"],"bias":20},{"x":-250,"y":89,"bCoef":1,"cMask":["ball"],"bias":20}],"segments":[{"v0":0,"v1":1,"color":"18181A","cMask":["ball"],"bias":0,"y":82.5},{"v0":2,"v1":3,"color":"18181A","cMask":["ball"],"bias":0,"y":84},{"v0":4,"v1":5,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":10},{"v0":6,"v1":7,"color":"18181A","cMask":["ball"],"bias":0,"y":85.5},{"v0":8,"v1":9,"color":"18181A","cMask":["ball"],"bias":0,"y":87},{"v0":10,"v1":11,"color":"18181A","bCoef":0.1,"cMask":["ball","red","blue"],"bias":0,"x":0},{"v0":12,"v1":13,"color":"18181A","cMask":["c3"],"bias":0,"x":220},{"v0":14,"v1":15,"color":"18181A","cMask":["c3"],"bias":0,"x":-220},{"v0":16,"v1":17,"color":"18181A","cMask":["c3"],"bias":0,"x":-218},{"v0":18,"v1":19,"color":"18181A","cMask":["c3"],"bias":0,"x":-216},{"v0":20,"v1":21,"color":"18181A","cMask":["c3"],"bias":0,"x":218},{"v0":22,"v1":23,"color":"18181A","cMask":["c3"],"bias":0,"x":216},{"v0":24,"v1":25,"color":"18181A","cMask":["c3"],"bias":0,"x":90},{"v0":26,"v1":27,"color":"18181A","cMask":["c3"],"bias":0,"x":-90},{"v0":28,"v1":29,"color":"18181A","cMask":["c3"],"bias":0,"x":-92},{"v0":30,"v1":31,"color":"18181A","cMask":["c3"],"bias":0,"x":-88},{"v0":32,"v1":33,"color":"18181A","cMask":["c3"],"bias":0,"x":92},{"v0":34,"v1":35,"color":"18181A","cMask":["c3"],"bias":0,"x":88},{"v0":36,"v1":37,"color":"18181A","cMask":["c3"],"bias":0},{"v0":39,"v1":38,"color":"18181A","cMask":["c3"],"bias":0},{"v0":41,"v1":40,"color":"18181A","cMask":["c3"],"bias":0,"y":162},{"v0":43,"v1":42,"color":"18181A","cMask":["c3"],"bias":0,"y":164},{"v0":44,"v1":45,"color":"18181A","cMask":["c3"],"bias":0,"y":162},{"v0":46,"v1":47,"color":"18181A","cMask":["c3"],"bias":0,"y":164},{"v0":48,"v1":49,"color":"18181A","cMask":["c3"],"bias":0,"x":-135},{"v0":50,"v1":51,"color":"18181A","cMask":["c3"],"bias":0,"x":135},{"v0":52,"v1":53,"color":"18181A","cMask":["c3"],"bias":0,"x":45},{"v0":54,"v1":55,"color":"18181A","cMask":["c3"],"bias":0,"x":-45},{"v0":56,"v1":57,"color":"ffffff","cMask":["ball","red","blue"],"bias":20,"y":185},{"v0":58,"v1":59,"color":"ffffff","cMask":["ball","red","blue"],"bias":0,"y":187},{"v0":60,"v1":61,"vis":false,"color":"18181A","bCoef":0.1,"cMask":["ball","red","blue"],"bias":5,"x":5},{"v0":62,"v1":63,"vis":false,"color":"18181A","bCoef":0.1,"cMask":["ball","red","blue"],"bias":-5,"x":-5},{"v0":64,"v1":65,"color":"18181A","cMask":["ball"],"bias":0,"y":89},{"v0":66,"v1":67,"vis":false,"bCoef":0,"cMask":["red","blue"]},{"v0":68,"v1":69,"vis":false,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":20},{"v0":71,"v1":72,"vis":false,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":20},{"v0":69,"v1":71,"vis":false,"color":"2EA0E4","bCoef":1,"cMask":["ball"],"bias":20}],"goals":[{"p0":[-5,300],"p1":[-5,320],"team":"red"},{"p0":[5,300],"p1":[5,320],"team":"blue"}],"discs":[{"radius":6,"invMass":10,"pos":[-300,0],"bCoef":0.95,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.985,"gravity":[0,0.18]},{"radius":0,"invMass":1,"pos":[0,310],"color":"000000","cMask":["c2"],"cGroup":["score"],"damping":0.99},{"radius":1,"invMass":0,"pos":[0,50],"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"]},{"radius":0,"invMass":0,"pos":[-300,6],"bCoef":0,"cMask":["ball"]},{"radius":6,"invMass":0,"pos":[-135,177],"color":"18181A","cMask":["c3"],"damping":0},{"radius":6,"invMass":0,"pos":[135,177],"color":"18181A","cMask":["c3"],"damping":0},{"radius":6,"invMass":0,"pos":[45,177],"color":"18181A","cMask":["c3"],"damping":0},{"radius":6,"invMass":0,"pos":[-45,177],"color":"18181A","cMask":["c3"],"damping":0}],"planes":[{"normal":[0,-1],"dist":-185,"cMask":["ball","red","blue"],"_data":{"extremes":{"normal":[0,-1],"dist":-185,"canvas_rect":[-971,-380,972,380],"a":[-971,185],"b":[972,185]}}},{"normal":[0,1],"dist":-200,"bCoef":0,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-971,-380,972,380],"a":[-971,-200],"b":[972,-200]}}},{"normal":[-1,0],"dist":-580,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-580,"canvas_rect":[-971,-380,972,380],"a":[580,-380],"b":[580,380]}}},{"normal":[1,0],"dist":-580,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-580,"canvas_rect":[-971,-380,972,380],"a":[-580,-380],"b":[-580,380]}}}],"joints":[],"playerPhysics":{"radius":30,"bCoef":0.1,"kickingAcceleration":0.4,"acceleration":0.3,"damping":0.9,"kickStrength":1.1,"invMass":0.001,"kickingDamping":0.9},"ballPhysics":"disc0"}`;

    return map;
}

/*------------------------------ END OF STADIUMS ----------------------------*/
