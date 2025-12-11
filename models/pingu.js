
//Con este llamas a la libreria en la carpeta para que puedas importar
import * as THREE from '../js/three.module.js';

//Con esta vas a esxporar
export default function obj7({ x, y, z })  {

    var pee = new THREE.Group();

        var cuerpo = new THREE.Mesh(
            new THREE.CapsuleGeometry( 1, 1, 4, 8, 1 ),
            new THREE.MeshStandardMaterial({ color: 0x010E12 })
        );

        var cuerpo2 = new THREE.Mesh(
            new THREE.CapsuleGeometry( 1, 1, 4, 8, 1 ),
            new THREE.MeshStandardMaterial({ color: 0xF7F8FF })
        );
        cuerpo2.position.z=0.5;

        var pico = new THREE.Mesh(
            new THREE.ConeGeometry( 0.2, 1, 12 ),
            new THREE.MeshStandardMaterial({ color: 0xF0630C })
        );
        pico.position.y=0.5;
        pico.position.z=1.9;
        pico.rotation.x=1.2;

        var ojo1 = new THREE.Mesh(
            new THREE.SphereGeometry( 0.3, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x060D0C })
        );
        ojo1.position.y = 1;
        ojo1.position.x = 0.4;
        ojo1.position.z = 1.2;
        
        var ojo2 = new THREE.Mesh(
            new THREE.SphereGeometry( 0.3, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x060D0C })
        );
        ojo2.position.y = 1;
        ojo2.position.x = -0.4;
        ojo2.position.z = 1.2;

        var pata1 = new THREE.Mesh(
            new THREE.BoxGeometry( 1, 0.4, 1 ),
            new THREE.MeshStandardMaterial({ color: 0xF0630C })
        );
        pata1.position.z = 1.3;
        pata1.position.x = -0.5;
        pata1.position.y = -1.5;
        pata1.rotation.y = 1;

        var pata2 = new THREE.Mesh(
            new THREE.BoxGeometry( 1, 0.4, 1 ),
            new THREE.MeshStandardMaterial({ color: 0xF0630C })
        );
        pata2.position.z = 1.3;
        pata2.position.x = 0.5;
        pata2.position.y = -1.5;
        pata2.rotation.y = 1;
    

    pee.add(cuerpo,cuerpo2,pico,ojo1,ojo2,pata1,pata2);





    pee.position.set(x, y, z);

    return pee;
}



