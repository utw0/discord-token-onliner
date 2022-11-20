const { Client } = Discord = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");
const luhuxsex = require("./ayarlar.json");
let client = global.client = new Client({
    intents: [32767],
    checkUpdate: false,

});
var items = ['Minecraft', 'Rust', 'VRChat', 'reeeee', 'MORDHAU', 'Fortnite', 'Apex Legends', 'Escape from Tarkov', 'Rainbow Six Siege', 'Counter-Strike: Global Offense', 'Sinner: Sacrifice for Redemption', 'Minion Masters', 'King of the Hat', 'Bad North', 'Moonlighter', 'Frostpunk', 'Starbound', 'Masters of Anima', 'Celeste', 'Dead Cells', 'CrossCode', 'Omensight', 'Into the Breach', 'Battle Chasers: Nightwar', 'Red Faction Guerrilla Re-Mars-tered Edition', 'Spellforce 3', 'This is the Police 2', 'Hollow Knight', 'Subnautica', 'The Banner Saga 3', 'Pillars of Eternity II: Deadfire', 'This War of Mine', 'Last Day of June', 'Ticket to Ride', 'RollerCoaster Tycoon 2: Triple Thrill Pack', '140', 'Shadow Tactics: Blades of the Shogun', 'Pony Island', 'Lost Horizon', 'Metro: Last Light Redux', 'Unleash', 'Guacamelee! Super Turbo Championship Edition', 'Brutal Legend', 'Psychonauts', 'The End Is Nigh', 'Seasons After Fall', 'SOMA', 'Trine 2: Complete Story', 'Trine 3: The Artifacts of Power', 'Trine Enchanted Edition', 'Slime-San', 'The Inner World', 'Bridge Constructor', 'Bridge Constructor Medieval', 'Dead Age', 'Risk of Rain', "Wasteland 2: Director's Cut", 'The Metronomicon: Slay The Dance Floor', 'TowerFall Ascension + Expansion', 'Nidhogg', 'System Shock: Enhanced Edition', 'System Shock 2', "Oddworld:New 'n' Tasty!", 'Out of the Park Baseball 18', 'Hob', 'Destiny 2', 'Torchlight', 'Torchlight 2', 'INSIDE', 'LIMBO', "Monaco: What's Yours Is Mine", 'Tooth and Tail', 'Dandara', 'GoNNER', 'Kathy Rain', 'Kingdom: Classic', 'Kingdom: New Lands', 'Tormentor X Punisher', 'Chaos Reborn', 'Ashes of the Singularity: Escalation', 'Galactic Civilizations III', 'Super Meat Boy', 'Super Hexagon', 'de Blob 2', 'Darksiders II Deathinitive Edition', 'Darksiders Warmastered Edition', 'de Blob', 'Red Faction 1', 'Dungeon Defenders'];

for (let index = 0; index < luhuxsex.tokenler.length; index++) {
    const token = luhuxsex.tokenler[index];
    client.login(token);
    client.on('ready', async () => {
    const VoiceChannel = client.channels.cache.get(luhuxsex.seskanalllarıişte[index]);
    joinVoiceChannel({
        channelId: VoiceChannel.id,
        guildId: VoiceChannel.guild.id,
        adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false
    });
   
    client.user.setStatus("idle");
    client.user.setActivity(items[Math.floor(Math.random() * items.length)], {
        
      });
    console.log(`${client.user.tag} olarak giriş yapıldı.`);
    });
}
//hayatcokzor
//jescoda bunu isteyip duruyodu al götüne sok 
//https://open.spotify.com/track/1qwQ1P3FwFouG1zTIBkGXU?si=10e19b49651343d3
