create database if not exists db_reservas;

use db_reservas;

create table tb_reservas(
	id_reservas int not null auto_increment primary key,
    nombre varchar(50),
    tlf varchar(9),
    num_personas varchar(50)
);


insert into tb_reservas(nombre, tlf, num_personas)values ('Pepe Colubi','654987321', 5);

create table tb_partidos(
    id_partido int not null auto_increment primary key,
    competicion varchar(50),
    local varchar(50),
    visitante varchar(50),
    fecha varchar(10),
    hora varchar(5),
    jornada varchar(50),
    escudoVisitante varchar(1000),
    escudoLocal varchar(1000),
    estadio varchar(50)
);


insert into tb_partidos(competicion, local, visitante, fecha, hora, jornada, escudoVisitante, escudoLocal, estadio)values 
    ('Liga','Real Betis', 'Elche CF', '12/05/2022', '20:30', '20', 
     'https://img2.freepng.es/20180527/utr/kisspng-real-betis-la-liga-spain-atltico-madrid-real-mad-escudos-de-futbol-5b0a5bc2b97437.2741859115274055067596.jpg',
     'https://comprarpegatinas.com/images/stories/virtuemart/product/pegatinas/Elche_CF.png', 'Estadio Benito Villamarín');

insert into tb_partidos(competicion, local, visitante, fecha, hora, jornada, escudoVisitante, escudoLocal, estadio)values 
    ('Champions','Real Madrid', 'Liverpool', '28/05/2022', '21:30', 'Final', 
     'https://marcas-logos.net/wp-content/uploads/2020/02/Real-Madrid-logo.png',
     'https://1000marcas.net/wp-content/uploads/2020/02/Logo-Liverpool.png', 'El Stade de France de Saint-Denis');

insert into tb_partidos(competicion, local, visitante, fecha, hora, jornada, escudoVisitante, escudoLocal, estadio)values 
    ('Copa del Rey','Barcelona FC', 'Athletic CF', '10/04/2022', '20:30', 'Cuartos de Fianl', 
     'https://marcas-logos.net/wp-content/uploads/2020/03/Barcelona-Logo.png',
     'https://cdn5.dibujos.net/dibujos/pintados/202013/escudo-del-athletic-club-de-bilbao-deportes-escudos-de-futbol-11736417.jpg', 'Camp Nou');
insert into tb_partidos(competicion, local, visitante, fecha, hora, jornada, escudoVisitante, escudoLocal, estadio)values 
    ('Champions','Villarreal', 'Liverpool', '15/05/2022', '20:30', 'Octavos de Final', 
     'https://img2.freepng.es/20180527/utr/kisspng-real-betis-la-liga-spain-atltico-madrid-real-mad-escudos-de-futbol-5b0a5bc2b97437.2741859115274055067596.jpg',
     'https://1000marcas.net/wp-content/uploads/2020/02/Logo-Liverpool.png', 'Estadio de la Cerámica');