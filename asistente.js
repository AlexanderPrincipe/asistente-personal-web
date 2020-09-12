/*
Programa creado por ElTallerDeTD
*/

if (annyang) {

    //Variable para almacenar las voces de nuestro sistema.
    var voices;

    //Inicializamos utter.
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'en-US';

    //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };

    //Definimos los comandos a utilizar.
    var commands = {
        'hi jarvis': function () {
            utter.text = 'hi alexander';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);

        },
        'open course english': function () {
            utter.text = 'Ok';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
            

            function abrirVentana(url) {
                window.open(url, '_blank');
            }
            abrirVentana("https://www.youtube.com/watch?v=dFJvNYdKGrA&list=PLgrNDDl9MxYmUmf19zPiljdg8FKIRmP78&ab_channel=FranciscoOchoaIngl%C3%A9sF%C3%A1cil");
        },

        'open course react': function () {
            utter.text = 'Ok';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
            

            function abrirVentana(url) {
                window.open(url, '_blank');
            }
            abrirVentana("https://www.udemy.com/course/react-cero-experto/learn/lecture/19711728?start=0#overview");
        },

        'open all': function () {
            utter.text = 'Ok';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
            

            function abrirVentana(url1,url2,url3,url4,url5,url6) {
                window.open(url1, '_blank');
                window.open(url2, '_blank');
                window.open(url3, '_blank');
                window.open(url4, '_blank');
                window.open(url5, '_blank');
                window.open(url6, '_blank');

            }
            abrirVentana(
                "https://www.youtube.com/",
                "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin",
                "https://test.interseguro.pe/viajes/",
                "https://es.stackoverflow.com/",
                "https://github.com/AlexanderPrincipe",
                "http://localhost:3000/viajes/",
                );
        },
        'how are you': function () {
            utter.text = 'I am fine!';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'hi': function () {
            utter.text = 'hi, what is your name?';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
            annyang.addCallback('result', function (phrases) {
                //Imprime el nombre por consola.
                console.log("Nombre: ", phrases[0]);
                //Para el evento result.
                annyang.removeCallback('result');
                //Nos dice hola + el nombre que le digamos por voz.
                utter.text = 'Hi, ' + phrases[0];
                window.speechSynthesis.speak(utter);
            });
        },

        'what time is it': function () {
            var hoy = new Date();
            hora = hoy.getHours() + ':' + hoy.getMinutes() + ':';
            utter.text = 'It is ' + hora;
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },

        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        }
    };

    //Esto nos sirve para ver que escucha el programa en tiempo real.
    
    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });
      


    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestart: false, continuous: true });
}