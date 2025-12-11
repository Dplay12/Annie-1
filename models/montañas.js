import * as THREE from '../JS/three.module.js';

export default function obj5({ x, y, z }) {

    var montañas = new THREE.Group();

    var tierra = new THREE.Mesh(
        new THREE.ConeGeometry( 25, 30, 31.5 ),
        new THREE.MeshBasicMaterial({ color: 0x543C1F })
    );
    tierra.position.y=14;

    var tierra2 = new THREE.Mesh(
        new THREE.ConeGeometry( 25, 25, 31.5 ),
        new THREE.MeshBasicMaterial({ color: 0x543C1F })
    );
    tierra2.position.x=21;
    tierra2.position.y=12;

    var tierra3 = new THREE.Mesh(
        new THREE.ConeGeometry( 25, 22, 31.5 ),
        new THREE.MeshBasicMaterial({ color: 0x543C1F })
    );
    tierra3.position.x=-27;
    tierra3.position.y=10;

    var nieve = new THREE.Mesh(
        new THREE.ConeGeometry( 9.5, 15, 31.5 ),
        new THREE.MeshBasicMaterial({ color: 0xE9F2F1 })
    );
    nieve.position.y=25;

    var nieve2 = new THREE.Mesh(
        new THREE.ConeGeometry( 12, 15, 31.5 ),
        new THREE.MeshBasicMaterial({ color: 0xE9F2F1 })
    );
    nieve2.position.y=20;
    nieve2.position.x=21;

    var nieve3 = new THREE.Mesh(
        new THREE.ConeGeometry( 12, 15, 31.5 ),
        new THREE.MeshBasicMaterial({ color: 0xE9F2F1 })
    );
    nieve3.position.y=18;
    nieve3.position.x=-27;


    //agregar al grupo
    montañas.add(tierra,tierra2,tierra3,nieve,nieve2,nieve3);

    montañas.position.set(x, y, z);

    return montañas;
}
