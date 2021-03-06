const Discord = require('discord.js');

module.exports = {
  join: (user) => new Discord.RichEmbed()
    .setTitle(':banana: Nouveau membre')
    .setColor(0x39d600)
    .setDescription(user.tag + " (" + user.id + ") est arrivé !"),
  left: (user) => new Discord.RichEmbed()
    .setTitle(':wastebasket: Membre parti')
    .setColor(0xce0000)
    .setDescription(user.tag + " (" + user.id + ") viens de quitter le serveur !"),
  welcome: (member) => new Discord.RichEmbed()
    .setTitle("DraftMan.fr - WebDesigner", "https://www.draftman.fr")
    .setDescription("Bienvenue à toi " + member.user.username + " sur le serveur Discord de DraftMan\nC'est un discord qui vise à rassembler ses connaissances et les personnes qui lui sont cher !\nSi tu es là c'est soit qu'il t'as invité par ce qu'il te considère comme une personne qu'il aprécie soit tu es un client ou une personne interessé par ce qu'il fait !\nSi tu es un client je t'encourage à faire la commande `!commande` pour qu'il puisse prendre contact avec toi plus facilement !")
    .setColor(0xcd6e57)
    .setURL("https://www.draftman.fr")
    .setFooter("DraftMan | Développeur FrontEnd & Graphiste", "https://www.draftman.fr/images/avatar.jpg")
    .setThumbnail("https://www.draftman.fr/images/avatar.jpg"),
  welcomeOtherGuild: (member) => new Discord.RichEmbed()
			.setTitle(member.guild.name, "https://www.draftman.fr")
			.setDescription("Bienvenue à toi " + member.user.username + " sur le serveur "+member.guild.name)
			.setColor(0x2014ff)
      .setFooter(`${member.guild.memberCount} membres`, member.guild.iconURL)
      .setTimestamp(new Date())
			.setThumbnail(member.guild.iconURL),
  infos: (message) => new Discord.RichEmbed()
    .setTitle("Informations")
    .setDescription("Voici quelques informations")
    .setColor(0xcd6e57)
    .setFooter("DraftMan | Développeur FrontEnd & Graphiste", "https://www.draftman.fr/images/avatar.jpg")
    .addField("Nom du serveur", `${message.guild.name}`, true)
    .addField("Crée le", `${message.guild.createAt}`, true)
    .addField("Membres", `${message.guild.memberCount}`, true)
    .addField("Lib du bot", "[discord.js](https://discord.js.org)", true)
    .addField("Website", "[draftman.fr](https://www.draftman.fr/)", true)
    .addField("Discord", "[draftman.fr/discord](https://www.draftman.fr/discord)", true)
    .addField("Twitter", "[draftman.fr/twitter](https://twitter.com/DraftMan_Dev)", true)
    .addField("Développeur", "DraftMan#6284", true),
  doc: (name,doc) => new Discord.RichEmbed()
    .setTitle(`Documentation de ${name}`)
    .setDescription(`${doc.join("\n")}`)
    .setColor(0xcd6e57)
    .setTimestamp(new Date())
    .setFooter("DraftMan | Développeur FrontEnd & Graphiste", "https://www.draftman.fr/images/favicon.png"),
  help: () => new Discord.RichEmbed()
    .setTitle("Liste des commandes du DraftBot")
    .setDescription("Voici la liste de toutes les commandes qui te permettra de m'utiliser !")
    .setColor(0xcd6e57)
    .setFooter("DraftMan | Développeur FrontEnd & Graphiste", "https://www.draftman.fr/images/avatar.jpg")
    .setThumbnail("https://www.draftman.fr/images/avatar.jpg")
    .addField("/say <titre§message> | <titre§message§url>", "Permet de faire dire quelque chose au bot sous forme d'embed.")
    .addField("!commande", "Permet de passer directement en contact avec DraftMan pour une commande.")
    .addField("!google <question>", "Permet d'envoyer un lien lmgtfy.")
    .addField("!quote <id>", "Permet de répéter un message en embed.")
    .addField("!infos", "Permet d'avoir des informations sur le discord.")
    .addField("!fortnite <nom>", "Permet d'afficher les statistiques d'un joueur.")
    .addField("!ping", "Permet d'afficher votre ping.")
    .addField("!clear <nombre>", "Permet de supprimer des messages en masse")
    .addField("!help", "Permet d'afficher l'aide")
    .addField("!level", "Permet d'afficher notre niveau sur le serveur **(SOON)**")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "Musique")
    .addField("!music play <url>|<recherche>", "Lancer une musique/playlist de Youtube")
    .addField("!music musique", "Afficher une musique en cours")
    .addField("!music skip", "Passer une musique en cours")
    .addField("!music pause", "Mettre en pause la musique")
    .addField("!music resume", "Relancer la musique")
    .addField("!music queue", "Afficher la liste des musiques en attente")
    .addField("!music purge", "Vider la liste des musiques en attente")
    .addField("!music volume", "Ajuster le volume")
    .addField("!music stop", "Arrêter la musique et vider la liste d'attente")
    .addField("!music join", "Faire se connecter le bot au salon vocal")
    .addField("!music leave", "Faire se déconnecter le bot au salon vocal")
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "D'autres commandes arriverons suivant les différentes updates."),
  helpm: () => new Discord.RichEmbed()
    .setTitle("Liste des commandes musics du DraftBot")
    .setDescription("Voici la liste de toutes les commandes musics qui te permettra de mettre de la musique !")
    .setColor(0xcd6e57)
    .setFooter("DraftMan | Développeur FrontEnd & Graphiste", "https://www.draftman.fr/images/avatar.jpg")
    .setThumbnail("https://www.draftman.fr/images/avatar.jpg")
    .addField("!music play <url>|<recherche>", "Lancer une musique/playlist de Youtube")
    .addField("!music musique", "Afficher une musique en cours")
    .addField("!music skip", "Passer une musique en cours")
    .addField("!music pause", "Mettre en pause la musique")
    .addField("!music resume", "Relancer la musique")
    .addField("!music queue", "Afficher la liste des musiques en attente")
    .addField("!music purge", "Vider la liste des musiques en attente")
    .addField("!music volume", "Ajuster le volume")
    .addField("!music stop", "Arrêter la musique et vider la liste d'attente")
    .addField("!music leave", "Faire se déconnecter le bot au salon vocal"),
  songEmbed: (song,user) => new Discord.RichEmbed()
    .addField(":notes: Musique en cours",`[${song.title}](${song.url}) ajouté par ${user}`)
    .setThumbnail(`${song.thumbnail}`)
    .setColor(0xcd6e57)
    .setTimestamp(new Date())
    .setFooter(user.username, user.displayAvatarURL),
  songNew: (author,name,url,image,message) => new Discord.RichEmbed()
    .addField(":notes: Musique ajouté à la file d'attente",`Ajout de la piste [${name}](${url})`)
    .setThumbnail(image)
    .setColor(0xcd6e57)
    .setTimestamp(new Date())
    .setFooter(author.username, author.displayAvatarURL)
}
