
//Con este llamas a la libreria en la carpeta para que puedas importar
import * as THREE from '../js/three.module.js';

//Con esta vas a esxporar
export default function obj1({ x, y, z })  {

    var arbol = new THREE.Group();

        var tronco = new THREE.Mesh(
            new THREE.CylinderGeometry(2, 2, 10),
            new THREE.MeshStandardMaterial({ color: 0x8b4513 })
        );
        tronco.position.y = 5;

        var hojas = new THREE.Mesh(
            new THREE.ConeGeometry(8, 20, 32),
            new THREE.MeshStandardMaterial({ color: 0x0f8f04 })
        );
        hojas.position.y = 18;

        var hojas2 = new THREE.Mesh(
            new THREE.ConeGeometry(8.3, 10, 32),
            new THREE.MeshStandardMaterial({ color: 0x0f8f04 })
        );
        hojas2.position.y = 15;
        var hojas21 = new THREE.Mesh(
            new THREE.ConeGeometry(7.8, 10, 32),
            new THREE.MeshStandardMaterial({ color: 0xE0EBFF })
        );
        hojas21.position.y = 15.9;

        var hojas3 = new THREE.Mesh(
            new THREE.ConeGeometry(8, 10, 32),
            new THREE.MeshStandardMaterial({ color: 0x0f8f04 })
        );
        hojas3.position.y = 19;
        var hojas31 = new THREE.Mesh(
            new THREE.ConeGeometry(7.3, 10, 32),
            new THREE.MeshStandardMaterial({ color: 0xE0EBFF })
        );
        hojas31.position.y = 19.9;

        var hojas4 = new THREE.Mesh(
            new THREE.ConeGeometry(8, 10, 32),
            new THREE.MeshStandardMaterial({ color: 0x0f8f04 })
        );
        hojas4.position.y = 23;
        var hojas41 = new THREE.Mesh(
            new THREE.ConeGeometry(7.3, 10, 32),
            new THREE.MeshStandardMaterial({ color: 0xE0EBFF })
        );
        hojas41.position.y = 23.9;

        

    

    arbol.add(tronco);
    arbol.add(hojas);
    arbol.add(hojas2);
    arbol.add(hojas21);
    arbol.add(hojas3);
    arbol.add(hojas31);
    arbol.add(hojas4);
    arbol.add(hojas41);





    arbol.position.set(x, y, z);

    return arbol;
}



