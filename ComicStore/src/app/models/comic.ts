export class Comic {

    static get()
    {
        return [
            {
                "id": 1,
                "title": "Infinity Gauntlet",
                "description": "El Demente Titán busca agraciar a la Muerte asesinando a la mitad del Universo. Para lograrlo, se embarca en la misión de buscar las seis Gemas del Infnito, dispersas a través de la galaxia, y reunirlas en el Guantelete del Infnito. ¿Podrán los máximos héroes de Marvel hacerle frente a un Dios?",
                "author": "Ed Brubaker",
                "publishDate": "2018-01-12T00:20:28.8936978",
                "price": 540,
                "starRating": 4,
                "imageUrl": "img/InfinityGauntlet.jpg"
            },
            {
                "id": 2,
                "title": "Batman: A Celebration of 75 Years",
                "description": "...",
                "author": "Varios",
                "publishDate": "2016-09-12T00:20:28.8960353",
                "price": 1200,
                "starRating": 3,
                "imageUrl": "img/BatmanCelebration75Years.jpg"
            },
            {
                "id": 3,
                "title": "Amazing Spider-Man 01",
                "description": "...",
                "author": "Slott",
                "publishDate": "2017-09-12T00:20:28.8960372",
                "price": 450,
                "starRating": 3,
                "imageUrl": "img/AmazingSpiderMan01.jpg"
            },
            {
                "id": 4,
                "title": "DeadPool: Mala Sangre",
                "description": "...",
                "author": "Rob Liefeld",
                "publishDate": "2018-07-12T00:20:28.8960374",
                "price": 390,
                "starRating": 2,
                "imageUrl": "img/DeadPoolMalaSangre.jpg"
            },
            {
                "id": 5,
                "title": "Avengers era de Ultron: Batalla en Equipo",
                "description": "...",
                "author": "",
                "publishDate": "2017-09-12T00:20:28.8960377",
                "price": 150,
                "starRating": 2,
                "imageUrl": "img/AvengersUltron.jpg"
            }
        ];
    }

    static new(){

        return {
            "id": 0,
            "title": "",
            "description": "",
            "author": "",
            "publishDate": "2010-09-12T00:20:28.8960377",
            "price": 0,
            "starRating": 1,
            "imageUrl": ""
        };
    }

}