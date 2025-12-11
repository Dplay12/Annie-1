
//Con este llamas a la libreria en la carpeta para que puedas importar
import * as THREE from '../js/three.module.js';

//Con esta vas a esxporar
export default function obj3({ x, y, z })  {

    var muñeco = new THREE.Group();

        var nieve1 = new THREE.Mesh(
            new THREE.SphereGeometry( 5, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0xE9F2F1 })
        );
        nieve1.position.y = 5;

        var nieve2 = new THREE.Mesh(
            new THREE.SphereGeometry( 3, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0xE9F2F1 })
        );
        nieve2.position.y = 11;

        var ojo1 = new THREE.Mesh(
            new THREE.SphereGeometry( 0.5, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x060D0C })
        );
        ojo1.position.y = 11;
        ojo1.position.x = 3;

        var ojo2 = new THREE.Mesh(
            new THREE.SphereGeometry( 0.5, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x060D0C })
        );
        ojo2.position.y = 11;
        ojo2.position.x = 1.5;
        ojo2.position.z = 2.5;

        var boton1 = new THREE.Mesh(
            new THREE.SphereGeometry( 0.25, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x060D0C })
        );
        boton1.position.set (4, 7, 2.5);

        var boton2 = new THREE.Mesh(
            new THREE.SphereGeometry( 0.25, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x060D0C })
        );
        boton2.position.set (4.5, 4, 2.5);

        var zzz = new THREE.Mesh(
            new THREE.ConeGeometry( 0.5, 3, 32 ),
            new THREE.MeshStandardMaterial({ color: 0xF0630C })
        );
        zzz.position.set(2.5, 11, 2);
        zzz.rotation.z= 1.25;
        zzz.rotation.y= 0.2; 
        
        var som1 = new THREE.Mesh(
            new THREE.CylinderGeometry( 3, 3.5, 1, 32 ),
            new THREE.MeshStandardMaterial( { color: 0x110B17 } )
        );
        som1.position.y = 13;

        var som2 = new THREE.Mesh(
            new THREE.CylinderGeometry( 2, 2, 7, 32 ),
            new THREE.MeshStandardMaterial( { color: 0x110B17 } )
        );
        som2.position.y = 13;

        var som3 = new THREE.Mesh(
            new THREE.CylinderGeometry( 2.1, 2.1, 3, 32 ),
            new THREE.MeshStandardMaterial( { color: 0xC70828 } )
        );
        som3.position.y = 13;

        var buf = new THREE.Mesh(
            new THREE.CylinderGeometry( 3, 3, 2, 32 ),
            new THREE.MeshStandardMaterial( { color: 0x1E732D } )
        );
        buf.position.y = 9;
    

    muñeco.add(nieve1);
    muñeco.add(nieve2);
    muñeco.add(ojo1);
    muñeco.add(ojo2);
    muñeco.add(boton1);
    muñeco.add(boton2);
    muñeco.add(zzz);
    muñeco.add(som1);
    muñeco.add(som2);
    muñeco.add(som3);
    muñeco.add(buf);
   





    muñeco.position.set(x, y, z);

    return muñeco;
}



