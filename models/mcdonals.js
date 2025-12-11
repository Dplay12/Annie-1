import * as THREE from '../js/three.module.js';

export default function obj2({ x, y, z }) {

    var mcdonals = new THREE.Group();

    //caja
    var caja = new THREE.Mesh(
        new THREE.BoxGeometry(12, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xBD0432 })
    );

    //listones
    var liston01 = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 12.5, 12.5),
        new THREE.MeshBasicMaterial({ color: 0xE6DF17 })
    );

    var liston02 = new THREE.Mesh(
        new THREE.BoxGeometry(12.5, 12.5, 3.5),
        new THREE.MeshBasicMaterial({ color: 0xE6DF17 })
    );

    //moños
    var moño1 = new THREE.Mesh(
        new THREE.TorusGeometry(2, 1, 16, 50),
        new THREE.MeshBasicMaterial({ color: 0xE6DF17 })
    );
    moño1.position.set(2, 8, 0);

    var moño2 = new THREE.Mesh(
        new THREE.TorusGeometry(2, 1, 16, 50),
        new THREE.MeshBasicMaterial({ color: 0xE6DF17 })
    );
    moño2.position.set(-2, 8, 0);

    //agregar al grupo
    mcdonals.add(caja, liston01, liston02, moño1, moño2);

    mcdonals.position.set(x, y, z);

    return mcdonals;
}

