# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#for the random startdate
t1 = Time.current
t2 = Time.current + 2.months
t3 = Time.current + 4.months

list_categories = ["Écologie", "Solidarité", "Soutien scolaire", "Sports inclusifs", "Événements Spéciaux"]
color_categories = ["#24C170", "#ED3F2F", "#FFE100", "#3F7FFF", "#ffa8b6"]

5.times do |x|
  Category.create!(
    name: list_categories[x],
    color: color_categories[x],
  )
  puts "Seed of categorie nb#{x}"
end

10.times do |x|
  event = Event.create(
    duration: rand(5..100) * 5,
    start_time: rand(t1..t2),
    title: "Fourmidables cours de français",
    tagline: "Tu aimes par dessus tout la langue de Molière ?",
    description: "Tu as toujours voulu discuter avec un soudanais, afghan, éthiopien, syrien, iranien et j’en passe ?
Nos amis demandeurs d’asile / réfugiés ( et particulièrement ceux de la Team Running du jeudi soir) aimeraient bien progresser en français (et maîtriser le futur antérieur OKLM) histoire d’accélérer leur intégration #welcomerefugees.
L’idée : tous les mardis soir, on se retrouve au Point Éphémère et on forme des petits groupes de discussion. On n’hésite pas à sortir son calepin pour les faire progresser à l’écrit aussi ! C’est le moment de réveiller le prof de français qui sommeille en vous 🙂
On a toujours besoin de monde, donc n’hésitez pas à motiver un pote !
Petite précision, les barmens sont des amis et sont au courant du projet !",
    address: "Le Point Ephémère",
    zip_code: "75010",
    city: "Paris",
    max_attendees: rand(1..20),
    category_id: Category.find_by(name: "Soutien scolaire").id,
  )

  event.event_picture.attach(io: File.open("client/src/images/demo/hotel/hotel-6.jpg"), filename: "hotel-6.jpg")

  puts "Seed of events Soutien scolaire"
end

10.times do |x|
  event = Event.create(
    duration: rand(5..100) * 5,
    start_time: rand(t1..t2),
    title: "La balade alimentaire des Lucioles",
    tagline: "MARAUDE DANS PARIS !",
    description: "Rendez-vous non loin de la Gare d’Austerlitz pour une Balade avec une équipe au top ! Au programme : tour des boulangeries partenaires pour récupérer leurs invendus, puis redistribution pour les personnes croisées pendant la balade !",
    address: "Le Point Ephémère",
    zip_code: "75005",
    city: "Paris",
    max_attendees: rand(1..20),
    category_id: Category.find_by(name: "Événements Spéciaux").id,
  )

  event.event_picture.attach(io: File.open("client/src/images/demo/event/event-2.jpg"), filename: "event-2.jpg")

  puts "Seed of events Événements Spéciaux"
end

10.times do |x|
  event = Event.create(
    duration: rand(5..100) * 5,
    start_time: rand(t1..t2),
    title: "Sauvetage de fruits et légumes",
    tagline: "VIENS SAUVER LES FRUITS ET LÉGUMES INVENDUS SUR LES MARCHÉS PARISIENS !",
    description: "Tous les vendredis, les bénévoles de Moissons Solidaires sont présents sur le marché Ornano du 18e arrondissement pour une action écolo ET solidaire avec super ambiance ! Au programme : glanage des invendus auprès de commerçants du marché, tri puis distribution des produits aux personnes qui en ont besoin.",
    address: "Le Point Ephémère",
    zip_code: "75018",
    city: "Paris",
    max_attendees: rand(1..20),
    category_id: Category.find_by(name: "Écologie").id,
  )

  event.event_picture.attach(io: File.open("client/src/images/demo/studio/studio-5.jpg"), filename: "studio-5.jpg")

  puts "Seed of events Ecologie"
end

10.times do |x|
  event = Event.create(
    duration: rand(5..100) * 5,
    start_time: rand(t1..t2),
    title: "Jogging Multiculturel entre Locaux & Réfugiés",
    tagline: "LE JOGGING QUI T'EMMÈNE EN VOYAGE !",
    description: "Tous les jeudis soirs, rejoins le jogging qui crée du lien entre Parisiens et réfugiés !

    L’objectif ? Passer un bon moment ensemble, échanger sur nos cultures & se dépenser (suer un peu !)
    
    Rendez-vous à 20h PRÉCISE devant le restaurant la Rotonde, au niveau de la Place de Stalingrad !
    
    Attention, pas de vestiaire possible donc viens le plus léger possible ou prends un petit sac avec toi :) 
    
     La Team Running est née en 2016. Depuis, plusieurs centaines de belles rencontres (sportives !) sont nées ! Cet entraînement, organisé en partenariat avec l'association Kabubu regroupe également d'autres collectifs qui créent du lien avec les nouveaux arrivants, Singa et Wintegreat !
    
    Cet événement est bien sûr Ouvert à TOUS , peu importe ton niveau de jogging (on s'adapte !) On court 8/10 km en moyenne, avec quelques pauses, et l'idée c'est qu'on va tout droit jusque Pantin, donc on ne perd personne en route :)
    
    N’hésite pas à inviter tes potes !
    
    L’ambition du projet ? Au delà de la rencontre, l’objectif est de proposer à tous de participer à des courses officielles de 10km ou 20km chaque année ! ",
    address: "Le Point Ephémère",
    zip_code: "75 019",
    city: "Paris",
    max_attendees: rand(1..20),
    category_id: Category.find_by(name: "Sports inclusifs").id,
  )

  event.event_picture.attach(io: File.open("client/src/images/demo/fitness/fitness-4.jpg"), filename: "fitness-4.jpg")

  puts "Seed of events Sports inclusifs"
end
