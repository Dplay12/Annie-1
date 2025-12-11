import * as THREE from '../js/three.module.js';

export default function obj6({ x, y, z }) {

    var casa = new THREE.Group();

    //casa
    var casaa = new THREE.Mesh(
        new THREE.BoxGeometry( 30, 20, 30 ),
        new THREE.MeshBasicMaterial({ color: 0x99522F })
    );
    casaa.position.y=8;

        //decoracion casa
        var c1 = new THREE.Mesh(
        new THREE.CapsuleGeometry( 1, 16.2, 4, 8, 1 ),
        new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        c1.position.set (-15, 7.5, 15);
    
        var c2 = new THREE.Mesh(
        new THREE.CapsuleGeometry( 1, 16.2, 4, 8, 1 ),
        new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        c2.position.set (15, 7.5, 15);
        
        var c3 = new THREE.Mesh(
        new THREE.CapsuleGeometry( 1, 16.2, 4, 8, 1 ),
        new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        c3.position.set (15, 7.5, -15);

        var c4 = new THREE.Mesh(
        new THREE.CapsuleGeometry( 1, 16.2, 4, 8, 1 ),
        new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        c4.position.set (-15, 7.5, -15);

        var o1 = new THREE.Mesh(
            new THREE.SphereGeometry( 1, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0xD40821 })
        );
        o1.position.set (-15, 15, 16);

        var o2 = new THREE.Mesh(
            new THREE.SphereGeometry( 1, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x11C22C })
        );
        o2.position.set (-15, 7.5, 16);

        var o3 = new THREE.Mesh(
            new THREE.SphereGeometry( 1, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0xF0CB13 })
        );
        o3.position.set (-15, 0, 16);

        var o4 = new THREE.Mesh(
            new THREE.SphereGeometry( 1, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0xD40821 })
        );
        o4.position.set (14, 15, 16);

        var o5 = new THREE.Mesh(
            new THREE.SphereGeometry( 1, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0x11C22C })
        );
        o5.position.set (15, 7.5, 16);

        var o6 = new THREE.Mesh(
            new THREE.SphereGeometry( 1, 32, 120 ),
            new THREE.MeshStandardMaterial({ color: 0xF0CB13 })
        );
        o6.position.set (15, 0, 16);

    //ventanas
    var ven1 = new THREE.Mesh(
        new THREE.BoxGeometry( 5, 5, 5 ),
        new THREE.MeshBasicMaterial({ color: 0xF5F7F7 })
    );
    ven1.position.set(-7,10,14);

    var ven2 = new THREE.Mesh(
        new THREE.BoxGeometry( 5, 5, 5 ),
        new THREE.MeshBasicMaterial({ color: 0xF5F7F7 })
    );
    ven2.position.set(7,10,14);

    var ven3 = new THREE.Mesh(
        new THREE.BoxGeometry( 4.5, 4.5, 4.9 ),
        new THREE.MeshBasicMaterial({ color: 0x0F0500 })
    );
    ven3.position.set(-7,10,14.1);

    var ven4 = new THREE.Mesh(
        new THREE.BoxGeometry( 4.5, 4.5, 4.9 ),
        new THREE.MeshBasicMaterial({ color: 0x0F0500 })
    );
    ven4.position.set(7,10,14.1);

    //techo
    var techo = new THREE.Mesh(
        new THREE.ConeGeometry( 20, 10, 32 ),
        new THREE.MeshBasicMaterial({ color: 0xF0131E})
    );
    techo.position.y= 23 ;

    var techo2 = new THREE.Mesh(
        new THREE.ConeGeometry( 26, 9, 32 ),
        new THREE.MeshBasicMaterial({ color: 0xF5F7F7 })
    );
    techo2.position.y= 20.9 ;

    var gg = new THREE.Mesh(
    new THREE.SphereGeometry( 3, 32, 120 ),
    new THREE.MeshStandardMaterial({ color: 0xF5F7F7 })
    );
    gg.position.y= 29;

    //entrada
    var entrada = new THREE.Mesh(
        new THREE.BoxGeometry( 8, 10, 0.2 ),
        new THREE.MeshBasicMaterial({ color: 0x0F0500 })
    );
    entrada.position.y=1;
    entrada.position.z=15;

    //puerta
    var puerta = new THREE.Mesh(
        new THREE.BoxGeometry( 8, 10, 1 ),
        new THREE.MeshBasicMaterial({ color: 0x99522F })
    );
    puerta.position.set( 4, 1, 15 );
    puerta.rotation.y=70;

        //decoracion
        var cr1 = new THREE.Mesh(
            new THREE.CapsuleGeometry( 1, 6, 4, 8, 1 ),
            new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        cr1.position.set (1, 2, 19);

        var cr2 = new THREE.Mesh(
            new THREE.CapsuleGeometry( 1, 6, 4, 8, 1 ),
            new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        cr2.position.set (5, 2, 14.5);

        var cr3 = new THREE.Mesh(
            new THREE.CapsuleGeometry( 1, 10, 4, 8, 1 ),
            new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        cr3.position.set (4, 5.2, 15);
        cr3.rotation.x= 1.5;
        cr3.rotation.z= 3.8;

        var cr4 = new THREE.Mesh(
            new THREE.CapsuleGeometry( 1, 10, 4, 8, 1 ),
            new THREE.MeshBasicMaterial ({color: 0xF5F7F7})
        );
        cr4.position.set (4, -1.2, 15);
        cr4.rotation.x= 1.5;
        cr4.rotation.z= 3.8;

        

    //agregar al grupo
    casa.add(casaa,c1,c2, gg, c3, c4, techo,techo2, ven1, ven2, ven3, ven4, entrada, puerta, cr1, cr2, cr3, cr4, o1, o2, o3, o4, o5, o6);

    casa.position.set(x, y, z);

    return casa;
}

