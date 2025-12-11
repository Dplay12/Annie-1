
//Con este llamas a la libreria en la carpeta para que puedas importar
import * as THREE from '../js/three.module.js';

//Con esta vas a esxporar
export default function obj4({ x, y, z })  {

    var esfera = new THREE.Group();

        var bola = new THREE.Mesh(
            new THREE.SphereGeometry(6, 30, 30),
            new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );
        bola.position.y = 2;

        var bola2 = new THREE.Mesh(
            new THREE.SphereGeometry(6, 30, 30),
            new THREE.MeshStandardMaterial({ color: 0xF5FEFF })
        );
        bola2.position.set (1,55,-4);

        var bola3 = new THREE.Mesh(
            new THREE.SphereGeometry(6, 30, 30),
            new THREE.MeshStandardMaterial({ color: 0xF5FEFF })
        );
        bola3.position.set (1,15,-4);

        var bola4 = new THREE.Mesh(
            new THREE.SphereGeometry(7, 30, 30),
            new THREE.MeshStandardMaterial({ color: 0xF5FEFF })
        );
        bola4.position.set (-20,35,-4);

        var bola5 = new THREE.Mesh(
            new THREE.SphereGeometry(6, 30, 30),
            new THREE.MeshStandardMaterial({ color: 0xF5FEFF })
        );
        bola5.position.set (20,35,-4);

        var cosadelaesfera = new THREE.Mesh(
            new THREE.CylinderGeometry( 3, 3, 2, 32 ),
            new THREE.MeshStandardMaterial({ color: 0xF5C70F })
        );
        cosadelaesfera.position.y = 7;
        
        var otracosadelaesfera = new THREE.Mesh(
            new THREE.TorusGeometry( 1.5, 0.5, 16, 100 ),
            new THREE.MeshStandardMaterial({ color: 0xF5C70F })
        );
        otracosadelaesfera.position.y = 9;
        otracosadelaesfera.rotation.y = 2.5;

        var corona = new THREE.Mesh(
            new THREE.TorusGeometry( 19, 5, 16, 100 ),
            new THREE.MeshStandardMaterial({ color: 0x26BA0D })
        );
        corona.position.y = 35;
        corona.position.z = -6;
    

    esfera.add(bola);
    esfera.add(bola2);
    esfera.add(bola3);
    esfera.add(bola4);
    esfera.add(bola5);
    esfera.add(cosadelaesfera);
    esfera.add(otracosadelaesfera);
    esfera.add (corona);
   





    esfera.position.set(x, y, z);

    return esfera;
}



